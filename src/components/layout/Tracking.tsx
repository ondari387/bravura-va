"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";

/**
 * Site-wide conversion tracking:
 * - contact_click / email_click / whatsapp_click from any tel:, mailto: or WhatsApp link (one listener, no double counting)
 * - schedule_booking only when Calendly confirms a booking was made (calendly.event_scheduled)
 * - first-touch UTM attribution for enquiries
 */
export function Tracking() {
  useEffect(() => {
    captureAttribution();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const location = a.closest("header") ? "header" : a.closest("footer") ? "footer" : window.location.pathname;
      if (href.startsWith("tel:")) track("contact_click", { method: "phone", location });
      else if (href.startsWith("mailto:")) track("email_click", { location });
      else if (href.includes("wa.me/")) track("whatsapp_click", { location });
    };
    const onMessage = (e: MessageEvent) => {
      let host = ""; try { host = new URL(e.origin).hostname; } catch { return; }
      if (host !== "calendly.com" && !host.endsWith(".calendly.com")) return;
      const ev = (e.data as { event?: string })?.event;
      if (ev === "calendly.event_scheduled") track("schedule_booking", { page: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("message", onMessage);
    return () => { document.removeEventListener("click", onClick, true); window.removeEventListener("message", onMessage); };
  }, []);
  return null;
}
