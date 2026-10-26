import { whyBenefits } from "@/content/shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function WhyChoose({ cta = true, tone = "white" }: { cta?: boolean; tone?: "white" | "off" | "pale" }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Why Bravura VA?" title="Great Support Should Make Business Easier. Not More Complicated." description="We are not a staffing directory or a freelancer marketplace. We are a managed, human-led support partner." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyBenefits.map((b, i) => (
          <Reveal key={b.title} delay={(i % 4) * 70} className="group relative rounded-3xl bg-white p-7 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua-pale text-teal transition group-hover:bg-aqua"><Icon name={b.icon} className="h-6 w-6" /></span>
            <h3 className="mt-5 text-lg font-extrabold">{b.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{b.text}</p>
          </Reveal>
        ))}
      </div>
      {cta && <div className="mt-12 text-center"><ButtonLink href="/why-bravura-va/" variant="secondary" arrow>Why Businesses Choose Bravura VA</ButtonLink></div>}
    </Section>
  );
}
