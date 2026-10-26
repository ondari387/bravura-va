import { problems } from "@/content/shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function Problems() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Sound familiar?"
        title="Your Time Is Too Valuable for Endless Admin."
        description="Most business owners don't need more hours in the day. They need fewer low-value tasks competing for them."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 70} className="group rounded-3xl bg-offwhite p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lift">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal shadow-card transition group-hover:bg-orange"><Icon name={p.icon} className="h-5 w-5" /></span>
            <h3 className="mt-5 text-lg font-extrabold">{p.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-4xl bg-teal px-8 py-8 text-center sm:flex-row sm:text-left">
        <p className="font-heading text-2xl font-extrabold text-white">You don&apos;t have to do everything yourself.</p>
        <ButtonLink href="#delegate" variant="orange" arrow>See What You Can Delegate</ButtonLink>
      </div>
    </Section>
  );
}
