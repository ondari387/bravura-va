import type { FAQ } from "@/components/ui/FAQAccordion";
import type { ImageKey } from "../images";

export type LocationPage = {
  slug: string;
  path: string;
  currency?: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: ImageKey;
  context: { title: string; paragraphs: string[] };
  timezone: { zone: string; difference: string; overlap: string; tips: string[] };
  zones?: { zone: string; places: string; difference: string }[];
  useCases?: { title: string; text: string }[];
  industries: { name: string; slug: string; why: string }[];
  services: string[];
  considerations: { title: string; points: string[] };
  extra?: { title: string; paragraphs: string[] };
  faqs: FAQ[];
};
