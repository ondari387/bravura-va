import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { CTABand } from "@/components/sections/CTABand";
import { HumanAI } from "@/components/sections/HumanAI";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMeta({
  title: "Industries We Support | Virtual Assistants by Industry",
  description: "Industry-specific virtual assistant support for startups, small businesses, e-commerce, real estate, property management, healthcare admin, legal, agencies, recruitment, SaaS, construction and more.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries/" }]}
        eyebrow="Who we help"
        title="Different Businesses. Different Challenges. The Right Support Makes a Difference."
        description="Every industry has its own rhythm, tools and pressure points. Explore how Bravura VA shapes remote support around the realities of your sector."
        image="teamMeetingBright"
      />
      <Section tone="off">
        <IndustryGrid filter />
      </Section>
      <Section tone="white">
        <div className="grid gap-8 rounded-[2rem] bg-aqua-pale p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-orange text-teal"><Icon name="shield" className="h-8 w-8" /></span>
          <div>
            <SectionHeading align="left" title="Working in a Regulated Sector?" description="For healthcare, legal and financial services, we provide administrative support only, never clinical, legal or financial advice. Specialist regulatory obligations, such as HIPAA in US healthcare or professional conduct and outsourcing rules in law and finance, must be assessed before work begins. We'll talk through those requirements openly on your consultation." />
          </div>
        </div>
      </Section>
      <HumanAI />
      <CTABand title="Don't See Your Industry? Let's Talk Anyway." description="Most businesses share the same need: more time, fewer dropped balls and dependable support. Tell us how your business works and we'll tell you honestly whether we can help." />
    </>
  );
}
