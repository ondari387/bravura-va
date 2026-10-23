"use client";
import { useEffect, useMemo, useState } from "react";
import type { PostMeta } from "@/lib/blog-shared";
import { PostCard } from "./BlogPreview";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function BlogIndex({ posts, categories }: { posts: PostMeta[]; categories: readonly string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("q")) setQ(sp.get("q")!);
    if (sp.get("category") && categories.includes(sp.get("category")!)) setCat(sp.get("category")!);
  }, [categories]);
  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (cat !== "All") sp.set("category", cat);
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [q, cat]);
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return posts.filter((p) => (cat === "All" || p.category === cat) && (!t || `${p.title} ${p.description} ${p.keywords.join(" ")} ${p.category}`.toLowerCase().includes(t)));
  }, [posts, q, cat]);
  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter articles by category" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
          {["All", ...categories].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={cn("shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition", cat === c ? "bg-teal text-white" : "bg-white text-ink ring-1 ring-teal/10 hover:ring-aqua")}>{c}</button>
          ))}
        </div>
        <label className="relative block lg:w-80">
          <span className="sr-only">Search articles</span>
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="input rounded-full pl-11" />
        </label>
      </div>
      <p className="mb-6 text-sm text-ink-muted" aria-live="polite">{list.length} article{list.length === 1 ? "" : "s"}{cat !== "All" ? ` in ${cat}` : ""}{q ? ` matching "${q}"` : ""}</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <PostCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && (
        <div className="rounded-3xl bg-white p-10 text-center">
          <p className="font-heading text-lg font-bold">No articles found.</p>
          <button onClick={() => { setQ(""); setCat("All"); }} className="mt-3 font-semibold text-teal underline">Clear filters</button>
        </div>
      )}
    </div>
  );
}
