import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service | Bravura VA",
  description: "Bravura VA Terms of Service: how we handle information and the terms that apply when you use our website and services.",
  path: "/terms-of-service/",
});

export default function Page() {
  return <LegalPage file="terms.md" title="Terms of Service" href="/terms-of-service/" updated="October 21, 2026" />;
}
