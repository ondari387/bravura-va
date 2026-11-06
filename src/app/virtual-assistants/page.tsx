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
  title: "International Virtual Assistant Services | Worldwide Remote Support",
  description: "Human-led virtual assistants from Nairobi for businesses in the USA, UK, Australia, Canada, New Zealand, Ireland, the UAE and worldwide. Compare time zones and how it works.",
  path: "/virtual-assistants/",
});

export default function InternationalPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "International", href: "/virtual-assistants/" }]} eyebrow="Based in Nairobi. Supporting global business." title="Your Next Great Business Assistant Could Be in Nairobi." description="Business support no longer needs to be limited by geography. Tendaji VA connects businesses in the United States, United Kingdom, Australia and Canada with Nairobi-based remote support professionals, working to an agreed overlap with your day." compact />
      <Section tone="white">
        <div className="rounded-[2.5rem] bg-offwhite p-6 sm:p-10"><WorldMap /></div>
      </Section>
      <Section tone="off">
        <SectionHeading eyebrow="Where we support" title="Choose Your Market" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketPages.slice(0, 4).map((c) => (
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
        <h2 className="mt-14 font-heading text-2xl font-extrabold">Also supporting businesses in</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketPages.slice(4).map((c) => (
            <div key={c.slug} className="flex flex-col rounded-3xl bg-white p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"><Icon name="flag" className="h-5 w-5" /></span>
              <h2 className="mt-5 font-heading text-2xl font-extrabold"><Link href={c.path} className="hover:text-teal">{c.name}</Link></h2>
              <p className="mt-2 text-sm font-semibold text-teal">{c.timezone.zone}</p>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{c.timezone.overlap}</p>
              <p className="mt-3 text-sm text-ink-muted">Quotes in {c.currency}</p>
              <Link href={c.path} className="mt-5 flex items-center gap-1.5 font-heading text-sm font-bold text-teal">Explore {c.name} <Icon name="arrowRight" className="h-4 w-4" /></Link>
            </div>
          ))}
          <div className="flex flex-col rounded-3xl bg-teal p-7 text-white shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal"><Icon name="globe" className="h-5 w-5" /></span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold text-white">Anywhere else</h2>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/80">Based somewhere else? If your team works in English and online tools, we can plan working hours around your time zone.</p>
            <Link href="/contact/" className="mt-5 flex items-center gap-1.5 font-heading text-sm font-bold text-aqua">Talk to us <Icon name="arrowRight" className="h-4 w-4" /></Link>
          </div>
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
