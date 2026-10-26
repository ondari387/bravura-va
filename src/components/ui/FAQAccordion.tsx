import { Icon } from "./Icon";

export type FAQ = { q: string; a: string };

/** Accessible FAQ list built on native <details>, so it needs no JavaScript. */
export function FAQAccordion({ items, defaultOpen = 0 }: { items: FAQ[]; defaultOpen?: number | null }) {
  return (
    <div className="divide-y divide-teal/10 overflow-hidden rounded-3xl bg-white shadow-card">
      {items.map((f, i) => (
        <details key={f.q} className="group" open={defaultOpen === i}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-heading text-[17px] font-bold text-ink transition hover:bg-offwhite sm:px-8 [&::-webkit-details-marker]:hidden">
            <h3 className="font-heading text-[17px] font-bold">{f.q}</h3>
            <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aqua-pale text-teal transition group-open:rotate-180 group-open:bg-orange">
              <Icon name="chevronDown" className="h-5 w-5" />
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-ink-muted sm:px-8">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
