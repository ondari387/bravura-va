import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BusinessValue } from "@/components/sections/BusinessValue";
import { HumanAI } from "@/components/sections/HumanAI";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Why Bravura VA | Human-Led Virtual Assistants You Can Rely On",
  description: "Why businesses in the USA, UK, Australia and Canada choose Bravura VA: professional Nairobi-based talent, clear communication, flexible arrangements, human-led support and honest, transparent service.",
  path: "/why-bravura-va/",
});

const promises = [
  { t: "We'll be honest about fit", d: "If a task is better automated, better done in-house or outside what we do well, we'll say so, even if it means less work for us." },
  { t: "We won't overpromise", d: "No invented statistics, guaranteed results or 24/7 claims. We agree realistic expectations and meet them." },
  { t: "We'll keep you informed", d: "You'll always know what's done, what's in progress and what needs your input." },
  { t: "We'll protect your information", d: "Confidentiality in writing, least-privilege access and careful handling of your data." },
];

const notList = [
  "A faceless offshore call center",
  "A marketplace where you vet strangers yourself",
  "A one-size-fits-all package",
  "A replacement for your judgment on key decisions",
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Why Bravura VA", href: "/why-bravura-va/" }]}
        eyebrow="Why Bravura VA"
        title="Great Support Should Make Business Easier. Not More Complicated."
        description="Plenty of companies offer virtual assistants. We focus on the things that actually make delegation work: the right person, clear communication, honest expectations and support that grows with you."
        image="womanGlasses"
      />
      <WhyChoose cta={false} />
      <Section tone="teal">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-white">Our promises</p>
            <h2 className="h-section mt-4 text-white">What We Commit To, In Writing</h2>
            <div className="mt-8 space-y-4">
              {promises.map((p) => (
                <div key={p.t} className="flex gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-aqua text-teal"><Icon name="check" className="h-5 w-5" /></span>
                  <div><h3 className="text-lg font-extrabold text-white">{p.t}</h3><p className="mt-1 text-white/70">{p.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-orange p-8 text-teal sm:p-10 lg:self-start">
            <h2 className="font-heading text-3xl font-extrabold text-teal">What Bravura VA Is Not</h2>
            <ul className="mt-6 space-y-3">
              {notList.map((n) => <li key={n} className="flex gap-3 text-lg font-semibold"><Icon name="x" className="mt-1 h-5 w-5 shrink-0" />{n}</li>)}
            </ul>
            <p className="mt-6 text-teal/85">We&apos;re a managed remote support partner: real people in Nairobi, matched to your business and supported by a team that cares how the work turns out.</p>
          </div>
        </div>
      </Section>
      <BusinessValue />
      <HumanAI />
      <Testimonials tone="off" />
      <Section tone="white">
        <SectionHeading eyebrow="Transparency" title="Where We're Based, and Where We're Not" description="Bravura VA is headquartered in Nairobi, Kenya. We support businesses in the United States, United Kingdom, Australia and Canada remotely and do not have offices in those countries. We'd rather you know exactly who you're working with from day one." />
      </Section>
      <CTABand />
    </>
  );
}
