"use client";
/** First-touch UTM attribution, kept in sessionStorage and sent with enquiries. */
const KEY = "bva-attribution";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

export function captureAttribution() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const sp = new URLSearchParams(window.location.search);
    const data: Record<string, string> = {};
    PARAMS.forEach((k) => { const v = sp.get(k); if (v) data[k] = v.slice(0, 120); });
    data.landing_page = window.location.pathname;
    if (document.referrer && !document.referrer.includes(window.location.host)) data.referrer = document.referrer.slice(0, 200);
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch { /* storage blocked */ }
}

export function getAttribution(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem(KEY) || "{}"); } catch { return {}; }
}
