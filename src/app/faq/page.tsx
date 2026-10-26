import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { faqGroups, allFaqs } from "@/content/faqs";
import { faqSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant FAQs | Hiring, Time Zones, Pricing & Security | Bravura VA",
  description: "Answers to common questions about hiring a virtual assistant from Bravura VA: working with Kenya-based assistants, time zones, pricing, confidentiality, AI use, onboarding and communication.",
  path: "/faq/",
});

export default function FAQPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq/" }]} eyebrow="FAQ" title="Questions Before You Delegate?" description="Straight answers to the questions business owners ask most. Can't find yours? Ask us directly. We're happy to help." compact />
      <Section tone="off">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-28 lg:h-fit">
            <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:block lg:space-y-1 lg:px-0">
              {faqGroups.map((g) => <li key={g.id} className="shrink-0"><a href={`#${g.id}`} className="block rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink ring-1 ring-teal/10 hover:ring-aqua lg:rounded-xl lg:bg-transparent lg:ring-0 lg:hover:bg-white">{g.title}</a></li>)}
            </ul>
          </nav>
          <div className="space-y-12">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id}>
                <h2 className="mb-5 font-heading text-2xl font-extrabold">{g.title}</h2>
                <FAQAccordion items={g.faqs} defaultOpen={null} />
              </section>
            ))}
          </div>
        </div>
      </Section>
      <CTABand title="Still Have Questions?" description="Book a free consultation or send us a message. We'll give you honest answers, even if the answer is that we're not the right fit." />
      <JsonLd data={faqSchema(allFaqs)} />
    </>
  );
}
