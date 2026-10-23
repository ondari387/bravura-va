import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry, childrenOf, allStates, statePages } from "@/content/locations";
import { LocationTemplate } from "@/components/sections/LocationTemplate";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country);
  return c ? pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/virtual-assistants/${country}/` }) : {};
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();
  const kids = childrenOf(country);
  const published = new Set(statePages.map((s) => s.slug));
  return (
    <LocationTemplate page={c} path={`/virtual-assistants/${country}/`} crumbs={[{ name: "International", href: "/virtual-assistants/" }, { name: c.name, href: `/virtual-assistants/${country}/` }]}>
      {kids.length > 0 && (
        <Section tone="pale">
          <SectionHeading eyebrow="Local guides" title={country === "usa" ? "Virtual Assistant Guides by State" : `Virtual Assistant Guides by City`} description={country === "usa" ? "Local context for some of the states we support most. Bravura VA supports businesses in all 50 states." : undefined} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kids.map((k) => (
              <Link key={k.slug} href={`/virtual-assistants/${country}/${k.slug}/`} className="group flex items-center justify-between rounded-2xl bg-white p-5 font-heading text-lg font-extrabold shadow-card hover:text-teal">
                <span className="flex items-center gap-3"><Icon name="mapPin" className="h-5 w-5 text-orange" />{k.name}</span>
                <Icon name="arrowRight" className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          {country === "usa" && (
            <div className="mt-10 rounded-[2rem] bg-white p-6 sm:p-8">
              <h3 className="font-heading text-lg font-extrabold">Supporting businesses in all 50 states</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-muted sm:grid-cols-3 lg:grid-cols-5">
                {allStates.map((s) => (
                  <li key={s.slug}>{published.has(s.slug) ? <Link href={`/virtual-assistants/usa/${s.slug}/`} className="font-semibold text-teal hover:underline">{s.name}</Link> : s.name}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}
    </LocationTemplate>
  );
}
