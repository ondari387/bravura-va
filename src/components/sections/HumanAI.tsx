import { humanAiCards } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HumanAI({ cta = true }: { cta?: boolean }) {
  return (
    <Section tone="teal" className="overflow-hidden">
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[36px] border-orange/70" />
      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-white">Human support in an AI-powered world</p>
          <h2 className="h-section mt-4 text-white">AI Can Draft the Email. We Make Sure the Customer Gets Help.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/75">
            <p>AI can summarize meetings, generate content and automate repetitive tasks. But businesses still need people who understand context, communicate with customers, manage exceptions and follow through.</p>
            <p>Bravura VA combines capable human assistance with efficient digital workflows to help businesses get work done with care and accountability.</p>
          </div>
          {cta && <ButtonLink href="/human-ai-virtual-assistants/" variant="primary" className="mt-8" arrow>Explore Human-Led Virtual Assistance</ButtonLink>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {humanAiCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className={i === 3 ? "rounded-3xl bg-aqua p-7 text-teal" : "rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10"}>
              <span className={i === 3 ? "grid h-12 w-12 place-items-center rounded-2xl bg-teal text-aqua" : "grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal"}><Icon name={c.icon} className="h-6 w-6" /></span>
              <h3 className={i === 3 ? "mt-5 text-xl font-extrabold text-teal" : "mt-5 text-xl font-extrabold text-white"}>{c.title}</h3>
              <p className={i === 3 ? "mt-2 leading-relaxed text-teal/80" : "mt-2 leading-relaxed text-white/70"}>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
