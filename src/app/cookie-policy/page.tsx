import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy | Bravura VA",
  description: "Bravura VA Cookie Policy: how we handle information and the terms that apply when you use our website and services.",
  path: "/cookie-policy/",
});

export default function Page() {
  return <LegalPage file="cookies.md" title="Cookie Policy" href="/cookie-policy/" updated="October 21, 2026" />;
}
