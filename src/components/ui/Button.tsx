import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "orange" | "dark" | "ghost" | "outlineLight";
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading text-[15px] font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/50 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap";
const variants: Record<Variant, string> = {
  primary: "bg-aqua text-teal hover:bg-teal hover:text-white shadow-[0_10px_24px_-10px_rgba(89,196,208,0.9)]",
  secondary: "bg-white text-teal ring-1 ring-teal/10 hover:ring-aqua hover:text-teal hover:shadow-card",
  orange: "bg-orange text-teal hover:bg-teal hover:text-white",
  dark: "bg-teal text-white hover:bg-aqua hover:text-teal",
  ghost: "text-teal underline-offset-4 hover:underline px-0 py-1",
  outlineLight: "ring-1 ring-white/40 text-white hover:bg-white hover:text-teal",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  href, children, variant = "primary", className, arrow, external,
}: { href: string; children: React.ReactNode; variant?: Variant; className?: string; arrow?: boolean; external?: boolean }) {
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cn("group", buttonClass(variant, className))} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cn("group", buttonClass(variant, className))}>
      {content}
    </Link>
  );
}
