import { NextResponse } from "next/server";
import { isEmail } from "@/lib/forms";

export async function POST(req: Request) {
  let body: { email?: string; website?: string; consent?: boolean };
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true });
  if (!body.email || !isEmail(body.email)) return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });

  const endpoint = process.env.NEWSLETTER_WEBHOOK_URL;
  const record = { email: body.email.trim(), source: "website-footer", subscribedAt: new Date().toISOString() };
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[newsletter] NEWSLETTER_WEBHOOK_URL not set: sign-up logged only:", record);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: false, error: "Newsletter sign-up opens soon. Please check back shortly." }, { status: 503 });
  }
  try {
    const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record) });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }
}
