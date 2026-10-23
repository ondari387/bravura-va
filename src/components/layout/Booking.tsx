"use client";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";

type Ctx = { open: (source?: string) => void };
const BookingContext = createContext<Ctx>({ open: () => {} });
export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const open = useCallback((source?: string) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setOpen(true);
    track("booking_modal_open", { source: source || "unknown" });
  }, []);
  const close = () => { setOpen(false); lastFocus.current?.focus?.(); };
  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {isOpen && <BookingModal onClose={close} />}
    </BookingContext.Provider>
  );
}

export function CalendlyEmbed({ height = 680 }: { height?: number }) {
  if (!site.calendlyUrl) return <BookingFallback />;
  const src = `${site.calendlyUrl}${site.calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1&primary_color=59c4d0`;
  return (
    <iframe
      title="Book a free discovery call with Bravura VA"
      src={src}
      className="w-full rounded-2xl bg-white"
      style={{ height }}
      loading="lazy"
    />
  );
}

/** Shown while NEXT_PUBLIC_CALENDLY_URL is not configured. */
export function BookingFallback({ compact }: { compact?: boolean }) {
  return (
    <div className={cn("rounded-3xl bg-aqua-pale p-6 sm:p-8", compact && "p-5")}>
      <p className="font-heading text-lg font-bold text-ink">Online booking is being set up.</p>
      <p className="mt-2 text-ink-muted">
        In the meantime, reach us directly and we&apos;ll arrange a discovery call at a time that suits your time zone.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <a href={site.whatsappWithText("Hi Bravura VA, I'd like to book a free discovery call.")} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "w-full")} onClick={() => track("whatsapp_click", { source: "booking_fallback" })}>
          <Icon name="chat" className="h-4 w-4" /> WhatsApp Us
        </a>
        <a href={`${site.emailHref}?subject=${encodeURIComponent("Discovery call request")}`} className={buttonClass("secondary", "w-full")}>
          <Icon name="mail" className="h-4 w-4" /> Email Us
        </a>
        <Link href="/contact/#enquiry" className={buttonClass("dark", "w-full")}>
          <Icon name="send" className="h-4 w-4" /> Send Enquiry
        </Link>
      </div>
      <p className="mt-4 text-sm text-ink-muted">
        Phone: <a className="font-semibold text-teal" href={site.phoneHref}>{site.phone}</a> | Email:{" "}
        <a className="font-semibold text-teal" href={site.emailHref}>{site.email}</a>
      </p>
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('a,button,iframe,input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <button aria-label="Close booking window" className="absolute inset-0 bg-teal/70 backdrop-blur-sm" onClick={onClose} />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="booking-title" className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-4xl bg-white p-5 shadow-lift sm:rounded-4xl sm:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Free discovery call</p>
            <h2 id="booking-title" className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">Let&apos;s talk about what you can delegate.</h2>
            <p className="mt-2 text-ink-muted">A relaxed conversation about your workload, priorities and whether virtual support is a good fit. No obligation.</p>
          </div>
          <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-aqua-pale text-teal hover:bg-orange" aria-label="Close">
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>
        <CalendlyEmbed height={620} />
      </div>
    </div>
  );
}

export function BookCallButton({
  children = "Book a Free Discovery Call", variant = "primary", className, source, arrow = true,
}: { children?: React.ReactNode; variant?: "primary" | "secondary" | "orange" | "dark" | "outlineLight"; className?: string; source?: string; arrow?: boolean }) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={() => open(source)} className={cn("group", buttonClass(variant, className))}>
      {children}
      {arrow && <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />}
    </button>
  );
}
