import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { PricingCards } from "@/components/sections/PricingCards";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { pricingFactors } from "@/content/shared";
import { hourly } from "@/content/pricing";
import { faqGroups } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant Pricing | Hourly & Monthly VA Support | Bravura VA",
  description: "Flexible virtual assistant pricing: hourly support or monthly packages (Essential, Growth and Dedicated), quoted in USD, GBP, AUD or CAD. Learn what affects cost and request a no-obligation quote.",
  path: "/pricing/",
});

const pricingFaqs = [
  ...faqGroups[3].faqs,
  { q: "Are there setup fees or long contracts?", a: "Any fees, minimum terms and notice periods are set out clearly in your proposal before you commit. There are no hidden charges." },
  { q: "Which currency do you quote in?", a: "We quote in US dollars, British pounds, Australian dollars or Canadian dollars. Prices are set per currency, not converted automatically, and confirmed in writing before you commit." },
  { q: "Is there a trial period?", a: "We're happy to discuss a short initial period with a defined scope so you can see how support works before committing longer term." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", href: "/pricing/" }]}
        eyebrow="Pricing"
        title="Flexible Virtual Assistant Support. Built Around Your Business."
        description="No surprise fees. Choose hourly help or a monthly package, and we'll send a clear quote in your currency after a short conversation."
        secondary={{ href: "#quote", label: "Request a Quote" }}
        compact
      />
      <Section tone="off">
        <SectionHeading eyebrow="Support arrangements" title="Hourly Support or a Monthly Package" description="Pay by the hour for flexible, task-based help, or choose a monthly package for consistent ongoing support. Every quote is tailored and confirmed in writing." />
        <div className="mt-16"><PricingCards detailed /></div>
      </Section>
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Hourly support</p>
            <h2 className="h-section mt-4">How Hourly Billing Works</h2>
            <p className="lead mt-5">Hourly support suits variable workloads, projects and businesses testing delegation. You only pay for tracked time, and you can move to a monthly package whenever it makes sense.</p>
          </div>
          <ol className="space-y-3">
            {hourly.howItWorks.map((h, i) => (
              <li key={h} className="flex gap-4 rounded-2xl bg-offwhite p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-aqua font-heading text-sm font-bold text-teal">{i + 1}</span><span className="pt-1">{h}</span></li>
            ))}
            {hourly.minimumHours && <li className="rounded-2xl bg-aqua-pale p-5 text-sm">Minimum commitment: {hourly.minimumHours}</li>}
            {hourly.billing && <li className="rounded-2xl bg-aqua-pale p-5 text-sm">Billing: {hourly.billing}</li>}
          </ol>
        </div>
      </Section>
      <Section tone="off">
        <SectionHeading eyebrow="What affects pricing" title="Your Quote Reflects Your Real Needs" description="We price support transparently based on the factors below, so you pay for what your business actually needs." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingFactors.map((f) => (
            <div key={f.title} className="rounded-3xl bg-offwhite p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal shadow-card"><Icon name={f.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-extrabold">{f.title}</h3>
              <p className="mt-1.5 text-ink-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <BusinessValue tone="white" />
      <FAQSection faqs={pricingFaqs} title="Pricing FAQs" tone="white" more />
      <ContactSection id="quote" formType="quote" title="Request Your Tailored Quote" submitLabel="Request My Quote" />
    </>
  );
}
