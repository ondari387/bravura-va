import type { IconName } from "@/components/ui/Icon";
import type { FAQ } from "@/components/ui/FAQAccordion";

export type IndustryContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  context: string[];
  challenges: { title: string; text: string }[];
  services: string[];
  tasks: string[];
  workflow: { title: string; steps: string[] };
  software: string[];
  benefits: { title: string; text: string; icon: IconName }[];
  regulatedNote?: string;
  faqs: FAQ[];
};
