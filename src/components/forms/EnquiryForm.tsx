"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content/catalog";
import { countries, hoursOptions, overlapOptions, startOptions, validateEnquiry, type EnquiryPayload } from "@/lib/forms";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

type Props = {
  formType?: EnquiryPayload["formType"];
  defaultService?: string;
  submitLabel?: string;
  tone?: "pale" | "white";
};

export const TASKS_STORAGE_KEY = "bva-delegate-tasks";

export function EnquiryForm({ formType = "contact", defaultService = "", submitLabel = "Let's Talk About Your Business", tone = "white" }: Props) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", company: "", country: "", service: defaultService, message: "", hours: "", overlap: "", start: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const started = useRef(Date.now());

  useEffect(() => {
    // Tasks chosen in the "What can you delegate?" checklist are carried into the form.
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("tasks");
      const list = fromUrl ? fromUrl.split(",").map((t) => decodeURIComponent(t)).filter(Boolean) : JSON.parse(sessionStorage.getItem(TASKS_STORAGE_KEY) || "[]");
      if (Array.isArray(list) && list.length) {
        setTasks(list.slice(0, 20));
        setValues((v) => (v.message ? v : { ...v, message: `I'd like help with: ${list.join(", ")}.\n\n` }));
      }
      const svc = new URLSearchParams(window.location.search).get("service");
      if (svc && services.some((s) => s.name === svc)) setValues((v) => ({ ...v, service: svc }));
    } catch { /* ignore */ }
  }, []);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => { const n = { ...er }; delete n[k]; return n; });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload: EnquiryPayload = { ...values, formType, tasks, consent, page: window.location.pathname, elapsedMs: Date.now() - started.current };
    const errs = validateEnquiry(payload);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${formType}-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch("/api/enquiry/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.ok) {
        setStatus("success");
        track("generate_lead", { form_type: formType, service: values.service || "unspecified" });
        try { sessionStorage.removeItem(TASKS_STORAGE_KEY); } catch { /* ignore */ }
      } else {
        if (data.errors) setErrors(data.errors);
        setServerMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setServerMsg("We couldn't reach the server.");
      setStatus("error");
    }
  }

  const mailtoFallback = () => {
    const body = `Name: ${values.name}\nCompany: ${values.company}\nCountry: ${values.country}\nPhone: ${values.phone}\nService: ${values.service}\n${tasks.length ? `Tasks: ${tasks.join(", ")}\n` : ""}\n${values.message}`;
    return `${site.emailHref}?subject=${encodeURIComponent(`Website enquiry from ${values.name || "a visitor"}`)}&body=${encodeURIComponent(body)}`;
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-aqua text-teal"><Icon name="check" className="h-8 w-8" /></span>
        <h3 className="mt-5 font-heading text-2xl font-extrabold">Thank you! Your message is on its way.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">We&apos;ll review what you&apos;ve shared and reply by email to arrange next steps. If it&apos;s urgent, message us on WhatsApp.</p>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "mt-6")}>
          <Icon name="chat" className="h-4 w-4" /> WhatsApp {site.phone}
        </a>
      </div>
    );
  }

  const field = (k: keyof typeof values, label: string, opts: { type?: string; required?: boolean; autoComplete?: string; placeholder?: string } = {}) => (
    <div>
      <label htmlFor={`f-${formType}-${k}`} className="label">{label}{opts.required && <span className="text-teal" aria-hidden="true"> *</span>}</label>
      <input
        id={`f-${formType}-${k}`} name={k} type={opts.type || "text"} value={values[k]} onChange={set(k)} autoComplete={opts.autoComplete}
        placeholder={opts.placeholder} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `f-${formType}-${k}-err` : undefined} required={opts.required}
        className={cn("input", errors[k] && "border-orange ring-2 ring-orange/30")}
      />
      {errors[k] && <p id={`f-${formType}-${k}-err`} className="mt-1.5 text-sm font-medium text-ink">⚠ {errors[k]}</p>}
    </div>
  );
  const select = (k: keyof typeof values, label: string, options: string[], placeholder = "Select...") => (
    <div>
      <label htmlFor={`f-${formType}-${k}`} className="label">{label}</label>
      <select id={`f-${formType}-${k}`} name={k} value={values[k]} onChange={set(k)} className="input appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%230D292D%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-10">
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className={cn("space-y-4", tone === "pale" && "")} aria-label="Enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Full Name", { required: true, autoComplete: "name" })}
        {field("email", "Business Email", { type: "email", required: true, autoComplete: "email" })}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel", placeholder: "Include country code" })}
        {field("company", "Company", { autoComplete: "organization" })}
        {select("country", "Country", countries)}
        {select("service", "Service Required", [...services.map((s) => s.name), "Not sure yet"])}
        {formType === "quote" && (
          <>
            {select("hours", "Estimated support needed", hoursOptions)}
            {select("overlap", "Preferred working-hour overlap", overlapOptions)}
            {select("start", "When would you like to start?", startOptions)}
          </>
        )}
      </div>
      {tasks.length > 0 && (
        <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-teal/10">
          <p className="text-sm font-semibold text-ink">Tasks you&apos;d like to delegate</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {tasks.map((t) => (
              <li key={t} className="flex items-center gap-1.5 rounded-full bg-aqua-pale px-3 py-1 text-sm font-medium text-teal">
                {t}
                <button type="button" aria-label={`Remove ${t}`} onClick={() => setTasks(tasks.filter((x) => x !== t))} className="hover:text-ink"><Icon name="x" className="h-3.5 w-3.5" /></button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor={`f-${formType}-message`} className="label">Message<span className="text-teal" aria-hidden="true"> *</span></label>
        <textarea
          id={`f-${formType}-message`} name="message" rows={5} value={values.message} onChange={set("message")} required
          placeholder="What's taking up your time? Which tools do you use? Any working-hour needs?"
          aria-invalid={!!errors.message} aria-describedby={errors.message ? `f-${formType}-message-err` : undefined}
          className={cn("input resize-y", errors.message && "border-orange ring-2 ring-orange/30")}
        />
        {errors.message && <p id={`f-${formType}-message-err`} className="mt-1.5 text-sm font-medium text-ink">⚠ {errors.message}</p>}
      </div>
      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set("website")} /></label>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-ink-muted">
          <input
            id={`f-${formType}-consent`} type="checkbox" checked={consent}
            onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors((er) => { const n = { ...er }; delete n.consent; return n; }); }}
            className="mt-0.5 h-5 w-5 shrink-0 rounded accent-[#59C4D0]" aria-invalid={!!errors.consent}
          />
          <span>I agree that Bravura VA may use these details to respond to my enquiry, as described in the <Link href="/privacy-policy/" className="font-semibold text-teal underline">Privacy Policy</Link>.</span>
        </label>
        {errors.consent && <p className="mt-1.5 text-sm font-medium text-ink">⚠ {errors.consent}</p>}
      </div>
      {status === "error" && (
        <div role="alert" className="rounded-2xl bg-orange/15 p-4 text-sm text-ink">
          <p className="font-semibold">{serverMsg}</p>
          <p className="mt-1">You can still reach us right away: <a href={mailtoFallback()} className="font-semibold text-teal underline">send this enquiry by email</a> or <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal underline">message us on WhatsApp</a>.</p>
        </div>
      )}
      <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full sm:w-auto")}>
        {status === "sending" ? "Sending..." : submitLabel}
        <Icon name="send" className="h-4 w-4" />
      </button>
    </form>
  );
}
