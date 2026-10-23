import Link from "next/link";
import { serviceCategories, categoryServiceLinks } from "@/content/catalog";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ServiceCategories({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section tone="white" id="services">
      {withHeading && (
        <SectionHeading
          eyebrow="Our services"
          title="The Support You Need. Without Doing It All Yourself."
          description="From everyday administration to customer service, business operations and creative support, Bravura VA helps you keep important work moving."
        />
      )}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {serviceCategories.map((c, i) => {
          const featured = c.id === "customer";
          return (
            <Reveal key={c.id} delay={i * 80} className={cn("relative overflow-hidden rounded-[2rem] p-8 sm:p-10", featured ? "bg-orange text-teal" : "bg-white shadow-card ring-1 ring-teal/5")}>
              {featured && <span className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Most requested</span>}
              <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", featured ? "bg-white text-teal" : "bg-aqua text-teal")}><Icon name={c.icon} className="h-7 w-7" /></span>
              <h3 className={cn("mt-6 text-2xl font-extrabold", featured && "text-teal")}>{c.name}</h3>
              <p className={cn("mt-2", featured ? "text-teal/80" : "text-ink-muted")}>{c.tagline}</p>
              <ul className="mt-6 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                {categoryServiceLinks[c.id].map((l) => (
                  <li key={l.label}>
                    <Link href={`/services/${l.slug}/`} className={cn("group flex items-center gap-2 text-[15px] font-medium transition", featured ? "text-teal hover:underline" : "text-ink hover:text-teal")}>
                      <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", featured ? "bg-white" : "bg-aqua-pale")}><Icon name="check" className="h-3 w-3 text-teal" /></span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <ButtonLink href="/services/" arrow>View All Services</ButtonLink>
      </div>
    </Section>
  );
}
