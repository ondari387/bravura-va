import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

export function pageMeta({ title, description, path, image, type = "website", noindex }: {
  title: string; description: string; path: string; image?: string; type?: "website" | "article"; noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image || site.ogImage;
  return {
    title,
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
  areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "United Kingdom" }, { "@type": "Country", name: "Australia" }],
  contactPoint: [{ "@type": "ContactPoint", telephone: site.phone, email: site.email, contactType: "sales", availableLanguage: ["English"] }],
  sameAs: Object.values(site.social).filter(Boolean),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  potentialAction: { "@type": "SearchAction", target: `${site.url}/blog/?q={search_term_string}`, "query-input": "required name=search_term_string" },
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
    areaServed: ["United States", "United Kingdom", "Australia"],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
