import { esc } from "./resend";

type Rec = {
  formType: string; name: string; email: string; phone: string; company: string; country: string; service: string;
  message: string; tasks: string[]; hours: string; overlap: string; start: string; page: string; submittedAt: string;
};

const labels: Record<string, string> = { contact: "Contact form", quote: "Quote request", service: "Service enquiry", general: "General enquiry" };

export function notificationEmail(r: Rec) {
  const rows: [string, string][] = [
    ["Name", r.name], ["Email", r.email], ["Phone", r.phone], ["Company", r.company], ["Country", r.country],
    ["Service", r.service], ["Tasks to delegate", r.tasks.join(", ")], ["Support needed", r.hours],
    ["Working-hour overlap", r.overlap], ["Start", r.start], ["Submitted from", r.page], ["Submitted at", r.submittedAt],
  ].filter(([, v]) => v) as [string, string][];
  const subject = `New ${labels[r.formType] || "enquiry"} from ${r.name}${r.company ? ` (${r.company})` : ""}`;
  const html = `
  <div style="font-family:Arial,sans-serif;color:#10152E;max-width:600px">
    <div style="background:#0D292D;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">${esc(labels[r.formType] || "New enquiry")}</strong>
    </div>
    <div style="border:1px solid #E5F8F8;border-top:0;padding:24px;border-radius:0 0 12px 12px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#59686B;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0">${esc(v)}</td></tr>`).join("")}
      </table>
      <p style="margin:20px 0 6px;color:#59686B;font-size:13px">Message</p>
      <div style="background:#F8F9F5;padding:16px;border-radius:8px;white-space:pre-wrap;font-size:14px">${esc(r.message)}</div>
      <p style="margin-top:20px;font-size:13px;color:#59686B">Reply to this email to respond directly to ${esc(r.name)}.</p>
    </div>
  </div>`;
  const text = `${subject}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${r.message}`;
  return { subject, html, text };
}

export function autoReplyEmail(r: Rec) {
  const first = r.name.split(" ")[0];
  const subject = "Thanks for contacting Bravura VA";
  const html = `
  <div style="font-family:Arial,sans-serif;color:#10152E;max-width:600px;line-height:1.6">
    <p>Hi ${esc(first)},</p>
    <p>Thank you for getting in touch with Bravura VA. We've received your message and will reply by email to arrange next steps.</p>
    <p>If it's urgent, you can reach us on WhatsApp at <a href="https://wa.me/254714089042" style="color:#0D292D">+254 714 089 042</a>.</p>
    <p>Best regards,<br/>The Bravura VA Team<br/><span style="color:#59686B">Nairobi, Kenya</span></p>
  </div>`;
  const text = `Hi ${first},\n\nThank you for getting in touch with Bravura VA. We've received your message and will reply by email to arrange next steps.\n\nIf it's urgent, you can reach us on WhatsApp at +254 714 089 042.\n\nBest regards,\nThe Bravura VA Team\nNairobi, Kenya`;
  return { subject, html, text };
}
