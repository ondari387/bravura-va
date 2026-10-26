import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/Hero";
import { Problems } from "@/components/sections/home/Problems";
import { Delegate } from "@/components/sections/home/Delegate";
import { HumanAI } from "@/components/sections/HumanAI";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { International } from "@/components/sections/International";
import { Testimonials } from "@/components/sections/Testimonials";
import { TaskChecklist } from "@/components/sections/TaskChecklist";
import { PricingCards } from "@/components/sections/PricingCards";
import { PostCard } from "@/components/sections/BlogPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import { ContactSection } from "@/components/sections/ContactSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { homeFaqs } from "@/content/faqs";
import { priorityIndustries } from "@/content/catalog";
import { getPostMetas } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant Services for Small Businesses | Bravura VA",
  description: "Hire reliable, human-led virtual assistants from Nairobi, Kenya. Admin, customer support, Shopify and more for businesses in the USA, UK, Australia and Canada.",
  path: "/",
});

const featured = [
  "what-does-a-virtual-assistant-do",
  "how-much-does-a-virtual-assistant-cost",
  "why-us-businesses-are-considering-virtual-assistants-from-kenya",
];

export default function HomePage() {
  const metas = getPostMetas();
  const posts = featured.map((s) => metas.find((m) => m.slug === s)).filter(Boolean) as typeof metas;
  return (
    <>
      <HomeHero />
      <Problems />
      <Delegate />
      <TaskChecklist />
      <WhyChoose tone="white" />
      <Section tone="off">
        <SectionHeading eyebrow="Who we help" title="Support Shaped Around the Way Your Industry Works" description="From founders and online stores to agencies, property teams and recruiters, we adapt support to your tools, terminology and pressure points." />
        <div className="mt-14"><IndustryGrid compact slugs={priorityIndustries} /></div>
        <div className="mt-10 text-center"><ButtonLink href="/industries/" variant="secondary" arrow>Explore All Industries</ButtonLink></div>
      </Section>
      <HowItWorks tone="white" />
      <Section tone="pale" id="pricing">
        <SectionHeading eyebrow="Pricing & support arrangements" title="Hourly Help or a Monthly Package. Your Choice." description="Every arrangement is quoted in writing before you commit, in US dollars, pounds, Australian or Canadian dollars." />
        <div className="mt-14"><PricingCards /></div>
        <p className="mt-8 text-center text-ink-muted"><a href="/pricing/" className="font-semibold text-teal underline">How pricing works</a></p>
      </Section>
      <International />
      <HumanAI />
      <Testimonials />
      <Section tone="off">
        <SectionHeading eyebrow="Insights & resources" title="Smarter Ways to Run Your Business." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => <PostCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-12 text-center"><ButtonLink href="/blog/" variant="secondary" arrow>Explore Our Blog</ButtonLink></div>
      </Section>
      <FAQSection faqs={homeFaqs} tone="white" />
      <CTABand />
      <ContactSection />
    </>
  );
}
