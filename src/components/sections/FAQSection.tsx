import { FAQAccordion, type FAQ } from "@/components/ui/FAQAccordion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/Button";

export function FAQSection({ faqs, title = "Questions Before You Delegate?", eyebrow = "FAQ", tone = "off", description, more = true, schema = true }: {
  faqs: FAQ[]; title?: string; eyebrow?: string; tone?: "off" | "white" | "pale"; description?: string; more?: boolean; schema?: boolean;
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} description={description || "Straight answers to the questions business owners ask most before working with a remote assistant."} align="left" />
          {more && <ButtonLink href="/faq/" variant="secondary" className="mt-8" arrow>See all FAQs</ButtonLink>}
        </div>
        <FAQAccordion items={faqs} />
      </div>
      {schema && <JsonLd data={faqSchema(faqs)} />}
    </Section>
  );
}
