"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services, serviceCategories, industries } from "@/content/catalog";
import { Icon, type IconName } from "@/components/ui/Icon";
import { BookCallButton } from "./Booking";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type Menu = "services" | "industries" | "company" | null;

const companyLinks: { href: string; label: string; desc: string; icon: IconName }[] = [
  { href: "/about/", label: "About Us", desc: "Who we are and why we exist", icon: "users" },
  { href: "/why-bravura-va/", label: "Why Bravura VA", desc: "What makes our support different", icon: "star" },
  { href: "/human-ai-virtual-assistants/", label: "Human + AI Support", desc: "Human judgment, smarter workflows", icon: "brain" },
  { href: "/case-studies/", label: "Case Studies", desc: "Illustrative use cases", icon: "chart" },
  { href: "/testimonials/", label: "Testimonials", desc: "Verified client experiences", icon: "quote" },
  { href: "/faq/", label: "FAQ", desc: "Answers before you delegate", icon: "info" },
];
const marketLinks = [
  { href: "/virtual-assistant-usa/", label: "United States" },
  { href: "/virtual-assistant-uk/", label: "United Kingdom" },
  { href: "/virtual-assistant-australia/", label: "Australia" },
  { href: "/virtual-assistant-canada/", label: "Canada" },
  { href: "/virtual-assistant-kenya/", label: "Why Kenya" },
];

