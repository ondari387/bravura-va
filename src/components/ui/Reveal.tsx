"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function Reveal({ children, className, delay = 0, as: As = "div" }: { children: React.ReactNode; className?: string; delay?: number; as?: "div" | "li" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("is-visible"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <As ref={ref as any} className={cn("reveal", className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </As>
  );
}
