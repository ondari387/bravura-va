import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import { faqGroups } from "@/content/faqs";
import { trustPoints } from "@/content/shared";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How It Works | Hiring a Virtual Assistant With Bravura VA",
  description: "How Bravura VA works: a free discovery call, a tailored support plan, careful matching, structured onboarding and ongoing check-ins. Simple, transparent steps to start delegating.",
  path: "/how-it-works/",
});

const detail: { t: string; d: string; points: string[]; i: IconName }[] = [
  { t: "Free discovery call", i: "phoneCall", d: "A short, relaxed conversation about your business, the tasks eating your time and what success would look like.", points: ["Walk through a typical week", "Identify tasks that are ready to delegate", "Discuss tools, time zones and communication", "Ask us anything, no obligation"] },
  { t: "Your support plan & proposal", i: "clipboard", d: "We summarise what we heard and recommend an arrangement that fits: part-time, dedicated or specialist.", points: ["Clear scope of tasks", "Recommended hours and working-hour overlap", "Transparent quote", "Confidentiality and access approach"] },
  { t: "Matching", i: "userCheck", d: "We match you with an assistant whose skills, tool experience and communication style suit your work.", points: ["Relevant skills and experience", "Familiarity with your key tools", "Availability that fits your hours", "An introduction call before you start, where possible"] },
  { t: "Onboarding", i: "key", d: "A structured start that sets your assistant up to succeed, without eating your whole week.", points: ["Secure, role-based access to your tools", "Process walkthroughs and checklists", "Communication channels and response expectations", "First tasks with close feedback"] },
  { t: "Delegate & track progress", i: "listChecks", d: "Your assistant takes on agreed tasks and keeps you informed in the way you prefer.", points: ["Shared task board or request channel", "Daily or weekly summaries", "Escalation rules for anything that needs you", "Documentation you own"] },
  { t: "Review & grow", i: "trendingUp", d: "Regular check-ins keep support aligned with your priorities and make room to delegate more.", points: ["Regular performance check-ins", "Adjust hours or scope as you grow", "Add specialist support when needed", "Honest feedback in both directions"] },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "How It Works", href: "/how-it-works/" }]}
        eyebrow="How it works"
        title="Getting Help Shouldn't Add More Work to Your Day."
        description="Delegating should feel like relief, not another project. Our process is simple, transparent and designed to get you real value quickly, with you in control at every step."
        image="womanOfficeLaptop2"
      />
      <HowItWorks tone="white" />
      <Section tone="off">
        <SectionHeading eyebrow="Step by step" title="What Happens From First Call to Ongoing Support" />
        <ol className="mt-14 space-y-6">
          {detail.map((s, i) => (
            <li key={s.t} className="grid gap-6 rounded-[2rem] bg-white p-7 shadow-card sm:p-9 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
              <span className={i % 2 ? "grid h-16 w-16 place-items-center rounded-2xl bg-orange text-teal" : "grid h-16 w-16 place-items-center rounded-2xl bg-aqua text-teal"}><Icon name={s.i} className="h-7 w-7" /></span>
              <div>
                <p className="font-heading text-sm font-bold text-teal">Step {i + 1}</p>
                <h2 className="mt-1 font-heading text-2xl font-extrabold">{s.t}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.d}</p>
              </div>
              <ul className="space-y-2.5 rounded-2xl bg-offwhite p-5">
                {s.points.map((p) => <li key={p} className="flex gap-2.5 text-[15px]"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="white">
        <SectionHeading eyebrow="Built on trust" title="Transparent From Day One" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((t) => (
            <div key={t.title} className="rounded-3xl bg-offwhite p-7">
              <Icon name={t.icon} className="h-7 w-7 text-teal" />
              <h3 className="mt-4 text-lg font-extrabold">{t.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <FAQSection faqs={[...faqGroups[5].faqs, ...faqGroups[2].faqs.slice(0, 2)]} tone="pale" />
      <CTABand />
    </>
  );
}
