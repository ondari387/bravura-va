import { cn } from "@/lib/cn";

/** Scroll reveal done in CSS (scroll-driven animation), so it ships no JavaScript. */
export function Reveal({ children, className, as: As = "div" }: { children: React.ReactNode; className?: string; delay?: number; as?: "div" | "li" | "article" }) {
  return <As className={cn("reveal", className)}>{children}</As>;
}
