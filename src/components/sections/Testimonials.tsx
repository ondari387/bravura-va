import { publishedTestimonials } from "@/content/testimonials";
import { trustPoints } from "@/content/shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Shows verified testimonials when available. Until then, shows a credible,
 * process-focused trust section: never placeholder reviews.
 */
export function Testimonials({ tone = "white" }: { tone?: "white" | "off" | "pale" }) {
  if (publishedTestimonials.length > 0) {
    return (
      <Section tone={tone}>
        <SectionHeading eyebrow="Client experiences" title="The Right Support Makes a Real Difference." />
        <div className="mt-12"><TestimonialCarousel items={publishedTestimonials} /></div>
      </Section>
    );
  }
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Client experiences"
        title="The Right Support Makes a Real Difference."
        description="We're a new company, so rather than show you borrowed or invented reviews, here's exactly what you can expect when you work with us. Verified client stories will appear here as our first clients share them."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((t) => (
          <div key={t.title} className="relative rounded-3xl bg-white p-8 shadow-card ring-1 ring-teal/5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-pale text-teal"><Icon name={t.icon} className="h-6 w-6" /></span>
            <h3 className="mt-5 text-lg font-extrabold">{t.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="text-ink-muted">Want to see how support could look for your business?</p>
        <ButtonLink href="/case-studies/" variant="secondary" arrow>See Illustrative Use Cases</ButtonLink>
      </div>
    </Section>
  );
}
