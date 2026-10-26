import Link from "next/link";
import { PageHero } from "./PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FAQSection } from "./FAQSection";
import { ContactSection } from "./ContactSection";
import { HowItWorks } from "./HowItWorks";
import { WhyChoose } from "./WhyChoose";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceBySlug } from "@/content/catalog";
import type { LocationPage } from "@/content/locations";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { serviceSchema } from "@/lib/seo";

export function LocationTemplate({ page, crumbs, path, children }: { page: LocationPage; crumbs: Crumb[]; path: string; children?: React.ReactNode }) {
  const isMarket = Boolean(page.currency);
  const svc = page.services.map(serviceBySlug).filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={page.eyebrow} title={page.h1} description={<p>{page.intro}</p>} image={page.image} primaryLabel="Book a Free Consultation" secondary={{ href: "/pricing/#quote", label: "Request a Quote" }}>
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-muted"><Icon name="mapPin" className="h-4 w-4 text-orange" />{isMarket ? <>Remote support from Nairobi, Kenya. We do not have offices in {page.name === "United States" || page.name === "United Kingdom" ? `the ${page.name}` : page.name}.</> : <>Bravura VA is headquartered in Nairobi, Kenya.</>}</p>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Local business context</p>
            <h2 className="h-section mt-4">{page.context.title}</h2>
            <div className="lead mt-6 space-y-5">{page.context.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>
          </div>
          <aside id="time-zones" className="h-fit rounded-[2rem] bg-teal p-8 text-white">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal"><Icon name="clock" className="h-6 w-6" /></span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold text-white">Time-zone considerations</h2>
            <p className="mt-1 text-sm font-semibold text-aqua">{page.timezone.zone}</p>
            <p className="mt-4 text-white/80">{page.timezone.difference}</p>
            <p className="mt-3 text-white/80">{page.timezone.overlap}</p>
            <ul className="mt-5 space-y-2.5">
              {page.timezone.tips.map((t) => <li key={t} className="flex gap-2.5 text-[15px] text-white/90"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />{t}</li>)}
            </ul>
          </aside>
        </div>
      </Section>

      {(page.useCases || page.zones) && (
        <Section tone="off">
          {page.useCases && (
            <>
              <SectionHeading eyebrow="Use cases" title={`How ${page.name === "United States" ? "US" : page.name === "United Kingdom" ? "UK" : page.name} Businesses Use a Virtual Assistant`} description="Illustrative examples of the work clients commonly delegate. Your support is scoped around your own tasks and tools." />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {page.useCases.map((u, i) => (
                  <div key={u.title} className={i === 0 ? "rounded-3xl bg-orange p-6 text-teal" : "rounded-3xl bg-white p-6 shadow-card"}>
                    <h3 className="text-lg font-extrabold">{u.title}</h3>
                    <p className={i === 0 ? "mt-2 text-[15px] leading-relaxed text-teal/85" : "mt-2 text-[15px] leading-relaxed text-ink-muted"}>{u.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {page.zones && (
            <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <caption className="px-6 pb-2 pt-6 text-left font-heading text-xl font-extrabold text-ink">Working hours by time zone</caption>
                  <thead><tr><th scope="col" className="bg-teal px-6 py-3 font-heading font-bold text-white">Time zone</th><th scope="col" className="bg-teal px-6 py-3 font-heading font-bold text-white">Typical locations</th><th scope="col" className="bg-teal px-6 py-3 font-heading font-bold text-white">Difference from Nairobi</th></tr></thead>
                  <tbody>
                    {page.zones.map((z, i) => (
                      <tr key={z.zone} className={i % 2 ? "bg-offwhite" : ""}><th scope="row" className="px-6 py-3 font-semibold text-ink">{z.zone}</th><td className="px-6 py-3 text-ink-muted">{z.places}</td><td className="px-6 py-3 text-ink">{z.difference}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-teal/10 px-6 py-4 text-sm text-ink-muted">Working hours and overlap are agreed in writing before support starts. We don&apos;t promise round-the-clock coverage.</p>
            </div>
          )}
        </Section>
      )}

      <Section tone="white">
        <SectionHeading eyebrow="Relevant services" title={`Popular Services for ${page.name} Businesses`} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {svc.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="group rounded-3xl bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal group-hover:bg-orange"><Icon name={s.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-extrabold">{s.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Industry examples</p>
            <h2 className="h-section mt-4">Who We Help in {page.name}</h2>
            <div className="mt-8 space-y-3">
              {page.industries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}/`} className="group flex items-center justify-between gap-4 rounded-2xl bg-offwhite p-5 transition hover:bg-aqua-pale">
                  <span><span className="block font-heading text-lg font-extrabold">{i.name}</span><span className="text-[15px] text-ink-muted">{i.why}</span></span>
                  <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-teal transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-aqua-pale p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal shadow-card"><Icon name="shield" className="h-6 w-6" /></span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold">{page.considerations.title}</h2>
            <ul className="mt-5 space-y-3">
              {page.considerations.points.map((p) => <li key={p} className="flex gap-3 text-[15px] leading-relaxed"><Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{p}</li>)}
            </ul>
            <p className="mt-5 text-xs text-ink-muted">General information only, not legal advice. Please confirm your obligations with a qualified adviser.</p>
          </div>
        </div>
      </Section>

      {page.extra && (
        <Section tone="off" className="!py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-extrabold">{page.extra.title}</h2>
            {page.extra.paragraphs.map((p) => <p key={p.slice(0, 30)} className="mt-3 text-ink-muted">{p}</p>)}
          </div>
        </Section>
      )}

      {isMarket && (
        <Section tone="pale" className="!py-14">
          <div className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-card sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-2xl font-extrabold">Pricing in {page.currency}, confirmed in writing</h2>
              <p className="mt-2 text-ink-muted">Choose hourly support or a monthly package. We quote in {page.currency} after a short consultation, with no obligation and no hidden fees.</p>
              <p className="mt-3 text-sm text-ink-muted">Also see: <Link href="/pricing/" className="font-semibold text-teal underline">Pricing</Link> | <Link href="/how-it-works/" className="font-semibold text-teal underline">How it works</Link> | <Link href="/contact/" className="font-semibold text-teal underline">Contact</Link></p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/pricing/#quote" className="inline-flex items-center justify-center rounded-full bg-aqua px-6 py-3.5 font-heading text-[15px] font-bold text-teal hover:bg-teal hover:text-white">Request a Quote</Link>
              <Link href="/book-a-call/" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-heading text-[15px] font-bold text-teal ring-1 ring-teal/10 hover:ring-aqua">Book a Free Consultation</Link>
            </div>
          </div>
        </Section>
      )}

      {children}

      <WhyChoose cta={false} tone="off" />
      <HowItWorks tone="white" />
      <FAQSection faqs={page.faqs} title={`${page.name} FAQs`} tone="white" />
      <ContactSection title={`Tell Us About Your ${page.name} Business`} />
      <JsonLd data={{ ...serviceSchema({ name: `Virtual assistant services for ${page.name} businesses`, description: page.metaDescription, path, serviceType: "Virtual assistant services" }), areaServed: page.name }} />
    </>
  );
}
