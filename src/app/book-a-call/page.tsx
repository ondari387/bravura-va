import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CalendlyEmbed } from "@/components/layout/Booking";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Consultation | Bravura VA",
  description: "Book a free, no-obligation consultation with Bravura VA. Talk through your workload, what you'd like to delegate and whether a virtual assistant fits.",
  path: "/book-a-call/",
});

export default function BookPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Book a Call", href: "/book-a-call/" }]} eyebrow="Free consultation" title="Let's Talk About What You Can Delegate." description="A short, friendly conversation with no hard sell and no obligation. You'll leave with a clearer view of what to hand over first, whether or not you work with us." primaryLabel={null} compact />
      <Section tone="off">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-5">
            <div className="rounded-3xl bg-white p-7 shadow-card">
              <h2 className="font-heading text-xl font-extrabold">What we&apos;ll cover</h2>
              <ul className="mt-4 space-y-3">
                {["Your business and current workload", "The tasks taking up most of your time", "Tools, time zones and communication preferences", "Suitable support arrangements and next steps"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua text-teal"><Icon name="check" className="h-3 w-3" /></span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-teal p-7 text-white">
              <h2 className="font-heading text-xl font-extrabold text-white">Before the call</h2>
              <p className="mt-3 text-white/75">It helps to jot down the tasks you&apos;d most like off your plate and the tools you use. That&apos;s it. No preparation required.</p>
            </div>
            <div className="rounded-3xl bg-orange p-7 text-teal">
              <h2 className="font-heading text-xl font-extrabold text-teal">Time zone note</h2>
              <p className="mt-3 text-teal/85">We&apos;re in Nairobi (UTC+3). Booking times are shown in your local time zone.</p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-4 shadow-card sm:p-6">
            <CalendlyEmbed height={760} />
          </div>
        </div>
      </Section>
    </>
  );
}
