import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

/** Fit a description to the ~160 characters search engines show, ending on a full sentence where possible. */
export function snippet(text: string, max = 160) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence >= 90) return cut.slice(0, sentence + 1);
  const clause = Math.max(cut.lastIndexOf(", "), cut.lastIndexOf("; "));
  if (clause >= 100) return `${cut.slice(0, clause)}.`;
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "")}.`;
}

export function pageMeta({ title, description, path, image, type = "website", noindex }: {
  title: string; description: string; path: string; image?: string; type?: "website" | "article"; noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  // Keep titles readable in search results: add the brand only when it fits, drop it from long titles.
  if (title.endsWith(" | Bravura VA") && title.length > 65) title = title.slice(0, -" | Bravura VA".length);
  else if (!title.includes("Bravura VA") && title.length <= 52) title = `${title} | Bravura VA`;
  const ogImage = image || site.ogImage;
  description = snippet(description);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type, locale: "en_US", images: [{ url: ogImage, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/images/brand/bravura-va-logo.png`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "United Kingdom" }, { "@type": "Country", name: "Australia" }, { "@type": "Country", name: "Canada" }],
  contactPoint: [{ "@type": "ContactPoint", telephone: site.phone, email: site.email, contactType: "sales", availableLanguage: ["English"] }],
  sameAs: Object.values(site.social).filter(Boolean),
  knowsAbout: ["Virtual assistant services", "Administrative support", "Customer support outsourcing", "E-commerce and Shopify support", "Lead generation", "Bookkeeping support", "Social media support", "WordPress website support", "Recruitment support", "Remote work across time zones"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

export function serviceSchema({ name, description, path, serviceType }: { name: string; description: string; path: string; serviceType?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType || name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["United States", "United Kingdom", "Australia", "Canada"],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
