import { whyBenefits } from "@/content/shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function WhyChoose({ cta = true, tone = "white" }: { cta?: boolean; tone?: "white" | "off" | "pale" }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Why Bravura VA?" title="Great Support Should Make Business Easier. Not More Complicated." />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyBenefits.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 80} className="group relative rounded-3xl bg-white p-8 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
            <span className="absolute right-7 top-7 font-heading text-4xl font-extrabold text-aqua-pale transition group-hover:text-orange/30">0{i + 1}</span>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua-pale text-teal transition group-hover:bg-aqua"><Icon name={b.icon} className="h-6 w-6" /></span>
            <h3 className="mt-6 text-xl font-extrabold">{b.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{b.text}</p>
          </Reveal>
        ))}
      </div>
      {cta && <div className="mt-12 text-center"><ButtonLink href="/why-bravura-va/" variant="secondary" arrow>Why Businesses Choose Bravura VA</ButtonLink></div>}
    </Section>
  );
}
