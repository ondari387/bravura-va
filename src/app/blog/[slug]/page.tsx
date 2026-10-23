import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, getRelated, formatDate } from "@/lib/blog";
import { img } from "@/content/images";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PostCard } from "@/components/sections/BlogPreview";
import { BookCallButton } from "@/components/layout/Booking";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const m = pageMeta({ title: p.title, description: p.description, path: `/blog/${slug}/`, type: "article", image: `${img[p.image].src}?auto=format&fit=crop&w=1200&h=630&q=75` });
  return { ...m, keywords: p.keywords, openGraph: { ...m.openGraph, type: "article", publishedTime: p.date, modifiedTime: p.updated || p.date } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = getRelated(p, 3);
  const url = absoluteUrl(`/blog/${slug}/`);
  return (
    <>
      <section className="bg-aqua-pale">
        <div className="container-x pb-12 pt-10 sm:pt-14">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs items={[{ name: "Blog", href: "/blog/" }, { name: p.title, href: `/blog/${slug}/` }]} />
            <Link href={`/blog/?category=${encodeURIComponent(p.category)}`} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-teal">{p.category}</Link>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{p.title}</h1>
            <p className="lead mt-5">{p.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
              <span className="font-semibold text-ink">Bravura VA Team</span>
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              <span>{p.readingTime} min read</span>
            </p>
          </div>
        </div>
        <div className="container-x">
          <div className="relative mx-auto aspect-[16/7] max-w-5xl translate-y-10 overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={`${img[p.image].src}?auto=format&fit=crop&w=1400&h=620&q=75`} alt={img[p.image].alt} fill priority sizes="(min-width:1024px) 1000px, 95vw" className="object-cover" />
          </div>
        </div>
      </section>

      <Section tone="white" className="!pt-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            {p.headings.length > 2 && (
              <nav aria-label="Table of contents" className="sticky top-28">
                <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-ink">In this article</p>
                <ol className="mt-3 space-y-2 border-l-2 border-aqua-pale">
                  {p.headings.map((h) => <li key={h.id}><a href={`#${h.id}`} className="-ml-0.5 block border-l-2 border-transparent pl-3 text-sm leading-snug text-ink-muted hover:border-orange hover:text-teal">{h.text}</a></li>)}
                </ol>
              </nav>
            )}
          </aside>
          <article className="min-w-0 max-w-3xl">
            <div className="prose-brand" dangerouslySetInnerHTML={{ __html: p.html }} />
            <div className="mt-14 overflow-hidden rounded-[2rem] bg-teal p-8 text-white sm:p-10">
              <p className="eyebrow text-white">Ready to delegate?</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">{p.cta || "Get dependable, human-led support for the work that slows you down."}</h2>
              <p className="mt-3 text-white/75">Book a free discovery call with Bravura VA. We&apos;ll talk through your workload and show you what you could hand over first.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BookCallButton source={`blog_${slug}`} />
                <ButtonLink href="/services/" variant="outlineLight">Explore Services</ButtonLink>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-teal/10 pt-6 text-sm">
              <span className="font-semibold">Share:</span>
              <a className="flex items-center gap-1.5 rounded-full bg-offwhite px-3 py-1.5 hover:bg-aqua-pale" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}><Icon name="linkedin" className="h-4 w-4" />LinkedIn</a>
              <a className="flex items-center gap-1.5 rounded-full bg-offwhite px-3 py-1.5 hover:bg-aqua-pale" target="_blank" rel="noopener noreferrer" href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`}><Icon name="twitter" className="h-4 w-4" />X</a>
              <a className="flex items-center gap-1.5 rounded-full bg-offwhite px-3 py-1.5 hover:bg-aqua-pale" href={`mailto:?subject=${encodeURIComponent(p.title)}&body=${encodeURIComponent(url)}`}><Icon name="mail" className="h-4 w-4" />Email</a>
            </div>
          </article>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="off">
          <SectionHeading eyebrow="Keep reading" title="Related Articles" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">{related.map((r) => <PostCard key={r.slug} p={r} />)}</div>
        </Section>
      )}

      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: p.title, description: p.description, image: [`${img[p.image].src}?auto=format&fit=crop&w=1200&h=630&q=75`],
        datePublished: p.date, dateModified: p.updated || p.date, mainEntityOfPage: url, url,
        author: { "@type": "Organization", name: site.name, url: `${site.url}/` },
        publisher: { "@id": `${site.url}/#organization` },
        keywords: p.keywords.join(", "), articleSection: p.category, wordCount: p.html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
      }} />
    </>
  );
}
