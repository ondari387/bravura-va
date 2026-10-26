import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceContent, getServiceContent } from "@/content/services";
import { serviceBySlug, serviceCategories, markets, industries } from "@/content/catalog";
import { industryContent } from "@/content/industries";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/sections/BlogPreview";
import { CTABand } from "@/components/sections/CTABand";
import { img } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BookCallButton } from "@/components/layout/Booking";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceContent(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${slug}/` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getServiceContent(slug);
  const meta = serviceBySlug(slug);
  if (!s || !meta) notFound();
  const cat = serviceCategories.find((c) => c.id === meta.category)!;
  const relatedIndustries = industryContent.filter((i) => i.services.includes(slug)).slice(0, 4).map((i) => industries.find((x) => x.slug === i.slug)!).filter(Boolean);
  const articles = getAllPosts().filter((pst) => pst.html.includes(`/services/${slug}/`)).slice(0, 3);
  const related = s.related.map(serviceBySlug).filter(Boolean) as NonNullable<ReturnType<typeof serviceBySlug>>[];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }, { name: meta.name, href: `/services/${slug}/` }]}
        eyebrow={s.hero.eyebrow}
        title={s.hero.headline}
        description={<p>{s.hero.intro}</p>}
        image={meta.image}
        secondary={{ href: "#tasks", label: "See What We Handle" }}
      />

      {/* Overview */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Service overview</p>
            <h2 className="h-section mt-4">{meta.name}, Explained</h2>
            <div className="lead mt-6 space-y-5">{s.overview.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
          </div>
          <aside className="h-fit rounded-[2rem] bg-aqua-pale p-8 lg:sticky lg:top-28">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-teal"><Icon name={meta.icon} className="h-6 w-6" /></span>
            <p className="mt-5 font-heading text-lg font-extrabold">Part of {cat.name}</p>
            <ul className="mt-5 space-y-3">
              {s.why.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] text-ink"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange text-teal"><Icon name="check" className="h-3 w-3" /></span>{w}</li>
              ))}
            </ul>
            <BookCallButton className="mt-7 w-full" source={`service_${slug}`}>Book a Free Consultation</BookCallButton>
          </aside>
        </div>
      </Section>

      {/* Tasks */}
      <Section tone="off" id="tasks">
        <SectionHeading eyebrow="What we handle" title="What Your Assistant Can Take Off Your Plate" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {s.taskGroups.map((g, i) => (
            <div key={g.title} className={i === 1 ? "rounded-3xl bg-orange p-7 text-teal" : "rounded-3xl bg-white p-7 shadow-card"}>
              <h3 className="text-lg font-extrabold">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[15px]"><Icon name="checkCircle" className={i === 1 ? "mt-0.5 h-4 w-4 shrink-0 text-teal" : "mt-0.5 h-4 w-4 shrink-0 text-aqua"} /><span className={i === 1 ? "text-teal" : "text-ink-muted"}>{t}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Audience + benefits */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="h-section mt-4">Is This the Right Support for You?</h2>
            <div className="mt-8 space-y-4">
              {s.audience.map((a) => (
                <div key={a.title} className="rounded-3xl bg-offwhite p-6">
                  <h3 className="flex items-center gap-2 text-lg font-extrabold"><Icon name="userCheck" className="h-5 w-5 text-teal" />{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Business benefits</p>
            <h2 className="h-section mt-4">What Changes When You Delegate</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <div key={b.title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-teal/5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-pale text-teal"><Icon name={b.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-extrabold">{b.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={img[meta.image].src} alt={img[meta.image].alt} fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* Workflows */}
      <Section tone="pale">
        <SectionHeading eyebrow="Example workflows" title="What This Looks Like in Practice" description="Illustrative examples of how delegated work typically flows. Your assistant will follow the process agreed with you." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {s.workflows.map((w) => (
            <div key={w.title} className="rounded-[2rem] bg-white p-8 shadow-card">
              <h3 className="text-xl font-extrabold">{w.title}</h3>
              <ol className="mt-6 space-y-4">
                {w.steps.map((st, i) => (
                  <li key={st} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal font-heading text-sm font-bold text-white">{i + 1}</span>
                    <span className="pt-1 leading-relaxed text-ink-muted">{st}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* Software + support approach */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Commonly used software</p>
            <h2 className="h-section mt-4">We Work Inside Your Tools</h2>
            <p className="lead mt-5">Your assistant works in the systems your business already uses. Tool familiarity varies by assistant, so we confirm the right fit for your stack during matching.</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {s.software.map((t) => <li key={t} className="rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-ink ring-1 ring-teal/5">{t}</li>)}
            </ul>
            <p className="mt-4 text-xs text-ink-muted">Product names are trademarks of their respective owners. Listing them does not imply partnership or certification.</p>
          </div>
          <div>
            <p className="eyebrow">How Bravura VA supports the workflow</p>
            <h2 className="h-section mt-4">Structured From Day One</h2>
            <div className="lead mt-5 space-y-4">{s.support.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
          </div>
        </div>
      </Section>

      {/* Human + AI */}
      <Section tone="teal">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-white">Human oversight &amp; AI</p>
            <h2 className="h-section mt-4 text-white">Smart Tools. Human Responsibility.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/80">{s.humanAi}</p>
            <Link href="/human-ai-virtual-assistants/" className="mt-6 inline-flex items-center gap-2 font-heading font-bold text-aqua hover:underline">How we use AI responsibly <Icon name="arrowRight" className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <HowItWorks tone="off" cta={false} />

      {/* Pricing enquiry + countries */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-teal p-8 text-white sm:p-10">
            <p className="eyebrow text-white">Pricing</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">Hourly or monthly. Quoted in your currency.</h2>
            <p className="mt-3 text-white/75">The cost of {meta.name.toLowerCase()} depends on hours, complexity and the working-hour overlap you need. Tell us about your workload and we&apos;ll send a clear written quote in US dollars, pounds, Australian or Canadian dollars.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`/pricing/?plan=growth#quote`} className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 font-heading text-[15px] font-bold text-teal hover:bg-aqua">Request a Quote</Link>
              <Link href="/pricing/" className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-heading text-[15px] font-bold text-white ring-1 ring-white/40 hover:bg-white hover:text-teal">How Pricing Works</Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-offwhite p-8 sm:p-10">
            <p className="eyebrow">Where we support</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">{meta.name} for international businesses</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {markets.map((m) => (
                <li key={m.slug}><Link href={m.href} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 font-semibold text-ink shadow-card hover:text-teal">{m.name}<Icon name="arrowRight" className="h-4 w-4" /></Link></li>
              ))}
            </ul>
            {relatedIndustries.length > 0 && (
              <p className="mt-6 text-sm text-ink-muted">Popular with: {relatedIndustries.map((i, k) => <span key={i.slug}><Link href={`/industries/${i.slug}/`} className="font-semibold text-teal underline">{i.name}</Link>{k < relatedIndustries.length - 1 ? ", " : ""}</span>)}</p>
            )}
          </div>
        </div>
      </Section>

      <FAQSection faqs={s.faqs} title={`${meta.name} FAQs`} tone="white" description={`Common questions about delegating ${meta.name.toLowerCase()} to a remote assistant.`} />

      {/* Related */}
      <Section tone="off">
        <SectionHeading eyebrow="Related services" title="Often Combined With" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/services/${r.slug}/`} className="group rounded-3xl bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"><Icon name={r.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-extrabold">{r.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{r.summary}</p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-teal">Explore <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>

      {articles.length > 0 && (
        <Section tone="white">
          <SectionHeading eyebrow="Guides" title="Helpful Reading" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">{articles.map(({ html: _h, headings: _hd, ...m }) => <PostCard key={m.slug} p={m} />)}</div>
        </Section>
      )}

      <CTABand />
      <ContactSection formType="service" defaultService={meta.name} title={`Ask About ${meta.name}`} />
      <JsonLd data={serviceSchema({ name: meta.name, description: s.metaDescription, path: `/services/${slug}/` })} />
    </>
  );
}
