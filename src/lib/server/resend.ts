/**
 * Minimal server-only Resend client using the REST API (no extra packages).
 */
const apiKey = process.env.RESEND_API_KEY;
export const resendConfigured = Boolean(apiKey && process.env.RESEND_FROM);

export async function sendEmail(msg: { to: string | string[]; subject: string; html: string; text: string; replyTo?: string }) {
  if (!apiKey || !process.env.RESEND_FROM) throw new Error("Resend is not configured");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM,
      to: Array.isArray(msg.to) ? msg.to : [msg.to],
      subject: msg.subject,
      html: msg.html,
      text: msg.text,
      ...(msg.replyTo ? { reply_to: msg.replyTo } : {}),
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend send failed (${res.status}): ${detail.slice(0, 300)}`);
  }
}

export const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
