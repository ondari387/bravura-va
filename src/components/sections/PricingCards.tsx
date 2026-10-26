"use client";
import Link from "next/link";
import { useState } from "react";
import { hourly, monthlyPackages, currencies, hasAnyPrice, type Currency } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";

function priceLabel(table: Record<Currency, number | null>, cur: Currency, suffix: string) {
  const v = table[cur];
  if (v === null) return null;
  const sym = currencies.find((c) => c.code === cur)!.symbol;
  return `${sym}${v.toLocaleString("en-US")}${suffix}`;
}

export function PricingCards({ detailed = false }: { detailed?: boolean }) {
  const showCurrency = hasAnyPrice();
  const [cur, setCur] = useState<Currency>("USD");
  const cta = (id: string, label: string, variant: "primary" | "orange" | "secondary" = "primary") => (
    <Link href={`/pricing/?plan=${id}#quote`} onClick={() => track("pricing_enquiry", { plan: id })} className={cn("group w-full", buttonClass(variant))}>
      {label} <Icon name="arrowRight" className="h-4 w-4" />
    </Link>
  );
  const hourlyPrice = priceLabel(hourly.rate, cur, "/hr");
  return (
    <div>
      {showCurrency && (
        <div role="group" aria-label="Currency" className="mb-8 flex justify-center gap-2">
          {currencies.map((c) => (
            <button key={c.code} onClick={() => setCur(c.code)} aria-pressed={cur === c.code} className={cn("rounded-full px-4 py-2 text-sm font-semibold", cur === c.code ? "bg-teal text-white" : "bg-white text-ink ring-1 ring-teal/10")}>{c.code}</button>
          ))}
        </div>
      )}

      {/* Hourly */}
      <div className="mb-8 grid gap-6 rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-teal/5 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center">
        <div className="flex gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-aqua-pale text-teal"><Icon name={hourly.icon} className="h-6 w-6" /></span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal">Pay as you go</p>
            <h3 className="mt-1 text-2xl font-extrabold">{hourly.name}</h3>
            <p className="mt-1 text-ink-muted">{hourly.description}</p>
          </div>
        </div>
        <ul className="grid gap-2 text-[15px] sm:grid-cols-2 lg:grid-cols-1">
          {(detailed ? hourly.useCases : hourly.useCases.slice(0, 3)).map((u) => (
            <li key={u} className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{u}</li>
          ))}
        </ul>
        <div className="lg:w-56">
          <p className="font-heading text-2xl font-extrabold">{hourlyPrice || "Rates on request"}</p>
          {hourly.minimumHours && <p className="text-sm text-ink-muted">Minimum: {hourly.minimumHours}</p>}
          <div className="mt-4">{cta("hourly", "Request Hourly Rates", "secondary")}</div>
        </div>
      </div>

      {/* Monthly */}
      <div className="grid gap-6 lg:grid-cols-3">
        {monthlyPackages.map((p) => {
          const price = priceLabel(p.price, cur, "/mo");
          const details = [p.includedHours && `Includes ${p.includedHours}`, p.availability, p.support, p.additionalHours, p.billingTerms].filter(Boolean) as string[];
          return (
            <div key={p.id} id={p.id} className={cn("relative flex flex-col rounded-[2rem] p-8", p.featured ? "bg-teal text-white shadow-lift" : "bg-white shadow-card ring-1 ring-teal/5")}>
              <p className={cn("text-xs font-bold uppercase tracking-wider", p.featured ? "text-aqua" : "text-teal")}>Monthly package</p>
              <span className={cn("mt-4 grid h-14 w-14 place-items-center rounded-2xl", p.featured ? "bg-aqua text-teal" : "bg-aqua-pale text-teal")}><Icon name={p.icon} className="h-6 w-6" /></span>
              <h3 className={cn("mt-5 text-2xl font-extrabold", p.featured && "text-white")}>{p.name}</h3>
              <p className={cn("mt-2 leading-relaxed", p.featured ? "text-white/75" : "text-ink-muted")}>{p.description}</p>
              <p className={cn("mt-6 font-heading text-2xl font-extrabold", p.featured ? "text-white" : "text-ink")}>{price || "Custom quote"}</p>
              <p className={cn("text-sm", p.featured ? "text-white/60" : "text-ink-muted")}>Scoped to your hours and tasks</p>
              {(detailed || details.length > 0) && (
                <ul className="mt-6 space-y-3">
                  {[...details, ...(p.services.length ? p.services : p.bestFor)].map((b) => (
                    <li key={b} className="flex gap-3 text-[15px]">
                      <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full", p.featured ? "bg-orange text-teal" : "bg-aqua text-teal")}><Icon name="check" className="h-3 w-3" /></span>
                      <span className={p.featured ? "text-white/85" : "text-ink"}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto pt-8">{cta(p.id, "Request a Custom Quote", p.featured ? "orange" : "primary")}</div>
            </div>
          );
        })}
      </div>
      {!showCurrency && <p className="mt-8 text-center text-sm text-ink-muted">We quote in US dollars, British pounds, Australian dollars or Canadian dollars. Prices are confirmed in writing before you commit.</p>}
    </div>
  );
}
