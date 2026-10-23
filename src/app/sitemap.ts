import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/content/catalog";
import { industryContent } from "@/content/industries";
import { countries, subPages } from "@/content/locations";
import { getPostMetas } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const core = [
    ["/", 1], ["/services/", 0.9], ["/industries/", 0.8], ["/how-it-works/", 0.8], ["/why-bravura-va/", 0.7],
    ["/pricing/", 0.8], ["/case-studies/", 0.6], ["/testimonials/", 0.5], ["/human-ai-virtual-assistants/", 0.7],
    ["/blog/", 0.7], ["/faq/", 0.6], ["/contact/", 0.8], ["/book-a-call/", 0.8], ["/about/", 0.7], ["/virtual-assistants/", 0.7],
    ["/privacy-policy/", 0.2], ["/terms-of-service/", 0.2], ["/cookie-policy/", 0.2], ["/data-protection/", 0.3],
  ] as const;
  return [
    ...core.map(([p, priority]) => ({ url: absoluteUrl(p), lastModified: now, priority })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}/`), lastModified: now, priority: 0.8 })),
    ...industryContent.map((i) => ({ url: absoluteUrl(`/industries/${i.slug}/`), lastModified: now, priority: 0.7 })),
    ...countries.map((c) => ({ url: absoluteUrl(`/virtual-assistants/${c.slug}/`), lastModified: now, priority: 0.8 })),
    ...subPages.map((p) => ({ url: absoluteUrl(`/virtual-assistants/${p.parent}/${p.slug}/`), lastModified: now, priority: 0.6 })),
    ...getPostMetas().map((p) => ({ url: absoluteUrl(`/blog/${p.slug}/`), lastModified: p.updated || p.date, priority: 0.6 })),
  ];
}
