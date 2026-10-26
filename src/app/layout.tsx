import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/layout/Booking";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Tracking } from "@/components/layout/Tracking";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SupportPrompt } from "@/components/layout/SupportPrompt";
import { JsonLd } from "@/components/ui/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const albert = localFont({
  src: "./fonts/AlbertSans-Variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-albert",
  fallback: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Bravura VA | Virtual Assistant Services for Growing Businesses", template: "%s | Bravura VA" },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, type: "website", locale: "en_US", images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  // Search engine ownership tags. Set these in Vercel (Config type) after adding the site in each tool.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = { themeColor: "#0D292D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={albert.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <BookingProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileCTA />
          <SupportPrompt />
          <CookieConsent />
          <Tracking />
        </BookingProvider>
        <JsonLd data={[orgSchema, websiteSchema]} />
      </body>
    </html>
  );
}
