# Bravura VA, Website

Production-ready marketing website for **Bravura VA**, built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values you have
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node.js 18.18+ (Node 20 or 22 recommended).

## What's included

| Area | Pages |
|---|---|
| Core | Home, About, Services, Industries, How It Works, Why Bravura VA, Pricing, Case Studies, Testimonials, Human + AI Support, Blog, FAQ, Contact, Book a Call |
| Services | 19 detailed service pages, `/services/[slug]/` |
| Industries | 18 industry pages, `/industries/[slug]/` |
| International | `/virtual-assistants/` index, 5 country pages (USA, UK, Australia, Kenya, Africa), 10 US state pages, 3 UK + 3 Australian city pages |
| Blog | 30 articles in `content/blog/*.md` with search, category filters, related posts and BlogPosting schema |
| Legal | Privacy Policy, Terms of Service, Cookie Policy, Data Protection (**drafts, get legal review**) |
| SEO | Per-page metadata & canonicals, `sitemap.xml`, `robots.txt`, Open Graph image, Organization / WebSite / Service / BreadcrumbList / FAQPage / BlogPosting JSON-LD |

## Before launch, checklist

1. **Calendly:** set `NEXT_PUBLIC_CALENDLY_URL`. Until then, every "Book a Free Call" button opens a fallback panel with WhatsApp, email and the enquiry form.
2. **Form delivery:** set `FORM_WEBHOOK_URL` (contact, quote and service enquiries) and `NEWSLETTER_WEBHOOK_URL`. Any HTTPS endpoint that accepts a JSON POST works (Zapier, Make, Formspree, HubSpot, a CRM webhook...). In development, submissions are logged to the console. In production without a webhook, the form honestly reports that it isn't connected and offers a pre-filled email + WhatsApp fallback.
3. **Analytics** (optional), set `NEXT_PUBLIC_GA_ID`. Google Analytics only loads after a visitor clicks "Accept all" in the cookie banner. Conversion events tracked: `generate_lead`, `booking_modal_open`, `whatsapp_click`, `newsletter_signup`, `delegate_checklist_submit`.
4. **Social links:** add profile URLs in `src/lib/site.ts` (`social`). Empty ones are hidden.
5. **Legal pages:** edit `src/content/legal/*.md` (look for `[EDIT: ...]`) and have them reviewed by a lawyer.
6. **Team bios:** fill in `src/content/team.ts` and set `published: true`.
7. **Photography:** all photos come from Unsplash and are listed in `src/content/images.ts`. They are illustrative stock images, not staff or clients. Swap any URL for your own photos in `/public/images`.
8. **Pricing:** prices show "Custom quote". Edit `pricingModels` in `src/content/shared.ts` if you decide to publish prices.

## Editing content (CMS-ready structure)

All copy lives in structured files, separate from the page templates, so it can later move to a headless CMS:

```
src/content/
  catalog.ts            service & industry lists (names, icons, categories, nav)
  services/*.ts         full content for each service page
  industries/*.ts       full content for each industry page
  locations/*.ts        country, state (all 50 listed) and city pages
  faqs.ts               FAQ groups (homepage + FAQ page)
  shared.ts             problems, benefits, steps, pricing models, comparison table, trust points
  testimonials.ts       VERIFIED testimonials only (empty by design)
  caseStudies.ts        illustrative use cases (clearly labeled) swap for real ones later
  team.ts               founder/team bios (hidden until published)
  images.ts             every image URL + alt text
  legal/*.md            legal page drafts
content/blog/*.md       blog articles (Markdown + frontmatter)
```

### Add a blog post
Create `content/blog/my-post-slug.md`:
```md
---
title: "Post title"
description: "Meta description"
category: "Hiring Guides"   # one of the categories in src/lib/blog-shared.ts
date: 2026-11-01
image: womanOfficeLaptop    # a key from src/content/images.ts
keywords: ["keyword one", "keyword two"]
related: ["another-post-slug"]
---
Your Markdown content...
```

### Add a US state page
Every state is listed in `allStates` (`src/content/locations/states.ts`). To publish one, add a full entry to `statePages` with **genuinely local** content (avoid duplicate doorway pages). It's automatically added to the sitemap and linked from `/virtual-assistants/usa/`.

### Add a testimonial
Only with the client's written permission, see the instructions at the top of `src/content/testimonials.ts`. When the list has entries, the homepage switches from the trust section to the carousel automatically. Review/rating schema is never generated.

## Brand rules

Colours are locked in `tailwind.config.ts`: the default Tailwind palette is removed, so only brand colours can be used:

| Token | Hex | Tailwind class |
|---|---|---|
| Deep Teal | `#0D292D` | `teal` |
| Aqua Blue | `#59C4D0` | `aqua` |
| Vibrant Orange | `#FF981F` | `orange` |
| Pale Aqua | `#E5F8F8` | `aqua-pale` |
| Off White | `#F8F9F5` | `offwhite` |
| White | `#FFFFFF` | `white` |
| Dark Text | `#10152E` | `ink` |
| Muted Text | `#59686B` | `ink-muted` |

Fonts: Plus Jakarta Sans (headings) and Inter (body), self-hosted via Fontsource.

## Deployment

Works on any Node host. Vercel is the simplest: import the folder/repo, add the environment variables, deploy. Then point `bravura.co.ke` at it and submit `https://bravura.co.ke/sitemap.xml` in Google Search Console.

Notes:
- The enquiry API has a simple in-memory rate limit; on multi-instance hosting, use your platform's rate limiting.
- `npm audit` reports advisories in build-time-only dependencies (Tailwind's file watcher and Next's bundled PostCSS). They don't ship to visitors.
