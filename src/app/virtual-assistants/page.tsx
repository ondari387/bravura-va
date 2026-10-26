import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/sections/International";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/sections/CTABand";
import { marketPages, originPages } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "International Virtual Assistant Services | USA, UK, Australia & Canada | Bravura VA",
  description: "Bravura VA supports businesses in the United States, United Kingdom, Australia and Canada remotely from Nairobi, Kenya. Compare time zones, currencies and how support works in each market.",
  path: "/virtual-assistants/",
});

export default function InternationalPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "International", href: "/virtual-assistants/" }]} eyebrow="Based in Nairobi. Supporting global business." title="Your Next Great Business Assistant Could Be in Nairobi." description="Business support no longer needs to be limited by geography. Bravura VA connects businesses in the United States, United Kingdom, Australia and Canada with Nairobi-based remote support professionals, working to an agreed overlap with your day." compact />
      <Section tone="white">
        <div className="rounded-[2.5rem] bg-offwhite p-6 sm:p-10"><WorldMap /></div>
      </Section>
      <Section tone="off">
        <SectionHeading eyebrow="Where we support" title="Choose Your Market" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketPages.map((c) => (
            <div key={c.slug} className="flex flex-col rounded-3xl bg-white p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"><Icon name="flag" className="h-5 w-5" /></span>
              <h2 className="mt-5 font-heading text-2xl font-extrabold"><Link href={c.path} className="hover:text-teal">{c.name}</Link></h2>
              <p className="mt-2 text-sm font-semibold text-teal">{c.timezone.zone}</p>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{c.timezone.overlap}</p>
              <p className="mt-3 text-sm text-ink-muted">Quotes in {c.currency}</p>
              <Link href={c.path} className="mt-5 flex items-center gap-1.5 font-heading text-sm font-bold text-teal">Explore {c.name} <Icon name="arrowRight" className="h-4 w-4" /></Link>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {originPages.map((o) => (
            <Link key={o.slug} href={o.path} className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-card hover:text-teal">
              <span><span className="block font-heading font-extrabold">{o.slug === "kenya" ? "Why hire a virtual assistant from Kenya?" : "Hiring virtual assistants in Africa"}</span><span className="text-sm text-ink-muted">{o.eyebrow}</span></span>
              <Icon name="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
