import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceFilter } from "@/components/sections/ServiceFilter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TaskChecklist } from "@/components/sections/TaskChecklist";
import { CTABand } from "@/components/sections/CTABand";
import { FAQSection } from "@/components/sections/FAQSection";
import { faqGroups } from "@/content/faqs";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/content/catalog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant Services | Admin, Customer, Operations & Creative Support",
  description: "Explore Bravura VA's virtual assistant services: administrative and executive support, customer and sales support, e-commerce, real estate and recruitment operations, and creative and technical support.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }]}
        eyebrow="Our services"
        title="The Support You Need. Without Doing It All Yourself."
        description="Nineteen ways to get time back: from everyday admin and customer conversations to e-commerce operations, recruitment coordination, content and website updates. Every service is delivered by real people, scoped around your workload."
        image="womanOfficeTeam"
        secondary={{ href: "#all-services", label: "Browse All Services" }}
      />
      <Section tone="off" id="all-services">
        <SectionHeading eyebrow="Find the right support" title="Browse Services by Category" description="Filter by the type of work you'd like to hand over, or search for a specific task." />
        <div className="mt-12"><ServiceFilter /></div>
      </Section>
      <TaskChecklist />
      <HowItWorks tone="white" />
      <FAQSection faqs={[...faqGroups[0].faqs, faqGroups[3].faqs[1]]} />
      <CTABand />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList", name: "Bravura VA virtual assistant services",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: absoluteUrl(`/services/${s.slug}/`) })),
      }} />
    </>
  );
}
