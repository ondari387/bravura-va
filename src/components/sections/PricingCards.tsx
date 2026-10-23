import { pricingModels } from "@/content/shared";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PricingCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingModels.map((p) => (
        <div key={p.id} id={p.id} className={cn("relative flex flex-col rounded-[2rem] p-8", p.featured ? "bg-teal text-white shadow-lift lg:-translate-y-4" : "bg-white shadow-card ring-1 ring-teal/5")}>
          {p.featured && <span className="absolute -top-3.5 left-8 rounded-full bg-orange px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-teal">Most popular arrangement</span>}
          <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", p.featured ? "bg-aqua text-teal" : "bg-aqua-pale text-teal")}><Icon name={p.icon} className="h-6 w-6" /></span>
          <h3 className={cn("mt-6 text-2xl font-extrabold", p.featured && "text-white")}>{p.name}</h3>
          <p className={cn("mt-2 leading-relaxed", p.featured ? "text-white/75" : "text-ink-muted")}>{p.text}</p>
          <p className={cn("mt-6 font-heading text-3xl font-extrabold", p.featured ? "text-white" : "text-ink")}>{p.price}</p>
          <p className={cn("text-sm", p.featured ? "text-white/60" : "text-ink-muted")}>Scoped to your hours and tasks</p>
          {detailed && (
            <ul className="mt-6 space-y-3">
              {p.bestFor.map((b) => (
                <li key={b} className="flex gap-3 text-[15px]">
                  <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full", p.featured ? "bg-orange text-teal" : "bg-aqua text-teal")}><Icon name="check" className="h-3 w-3" /></span>
                  <span className={p.featured ? "text-white/85" : "text-ink"}>{b}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto pt-8">
            <ButtonLink href={`/pricing/?plan=${p.id}#quote`} variant={p.featured ? "orange" : "primary"} className="w-full" arrow>Request a Quote</ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
