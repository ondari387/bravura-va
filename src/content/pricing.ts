import type { IconName } from "@/components/ui/Icon";

/**
 * PRICING CONFIGURATION
 * Prices are NOT confirmed yet, so every price below is `null`.
 * While a price is null the site shows "Request a Custom Quote" / "Request Hourly Rates" instead.
 *
 * To publish prices: fill in the amounts per currency (numbers only, no symbols) and any confirmed details.
 * Prices are never converted automatically between currencies. Leave a currency null to hide it.
 */
export type Currency = "USD" | "GBP" | "AUD" | "CAD";
export const currencies: { code: Currency; symbol: string; label: string }[] = [
  { code: "USD", symbol: "US$", label: "US dollars" },
  { code: "GBP", symbol: "£", label: "British pounds" },
  { code: "AUD", symbol: "A$", label: "Australian dollars" },
  { code: "CAD", symbol: "C$", label: "Canadian dollars" },
];
type PriceTable = Record<Currency, number | null>;
const noPrices: PriceTable = { USD: null, GBP: null, AUD: null, CAD: null };

export type HourlyPlan = {
  name: string; description: string; icon: IconName; useCases: string[];
  rate: PriceTable;            // per hour
  minimumHours: string | null; // e.g. "10 hours per month" once confirmed
  billing: string | null;      // e.g. "Billed monthly in arrears from tracked time"
  howItWorks: string[];
};

export const hourly: HourlyPlan = {
  name: "Hourly Support",
  description: "Flexible, task-based help for businesses with varying or occasional workloads.",
  icon: "clock3",
  useCases: ["One-off projects and clean-ups", "Overflow help in busy periods", "Testing delegation before committing", "Occasional specialist tasks"],
  rate: { ...noPrices },
  minimumHours: null,
  billing: null,
  howItWorks: ["You request tasks through an agreed channel", "Time is tracked against each task", "You receive a regular summary of hours and work completed", "Billing terms are confirmed in your proposal"],
};

export type MonthlyPackage = {
  id: string; name: string; description: string; icon: IconName; featured?: boolean;
  price: PriceTable;               // per month
  includedHours: string | null;    // e.g. "40 hours per month"
  services: string[];              // confirmed inclusions
  availability: string | null;     // e.g. "Agreed overlap with your business day"
  support: string | null;          // e.g. "Weekly check-in and monthly review"
  additionalHours: string | null;  // e.g. "Extra hours at your hourly rate"
  billingTerms: string | null;     // e.g. "Billed monthly in advance, 30 days' notice"
  bestFor: string[];
};

export const monthlyPackages: MonthlyPackage[] = [
  {
    id: "essential", name: "Essential Support", icon: "clipboard",
    description: "For businesses with recurring administrative needs.",
    price: { ...noPrices }, includedHours: null, availability: null, support: null, additionalHours: null, billingTerms: null,
    services: [],
    bestFor: ["Inbox and calendar management", "Routine admin and data entry", "Founders delegating for the first time"],
  },
  {
    id: "growth", name: "Growth Support", icon: "trendingUp", featured: true,
    description: "For businesses needing broader ongoing assistance.",
    price: { ...noPrices }, includedHours: null, availability: null, support: null, additionalHours: null, billingTerms: null,
    services: [],
    bestFor: ["Admin plus customer support", "CRM, follow-ups and sales admin", "E-commerce or social media operations"],
  },
  {
    id: "dedicated", name: "Dedicated Support", icon: "userCheck",
    description: "For businesses requiring more consistent, higher-volume assistance.",
    price: { ...noPrices }, includedHours: null, availability: null, support: null, additionalHours: null, billingTerms: null,
    services: [],
    bestFor: ["A consistent assistant who learns your business", "Daily operational support", "Agreed overlap with your working day"],
  },
];

export const hasAnyPrice = () =>
  Object.values(hourly.rate).some((v) => v !== null) || monthlyPackages.some((p) => Object.values(p.price).some((v) => v !== null));
