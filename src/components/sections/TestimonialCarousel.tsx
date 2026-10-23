"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/testimonials";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);
  const t = items[i];
  return (
    <div className="mx-auto max-w-4xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Client testimonials">
      <figure className="relative rounded-[2.5rem] bg-white p-8 shadow-lift ring-1 ring-teal/5 sm:p-12" aria-live="polite">
        <span className="absolute -top-6 left-10 grid h-12 w-12 place-items-center rounded-2xl bg-orange text-teal"><Icon name="quote" className="h-6 w-6" /></span>
        {t.rating && (
          <div className="mb-4 flex gap-1" aria-label={`Rated ${t.rating} out of 5 by the client`}>
            {Array.from({ length: 5 }).map((_, k) => <Icon key={k} name="star" className={cn("h-5 w-5", k < t.rating! ? "fill-orange text-orange" : "text-teal/20")} />)}
          </div>
        )}
        <blockquote className="font-heading text-xl font-semibold leading-relaxed text-ink sm:text-2xl">"{t.quote}"</blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          {t.photo ? (
            <Image src={t.photo} alt={t.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-4 ring-aqua-pale" />
          ) : (
            <span className="grid h-16 w-16 place-items-center rounded-full bg-aqua font-heading text-xl font-extrabold text-teal">{t.name.charAt(0)}</span>
          )}
          <div>
            <p className="font-heading font-extrabold text-ink">{t.name}</p>
            <p className="text-sm text-ink-muted">{t.position}, {t.company} | {t.country}</p>
            {t.verified && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-teal"><Icon name="checkCircle" className="h-3.5 w-3.5" />Verified client</p>}
          </div>
        </figcaption>
        {t.videoUrl && <a href={t.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal underline"><Icon name="play" className="h-4 w-4" />Watch video testimonial</a>}
      </figure>
      {n > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full bg-white text-teal shadow-card hover:bg-aqua"><Icon name="chevronLeft" className="h-5 w-5" /></button>
          <div className="flex gap-2">
            {items.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} className={cn("h-2.5 rounded-full transition-all", k === i ? "w-8 bg-orange" : "w-2.5 bg-teal/20")} />)}
          </div>
          <button onClick={() => setI((i + 1) % n)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full bg-white text-teal shadow-card hover:bg-aqua"><Icon name="chevronRight" className="h-5 w-5" /></button>
        </div>
      )}
    </div>
  );
}
