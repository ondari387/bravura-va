import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/Hero";
import { Problems } from "@/components/sections/home/Problems";
import { AboutSplit } from "@/components/sections/home/AboutSplit";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { HumanAI } from "@/components/sections/HumanAI";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { International } from "@/components/sections/International";
import { Testimonials } from "@/components/sections/Testimonials";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { TaskChecklist } from "@/components/sections/TaskChecklist";
import { PricingCards } from "@/components/sections/PricingCards";
import { PostCard } from "@/components/sections/BlogPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import { ContactSection } from "@/components/sections/ContactSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { homeFaqs } from "@/content/faqs";
import { getPostMetas } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Virtual Assistant Services for US, UK & Australian Businesses | Bravura VA",
  description: "Hire dependable, human-led virtual assistants from Nairobi, Kenya. Admin, executive, customer support, e-commerce and creative help for startups and growing businesses in the USA, UK and Australia.",
  path: "/",
});

const featured = [
  "how-to-hire-a-virtual-assistant-in-the-usa",
  "will-ai-replace-virtual-assistants",
  "why-us-businesses-are-considering-virtual-assistants-from-kenya",
];

export default function HomePage() {
  const metas = getPostMetas();
  const posts = featured.map((s) => metas.find((m) => m.slug === s)).filter(Boolean) as typeof metas;
  return (
    <>
      <HomeHero />
      <Problems />
      <AboutSplit />
      <ServiceCategories />
      <HumanAI />
      <WhyChoose />
      <Section tone="pale">
        <SectionHeading eyebrow="Who we help" title="Different Businesses. Different Challenges. The Right Support Makes a Difference." />
        <div className="mt-14"><IndustryGrid filter /></div>
        <div className="mt-12 text-center"><ButtonLink href="/industries/" arrow>Explore All Industries</ButtonLink></div>
      </Section>
      <HowItWorks tone="white" />
      <International />
      <Testimonials />
      <BusinessValue tone="off" />
      <TaskChecklist />
      <Section tone="white">
        <SectionHeading eyebrow="Flexible support" title="Support That Fits the Way Your Business Works." description="No rigid packages. Choose the arrangement that matches your workload today, and change it as your business grows." />
        <div className="mt-16"><PricingCards /></div>
        <p className="mt-8 text-center text-ink-muted">Every quote is tailored to your hours, tasks and working-hour needs. <a href="/pricing/" className="font-semibold text-teal underline">How pricing works</a></p>
      </Section>
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
