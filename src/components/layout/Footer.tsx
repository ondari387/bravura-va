import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CookieSettingsLink } from "./CookieConsent";

const servicesCol = [
  ["Admin & Executive Support", "/services/administrative-support/"],
  ["Customer Support", "/services/customer-support/"],
  ["E-commerce & Shopify", "/services/ecommerce-virtual-assistant/"],
  ["Lead Generation", "/services/lead-generation/"],
  ["Social Media Support", "/services/social-media-management/"],
  ["Real Estate Support", "/services/real-estate-virtual-assistant/"],
  ["WordPress Support", "/services/wordpress-virtual-assistant/"],
  ["Recruitment Support", "/services/recruitment-virtual-assistant/"],
  ["Data Entry & Research", "/services/data-entry-research/"],
  ["Bookkeeping Support", "/services/bookkeeping-virtual-assistant/"],
];
const exploreCol = [
  ["About Us", "/about/"], ["Industries", "/industries/"], ["How It Works", "/how-it-works/"], ["Pricing", "/pricing/"], ["Book a Consultation", "/book-a-call/"],
  ["Case Studies", "/case-studies/"], ["Testimonials", "/testimonials/"], ["Blog", "/blog/"], ["Contact", "/contact/"],
];
const marketsCol = [
  ["United States", "/virtual-assistant-usa/"], ["United Kingdom", "/virtual-assistant-uk/"], ["Australia", "/virtual-assistant-australia/"],
  ["Canada", "/virtual-assistant-canada/"], ["Why Kenya", "/virtual-assistant-kenya/"], ["Africa", "/virtual-assistant-africa/"],
];
const socials: { key: keyof typeof site.social; icon: IconName; label: string }[] = [
  { key: "linkedin", icon: "linkedin", label: "LinkedIn" }, { key: "facebook", icon: "facebook", label: "Facebook" },
  { key: "instagram", icon: "instagram", label: "Instagram" }, { key: "x", icon: "twitter", label: "X" }, { key: "youtube", icon: "youtube", label: "YouTube" },
];

export function Footer() {
  const activeSocials = socials.filter((s) => site.social[s.key]);
  return (
    <footer className="relative overflow-hidden bg-teal text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-aqua/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[40px] border-orange/10" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">Smarter Business Tips, Straight to Your Inbox.</h2>
            <p className="mt-2 text-white/70">Get practical insights on productivity, delegation and growing your business.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr_1fr]">
          <div>
            <Image src="/images/brand/bravura-va-logo-white.png" alt="Bravura VA" width={900} height={136} className="h-8 w-auto" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Bravura VA provides professional remote business support to entrepreneurs, startups and growing companies across the USA, UK, Australia and Canada.
            </p>
            <p className="mt-3 flex items-center gap-2 text-[15px] font-semibold text-white"><Icon name="mapPin" className="h-4 w-4 text-orange" />Based in Nairobi, Kenya.</p>
            {activeSocials.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {activeSocials.map((s) => (
                  <li key={s.key}><a href={site.social[s.key]} target="_blank" rel="noopener noreferrer" aria-label={`Bravura VA on ${s.label}`} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-orange hover:text-teal"><Icon name={s.icon} className="h-4 w-4" /></a></li>
                ))}
              </ul>
            )}
          </div>
          <FooterCol title="Services" links={servicesCol} />
          <FooterCol title="Explore" links={exploreCol} />
          <div>
            <h3 className="font-heading text-base font-bold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-white/70">
              <li className="flex gap-2"><Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />Nairobi, Kenya</li>
              <li><a href={site.phoneHref} className="flex gap-2 hover:text-aqua"><Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />{site.phone}</a></li>
              <li><a href={site.emailHref} className="flex gap-2 break-all hover:text-aqua"><Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />{site.email}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-aqua"><Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />WhatsApp us</a></li>
            </ul>
          </div>
          <FooterCol title="International Markets" links={marketsCol} />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bravura VA. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li><Link href="/privacy-policy/" className="hover:text-aqua">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service/" className="hover:text-aqua">Terms of Service</Link></li>
            <li><Link href="/cookie-policy/" className="hover:text-aqua">Cookie Policy</Link></li>
            <li><Link href="/data-protection/" className="hover:text-aqua">Data Protection</Link></li>
            <li><CookieSettingsLink className="hover:text-aqua" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="font-heading text-base font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[15px] text-white/70">
        {links.map(([l, h]) => <li key={h + l}><Link href={h} className="hover:text-aqua">{l}</Link></li>)}
      </ul>
    </div>
  );
}
