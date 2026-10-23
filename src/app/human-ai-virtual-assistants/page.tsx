import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { HumanAI } from "@/components/sections/HumanAI";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Human + AI Virtual Assistants | Human-Led, AI-Assisted Support | Bravura VA",
  description: "Bravura VA combines capable human virtual assistants with responsible, approved AI tools. Learn what to automate, what to delegate to a person, and how we use AI safely.",
  path: "/human-ai-virtual-assistants/",
});

const split = {
  ai: ["Drafting first versions of routine emails and posts", "Summarizing long threads, documents and meeting transcripts", "Reformatting, translating and tidying data", "Suggesting spreadsheet formulas and simple automations", "Answering simple, well-documented FAQs via chatbots"],
  human: ["Deciding what's urgent and what can wait", "Handling upset customers and sensitive conversations", "Spotting errors and things that 'don't look right'", "Managing exceptions that don't fit the rules", "Following up until the issue is actually resolved", "Representing your brand with care and judgment"],
};

const principles = [
  { t: "Approval first", d: "AI tools are used on your account only where you've approved them, and only for agreed tasks.", i: "checkCircle" as const },
  { t: "Human review, always", d: "A person checks AI-assisted output before it reaches a customer, colleague or system of record.", i: "eye" as const },
  { t: "Protect confidential data", d: "We don't put confidential, personal or customer data into AI tools you haven't cleared for that purpose.", i: "lock" as const },
  { t: "Transparency", d: "We'll tell you how tools are used in your workflows, and you can ask us to stop at any time.", i: "message" as const },
  { t: "Accuracy over speed", d: "AI can produce confident errors. We verify facts, figures and sources before relying on them.", i: "search" as const },
  { t: "Accountability stays with people", d: "Your assistant, not a tool, is responsible for the work and its outcome.", i: "handshake" as const },
];

const faqs = [
  { q: "Will AI replace virtual assistants?", a: "AI is already changing how assistants work by speeding up drafting, summarizing and research. But businesses still need people to apply judgment, manage relationships, handle exceptions and take responsibility. We think the future is assistants who use AI well, not AI working alone." },
  { q: "Do I need to use AI tools to work with Bravura VA?", a: "No. Some clients prefer no AI use at all, and we respect that. Others approve specific tools for specific tasks." },
  { q: "Which AI tools do your assistants use?", a: "It depends on your preferences and the tools you already pay for (for example, AI features built into Google Workspace, Microsoft 365, your helpdesk or your CRM). We agree this with you." },
  { q: "Is it safe to use AI with customer data?", a: "It depends on the tool, your contract with its provider and the laws that apply to you. We won't use customer or confidential data with AI tools unless you've approved that use." },
  { q: "Can your assistants help us set up automations?", a: "Yes, for straightforward automations in tools like Zapier or Make, and they'll often spot tasks that could be automated. More complex technical builds may need a developer." },
];

export default function HumanAIPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Human + AI Support", href: "/human-ai-virtual-assistants/" }]}
        eyebrow="Human + AI virtual assistants"
        title="AI Can Draft the Email. We Make Sure the Customer Gets Help."
        description="AI tools are genuinely useful. They can draft, summarize and sort faster than any person. But business still runs on judgment, relationships and follow-through. Bravura VA combines capable human assistants with efficient, approved digital tools, so you get speed and care."
        image="womanHeadsetDesk"
      />
      <HumanAI cta={false} />
      <Section tone="white">
        <SectionHeading eyebrow="Automate or delegate?" title="What AI Does Well, and Where People Matter" description="A practical, balanced view. The best results usually come from combining both." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-offwhite p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal shadow-card"><Icon name="bot" className="h-7 w-7" /></span>
            <h3 className="mt-5 text-2xl font-extrabold">Good candidates for AI assistance</h3>
            <ul className="mt-5 space-y-3">{split.ai.map((x) => <li key={x} className="flex gap-3"><Icon name="zap" className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />{x}</li>)}</ul>
          </div>
          <div className="rounded-[2rem] bg-orange p-8 text-teal">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal"><Icon name="heartHandshake" className="h-7 w-7" /></span>
            <h3 className="mt-5 text-2xl font-extrabold text-teal">Where a human makes the difference</h3>
            <ul className="mt-5 space-y-3">{split.human.map((x) => <li key={x} className="flex gap-3 font-medium"><Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0" />{x}</li>)}</ul>
          </div>
        </div>
      </Section>
      <Section tone="pale">
        <SectionHeading eyebrow="Responsible AI use" title="Our Principles for Using AI on Your Account" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.t} className="rounded-3xl bg-white p-7 shadow-card">
              <Icon name={p.i} className="h-7 w-7 text-teal" />
              <h3 className="mt-4 text-lg font-extrabold">{p.t}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">An example</p>
            <h2 className="h-section mt-4">One Customer Email, Two Approaches</h2>
            <p className="lead mt-5">A customer emails: their order arrived damaged, it was a birthday gift, and the party is on Saturday.</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-offwhite p-6"><p className="font-heading font-bold">AI alone</p><p className="mt-2 text-ink-muted">Generates a polite apology and a link to the returns form. Technically correct, but the customer still has no gift for Saturday.</p></div>
            <div className="rounded-3xl bg-aqua-pale p-6"><p className="font-heading font-bold">Human-led, AI-assisted</p><p className="mt-2 text-ink-muted">Your assistant uses a drafted reply as a starting point, checks stock, arranges an express replacement within your policy, personalizes the message and follows up to confirm it arrived in time.</p></div>
          </div>
        </div>
      </Section>
      <FAQSection faqs={faqs} title="Human + AI FAQs" tone="off" />
      <Section tone="white" className="!py-12">
        <p className="text-center text-ink-muted">Want to go deeper? Read <Link href="/blog/will-ai-replace-virtual-assistants/" className="font-semibold text-teal underline">Will AI Replace Virtual Assistants?</Link> and <Link href="/blog/tasks-to-automate-vs-tasks-to-delegate-to-a-human/" className="font-semibold text-teal underline">Tasks to Automate vs Tasks to Delegate</Link>.</p>
      </Section>
      <CTABand />
    </>
  );
}
