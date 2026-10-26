/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
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
