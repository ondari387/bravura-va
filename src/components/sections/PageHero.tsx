import Image from "next/image";
import { img, type ImageKey } from "@/content/images";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { BookCallButton } from "@/components/layout/Booking";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow, title, description, crumbs, image, primaryLabel = "Book a Free Discovery Call", secondary, children, compact,
}: {
  eyebrow?: string; title: React.ReactNode; description?: React.ReactNode; crumbs: Crumb[]; image?: ImageKey;
  primaryLabel?: string | null; secondary?: { href: string; label: string }; children?: React.ReactNode; compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-aqua-pale">
      <div aria-hidden="true" className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-orange/90 sm:h-[26rem] sm:w-[26rem]" style={{ opacity: image ? 0 : 1 }} />
      <div aria-hidden="true" className="bg-dots absolute bottom-0 left-0 h-40 w-72 opacity-60" />
      <div className={cn("container-x relative grid items-center gap-12 py-12 sm:py-16", image ? "lg:grid-cols-[1.1fr_0.9fr] lg:py-20" : compact ? "lg:py-16" : "lg:py-24")}>
        <div className={cn(!image && "max-w-3xl")}>
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="h-display mt-4">{title}</h1>
          {description && <div className="lead mt-6 max-w-2xl">{description}</div>}
          {(primaryLabel || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryLabel && <BookCallButton source="page_hero">{primaryLabel}</BookCallButton>}
              {secondary && <ButtonLink href={secondary.href} variant="secondary">{secondary.label}</ButtonLink>}
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden="true" className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-orange sm:h-56 sm:w-56" />
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-24 w-24 rounded-3xl bg-aqua" />
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] shadow-lift">
              <Image src={`${img[image].src}?auto=format&fit=crop&w=1000&q=75`} alt={img[image].alt} fill sizes="(min-width:1024px) 42vw, 90vw" className="object-cover" priority />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
