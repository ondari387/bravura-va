import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/sections/CTABand";
import { caseStudies } from "@/content/caseStudies";
import { serviceBySlug } from "@/content/catalog";
import { img } from "@/content/images";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Case Studies & Illustrative Use Cases | Bravura VA",
  description: "See how Bravura VA structures virtual assistant support for e-commerce, SaaS founders, real estate teams and home service businesses. Illustrative use cases, clearly labeled.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Case Studies", href: "/case-studies/" }]}
        eyebrow="Case studies"
        title="What Delegation Can Look Like in Practice."
        description={<p>Bravura VA is a new company, so we won&apos;t show you invented success stories. Below are <strong className="text-ink">illustrative use cases</strong>, realistic scenarios showing how support is typically scoped and implemented. Verified client case studies will be published here, with permission, as they become available.</p>}
        compact
      />
      <Section tone="off">
        <div className="space-y-10">
          {caseStudies.map((c, idx) => (
            <article key={c.slug} id={c.slug} className="overflow-hidden rounded-[2.5rem] bg-white shadow-card">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-[260px]">
                  <Image src={`${img[c.image].src}?auto=format&fit=crop&w=800&h=900&q=70`} alt={img[c.image].alt} fill sizes="(min-width:1024px) 35vw, 100vw" className="object-cover" />
                  <span className="absolute left-5 top-5 rounded-full bg-orange px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-teal">{c.illustrative ? "Illustrative use case" : "Client case study"}</span>
                </div>
                <div className="p-7 sm:p-10">
                  <p className="text-sm font-semibold text-teal">{c.industry} | {c.country}</p>
                  <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">{c.title}</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div><h3 className="font-heading font-bold">{c.illustrative ? "Scenario background" : "Client background"}</h3><p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{c.background}</p></div>
                    <div><h3 className="font-heading font-bold">Business challenge</h3><p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{c.challenge}</p></div>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl bg-aqua-pale p-5">
                      <h3 className="font-heading font-bold">Support provided</h3>
                      <ul className="mt-3 space-y-2">{c.support.map((s) => <li key={s} className="flex gap-2 text-[15px]"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{s}</li>)}</ul>
                    </div>
                    <div className="rounded-2xl bg-offwhite p-5">
                      <h3 className="font-heading font-bold">Implementation</h3>
                      <ol className="mt-3 space-y-2">{c.implementation.map((s, i) => <li key={s} className="flex gap-2 text-[15px]"><span className="font-heading font-bold text-teal">{i + 1}.</span>{s}</li>)}</ol>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-heading font-bold">{c.illustrative ? "What success looks like (goals, not reported results)" : "Verified results"}</h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">{c.results.map((r) => <li key={r} className="flex gap-2 text-[15px] text-ink-muted"><Icon name="target" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />{r}</li>)}</ul>
                  </div>
                  {c.feedback ? (
                    <blockquote className="mt-6 rounded-2xl border-l-4 border-orange bg-offwhite p-5 italic">"{c.feedback.quote}" <span className="not-italic font-semibold">- {c.feedback.name}, {c.feedback.role}</span></blockquote>
                  ) : (
                    <p className="mt-6 text-sm text-ink-muted"><strong className="text-ink">Client feedback:</strong> not applicable. This is an illustrative scenario, not a real client.</p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.services.map((s) => { const m = serviceBySlug(s); return m ? <Link key={s} href={`/services/${s}/`} className="rounded-full bg-teal px-4 py-1.5 text-sm font-semibold text-white hover:bg-aqua hover:text-teal">{m.name}</Link> : null; })}
                  </div>
                </div>
              </div>
              {idx === 0 && <span className="sr-only">Illustrative scenarios are examples only.</span>}
            </article>
          ))}
        </div>
      </Section>
      <CTABand title="Want to Map Out Your Own Use Case?" description="On a free discovery call we'll sketch what support could look like for your business: the tasks, the workflow and the first month." />
    </>
  );
}
