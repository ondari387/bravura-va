import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { PricingCards } from "@/components/sections/PricingCards";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { pricingFactors } from "@/content/shared";
import { faqGroups } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant Pricing | Flexible Support Plans | Bravura VA",
  description: "Flexible virtual assistant pricing built around your business: part-time, dedicated and specialist support. Learn what affects cost and request a tailored, no-obligation quote.",
  path: "/pricing/",
});

const pricingFaqs = [
  ...faqGroups[3].faqs,
  { q: "Are there setup fees or long contracts?", a: "Any fees, minimum terms and notice periods are set out clearly in your proposal before you commit. There are no hidden charges." },
  { q: "Which currency do you quote in?", a: "We can quote in the currency that suits your business, typically US dollars, British pounds or Australian dollars. Confirm your preference on your discovery call." },
  { q: "Is there a trial period?", a: "We're happy to discuss a short initial period with a defined scope so you can see how support works before committing longer term." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", href: "/pricing/" }]}
        eyebrow="Pricing"
        title="Flexible Virtual Assistant Support. Built Around Your Business."
        description="No rigid packages or surprise fees. Choose the type of support that fits your workload, and we'll give you a clear, tailored quote after a short conversation."
        secondary={{ href: "#quote", label: "Request a Quote" }}
        compact
      />
      <Section tone="off">
        <SectionHeading eyebrow="Engagement models" title="Three Ways to Work With Us" />
        <div className="mt-16"><PricingCards detailed /></div>
      </Section>
      <Section tone="white">
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
      <BusinessValue tone="off" />
      <FAQSection faqs={pricingFaqs} title="Pricing FAQs" tone="white" more />
      <ContactSection id="quote" formType="quote" title="Request Your Tailored Quote" submitLabel="Request My Quote" />
    </>
  );
}
