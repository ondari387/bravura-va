import type { ImageKey } from "@/content/images";

export type PostMeta = {
  slug: string; title: string; description: string; category: string; date: string; updated?: string;
  image: ImageKey; keywords: string[]; related: string[]; readingTime: number; featured?: boolean; cta?: string;
};

export const blogCategories = [
  "Hiring Guides",
  "Kenya & Africa Outsourcing",
  "Industry Guides",
  "AI & Human Support",
  "International Business",
] as const;

export const formatDate = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
