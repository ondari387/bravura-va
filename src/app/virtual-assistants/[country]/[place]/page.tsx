import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { subPages, getSubPage, getCountry, childrenOf } from "@/content/locations";
import { LocationTemplate } from "@/components/sections/LocationTemplate";
import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return subPages.map((p) => ({ country: p.parent!, place: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ country: string; place: string }> }): Promise<Metadata> {
  const { country, place } = await params;
  const p = getSubPage(country, place);
  return p ? pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/virtual-assistants/${country}/${place}/` }) : {};
}

export default async function PlacePage({ params }: { params: Promise<{ country: string; place: string }> }) {
  const { country, place } = await params;
  const p = getSubPage(country, place);
  const c = getCountry(country);
  if (!p || !c) notFound();
  const siblings = childrenOf(country).filter((s) => s.slug !== place);
  return (
    <LocationTemplate page={p} path={`/virtual-assistants/${country}/${place}/`} crumbs={[{ name: "International", href: "/virtual-assistants/" }, { name: c.name, href: `/virtual-assistants/${country}/` }, { name: p.name, href: `/virtual-assistants/${country}/${place}/` }]}>
      <Section tone="pale" className="!py-12">
        <p className="text-center text-ink-muted">
          More local guides: {siblings.map((s, i) => (
            <span key={s.slug}><Link href={`/virtual-assistants/${country}/${s.slug}/`} className="font-semibold text-teal hover:underline">{s.name}</Link>{i < siblings.length - 1 ? " | " : ""}</span>
          ))} | <Link href={`/virtual-assistants/${country}/`} className="font-semibold text-teal hover:underline">All of {c.name}</Link>
        </p>
      </Section>
    </LocationTemplate>
  );
}
