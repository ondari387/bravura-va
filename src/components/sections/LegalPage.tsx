import fs from "fs";
import path from "path";
import { marked } from "marked";
import { PageHero } from "./PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

export function LegalPage({ file, title, href, updated }: { file: string; title: string; href: string; updated: string }) {
  const md = fs.readFileSync(path.join(process.cwd(), "src", "content", "legal", file), "utf8");
  const html = marked.parse(md, { async: false }) as string;
  return (
    <>
      <PageHero crumbs={[{ name: title, href }]} eyebrow="Legal" title={title} description={`Last updated: ${updated}`} primaryLabel={null} compact />
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div role="note" className="mb-10 flex gap-4 rounded-2xl bg-orange/15 p-5 text-[15px] text-ink">
            <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
            <p><strong>Draft for legal review.</strong> This document is an editable draft prepared as a starting point. It has not been reviewed by a lawyer and should be checked by a qualified legal professional familiar with Kenyan law and the laws of the markets you serve before being relied on.</p>
          </div>
          <div className="prose-brand" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Section>
    </>
  );
}
