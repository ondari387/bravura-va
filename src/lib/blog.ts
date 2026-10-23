import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { blogCategories, formatDate, type PostMeta } from "./blog-shared";
export { blogCategories, formatDate };
export type { PostMeta };
export type Post = PostMeta & { html: string; headings: { id: string; text: string }[] };

const dir = path.join(process.cwd(), "content", "blog");


const slugify = (s: string) => s.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  const words = content.split(/\s+/).filter(Boolean).length;
  const headings: { id: string; text: string }[] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ tokens, depth }) => {
    const text = renderer.parser.parseInline(tokens);
    const id = slugify(text);
    if (depth === 2) headings.push({ id, text: text.replace(/<[^>]+>/g, "") });
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  renderer.link = ({ href, tokens }) => {
    const text = renderer.parser.parseInline(tokens);
    const ext = /^https?:\/\//.test(href) && !href.includes("bravura.co.ke");
    return `<a href="${href}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
  };
  const html = marked.parse(content, { renderer, async: false }) as string;
  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    updated: data.updated ? String(data.updated) : undefined,
    image: data.image,
    keywords: data.keywords || [],
    related: data.related || [],
    featured: !!data.featured,
    cta: data.cta,
    readingTime: Math.max(1, Math.round(words / 230)),
    html,
    headings,
  };
}

let cache: Post[] | null = null;
export function getAllPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(dir)) return [];
  cache = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map(parse).sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}
export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);
export const getPostMetas = (): PostMeta[] => getAllPosts().map(({ html: _h, headings: _hd, ...m }) => m);
export function getRelated(post: PostMeta, n = 3): PostMeta[] {
  const metas = getPostMetas();
  const picked = post.related.map((s) => metas.find((m) => m.slug === s)).filter(Boolean) as PostMeta[];
  const fill = metas.filter((m) => m.slug !== post.slug && m.category === post.category && !picked.includes(m));
  return [...picked, ...fill].filter((m) => m.slug !== post.slug).slice(0, n);
}
