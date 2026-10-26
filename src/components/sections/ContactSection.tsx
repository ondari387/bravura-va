import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { BookCallButton } from "@/components/layout/Booking";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import type { EnquiryPayload } from "@/lib/forms";

export function ContactSection({
  formType = "contact", defaultService, id = "enquiry", title = "Tell Us What You Need Help With.",
  submitLabel,
}: { formType?: EnquiryPayload["formType"]; defaultService?: string; id?: string; title?: string; submitLabel?: string }) {
  return (
    <section id={id} className="bg-aqua-pale py-16 sm:py-20 lg:py-24">
      <div className="container-x grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-orange p-8 text-teal sm:p-10">
          <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/25" />
          <div aria-hidden="true" className="absolute right-10 top-10 h-14 w-14 rounded-full border-[10px] border-teal/15" />
          <div className="relative">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-teal">Ready to get started?</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-teal sm:text-4xl">Let&apos;s Get Some Work Off Your Plate.</h2>
            <p className="mt-4 text-lg leading-relaxed text-teal/85">Tell us what is taking up your time. We&apos;ll help you explore a practical support solution.</p>
            <BookCallButton variant="dark" className="mt-8" source="contact_card">Book a Free Consultation</BookCallButton>
            <ul className="mt-10 space-y-4">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-4 font-semibold hover:underline">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-teal"><Icon name="phone" className="h-5 w-5" /></span>
                  <span><span className="block text-sm font-semibold text-teal">Phone / WhatsApp</span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-4 font-semibold hover:underline">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-teal"><Icon name="mail" className="h-5 w-5" /></span>
                  <span><span className="block text-sm font-semibold text-teal">Email</span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-4 font-semibold">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-teal"><Icon name="mapPin" className="h-5 w-5" /></span>
                <span><span className="block text-sm font-semibold text-teal">Headquarters</span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-[2.25rem] bg-white/60 p-6 ring-1 ring-aqua/40 sm:p-10">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{title}</h2>
          <p className="mb-6 mt-2 text-ink-muted">Share a few details and we&apos;ll reply by email to arrange next steps.</p>
          <EnquiryForm formType={formType} defaultService={defaultService} submitLabel={submitLabel} />
        </div>
      </div>
    </section>
  );
}
