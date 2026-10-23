import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Bravura VA",
  description: "Bravura VA Privacy Policy: how we handle information and the terms that apply when you use our website and services.",
  path: "/privacy-policy/",
});

export default function Page() {
  return <LegalPage file="privacy.md" title="Privacy Policy" href="/privacy-policy/" updated="October 21, 2026" />;
}
