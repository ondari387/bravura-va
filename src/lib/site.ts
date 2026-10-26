export const site = {
  name: "Bravura VA",
  legalName: "Bravura VA",
  tagline: "The home of reliable, human-led virtual assistants.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://va.bravura.co.ke").replace(/\/$/, ""),
  description:
    "Human-led virtual assistant and remote business support from Nairobi, Kenya, for startups, entrepreneurs and growing businesses across the USA, UK, Australia and Canada.",
  phone: "+254 714 089 042",
  phoneHref: "tel:+254714089042",
  email: "va@bravura.co.ke",
  emailHref: "mailto:va@bravura.co.ke",
  whatsapp: "https://wa.me/254714089042",
  whatsappWithText: (text: string) => `https://wa.me/254714089042?text=${encodeURIComponent(text)}`,
  location: "Nairobi, Kenya",
  // Set NEXT_PUBLIC_CALENDLY_URL in .env when the real booking link is available.
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/va-bravura/30min",
  // EDIT: add real profile URLs. Empty links are hidden automatically.
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    x: "",
    youtube: "",
  },
  ogImage: "/images/brand/og-image.png",
};

export const absoluteUrl = (path = "/") => {
  const p = path.startsWith("/") ? path : `/${path}`;
  const withSlash = p.endsWith("/") || p.includes("#") || p.includes("?") ? p : `${p}/`;
  return `${site.url}${withSlash}`;
};
