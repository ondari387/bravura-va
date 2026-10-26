import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { industryContent, getIndustryContent } from "@/content/industries";
import { industryBySlug, serviceBySlug, industries } from "@/content/catalog";
import { img } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return industryContent.map((i) => ({ slug: i.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getIndustryContent(slug);
  return c ? pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/industries/${slug}/` }) : {};
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getIndustryContent(slug);
  const meta = industryBySlug(slug);
  if (!c || !meta) notFound();
  const svc = c.services.map(serviceBySlug).filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];
  const others = industries.filter((i) => i.group === meta.group && i.slug !== slug).concat(industries.filter((i) => i.group !== meta.group)).slice(0, 4);

  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries/" }, { name: meta.name, href: `/industries/${slug}/` }]}
        eyebrow={c.eyebrow}
        title={c.headline}
        description={<p>{c.intro}</p>}
        image={meta.image}
        secondary={{ href: "#tasks", label: "What You Can Delegate" }}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The reality</p>
            <h2 className="h-section mt-4">Why {meta.name} Teams Get Stretched</h2>
            <div className="lead mt-6 space-y-5">{c.context.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.challenges.map((ch, i) => (
              <div key={ch.title} className={i === 0 ? "rounded-3xl bg-orange p-6 text-teal" : "rounded-3xl bg-offwhite p-6"}>
                <Icon name="alert" className="h-6 w-6 text-teal" />
                <h3 className="mt-4 text-lg font-extrabold">{ch.title}</h3>
                <p className={i === 0 ? "mt-1.5 text-[15px] text-teal/85" : "mt-1.5 text-[15px] text-ink-muted"}>{ch.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {c.regulatedNote && (
        <Section tone="white" className="!pt-0">
          <div className="flex flex-col gap-5 rounded-[2rem] bg-aqua-pale p-8 sm:flex-row sm:items-start">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal text-aqua"><Icon name="shield" className="h-7 w-7" /></span>
            <div>
              <h2 className="font-heading text-xl font-extrabold">Administrative support, with clear boundaries</h2>
              <p className="mt-2 leading-relaxed text-ink-muted">{c.regulatedNote}</p>
            </div>
          </div>
        </Section>
      )}

      <Section tone="off" id="tasks">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2.5rem] shadow-lift">
            <Image src={img[meta.image].src} alt={img[meta.image].alt} fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Tasks to delegate</p>
            <h2 className="h-section mt-4">What {meta.name} Businesses Commonly Hand Over</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.tasks.map((t) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-white px-4 py-3 text-[15px] font-medium shadow-card"><Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Relevant services" title={`Virtual Assistant Services for ${meta.name}`} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {svc.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="group rounded-3xl bg-white p-7 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal group-hover:bg-orange"><Icon name={s.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-extrabold">{s.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.summary}</p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-teal">Learn more <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="pale">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <p className="eyebrow">Example workflow</p>
            <h3 className="mt-3 text-2xl font-extrabold">{c.workflow.title}</h3>
            <ol className="mt-6 space-y-4">
              {c.workflow.steps.map((st, i) => (
                <li key={st} className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange font-heading text-sm font-bold text-teal">{i + 1}</span><span className="pt-1 leading-relaxed text-ink-muted">{st}</span></li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink-muted">Illustrative example. Your workflow is designed around your processes and tools.</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-teal p-8 text-white">
              <h3 className="text-xl font-extrabold text-white">Relevant software</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.software.map((t) => <li key={t} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium">{t}</li>)}
              </ul>
              <p className="mt-4 text-xs text-white/60">Tool familiarity is confirmed during matching. Trademarks belong to their owners.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.benefits.map((b) => (
                <div key={b.title} className="rounded-3xl bg-white p-6 shadow-card">
                  <Icon name={b.icon} className="h-6 w-6 text-teal" />
                  <h3 className="mt-3 font-extrabold">{b.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FAQSection faqs={c.faqs} title={`${meta.name} FAQs`} tone="white" description={`Questions ${meta.name.toLowerCase()} businesses often ask about remote support.`} />

      <Section tone="off">
        <SectionHeading eyebrow="Explore more" title="Other Industries We Support" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}/`} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-heading font-bold shadow-card hover:text-teal">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-pale text-teal"><Icon name={o.icon} className="h-5 w-5" /></span>{o.name}
            </Link>
          ))}
        </div>
      </Section>

      <ContactSection formType="service" title={`Tell Us About Your ${meta.name} Business`} />
      <JsonLd data={serviceSchema({ name: `Virtual assistant services for ${meta.name}`, description: c.metaDescription, path: `/industries/${slug}/`, serviceType: "Virtual assistant services" })} />
    </>
  );
}
