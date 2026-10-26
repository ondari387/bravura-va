import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogIndex } from "@/components/sections/BlogIndex";
import { CTABand } from "@/components/sections/CTABand";
import { getPostMetas, blogCategories } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog | Virtual Assistant Guides, Delegation & Remote Work Insights",
  description: "Practical guides on hiring virtual assistants, outsourcing to Kenya, AI vs human support, what to delegate and managing remote teams across time zones.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Blog", href: "/blog/" }]} eyebrow="Insights & resources" title="Smarter Ways to Run Your Business." description="Practical, honest guides to delegation, virtual assistants, remote teams and the role of AI, written to help you make better decisions." primaryLabel={null} compact />
      <Section tone="off">
        <BlogIndex posts={getPostMetas()} categories={blogCategories} />
      </Section>
      <CTABand />
    </>
  );
}
