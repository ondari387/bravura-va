import type { Metadata } from "next";
import { getLocation } from "@/content/locations";
import { LocationTemplate } from "@/components/sections/LocationTemplate";
import { pageMeta } from "@/lib/seo";

const page = getLocation("canada");

export const metadata: Metadata = pageMeta({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function Page() {
  return <LocationTemplate page={page} path={page.path} crumbs={[{ name: "International", href: "/virtual-assistants/" }, { name: page.name, href: page.path }]} />;
}
