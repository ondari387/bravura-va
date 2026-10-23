import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CTABand } from "@/components/sections/CTABand";
import { publishedTestimonials } from "@/content/testimonials";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Testimonials | Verified Client Experiences | Bravura VA",
  description: "Verified client experiences with Bravura VA. We only publish genuine testimonials with client permission, never invented reviews or ratings.",
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Testimonials", href: "/testimonials/" }]}
        eyebrow="Testimonials"
        title="Real Feedback From Real Clients. Nothing Else."
        description={publishedTestimonials.length ? "Here's what clients say about working with Bravura VA, shared with their permission." : "We're a new company, and we've chosen not to fill this page with placeholder praise. Verified testimonials will appear here as our clients share their experiences."}
        compact
      />
      <Testimonials tone="off" />
      <Section tone="white">
        <SectionHeading eyebrow="Our standard" title="How We Handle Reviews" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            { t: "Genuine clients only", d: "Every testimonial comes from a real client who has worked with us.", i: "userCheck" as const },
            { t: "Published with permission", d: "We only publish names, photos and quotes with written consent.", i: "checkCircle" as const },
            { t: "No invented ratings", d: "We don't fabricate star ratings or review counts on this site or in search markup.", i: "shield" as const },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl bg-offwhite p-7 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-teal"><Icon name={x.i} className="h-6 w-6" /></span>
              <h3 className="mt-5 text-lg font-extrabold">{x.t}</h3>
              <p className="mt-2 text-ink-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Be One of Our First Success Stories." description="Early clients get our full attention as we build Bravura VA. Let's talk about what you'd like to delegate." />
    </>
  );
}
