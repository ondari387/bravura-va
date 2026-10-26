"use client";
import { useEffect, useState } from "react";
import { useBooking } from "./Booking";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Sticky booking bar for phones. Appears after the visitor scrolls past the hero. */
export function MobileCTA() {
  const { open } = useBooking();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <div aria-hidden="true" className="h-[72px] md:hidden" />
      <div className={cn("fixed inset-x-0 bottom-0 z-40 border-t border-teal/10 bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden", show ? "translate-y-0" : "translate-y-full")}>
        <div className="flex gap-2">
          <button type="button" onClick={() => open("mobile_sticky")} className="flex-1 rounded-full bg-aqua px-4 py-3 font-heading text-[15px] font-bold text-teal">
            Book a Free Consultation
          </button>
          <a href={site.whatsappWithText("Hi Bravura VA, I'd like to learn more about your virtual assistant services.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal text-white">
            <Icon name="chat" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
