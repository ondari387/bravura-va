import type { ImageKey } from "./images";

/**
 * ILLUSTRATIVE USE CASES: NOT CLIENT STORIES.
 * Until real, verified client results exist, these scenarios show how support is typically
 * structured. They are clearly labelled on the site. When you have a real case study
 * (with the client's written permission), add it with `illustrative: false` and real results.
 */
export type CaseStudy = {
  slug: string; illustrative: boolean; title: string; industry: string; country: string; image: ImageKey;
  background: string; challenge: string; support: string[]; implementation: string[];
  results: string[]; feedback?: { quote: string; name: string; role: string };
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-store-customer-service",
    illustrative: true,
    title: "Getting a growing Shopify store's customer inbox under control",
    industry: "E-commerce", country: "United States", image: "womanDeskYellow",
    background: "A hypothetical direct-to-consumer brand selling home goods on Shopify and Amazon, run by two co-founders who handle marketing, sourcing and every customer email themselves.",
    challenge: "As orders grow, 'where is my order?' questions, return requests and product queries pile up. Replies take days, reviews start to mention slow service, and the founders spend their evenings in the inbox instead of planning the next product launch.",
    support: ["Customer support by email and Shopify Inbox during agreed hours", "Returns coordination using the store's written policy", "Product listing updates and inventory data checks", "A weekly summary of common questions and issues"],
    implementation: ["Week 1: discovery call, helpdesk access and policy review", "Week 2: saved replies and escalation rules written together", "Weeks 3-4: assistant handles routine tickets with founder spot-checks", "Ongoing: weekly check-in and monthly review of FAQs"],
    results: ["Routine enquiries answered within an agreed response window", "Founders only see escalations that need a decision", "A growing knowledge base built from real customer questions", "Recurring issues flagged so product pages can be improved"],
    services: ["customer-support", "ecommerce-virtual-assistant"],
  },
  {
    slug: "founder-executive-support",
    illustrative: true,
    title: "Giving a SaaS founder back control of their calendar",
    industry: "Technology & SaaS", country: "United Kingdom", image: "manLaptop2",
    background: "A hypothetical seed-stage software company where the CEO manages fundraising conversations, customer calls, hiring and a team spread across two time zones.",
    challenge: "The founder's calendar is a patchwork of double bookings and last-minute changes. Investor follow-ups slip, interview scheduling takes days, and monthly investor updates are always late.",
    support: ["Inbox triage with VIP rules and drafted replies", "Calendar management with protected focus blocks", "Interview scheduling for open roles", "Monthly investor update preparation"],
    implementation: ["Agree calendar rules, VIP list and approval boundaries", "Set up a shared task board for requests", "Introduce a morning briefing and end-of-day summary", "Hand over investor update assembly after the first month"],
    results: ["Meetings booked in fewer back-and-forth emails", "Focus time protected every week", "Investor updates prepared on a predictable schedule", "Fewer missed follow-ups with candidates and investors"],
    services: ["executive-virtual-assistant", "inbox-calendar-management", "recruitment-virtual-assistant"],
  },
  {
    slug: "real-estate-lead-follow-up",
    illustrative: true,
    title: "Making sure no real estate enquiry goes unanswered",
    industry: "Real Estate", country: "Australia", image: "womanSmiling",
    background: "A hypothetical two-agent residential sales team that receives enquiries from property portals, its website and social media.",
    challenge: "Enquiries arrive while agents are at inspections. Some wait hours for a reply, long-term buyer leads are rarely followed up, and the CRM is out of date.",
    support: ["Prompt responses to portal and website enquiries", "Inspection booking and confirmations", "CRM updates and follow-up reminders", "Listing description drafts and social graphics"],
    implementation: ["Map lead sources and agree reply templates", "Set CRM rules for tagging and follow-up", "Assistant takes over first responses during agreed hours", "Fortnightly review of lead pipeline with the agents"],
    results: ["Every enquiry receives a timely first response", "Buyer leads followed up on a consistent schedule", "A cleaner CRM that agents trust", "More agent time spent with clients"],
    services: ["real-estate-virtual-assistant", "sales-support", "graphic-design"],
  },
  {
    slug: "home-services-call-handling",
    illustrative: true,
    title: "Turning missed calls into booked jobs for a home services business",
    industry: "Home Services", country: "United States", image: "manHeadset2",
    background: "A hypothetical HVAC and plumbing company with a small field team and an owner who answers the business phone between jobs.",
    challenge: "Calls go to voicemail while technicians are working, quotes are sent but rarely followed up, and online reviews lag behind the quality of the work.",
    support: ["Virtual receptionist call handling during agreed hours", "Job booking into field service software", "Quote follow-up and appointment reminders", "Review requests after completed jobs"],
    implementation: ["Design call script and urgent-call escalation route", "Connect the business number via call forwarding", "Assistant books jobs using the owner's availability rules", "Weekly review of calls, quotes and bookings"],
    results: ["More callers reach a person instead of voicemail", "Open quotes followed up systematically", "A steadier flow of genuine customer reviews", "Owner interruptions reduced during jobs"],
    services: ["virtual-receptionist", "customer-support", "sales-support"],
  },
];
