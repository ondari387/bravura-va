import { cn } from "@/lib/cn";

const tones = {
  white: "bg-white",
  pale: "bg-aqua-pale",
  off: "bg-offwhite",
  teal: "bg-teal text-white",
} as const;

export function Section({
  children, tone = "white", className, id, containerClass, ...rest
}: { children: React.ReactNode; tone?: keyof typeof tones; className?: string; id?: string; containerClass?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("relative overflow-x-clip py-16 sm:py-20 lg:py-24", tones[tone], className)} {...rest}>
      <div className={cn("container-x relative", containerClass)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, description, align = "center", light, className, as: As = "h2",
}: {
  eyebrow?: string; title: React.ReactNode; description?: React.ReactNode; align?: "center" | "left";
  light?: boolean; className?: string; as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow && <p className={cn("eyebrow", light && "text-white")}>{eyebrow}</p>}
      <As className={cn("h-section mt-4", light && "text-white")}>{title}</As>
      {description && (
        <div className={cn("lead mt-5", light && "text-white/75", align === "center" && "mx-auto")}>{description}</div>
      )}
    </div>
  );
}
