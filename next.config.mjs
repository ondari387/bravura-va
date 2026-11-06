const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://tendaji-va.co.ke").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["lucide-react"] },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/why-bravura-va", destination: "/why-tendaji-va/", permanent: true },
      // Old brand domain: once the site runs on tendaji-va.co.ke, send every va.bravura.co.ke URL to the same page there.
      ...(siteUrl.includes("tendaji-va.co.ke")
        ? [
            { source: "/", has: [{ type: "host", value: "va.bravura.co.ke" }], destination: `${siteUrl}/`, permanent: true },
            // Keep the trailing slash so visitors land on the final URL in one hop (file paths like /llms.txt keep theirs).
            { source: "/:path((?!.*\\.[a-z0-9]+$).+)", has: [{ type: "host", value: "va.bravura.co.ke" }], destination: `${siteUrl}/:path/`, permanent: true },
            { source: "/:path*", has: [{ type: "host", value: "va.bravura.co.ke" }], destination: `${siteUrl}/:path*`, permanent: true },
          ]
        : []),
      { source: "/contact-us", destination: "/contact/", permanent: true },
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/book", destination: "/book-a-call/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/terms", destination: "/terms-of-service/", permanent: true },
      // International pages moved to flatter URLs; state and city guides consolidated into country pages
      ...["usa", "uk", "australia", "canada", "kenya", "africa"].flatMap((c) => [
        { source: `/virtual-assistants/${c}`, destination: `/virtual-assistant-${c}/`, permanent: true },
        { source: `/virtual-assistants/${c}/:path*`, destination: `/virtual-assistant-${c}/`, permanent: true },
      ]),
      { source: "/services/website-technical-support", destination: "/services/wordpress-virtual-assistant/", permanent: true },
      { source: "/services/bookkeeping-administration", destination: "/services/bookkeeping-virtual-assistant/", permanent: true },
    ];
  },
};
export default nextConfig;
