"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services, serviceCategories, type ServiceCategoryId } from "@/content/catalog";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function ServiceFilter() {
  const [cat, setCat] = useState<ServiceCategoryId | "all">("all");
  const [q, setQ] = useState("");
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (serviceCategories.some((c) => c.id === h)) setCat(h as ServiceCategoryId);
  }, []);
  const list = services.filter((s) => (cat === "all" || s.category === cat) && (!q || `${s.name} ${s.summary}`.toLowerCase().includes(q.toLowerCase())));
  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter services by category" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
          {[{ id: "all" as const, short: "All services" }, ...serviceCategories].map((c) => (
            <button key={c.id} id={c.id === "all" ? undefined : c.id} onClick={() => setCat(c.id)} aria-pressed={cat === c.id} className={cn("shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition", cat === c.id ? "bg-teal text-white" : "bg-white text-ink ring-1 ring-teal/10 hover:ring-aqua")}>
              {c.short}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search services</span>
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services..." className="input rounded-full pl-11" />
        </label>
      </div>
      <p className="sr-only" aria-live="polite">{list.length} services shown</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => {
          const c = serviceCategories.find((x) => x.id === s.category)!;
          return (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="group flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-teal transition group-hover:bg-orange"><Icon name={s.icon} className="h-6 w-6" /></span>
                <span className="rounded-full bg-offwhite px-3 py-1 text-xs font-semibold text-ink-muted">{c.short}</span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold">{s.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{s.summary}</p>
              <span className="mt-5 flex items-center gap-1.5 font-heading text-sm font-bold text-teal">Learn more <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          );
        })}
      </div>
      {list.length === 0 && <p className="rounded-3xl bg-white p-8 text-center text-ink-muted">No services match that search. <Link href="/contact/" className="font-semibold text-teal underline">Tell us what you need</Link>, we may still be able to help.</p>}
    </div>
  );
}
