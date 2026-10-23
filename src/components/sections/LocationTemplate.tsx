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
  const svc = page.services.map(serviceBySlug).filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={page.eyebrow} title={page.h1} description={<p>{page.intro}</p>} image={page.image} secondary={{ href: "#time-zones", label: "How Time Zones Work" }}>
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-muted"><Icon name="mapPin" className="h-4 w-4 text-orange" />Remote support from Nairobi, Kenya. We do not have offices in {page.name}.</p>
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

      <Section tone="off">
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

      {children}

      <WhyChoose cta={false} tone="off" />
      <HowItWorks tone="white" />
      <FAQSection faqs={page.faqs} title={`${page.name} FAQs`} tone="pale" />
      <ContactSection title={`Tell Us About Your ${page.name} Business`} />
      <JsonLd data={{ ...serviceSchema({ name: `Virtual assistant services for ${page.name} businesses`, description: page.metaDescription, path, serviceType: "Virtual assistant services" }), areaServed: page.name }} />
    </>
  );
}
