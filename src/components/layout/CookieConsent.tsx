"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/Button";

const KEY = "bva-consent";
type Consent = "all" | "essential" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    try { setConsent((localStorage.getItem(KEY) as Consent) || null); } catch { /* storage blocked */ }
    setReady(true);
    const reopen = () => { setConsent(null); setShowPrefs(true); };
    window.addEventListener("bva:cookie-settings", reopen);
    return () => window.removeEventListener("bva:cookie-settings", reopen);
  }, []);

  const save = (v: Exclude<Consent, null>) => {
    try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
    setConsent(v);
  };

  return (
    <>
      {consent === "all" && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === "all" && gtmId && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      {ready && consent === null && (
        <div role="dialog" aria-live="polite" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl rounded-3xl bg-white p-5 shadow-lift ring-1 ring-teal/10 sm:inset-x-6 sm:bottom-6 sm:p-6">
          <p className="font-heading text-base font-bold text-ink">We value your privacy</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
            We use essential cookies to make this site work. With your permission, we&apos;d also use analytics cookies to understand how the site is used and improve it. Read our{" "}
            <Link href="/cookie-policy/" className="font-semibold text-teal underline">Cookie Policy</Link>.
          </p>
          {showPrefs && (
            <ul className="mt-3 space-y-1.5 rounded-2xl bg-offwhite p-4 text-sm text-ink-muted">
              <li><strong className="text-ink">Essential:</strong> always on: security, form protection and remembering your cookie choice.</li>
              <li><strong className="text-ink">Analytics:</strong> optional, anonymous usage statistics (only active once analytics is configured).</li>
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => save("all")} className={buttonClass("primary", "px-5 py-2.5 text-sm")}>Accept all</button>
            <button onClick={() => save("essential")} className={buttonClass("secondary", "px-5 py-2.5 text-sm")}>Essential only</button>
            {!showPrefs && (
              <button onClick={() => setShowPrefs(true)} className="px-3 text-sm font-semibold text-teal underline">Preferences</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("bva:cookie-settings"))}>
      Cookie Settings
    </button>
  );
}
