import Image from "next/image";
import { img } from "@/content/images";
import { BookCallButton } from "@/components/layout/Booking";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-aqua-pale">
      <div aria-hidden="true" className="bg-dots absolute left-0 top-0 h-48 w-80 opacity-70" />
      <div className="container-x relative grid items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-16">
        <div className="relative z-10">
          <p className="eyebrow animate-fade-up">Virtual assistant services for growing businesses</p>
          <h1 className="h-display mt-5 animate-fade-up [animation-delay:80ms]">
            Your Business Needs You. <span className="relative whitespace-nowrap text-teal">Not Another<svg aria-hidden="true" viewBox="0 0 300 16" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none"><path d="M3 12C70 4 160 2 297 8" stroke="#FF981F" strokeWidth="6" strokeLinecap="round" fill="none" /></svg></span> To&#8209;Do List.
          </h1>
          <p className="lead mt-7 max-w-xl animate-fade-up [animation-delay:160ms]">
            Drowning in emails, enquiries and daily admin? Bravura VA gives startups and growing businesses in the USA, UK and Australia dependable virtual assistants based in Nairobi, Kenya.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <BookCallButton source="home_hero" />
            <ButtonLink href="/services/" variant="secondary">Explore Our Services</ButtonLink>
          </div>
          <p className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-ink-muted [animation-delay:320ms]">
            <span className="flex items-center gap-1.5"><Icon name="mapPin" className="h-4 w-4 text-orange" />Based in Nairobi, Kenya</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-ink-muted/50 sm:block" />
            <span className="flex items-center gap-1.5"><Icon name="globe" className="h-4 w-4 text-teal" />Supporting Businesses Across the USA, UK &amp; Australia</span>
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px] lg:h-[580px]">
          {/* geometric composition */}
          <div aria-hidden="true" className="absolute right-0 top-4 h-[78%] w-[86%] rounded-[3rem] bg-aqua" />
          <div aria-hidden="true" className="absolute -right-6 top-[-1rem] h-40 w-40 rounded-full bg-orange sm:h-52 sm:w-52" />
          <div aria-hidden="true" className="absolute bottom-6 left-0 h-24 w-24 rounded-full border-[14px] border-orange" />
          <div aria-hidden="true" className="bg-dots absolute bottom-0 right-4 h-28 w-40" />
          <div className="absolute bottom-0 left-[8%] right-[4%] top-[6%] overflow-hidden rounded-t-[999px] rounded-b-[3rem] shadow-lift">
            <Image
              src={`${img.heroVA.src}?auto=format&fit=crop&w=1100&h=1300&q=80`}
              alt="Smiling remote assistant with headphones at work (illustrative stock photo)"
              fill priority sizes="(min-width:1024px) 520px, 90vw" className="object-cover object-[50%_20%]"
            />
          </div>
          <div className="absolute -left-2 bottom-16 z-10 w-[230px] animate-float rounded-3xl bg-white p-5 shadow-lift sm:-left-8 sm:w-[260px]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange text-teal"><Icon name="checkCircle" className="h-6 w-6" /></span>
              <p className="font-heading text-[17px] font-extrabold leading-tight text-ink">Less Admin. More Growth.</p>
            </div>
            <p className="mt-2 text-sm text-ink-muted">Real people helping you get more done.</p>
          </div>
          <div className="absolute right-2 top-[42%] z-10 hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-card sm:flex">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-aqua" /></span>
            <span className="text-sm font-semibold text-ink">Inbox handled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
