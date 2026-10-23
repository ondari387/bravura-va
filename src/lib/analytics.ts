/**
 * Lightweight conversion tracking. Events are pushed to window.dataLayer and to gtag
 * ONLY once analytics is configured (NEXT_PUBLIC_GA_ID) and the visitor has consented.
 */
type Params = Record<string, string | number | boolean | undefined>;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem("bva-consent") !== "all") return;
  } catch { return; }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}
