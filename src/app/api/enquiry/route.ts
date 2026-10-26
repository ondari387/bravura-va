import { NextResponse } from "next/server";
import { validateEnquiry, type EnquiryPayload } from "@/lib/forms";
import { supabaseConfigured, supabaseInsert } from "@/lib/server/supabase";
import { resendConfigured, sendEmail } from "@/lib/server/resend";
import { notificationEmail, autoReplyEmail } from "@/lib/server/enquiryEmails";

// Simple in-memory rate limit (per server instance). For multi-instance hosting,
// replace with a shared store or your provider's rate limiting.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  let body: Partial<EnquiryPayload>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 }); }

  // Spam protection: honeypot field + minimum completion time.
  if (body.website) return NextResponse.json({ ok: true });
  if (typeof body.elapsedMs === "number" && body.elapsedMs < 2500) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later or email us directly." }, { status: 429 });

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const record = {
    formType: body.formType || "general",
    name: body.name!.trim(), email: body.email!.trim(), phone: body.phone?.trim() || "",
    company: body.company?.trim() || "", country: body.country || "", service: body.service || "",
    message: body.message!.trim(), tasks: (body.tasks || []).slice(0, 20).map(String),
    hours: body.hours || "", overlap: body.overlap || "", start: body.start || "",
    budget: body.budget || "", contactMethod: body.contactMethod || "",
    utm: Object.fromEntries(Object.entries(body.utm || {}).slice(0, 10).map(([k, v]) => [String(k).slice(0, 40), String(v).slice(0, 200)])) as Record<string, string>,
    page: body.page || "", submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.FORM_WEBHOOK_URL;
  if (!supabaseConfigured && !webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] No storage configured. Submission logged only:", record);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, notConfigured: true, error: "Our online form isn't connected yet." }, { status: 503 });
  }

  // 1. Save the enquiry (Supabase first, optional webhook as well).
  try {
    if (supabaseConfigured) {
      const base = {
        form_type: record.formType, name: record.name, email: record.email, phone: record.phone || null,
        company: record.company || null, country: record.country || null, service: record.service || null,
        message: record.message, tasks: record.tasks, hours: record.hours || null, overlap: record.overlap || null,
        start_timeframe: record.start || null, page: record.page || null, consent: true,
        ip_country: req.headers.get("x-vercel-ip-country") || null,
      };
      const extra = { budget: record.budget || null, contact_method: record.contactMethod || null, utm: Object.keys(record.utm).length ? record.utm : null };
      try {
        await supabaseInsert("enquiries", { ...base, ...extra });
      } catch (err) {
        // If the newer columns haven't been added yet (supabase/migrations/002), save without them
        // and keep the details in the message so nothing is lost.
        if (!String(err).includes("PGRST204")) throw err;
        const notes = [record.budget && `Budget: ${record.budget}`, record.contactMethod && `Preferred contact: ${record.contactMethod}`, Object.keys(record.utm).length && `Source: ${JSON.stringify(record.utm)}`].filter(Boolean).join("\n");
        await supabaseInsert("enquiries", { ...base, message: notes ? `${record.message}\n\n${notes}` : record.message });
      }
    }
    if (webhook) {
      const r = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...record, consent: true }) });
      if (!r.ok && !supabaseConfigured) throw new Error(`Webhook responded ${r.status}`);
    }
  } catch (e) {
    console.error("[enquiry] saving failed", e);
    return NextResponse.json({ ok: false, error: "We couldn't send your message just now." }, { status: 502 });
  }

  // 2. Email notifications. The enquiry is already saved, so email problems don't fail the request.
  if (resendConfigured) {
    const notifyTo = (process.env.NOTIFY_EMAIL || "va@bravura.co.ke").split(",").map((s) => s.trim()).filter(Boolean);
    const jobs: Promise<unknown>[] = [sendEmail({ to: notifyTo, replyTo: record.email, ...notificationEmail(record) })];
    if (process.env.SEND_AUTOREPLY === "true") jobs.push(sendEmail({ to: record.email, replyTo: notifyTo[0], ...autoReplyEmail(record) }));
    const results = await Promise.allSettled(jobs);
    results.forEach((r) => { if (r.status === "rejected") console.error("[enquiry] email failed", r.reason); });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
