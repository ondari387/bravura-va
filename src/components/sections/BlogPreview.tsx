import Link from "next/link";
import Image from "next/image";
import { img } from "@/content/images";
import { formatDate, type PostMeta } from "@/lib/blog-shared";
import { Icon } from "@/components/ui/Icon";

export function PostCard({ p }: { p: PostMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-teal/5 transition hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/blog/${p.slug}/`} className="relative block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image src={img[p.image].src} alt="" fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-teal">{p.category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-3 text-sm text-ink-muted"><time dateTime={p.date}>{formatDate(p.date)}</time><span aria-hidden="true">|</span>{p.readingTime} min read</p>
        <h3 className="mt-3 text-xl font-extrabold leading-snug"><Link href={`/blog/${p.slug}/`} className="hover:text-teal">{p.title}</Link></h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-muted">{p.description}</p>
        <Link href={`/blog/${p.slug}/`} className="mt-auto flex items-center gap-1.5 pt-5 font-heading text-sm font-bold text-teal">Read More<span className="sr-only">: {p.title}</span> <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
      </div>
    </article>
  );
}
