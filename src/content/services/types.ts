import type { IconName } from "@/components/ui/Icon";
import type { FAQ } from "@/components/ui/FAQAccordion";

export type ServiceContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; headline: string; intro: string };
  overview: string[];
  taskGroups: { title: string; items: string[] }[];
  audience: { title: string; text: string }[];
  benefits: { title: string; text: string; icon: IconName }[];
  workflows: { title: string; steps: string[] }[];
  software: string[];
  support: string[];
  humanAi: string;
  why: string[];
  faqs: FAQ[];
  related: string[];
};
