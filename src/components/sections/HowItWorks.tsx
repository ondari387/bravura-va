import { steps } from "@/content/shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { BookCallButton } from "@/components/layout/Booking";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks({ tone = "pale", cta = true }: { tone?: "pale" | "white" | "off"; cta?: boolean }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="How it works" title="Getting Help Shouldn't Add More Work to Your Day." />
      <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-teal/20 lg:block" />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 120} className="relative rounded-[2rem] bg-white p-7 text-center shadow-card">
            <span className={i % 2 === 1 ? "mx-auto grid h-20 w-20 place-items-center rounded-full bg-orange font-heading text-2xl font-extrabold text-teal ring-8 ring-white" : "mx-auto grid h-20 w-20 place-items-center rounded-full bg-aqua font-heading text-2xl font-extrabold text-teal ring-8 ring-white"}>{s.n}</span>
            <Icon name={s.icon} className="mx-auto mt-6 h-6 w-6 text-teal" />
            <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
      {cta && <div className="mt-12 text-center"><BookCallButton source="how_it_works">Book Your Free Consultation</BookCallButton></div>}
    </Section>
  );
}
