"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useBooking } from "./Booking";
import { site } from "@/lib/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";

/**
 * "How can we support you?" prompt.
 * Appears once per visitor (then rests for 14 days) after real engagement:
 * 25 seconds on site, scrolling past 50% of a page, or exit intent on desktop.
 * It never covers the page on arrival, never stacks on the cookie banner and stays out of the way on contact pages.
 */
const KEY = "bva-support-prompt";
const REST_DAYS = 14;
const SKIP = ["/contact", "/book-a-call", "/privacy-policy", "/terms-of-service", "/cookie-policy", "/data-protection"];

const needs: { label: string; icon: IconName; service: string }[] = [
  { label: "Inbox, calendar & admin", icon: "inbox", service: "Administrative Support" },
  { label: "Customer support", icon: "headphones", service: "Customer Support" },
  { label: "Online store & Shopify", icon: "cart", service: "E-commerce & Shopify Virtual Assistant" },
  { label: "Leads, sales & CRM", icon: "target", service: "Lead Generation" },
  { label: "Bookkeeping admin", icon: "calculator", service: "Bookkeeping Support" },
  { label: "Social media & content", icon: "share", service: "Social Media Support" },
  { label: "Website updates", icon: "monitor", service: "WordPress Virtual Assistant" },
  { label: "Something else", icon: "sparkles", service: "" },
];

export function SupportPrompt() {
  const pathname = usePathname() || "/";
  const { open: openBooking } = useBooking();
  const [visible, setVisible] = useState(false);
  const [need, setNeed] = useState<(typeof needs)[number] | null>(null);
  const shown = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (SKIP.some((p) => pathname.startsWith(p))) return;
    try {
      const last = Number(localStorage.getItem(KEY) || 0);
      if (last && Date.now() - last < REST_DAYS * 864e5) return;
    } catch { return; }

    const show = () => {
      if (shown.current) return;
      // Wait for the cookie choice and for any open dialog to close.
      try { if (!localStorage.getItem("bva-consent")) return; } catch { return; }
      if (document.querySelector('[role="dialog"][aria-modal="true"]')) return;
      shown.current = true;
      setVisible(true);
      try { localStorage.setItem(KEY, String(Date.now())); } catch { /* ignore */ }
      track("support_prompt_open", { page: pathname });
    };
    const timer = window.setInterval(() => { if (performance.now() > 25000) show(); }, 2000);
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + window.innerHeight) / h.scrollHeight > 0.5) show();
    };
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0 && window.innerWidth >= 1024) show(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [pathname]);

  useEffect(() => { if (visible) headingRef.current?.focus(); }, [visible, need]);
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVisible(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible) return null;
  const close = () => { setVisible(false); track("support_prompt_close", { step: need ? 2 : 1 }); };
  const act = (action: string) => track("support_prompt_action", { action, need: need?.label || "" });
  const quoteHref = `/contact/?${need?.service ? `service=${encodeURIComponent(need.service)}&` : ""}tasks=${encodeURIComponent(need?.label || "")}#enquiry`;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="support-prompt-title"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md animate-fade-up rounded-4xl bg-white p-5 shadow-lift ring-1 ring-teal/10 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:p-6 md:bottom-28"
    >
      <button onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-aqua-pale text-teal hover:bg-orange hover:text-white">
        <Icon name="x" className="h-4 w-4" />
      </button>

      {!need ? (
        <>
          <p className="eyebrow">Free, no-obligation help</p>
          <h2 id="support-prompt-title" ref={headingRef} tabIndex={-1} className="mt-2 pr-10 font-heading text-xl font-extrabold leading-snug outline-none sm:text-2xl">
            How can we support you?
          </h2>
          <p className="mt-1.5 text-sm text-ink-muted">Pick what&apos;s taking up most of your time. We&apos;ll show you the quickest next step.</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {needs.map((n) => (
              <li key={n.label}>
                <button
                  type="button"
                  onClick={() => { setNeed(n); track("support_prompt_select", { need: n.label }); }}
                  className="flex h-full w-full items-center gap-2 rounded-2xl border border-teal/10 bg-offwhite px-3 py-2.5 text-left text-[13px] font-semibold leading-tight text-ink transition hover:border-aqua hover:bg-aqua-pale"
                >
                  <Icon name={n.icon} className="h-4 w-4 shrink-0 text-teal" />
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="eyebrow">{need.label}</p>
          <h2 id="support-prompt-title" ref={headingRef} tabIndex={-1} className="mt-2 pr-10 font-heading text-xl font-extrabold leading-snug outline-none sm:text-2xl">
            Good news: we can help with that.
          </h2>
          <p className="mt-1.5 text-sm text-ink-muted">Choose how you&apos;d like to talk. A real person from our Nairobi team will get back to you.</p>
          <div className="mt-4 grid gap-2">
            <button
              type="button"
              onClick={() => { act("book"); setVisible(false); openBooking("support_prompt"); }}
              className="flex items-center justify-center gap-2 rounded-full bg-aqua px-5 py-3 font-heading text-[15px] font-bold text-teal hover:bg-teal hover:text-white"
            >
              <Icon name="calendar" className="h-4 w-4" /> Book a Free Consultation
            </button>
            <Link
              href={quoteHref}
              onClick={() => { act("quote"); setVisible(false); }}
              className="flex items-center justify-center gap-2 rounded-full border border-teal/15 px-5 py-3 font-heading text-[15px] font-bold text-ink hover:border-teal"
            >
              <Icon name="send" className="h-4 w-4" /> Send Us the Details
            </Link>
            <a
              href={site.whatsappWithText(`Hi Bravura VA, I'd like help with ${need.label.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => act("whatsapp")}
              className="flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-heading text-[15px] font-bold text-white hover:bg-ink"
            >
              <Icon name="chat" className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <button type="button" onClick={() => setNeed(null)} className="mt-3 text-sm font-semibold text-teal underline underline-offset-4">
            Choose something else
          </button>
        </>
      )}
    </div>
  );
}
