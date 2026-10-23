import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/site";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, light }: { items: Crumb[]; light?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", light ? "text-white/70" : "text-ink-muted")}>
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <Icon name="chevronRight" className="h-3.5 w-3.5 opacity-60" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className={cn("font-semibold", light ? "text-white" : "text-ink")}>{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:text-teal hover:underline">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
        }}
      />
    </>
  );
}
