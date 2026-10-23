import { NextResponse } from "next/server";
import { validateEnquiry, type EnquiryPayload } from "@/lib/forms";

// Simple in-memory rate limit (per server instance). For multi-instance hosting,
// replace with a shared store (e.g. Upstash/Redis) or your provider's rate limiting.
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
    name: body.name?.trim(), email: body.email?.trim(), phone: body.phone?.trim() || "",
    company: body.company?.trim() || "", country: body.country || "", service: body.service || "",
    message: body.message?.trim(), tasks: (body.tasks || []).slice(0, 20),
    hours: body.hours || "", overlap: body.overlap || "", start: body.start || "",
    page: body.page || "", consent: true, submittedAt: new Date().toISOString(),
  };

  const endpoint = process.env.FORM_WEBHOOK_URL;
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] FORM_WEBHOOK_URL not set: submission logged only:", record);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, notConfigured: true, error: "Our online form isn't connected yet." }, { status: 503 });
  }
  try {
    const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record) });
    if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[enquiry] delivery failed", e);
    return NextResponse.json({ ok: false, error: "We couldn't send your message just now." }, { status: 502 });
  }
}
