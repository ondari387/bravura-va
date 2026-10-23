import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WorldMap } from "@/components/sections/International";
import { CTABand } from "@/components/sections/CTABand";
import { ContactSection } from "@/components/sections/ContactSection";
import { BookCallButton } from "@/components/layout/Booking";
import { img } from "@/content/images";
import { publishedTeam } from "@/content/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Bravura VA | Human-Led Virtual Assistants From Nairobi, Kenya",
  description: "Bravura VA is a Nairobi-based virtual assistant company helping startups, entrepreneurs and growing businesses in the USA, UK and Australia delegate work to dependable, human-led remote support.",
  path: "/about/",
});

const values: { t: string; d: string; i: IconName }[] = [
  { t: "Reliability", d: "We do what we say, when we say. Dependability is the whole point of support.", i: "checkCircle" },
  { t: "Clear communication", d: "No guessing. Agreed channels, honest updates and questions asked early.", i: "message" },
  { t: "Ownership", d: "We take responsibility for outcomes, not just tasks, and follow things through.", i: "handshake" },
  { t: "Discretion", d: "We treat every client's information as confidential, because it is.", i: "lock" },
  { t: "Continuous improvement", d: "We document, learn and refine so support gets better every month.", i: "trendingUp" },
  { t: "Honesty", d: "If something isn't a good fit, or a tool would serve you better, we'll tell you.", i: "heart" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About Us", href: "/about/" }]}
        eyebrow="About Bravura VA"
        title="Behind Every Growing Business Is Support That Makes a Difference."
        description="Bravura VA is a virtual assistant and remote business support company headquartered in Nairobi, Kenya. We help startups, entrepreneurs, executives and growing businesses across the USA, UK and Australia hand over the work that slows them down, to real people who care about getting it right."
        image="teamTableLaptops"
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h-section mt-4">A Remote Support Partner, Not Just Another Outsourcing Provider</h2>
            <div className="lead mt-6 space-y-4">
              <p>We provide professional, human-led virtual assistance across administration, customer service, sales support, operations, and creative and technical work. Our assistants work inside our clients&apos; tools as an extension of their teams.</p>
              <p>We&apos;re a new company, and we&apos;re building it deliberately: clear scopes, careful matching, strong communication and honest expectations. We&apos;d rather earn your trust one well-handled task at a time than promise the world.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="h-section mt-4">Because Talented Founders Shouldn&apos;t Drown in Admin</h2>
            <div className="lead mt-6 space-y-4">
              <p>Too many business owners spend their best hours on work that someone else could do well. Meanwhile, Nairobi is full of capable, educated professionals ready to do exactly that work for international businesses.</p>
              <p>Bravura VA exists to connect the two: giving business owners more time and focus, and creating meaningful remote careers in Kenya.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="teal">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/[0.06] p-8 ring-1 ring-white/10 sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-teal"><Icon name="target" className="h-7 w-7" /></span>
            <h2 className="mt-6 font-heading text-3xl font-extrabold text-white">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">To help business owners delegate time-consuming administrative, customer service, operational, creative and technical tasks, so they can concentrate on revenue-generating activities, strategic decisions, customer relationships and growth.</p>
          </div>
          <div className="rounded-[2rem] bg-orange p-8 text-teal sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal text-orange"><Icon name="eye" className="h-7 w-7" /></span>
            <h2 className="mt-6 font-heading text-3xl font-extrabold text-teal">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-teal/85">To be the remote support partner international businesses trust most: known for dependable people, clear communication and showing the world what Nairobi&apos;s professionals can do.</p>
          </div>
        </div>
      </Section>

      <Section tone="off">
        <SectionHeading eyebrow="Our values" title="What You Can Expect From Us" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl bg-white p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-pale text-teal"><Icon name={v.i} className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-extrabold">{v.t}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why Nairobi</p>
            <h2 className="h-section mt-4">Why Nairobi Is a Smart Base for Remote Business Support</h2>
            <div className="lead mt-6 space-y-4">
              <p>Nairobi is Kenya&apos;s capital and one of East Africa&apos;s most established centres for business, technology and international organizations. It has a young, well-educated workforce and a growing community of professionals working remotely for clients around the world.</p>
              <p>English is one of Kenya&apos;s official languages and is widely used in education, government and business, so communication with US, UK and Australian teams is natural. Kenya also observes a single time zone, East Africa Time (UTC+3), with no daylight saving changes, which makes scheduling predictable.</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-offwhite p-6 sm:p-8"><WorldMap /></div>
        </div>
      </Section>

      <Section tone="pale">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2.5rem] shadow-lift">
            <Image src={`${img.twoWomenTalking.src}?auto=format&fit=crop&w=900&h=720&q=70`} alt={img.twoWomenTalking.alt} fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Why human-led support matters</p>
            <h2 className="h-section mt-4">Technology Helps. People Make It Work.</h2>
            <div className="lead mt-6 space-y-4">
              <p>AI and automation are changing how work gets done, and we use suitable tools where they genuinely help. But businesses still need someone who understands context, communicates with care, notices when something is off and takes responsibility for finishing the job.</p>
              <p>That&apos;s what our assistants bring: judgment, accountability and a real relationship with your business.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="How international collaboration works" title="Working Together Across Time Zones" description="Remote support works when the basics are agreed upfront. Here's how we set every engagement up for success." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Agreed working hours", d: "We set hours around the overlap you need: live during your business day, overnight for next-morning delivery, or a mix.", i: "clock" as IconName },
            { t: "Your channels", d: "Slack, Teams, email, WhatsApp or your project tool. We fit into how your team already communicates.", i: "message" as IconName },
            { t: "Visible progress", d: "Shared task boards, daily or weekly summaries and regular check-ins, so you're never wondering.", i: "eye" as IconName },
            { t: "Secure access", d: "Individual logins, password managers and least-privilege access, reviewed as your needs change.", i: "shield" as IconName },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl bg-offwhite p-7">
              <Icon name={x.i} className="h-7 w-7 text-teal" />
              <h3 className="mt-4 text-lg font-extrabold">{x.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="off">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="h-section mt-4">Start Small. Document Everything. Improve Continuously.</h2>
            <p className="lead mt-6">We&apos;ve designed our approach around what makes delegation succeed, and what makes it fail.</p>
          </div>
          <ol className="space-y-4">
            {[
              ["Understand before we act", "Every engagement starts with listening: your goals, your week, your tools and what good looks like to you."],
              ["Match carefully", "We match you with an assistant whose skills and communication style suit your work."],
              ["Start with clear wins", "We begin with well-defined tasks and expand as trust and understanding grow."],
              ["Document as we go", "Your processes are captured in checklists you own, so quality stays consistent."],
              ["Review regularly", "Regular check-ins keep priorities aligned and support improving."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5 rounded-3xl bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-aqua font-heading font-extrabold text-teal">{i + 1}</span>
                <div><h3 className="text-lg font-extrabold">{t}</h3><p className="mt-1 text-ink-muted">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Our people" title="The People Behind the Support" description="Our assistants are Nairobi-based professionals selected for their communication skills, organization, reliability and genuine interest in helping businesses succeed." />
        {publishedTeam.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedTeam.map((m) => (
              <div key={m.name} className="rounded-3xl bg-offwhite p-7 text-center">
                {m.photo ? <Image src={m.photo} alt={m.name} width={120} height={120} className="mx-auto h-28 w-28 rounded-full object-cover" /> : <span className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-aqua font-heading text-3xl font-extrabold text-teal">{m.name.charAt(0)}</span>}
                <h3 className="mt-5 text-xl font-extrabold">{m.name}</h3>
                <p className="text-sm font-semibold text-teal">{m.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{m.bio}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-aqua-pale p-8 text-center">
            <p className="text-ink-muted">Team profiles are coming soon. In the meantime, the best way to meet us is a free discovery call, you&apos;ll speak with a real person from our Nairobi team.</p>
            <BookCallButton className="mt-6" source="about_people">Meet Us on a Free Call</BookCallButton>
          </div>
        )}
      </Section>

      <HowItWorks tone="pale" />
      <CTABand title="Let's Build Your Support Team Together." description="Tell us what's taking up your time and we'll show you what dependable remote support could look like for your business." />
      <ContactSection />
    </>
  );
}
