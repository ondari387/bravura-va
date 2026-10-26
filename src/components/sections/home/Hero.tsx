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
          <p className="eyebrow">The home of human-led virtual assistants</p>
          <h1 className="mt-5 font-heading text-[2.15rem] font-extrabold leading-[1.15] sm:text-[2.75rem] sm:leading-[1.13] lg:text-[3.15rem] lg:leading-[1.12]">
            <span className="relative text-teal">Reliable Virtual Assistants<svg aria-hidden="true" viewBox="0 0 300 16" className="absolute -bottom-1.5 left-0 h-2.5 w-full" preserveAspectRatio="none"><path d="M3 12C70 4 160 2 297 8" stroke="#FF981F" strokeWidth="6" strokeLinecap="round" fill="none" /></svg></span> for Businesses in the USA, UK, Australia &amp; Canada
          </h1>
          <p className="lead mt-7 max-w-xl">
            Spend less time on admin and more time growing your business. Bravura VA provides skilled, affordable, human-led virtual assistants from Nairobi, Kenya, helping businesses manage daily operations, customer support, scheduling and more.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BookCallButton source="home_hero">Book a Free Consultation</BookCallButton>
            <ButtonLink href="/pricing/#quote" variant="secondary">Request a Quote</ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink" aria-label="What to expect">
            {["Human-led support", "Flexible working arrangements", "Agreed time-zone overlap"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Icon name="checkCircle" className="h-4 w-4 text-teal" />{t}</li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-muted"><Icon name="mapPin" className="h-4 w-4 text-orange" />Based in Nairobi, Kenya. Supporting businesses remotely.</p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px] lg:h-[580px]">
          {/* geometric composition */}
          <div aria-hidden="true" className="absolute right-0 top-4 h-[78%] w-[86%] rounded-[3rem] bg-aqua" />
          <div aria-hidden="true" className="absolute -right-6 top-[-1rem] h-40 w-40 rounded-full bg-orange sm:h-52 sm:w-52" />
          <div aria-hidden="true" className="absolute bottom-6 left-0 h-24 w-24 rounded-full border-[14px] border-orange" />
          <div aria-hidden="true" className="bg-dots absolute bottom-0 right-4 h-28 w-40" />
          <div className="absolute bottom-0 left-[8%] right-[4%] top-[6%] overflow-hidden rounded-t-[999px] rounded-b-[3rem] shadow-lift">
            <Image
              src={img.heroVA.src}
              alt="Smiling remote assistant with headphones at work (illustrative stock photo)"
              fill priority sizes="(min-width:1024px) 520px, 80vw" className="object-cover object-[50%_20%]"
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
