import Link from "next/link";
import { primaryServices, serviceBySlug } from "@/content/catalog";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

export function Delegate() {
  return (
    <Section tone="off" id="delegate">
      <SectionHeading
        eyebrow="What can you delegate?"
        title="Ten Ways to Get Work Off Your Plate"
        description="Each service is delivered by a real assistant working inside your tools, scoped to your workload and reviewed as your business changes."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {primaryServices.map((p, i) => {
          const s = serviceBySlug(p.slug)!;
          return (
            <Link key={p.slug} href={`/services/${p.slug}/`} className={i === 2 ? "group flex flex-col rounded-3xl bg-orange p-6 text-teal transition hover:-translate-y-1 hover:shadow-lift" : "group flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift"}>
              <span className={i === 2 ? "grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal" : "grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"}><Icon name={s.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-extrabold leading-snug">{p.label}</h3>
              <p className={i === 2 ? "mt-1.5 flex-1 text-[15px] leading-relaxed text-teal/85" : "mt-1.5 flex-1 text-[15px] leading-relaxed text-ink-muted"}>{p.text}</p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-teal">Learn more <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink href="/services/" variant="secondary" arrow>View All 19 Services</ButtonLink>
        <ButtonLink href="/pricing/#quote" variant="primary">Request a Quote</ButtonLink>
      </div>
    </Section>
  );
}
