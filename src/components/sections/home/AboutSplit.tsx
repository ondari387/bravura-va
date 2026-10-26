import Image from "next/image";
import { img } from "@/content/images";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

export function AboutSplit() {
  return (
    <Section tone="off">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-lg">
          <div aria-hidden="true" className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-orange" />
          <div aria-hidden="true" className="absolute -bottom-6 -right-6 h-40 w-40 rounded-[2rem] bg-aqua" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift">
            <Image src={img.womanOfficeLaptop.src} alt={img.womanOfficeLaptop.alt} fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lift">
            <p className="font-heading text-sm font-extrabold text-ink">Nairobi, Kenya</p>
            <p className="text-xs text-ink-muted">East Africa Time | UTC+3</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Welcome to Bravura VA</p>
          <h2 className="h-section mt-4">We Handle the Work That Keeps You From Doing Yours.</h2>
          <div className="lead mt-6 space-y-4">
            <p>Bravura VA provides professional remote business support to entrepreneurs, startups, executives and growing companies around the world.</p>
            <p>From Nairobi, Kenya, we help international businesses delegate essential administrative, customer service, operational and creative tasks.</p>
            <p>Our goal is simple: give business owners more time, more focus and more capacity to grow.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: "More Time for What Matters", d: "Delegate repetitive tasks and focus on customers, leadership and business development.", i: "clock" as const },
              { t: "Flexible Business Support", d: "Get assistance that reflects your workload, priorities and stage of growth.", i: "shuffle" as const },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua-pale text-teal"><Icon name={f.i} className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-extrabold">{f.t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{f.d}</p>
              </div>
            ))}
          </div>
          <ButtonLink href="/about/" className="mt-8" arrow>Discover Bravura VA</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
