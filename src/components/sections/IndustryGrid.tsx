"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { industries, industryGroups, type IndustryGroup } from "@/content/catalog";
import { img } from "@/content/images";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function IndustryGrid({ filter = false, limit, slugs, compact = false }: { filter?: boolean; limit?: number; slugs?: string[]; compact?: boolean }) {
  const [group, setGroup] = useState<IndustryGroup | "all">("all");
  const [q, setQ] = useState("");
  let list = industries.filter((i) => (group === "all" || i.group === group) && (!q || `${i.name} ${i.problem} ${i.solution}`.toLowerCase().includes(q.toLowerCase())));
  if (slugs) list = slugs.map((sl) => list.find((i) => i.slug === sl)).filter(Boolean) as typeof list;
  if (limit) list = list.slice(0, limit);
  if (compact) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {list.map((i) => (
          <Link key={i.slug} href={`/industries/${i.slug}/`} className="group rounded-3xl bg-white p-5 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-teal"><Icon name={i.icon} className="h-5 w-5" /></span>
            <h3 className="mt-4 font-heading text-base font-extrabold">{i.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{i.solution}</p>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div>
      {filter && (
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter industries" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
            {[{ id: "all" as const, name: "All industries" }, ...industryGroups].map((g) => (
              <button key={g.id} onClick={() => setGroup(g.id)} aria-pressed={group === g.id} className={cn("shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition", group === g.id ? "bg-teal text-white" : "bg-white text-ink ring-1 ring-teal/10 hover:ring-aqua")}>
                {g.name}
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search industries</span>
            <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search industries..." className="input rounded-full pl-11" />
          </label>
        </div>
      )}
      <p className="sr-only" aria-live="polite">{list.length} industries shown</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => (
          <Link key={i.slug} href={`/industries/${i.slug}/`} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
            <div className="relative h-40 overflow-hidden">
              <Image src={img[i.image].src} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="relative flex flex-1 flex-col p-6 pt-9">
              <span className="absolute -top-6 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal shadow-card"><Icon name={i.icon} className="h-6 w-6" /></span>
              <h3 className="text-xl font-extrabold">{i.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted"><strong className="font-semibold text-ink">The challenge:</strong> {i.problem}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted"><strong className="font-semibold text-ink">How we help:</strong> {i.solution}</p>
              <span className="mt-auto flex items-center gap-1.5 pt-5 font-heading text-sm font-bold text-teal">Explore {i.name} <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </div>
      {list.length === 0 && <p className="rounded-3xl bg-white p-8 text-center text-ink-muted">No industries match that search. <Link href="/contact/" className="font-semibold text-teal underline">Tell us about your business</Link>, we support many sectors.</p>}
    </div>
  );
}
