import { NextResponse } from "next/server";
import { isEmail } from "@/lib/forms";
import { supabaseConfigured, supabaseInsert } from "@/lib/server/supabase";

export async function POST(req: Request) {
  let body: { email?: string; website?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true });
  if (!body.email || !isEmail(body.email)) return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });

  const email = body.email.trim().toLowerCase();
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!supabaseConfigured && !webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[newsletter] No storage configured. Sign-up logged only:", email);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, error: "Newsletter sign-up opens soon. Please check back shortly." }, { status: 503 });
  }
  try {
    // Duplicate emails are ignored, so re-subscribing never shows an error.
    if (supabaseConfigured) await supabaseInsert("newsletter_subscribers", { email, source: "website-footer" }, { onConflict: "email" });
    if (webhook) {
      const r = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, source: "website-footer", subscribedAt: new Date().toISOString() }) });
      if (!r.ok && !supabaseConfigured) throw new Error(String(r.status));
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] failed", e);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }
}
