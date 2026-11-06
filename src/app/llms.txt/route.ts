import { site } from "@/lib/site";
import { services, industries } from "@/content/catalog";
import { marketPages } from "@/content/locations";
import { getPostMetas } from "@/lib/blog";

// A plain-text summary of the site for AI assistants and answer engines (llmstxt.org format).
export const dynamic = "force-static";

export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} Formerly known as Bravura VA.`,
    "",
    "Key facts:",
    `- What it is: a managed virtual assistant company. Each client works with real, Nairobi-based assistants, not a freelancer marketplace and not an AI chatbot.`,
    `- Based in: ${site.location} (East Africa Time, UTC+3, no daylight saving). Support is remote; there are no offices in the USA, UK, Australia or Canada.`,
    "- Serves: startups, entrepreneurs and small to mid-sized businesses in the United States, United Kingdom, Australia and Canada.",
    "- Working hours: agreed with each client to overlap with their business day, or completed overnight. Round-the-clock cover is not offered by default.",
    "- Pricing: hourly support or Essential, Growth and Dedicated monthly packages, quoted in writing in USD, GBP, AUD or CAD after a free consultation.",
    "- AI use: assistants may use AI tools only where the client approves, and a person checks every output.",
    `- Contact: ${site.email}, ${site.phone} (call or WhatsApp). Book a free consultation: ${site.calendlyUrl}`,
    "",
    "## Main pages",
    `- [Home](${u("/")}): overview of Tendaji VA's human-led virtual assistant services`,
    `- [Services](${u("/services/")}): all ${services.length} virtual assistant services`,
    `- [Pricing](${u("/pricing/")}): hourly and monthly options and what affects a quote`,
    `- [How it works](${u("/how-it-works/")}): consultation, scoping, matching and onboarding`,
    `- [Why Tendaji VA](${u("/why-tendaji-va/")}): how the service differs from freelancers and in-house hiring`,
    `- [FAQ](${u("/faq/")}): answers about time zones, confidentiality, pricing and AI use`,
    `- [Contact](${u("/contact/")})`,
    "",
    "## Virtual assistants by country",
    ...marketPages.map((m) => `- [${m.h1}](${u(m.path)}): ${m.metaDescription}`),
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}): ${s.summary}`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.name}](${u(`/industries/${i.slug}/`)}): ${i.solution}`),
    "",
    "## Guides",
    ...getPostMetas().map((p) => `- [${p.title}](${u(`/blog/${p.slug}/`)}): ${p.description}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
