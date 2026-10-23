"use client";
import { useId, useState } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type FAQ = { q: string; a: string };

export function FAQAccordion({ items, defaultOpen = 0 }: { items: FAQ[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();
  return (
    <div className="divide-y divide-teal/10 overflow-hidden rounded-3xl bg-white shadow-card">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3 className="font-heading">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                id={`${id}-b${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[17px] font-bold text-ink transition hover:bg-offwhite sm:px-8"
              >
                {f.q}
                <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full transition", isOpen ? "rotate-180 bg-orange text-teal" : "bg-aqua-pale text-teal")}>
                  <Icon name="chevronDown" className="h-5 w-5" />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-p${i}`}
              role="region"
              aria-labelledby={`${id}-b${i}`}
              className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-ink-muted sm:px-8">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
