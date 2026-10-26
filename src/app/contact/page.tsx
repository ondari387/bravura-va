import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Bravura VA | Talk to Us About Virtual Assistant Support",
  description: "Contact Bravura VA in Nairobi, Kenya. Call or WhatsApp +254 714 089 042, email va@bravura.co.ke, or send an enquiry about virtual assistant support.",
  path: "/contact/",
});

export default function ContactPage() {
  const cards = [
    { t: "Call or WhatsApp", v: site.phone, h: site.phoneHref, i: "phone" as const, sub: "Kenya (East Africa Time, UTC+3)" },
    { t: "Email", v: site.email, h: site.emailHref, i: "mail" as const, sub: "We reply by email to every enquiry" },
    { t: "WhatsApp chat", v: "Message us now", h: site.whatsapp, i: "chat" as const, sub: "Quick questions welcome" },
    { t: "Headquarters", v: "Nairobi, Kenya", h: "", i: "mapPin" as const, sub: "Supporting the USA, UK, Australia & Canada remotely" },
  ];
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", href: "/contact/" }]} eyebrow="Contact us" title="Let's Get Some Work Off Your Plate." description="Tell us what's taking up your time. Whether you're ready to start or just exploring, we'll help you find a practical support solution." primaryLabel={null} secondary={{ href: "#enquiry", label: "Send an Enquiry" }} compact />
      <Section tone="white" className="!py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"><Icon name={c.i} className="h-5 w-5" /></span>
                <p className="mt-4 text-sm font-semibold text-ink-muted">{c.t}</p>
                <p className="mt-1 break-words font-heading text-lg font-extrabold">{c.v}</p>
                <p className="mt-1 text-sm text-ink-muted">{c.sub}</p>
              </>
            );
            return c.h ? (
              <a key={c.t} href={c.h} {...(c.h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="rounded-3xl bg-offwhite p-6 transition hover:bg-aqua-pale">{inner}</a>
            ) : (
              <div key={c.t} className="rounded-3xl bg-offwhite p-6">{inner}</div>
            );
          })}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
