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
        title="You're Running a Business. But the Busywork Is Running Your Day."
        description="Your inbox never stops. Customers need answers. Meetings need scheduling. Leads need following up. And somehow, you're expected to find time to grow the business too."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="group rounded-3xl bg-offwhite p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lift">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal shadow-card transition group-hover:bg-orange"><Icon name={p.icon} className="h-6 w-6" /></span>
            <h3 className="mt-6 text-xl font-extrabold">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-4xl bg-teal px-8 py-8 text-center sm:flex-row sm:text-left">
        <p className="font-heading text-2xl font-extrabold text-white">You Don&apos;t Have to Do Everything Yourself.</p>
        <ButtonLink href="/contact/#enquiry" variant="orange" arrow>Find Your Virtual Assistant</ButtonLink>
      </div>
    </Section>
  );
}
