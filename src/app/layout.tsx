import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/layout/Booking";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Tracking } from "@/components/layout/Tracking";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Bravura VA | Virtual Assistant Services for Growing Businesses", template: "%s | Bravura VA" },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, type: "website", locale: "en_US", images: [{ url: site.ogImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#0D292D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <CookieConsent />
          <Tracking />
        </BookingProvider>
        <JsonLd data={[orgSchema, websiteSchema]} />
      </body>
    </html>
  );
}
