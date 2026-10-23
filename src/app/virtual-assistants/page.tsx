import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/sections/International";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/sections/CTABand";
import { countries, childrenOf } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "International Virtual Assistant Services | USA, UK & Australia | Bravura VA",
  description: "Bravura VA supports businesses in the United States, United Kingdom and Australia from Nairobi, Kenya. Explore country, state and city guides to working with a remote assistant.",
  path: "/virtual-assistants/",
});

export default function InternationalPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "International", href: "/virtual-assistants/" }]} eyebrow="Based in Nairobi. Supporting global business." title="Your Next Great Business Assistant Could Be in Nairobi." description="Business support no longer needs to be limited by geography. Bravura VA connects businesses in the United States, United Kingdom and Australia with Nairobi-based remote support professionals." compact />
      <Section tone="white">
        <div className="rounded-[2.5rem] bg-offwhite p-6 sm:p-10"><WorldMap /></div>
      </Section>
      <Section tone="off">
        <SectionHeading eyebrow="Where we support" title="Choose Your Market" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => {
            const kids = childrenOf(c.slug);
            return (
              <div key={c.slug} className="flex flex-col rounded-3xl bg-white p-7 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"><Icon name="flag" className="h-5 w-5" /></span>
                <h2 className="mt-5 font-heading text-2xl font-extrabold"><Link href={`/virtual-assistants/${c.slug}/`} className="hover:text-teal">{c.name}</Link></h2>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{c.metaDescription}</p>
                {kids.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {kids.map((k) => <li key={k.slug}><Link href={`/virtual-assistants/${c.slug}/${k.slug}/`} className="rounded-full bg-offwhite px-3 py-1 text-sm font-semibold text-teal hover:bg-aqua-pale">{k.name}</Link></li>)}
                  </ul>
                )}
                <Link href={`/virtual-assistants/${c.slug}/`} className="mt-5 flex items-center gap-1.5 font-heading text-sm font-bold text-teal">Explore {c.name} <Icon name="arrowRight" className="h-4 w-4" /></Link>
              </div>
            );
          })}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
