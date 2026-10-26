import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { markets } from "@/content/catalog";

const marketText: Record<string, string> = {
  usa: "Virtual assistant services for American startups, small businesses, executives and growing teams.",
  uk: "Remote administrative and business support for UK SMEs, founders and professional firms.",
  australia: "Flexible virtual assistant support for Australian businesses, with follow-the-sun delivery.",
  canada: "Remote administrative, e-commerce and real estate support for Canadian businesses.",
};

const points = {
  nairobi: [602, 299], usa: [250, 170], canada: [222, 92], uk: [500, 112], aus: [905, 405],
};
const arc = (a: number[], b: number[], lift: number) => {
  const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - lift;
  return `M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`;
};

export function WorldMap() {
  return (
    <div className="relative">
      <svg viewBox="0 0 1000 500" className="h-auto w-full" role="img" aria-label="Map showing Nairobi, Kenya connected to the United States, United Kingdom, Australia and Canada">
        <image href="/images/world-dots.svg" x="0" y="0" width="1000" height="500" opacity="0.55" />
        {[["usa", 120], ["canada", 150], ["uk", 70], ["aus", 90]].map(([k, l]) => (
          <path key={k as string} d={arc(points.nairobi, points[k as keyof typeof points], l as number)} fill="none" stroke="#FF981F" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" />
        ))}
        {(["usa", "canada", "uk", "aus"] as const).map((k) => (
          <g key={k}>
            <circle cx={points[k][0]} cy={points[k][1]} r="16" fill="#59C4D0" opacity="0.3" />
            <circle cx={points[k][0]} cy={points[k][1]} r="8" fill="#0D292D" stroke="#fff" strokeWidth="3" />
          </g>
        ))}
        <circle cx={points.nairobi[0]} cy={points.nairobi[1]} r="26" fill="#FF981F" opacity="0.25" />
        <circle cx={points.nairobi[0]} cy={points.nairobi[1]} r="12" fill="#FF981F" stroke="#fff" strokeWidth="4" />
        {[["United States", points.usa, -70, 36], ["Canada", points.canada, -40, -22], ["United Kingdom", points.uk, -58, -24], ["Australia", points.aus, -40, 36], ["Nairobi HQ", points.nairobi, 22, 34]].map(([label, p, dx, dy]) => (
          <text key={label as string} x={(p as number[])[0] + (dx as number)} y={(p as number[])[1] + (dy as number)} fontSize="20" fontWeight="800" fill="#0D292D" fontFamily="Plus Jakarta Sans Variable, sans-serif">{label as string}</text>
        ))}
      </svg>
    </div>
  );
}


export function International() {
  return (
    <Section tone="off">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Based in Nairobi. Supporting global business.</p>
          <h2 className="h-section mt-4">Your Next Great Business Assistant Could Be in Nairobi.</h2>
          <div className="lead mt-6 space-y-4">
            <p>Business support no longer needs to be limited by geography.</p>
            <p>Bravura VA connects businesses in the United States, United Kingdom, Australia and Canada with Nairobi-based remote support professionals, working to an agreed overlap with your business day.</p>
          </div>
          <ButtonLink href="/virtual-assistants/" className="mt-8" arrow>Explore International Support</ButtonLink>
        </div>
        <div className="rounded-[2.5rem] bg-white p-4 shadow-card sm:p-8"><WorldMap /></div>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {markets.map((c, i) => (
          <Link key={c.name} href={c.href} className="group rounded-3xl bg-white p-7 shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
            <span className={i % 2 === 0 ? "grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal" : "grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-teal"}><Icon name="flag" className="h-5 w-5" /></span>
            <h3 className="mt-5 text-xl font-extrabold">{c.name}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{marketText[c.slug]}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-teal"><Icon name="clock" className="h-4 w-4" />{c.tz}</p>
            <span className="mt-4 flex items-center gap-1.5 font-heading text-sm font-bold text-teal">Learn more <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
