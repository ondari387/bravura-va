"use client";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { isEmail } from "@/lib/forms";
import { track } from "@/lib/analytics";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isEmail(email)) { setState("error"); setMsg("Please enter a valid email address."); return; }
    setState("sending");
    try {
      const r = await fetch("/api/newsletter/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, website: hp }) });
      const d = await r.json().catch(() => ({}));
      if (r.ok && d.ok) { setState("ok"); setMsg("You're subscribed. Look out for practical tips in your inbox."); track("newsletter_signup"); }
      else { setState("error"); setMsg(d.error || "Something went wrong. Please try again."); }
    } catch { setState("error"); setMsg("Something went wrong. Please try again."); }
  }

  return (
    <form onSubmit={submit} noValidate className="w-full max-w-md" aria-label="Newsletter sign-up">
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <div className="flex items-center rounded-full bg-white p-1.5 pl-5">
        <input id="nl-email" type="email" autoComplete="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink-muted focus:outline-none" />
        <input aria-hidden="true" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} className="absolute -left-[9999px] h-0 w-0" />
        <button type="submit" disabled={state === "sending"} aria-label="Subscribe" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange text-teal transition hover:bg-aqua">
          <Icon name="send" className="h-5 w-5" />
        </button>
      </div>
      <p aria-live="polite" className={state === "ok" ? "mt-2 text-sm text-aqua" : "mt-2 text-sm text-white/80"}>
        {msg || "No spam. Unsubscribe any time."}
      </p>
    </form>
  );
}