export function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMenu(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(null); setMobile(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobile]);

  const enter = (m: Menu) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMenu(m); };
  const leave = () => { closeTimer.current = setTimeout(() => setMenu(null), 140); };
  const isActive = (p: string) => pathname?.startsWith(p);

  const trigger = (m: Exclude<Menu, null>, label: string, base: string) => (
    <li onMouseEnter={() => enter(m)} onMouseLeave={leave} className="relative">
      <button
        type="button"
        aria-expanded={menu === m}
        aria-haspopup="true"
        onClick={() => setMenu(menu === m ? null : m)}
        className={cn("flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] xl:px-3.5 font-semibold transition hover:text-teal", isActive(base) || menu === m ? "text-teal" : "text-ink")}
      >
        {label}
        <Icon name="chevronDown" className={cn("h-4 w-4 transition", menu === m && "rotate-180")} />
      </button>
    </li>
  );

  return (
    <header className={cn("sticky top-0 z-50 bg-white transition-shadow", scrolled && "shadow-[0_8px_24px_-16px_rgba(13,41,45,0.35)]")}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:font-bold focus:text-teal">Skip to content</a>
      <div className="hidden bg-teal text-white/85 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <p>Based in Nairobi, Kenya | Supporting businesses across the USA, UK, Australia &amp; Canada</p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-aqua"><Icon name="phone" className="h-3.5 w-3.5" />{site.phone}</a>
            <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-aqua"><Icon name="mail" className="h-3.5 w-3.5" />{site.email}</a>
          </div>
        </div>
      </div>
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Bravura VA home">
          <Image src="/images/brand/bravura-va-logo.png" alt="Bravura VA" width={900} height={136} priority sizes="212px" className="h-7 w-auto sm:h-8" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {trigger("services", "Services", "/services")}
            {trigger("industries", "Industries", "/industries")}
            <li><Link href="/how-it-works/" className={cn("whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] xl:px-3.5 font-semibold hover:text-teal", isActive("/how-it-works") && "text-teal")}>How It Works</Link></li>
            <li><Link href="/pricing/" className={cn("whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] xl:px-3.5 font-semibold hover:text-teal", isActive("/pricing") && "text-teal")}>Pricing</Link></li>
            {trigger("company", "Company", "/about")}
            <li><Link href="/blog/" className={cn("whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] xl:px-3.5 font-semibold hover:text-teal", isActive("/blog") && "text-teal")}>Blog</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact/" className="hidden rounded-full px-4 py-2 text-[15px] font-semibold text-ink hover:text-teal 2xl:block">Contact</Link>
          <BookCallButton className="hidden px-5 py-3 text-sm sm:inline-flex" source="header" arrow={false}><span className="lg:hidden xl:inline">Book a Free Consultation</span><span className="hidden lg:inline xl:hidden">Free Consultation</span></BookCallButton>
          <button className="grid h-11 w-11 place-items-center rounded-full bg-aqua-pale text-teal lg:hidden" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
            <Icon name={mobile ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop mega menus */}
      {menu && (
        <div className="absolute inset-x-0 top-full hidden lg:block" onMouseEnter={() => enter(menu)} onMouseLeave={leave}>
          <div className="container-x">
            <div className="animate-fade-up overflow-hidden rounded-4xl bg-white p-8 shadow-lift ring-1 ring-teal/5" style={{ animationDuration: ".25s" }}>
              {menu === "services" && (
                <div className="grid grid-cols-[repeat(4,1fr)_260px] gap-8">
                  {serviceCategories.map((c) => (
                    <div key={c.id}>
                      <p className="mb-3 flex items-center gap-2 font-heading text-sm font-extrabold text-ink"><span className="grid h-8 w-8 place-items-center rounded-xl bg-aqua-pale text-teal"><Icon name={c.icon} className="h-4 w-4" /></span>{c.short}</p>
                      <ul className="space-y-0.5">
                        {services.filter((s) => s.category === c.id).map((s) => (
                          <li key={s.slug}><Link href={`/services/${s.slug}/`} className="block rounded-lg px-2 py-1.5 text-[14px] text-ink-muted hover:bg-aqua-pale hover:text-teal">{s.name}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-col justify-between rounded-3xl bg-teal p-6 text-white">
                    <div>
                      <p className="font-heading text-lg font-extrabold leading-snug">Not sure what to delegate first?</p>
                      <p className="mt-2 text-sm text-white/75">Tell us what&apos;s eating your week. We&apos;ll suggest where support makes the biggest difference.</p>
                    </div>
                    <div className="mt-5 space-y-2">
                      <BookCallButton variant="orange" className="w-full px-4 py-2.5 text-sm" source="mega_services">Book a Free Consultation</BookCallButton>
                      <Link href="/services/" className="block text-center text-sm font-semibold text-aqua hover:underline">View all services</Link>
                    </div>
                  </div>
                </div>
              )}
              {menu === "industries" && (
                <div>
                  <div className="grid grid-cols-4 gap-1">
                    {industries.map((i) => (
                      <Link key={i.slug} href={`/industries/${i.slug}/`} className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[14px] font-semibold text-ink hover:bg-aqua-pale hover:text-teal">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-offwhite text-teal"><Icon name={i.icon} className="h-4 w-4" /></span>
                        {i.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-aqua-pale px-5 py-4">
                    <p className="text-sm text-ink-muted"><strong className="text-ink">Different businesses. Different challenges.</strong> See how support is shaped around your sector.</p>
                    <Link href="/industries/" className="text-sm font-bold text-teal hover:underline">Explore all industries</Link>
                  </div>
                </div>
              )}
              {menu === "company" && (
                <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
                  <ul className="col-span-2 grid grid-cols-2 gap-1">
                    {companyLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex gap-3 rounded-2xl p-3 hover:bg-aqua-pale">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-offwhite text-teal"><Icon name={l.icon} className="h-5 w-5" /></span>
                          <span><span className="block font-heading text-[15px] font-bold text-ink">{l.label}</span><span className="text-sm text-ink-muted">{l.desc}</span></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-3xl bg-offwhite p-5">
                    <p className="mb-2 font-heading text-sm font-extrabold uppercase tracking-wider text-ink">Where we support</p>
                    <ul>
                      {marketLinks.map((m) => (
                        <li key={m.href}><Link href={m.href} className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[14px] text-ink-muted hover:bg-white hover:text-teal">{m.label}<Icon name="arrowRight" className="h-3.5 w-3.5" /></Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation */}
      {mobile && (
        <div className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x pb-32 pt-4">
            <MobileGroup title="Services">
              {serviceCategories.map((c) => (
                <div key={c.id} className="mb-3">
                  <p className="px-2 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-ink-muted">{c.short}</p>
                  {services.filter((s) => s.category === c.id).map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}/`} className="block rounded-lg px-2 py-2 text-[15px] text-ink">{s.name}</Link>
                  ))}
                </div>
              ))}
              <Link href="/services/" className="block px-2 py-2 font-bold text-teal">All services</Link>
            </MobileGroup>
            <MobileGroup title="Industries">
              {industries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}/`} className="block rounded-lg px-2 py-2 text-[15px] text-ink">{i.name}</Link>
              ))}
              <Link href="/industries/" className="block px-2 py-2 font-bold text-teal">All industries</Link>
            </MobileGroup>
            <MobileGroup title="Company">
              {companyLinks.map((l) => <Link key={l.href} href={l.href} className="block rounded-lg px-2 py-2 text-[15px] text-ink">{l.label}</Link>)}
              {marketLinks.map((l) => <Link key={l.href} href={l.href} className="block rounded-lg px-2 py-2 text-[15px] text-ink">Virtual Assistants, {l.label}</Link>)}
            </MobileGroup>
            {[["/how-it-works/", "How It Works"], ["/pricing/", "Pricing"], ["/blog/", "Blog"], ["/contact/", "Contact"]].map(([h, l]) => (
              <Link key={h} href={h} className="block border-b border-teal/10 py-4 font-heading text-lg font-bold text-ink">{l}</Link>
            ))}
            <div className="mt-6 space-y-3">
              <BookCallButton className="w-full" source="mobile_menu" />
              <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-2 font-semibold text-teal"><Icon name="phone" className="h-4 w-4" />{site.phone}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-teal/10">
      <button className="flex w-full items-center justify-between py-4 font-heading text-lg font-bold text-ink" aria-expanded={open} onClick={() => setOpen(!open)}>
        {title}
        <Icon name="chevronDown" className={cn("h-5 w-5 transition", open && "rotate-180")} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}
