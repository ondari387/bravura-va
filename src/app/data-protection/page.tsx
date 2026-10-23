import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Data Protection | Bravura VA",
  description: "Bravura VA Data Protection: how we handle information and the terms that apply when you use our website and services.",
  path: "/data-protection/",
});

export default function Page() {
  return <LegalPage file="data-protection.md" title="Data Protection" href="/data-protection/" updated="October 21, 2026" />;
}
