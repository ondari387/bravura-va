import { BookCallButton } from "@/components/layout/Booking";
import { ButtonLink } from "@/components/ui/Button";

export function CTABand({
  title = "Ready to Get Hours Back in Your Week?",
  description = "Tell us what is taking up your time. We'll help you explore a practical virtual assistant arrangement for your business.",
  secondary = { href: "/pricing/#quote", label: "Request a Quote" }, ctaLabel = "Book Your Free Consultation",
}: { title?: string; description?: string; secondary?: { href: string; label: string } | null; ctaLabel?: string }) {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-white sm:py-24">
      <div aria-hidden="true" className="absolute -left-16 top-10 h-56 w-56 rounded-full border-[28px] border-aqua/20" />
      <div aria-hidden="true" className="absolute -bottom-20 right-[-4rem] h-72 w-72 rounded-full bg-orange" />
      <div aria-hidden="true" className="absolute bottom-16 right-48 hidden h-16 w-16 rotate-12 rounded-2xl bg-aqua lg:block" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="eyebrow text-white">Ready when you are</p>
          <h2 className="h-section mt-4 text-white">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookCallButton source="cta_band">{ctaLabel}</BookCallButton>
            {secondary && <ButtonLink href={secondary.href} variant="outlineLight">{secondary.label}</ButtonLink>}
          </div>
        </div>
      </div>
    </section>
  );
}
