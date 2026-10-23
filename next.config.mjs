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
    ];
  },
};
export default nextConfig;
