import type { IconName } from "@/components/ui/Icon";
import type { ImageKey } from "./images";

export type ServiceCategoryId = "admin" | "customer" | "operations" | "creative";

export const serviceCategories: { id: ServiceCategoryId; name: string; short: string; tagline: string; icon: IconName }[] = [
  { id: "admin", name: "Administrative & Executive Support", short: "Admin & Executive", tagline: "Take routine admin off your plate.", icon: "clipboard" },
  { id: "customer", name: "Customer & Sales Support", short: "Customer & Sales", tagline: "Keep customer conversations and business opportunities moving.", icon: "headphones" },
  { id: "operations", name: "Operations & Industry Support", short: "Operations & Industry", tagline: "Get practical help with the operational tasks specific to your business.", icon: "settings" },
  { id: "creative", name: "Creative & Technical Support", short: "Creative & Technical", tagline: "Keep your brand visible and your digital operations organized.", icon: "palette" },
];

export type ServiceSummary = {
  slug: string; name: string; category: ServiceCategoryId; icon: IconName; image: ImageKey; summary: string;
};

export const services: ServiceSummary[] = [
  { slug: "administrative-support", name: "Administrative Support", category: "admin", icon: "clipboard", image: "womanOfficeLaptop", summary: "Email, scheduling, documents, spreadsheets and the daily admin that keeps a business running." },
  { slug: "inbox-calendar-management", name: "Inbox & Calendar Management", category: "admin", icon: "inbox", image: "womanPhoneLaptop", summary: "A calmer inbox and a calendar that protects your time instead of consuming it." },
  { slug: "executive-virtual-assistant", name: "Executive Virtual Assistant", category: "admin", icon: "briefcase", image: "womanGlasses", summary: "Senior-level support for founders and executives: scheduling, travel, meeting prep and follow-through." },
  { slug: "personal-virtual-assistant", name: "Personal Virtual Assistant", category: "admin", icon: "user", image: "womanBlue", summary: "Help with the personal errands and life admin that compete with your working hours." },
  { slug: "data-entry-research", name: "Data Entry & Research", category: "admin", icon: "database", image: "womanFocused", summary: "Accurate data entry, list building, market research and tidy, usable spreadsheets." },
  { slug: "customer-support", name: "Customer Support", category: "customer", icon: "headphones", image: "manHeadset", summary: "Email, chat and phone support that answers customers clearly and escalates the right issues." },
  { slug: "virtual-receptionist", name: "Virtual Receptionist", category: "customer", icon: "phoneCall", image: "womanHeadsetDesk", summary: "Professional call handling, message taking and appointment booking so no enquiry slips through." },
  { slug: "lead-generation", name: "Lead Generation", category: "customer", icon: "target", image: "manLaptop", summary: "Prospect research, list building and lead qualification that feed your sales pipeline." },
  { slug: "sales-support", name: "Sales Support", category: "customer", icon: "trendingUp", image: "teamTableLaptops", summary: "CRM updates, follow-ups, appointment setting and pipeline admin that free your sellers to sell." },
  { slug: "ecommerce-virtual-assistant", name: "E-commerce & Shopify Virtual Assistant", category: "operations", icon: "cart", image: "womanDeskYellow", summary: "Shopify product uploads, store updates, order admin, customer enquiries and returns coordination." },
  { slug: "real-estate-virtual-assistant", name: "Real Estate Virtual Assistant", category: "operations", icon: "home", image: "womanSmiling", summary: "Listing admin, lead follow-up, showing coordination and transaction paperwork organization." },
  { slug: "recruitment-virtual-assistant", name: "Recruitment Virtual Assistant", category: "operations", icon: "userPlus", image: "twoWomenTalking", summary: "Candidate sourcing research, interview scheduling, ATS updates and candidate communication." },
  { slug: "bookkeeping-virtual-assistant", name: "Bookkeeping Support", category: "operations", icon: "calculator", image: "womanDeskNotebook", summary: "Receipt capture, invoice admin and record organization that keep your books ready for your accountant." },
  { slug: "project-management-support", name: "Project Management Support", category: "operations", icon: "listChecks", image: "teamWhiteTable", summary: "Task tracking, meeting notes, status updates and deadline follow-ups across your projects." },
  { slug: "operations-support", name: "Operations Support", category: "operations", icon: "settings", image: "teamDiscussion", summary: "Process documentation, vendor coordination and the operational glue that holds a growing team together." },
  { slug: "content-writing", name: "Content Writing", category: "creative", icon: "pen", image: "womanCafe", summary: "Blog posts, newsletters, product descriptions and website copy written for real readers." },
  { slug: "graphic-design", name: "Graphic Design", category: "creative", icon: "palette", image: "womanOrange", summary: "Social graphics, presentations, documents and marketing materials that look on-brand." },
  { slug: "social-media-management", name: "Social Media Support", category: "creative", icon: "share", image: "teamCouch", summary: "Content calendars, scheduling, community replies and reporting for your social channels." },
  { slug: "wordpress-virtual-assistant", name: "WordPress Virtual Assistant", category: "creative", icon: "monitor", image: "manHeadset2", summary: "WordPress content uploads, page updates, blog publishing, image optimisation and routine site admin." },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Homepage category cards list sub-services; each links to the most relevant service page. */
export const categoryServiceLinks: Record<ServiceCategoryId, { label: string; slug: string }[]> = {
  admin: [
    { label: "General Administration", slug: "administrative-support" },
    { label: "Inbox Management", slug: "inbox-calendar-management" },
    { label: "Calendar Management", slug: "inbox-calendar-management" },
    { label: "Executive Assistance", slug: "executive-virtual-assistant" },
    { label: "Personal Assistance", slug: "personal-virtual-assistant" },
    { label: "Data Entry", slug: "data-entry-research" },
    { label: "Research", slug: "data-entry-research" },
    { label: "Document Preparation", slug: "administrative-support" },
    { label: "Travel Coordination", slug: "executive-virtual-assistant" },
  ],
  customer: [
    { label: "Email Support", slug: "customer-support" },
    { label: "Live Chat Support", slug: "customer-support" },
    { label: "Phone Support", slug: "virtual-receptionist" },
    { label: "Virtual Receptionist", slug: "virtual-receptionist" },
    { label: "Lead Generation", slug: "lead-generation" },
    { label: "Lead Qualification", slug: "lead-generation" },
    { label: "Sales Follow-ups", slug: "sales-support" },
    { label: "CRM Administration", slug: "sales-support" },
    { label: "Appointment Setting", slug: "sales-support" },
  ],
  operations: [
    { label: "E-commerce Support", slug: "ecommerce-virtual-assistant" },
    { label: "Shopify Administration", slug: "ecommerce-virtual-assistant" },
    { label: "Amazon Seller Support", slug: "ecommerce-virtual-assistant" },
    { label: "Real Estate Administration", slug: "real-estate-virtual-assistant" },
    { label: "Property Management", slug: "real-estate-virtual-assistant" },
    { label: "Recruitment Support", slug: "recruitment-virtual-assistant" },
    { label: "Project Coordination", slug: "project-management-support" },
    { label: "Bookkeeping Administration", slug: "bookkeeping-virtual-assistant" },
    { label: "Operations Support", slug: "operations-support" },
  ],
  creative: [
    { label: "Content Writing", slug: "content-writing" },
    { label: "Graphic Design", slug: "graphic-design" },
    { label: "Social Media Management", slug: "social-media-management" },
    { label: "Website Updates", slug: "wordpress-virtual-assistant" },
    { label: "WordPress Support", slug: "wordpress-virtual-assistant" },
    { label: "Shopify Website Support", slug: "wordpress-virtual-assistant" },
    { label: "Presentation Design", slug: "graphic-design" },
    { label: "Marketing Administration", slug: "social-media-management" },
  ],
};

export type IndustryGroup = "growth" | "property" | "professional" | "regulated" | "local";
export const industryGroups: { id: IndustryGroup; name: string }[] = [
  { id: "growth", name: "Startups & Growth" },
  { id: "property", name: "Property" },
  { id: "professional", name: "Professional Services" },
  { id: "regulated", name: "Regulated Sectors" },
  { id: "local", name: "Local & Service Businesses" },
];

export type IndustrySummary = {
  slug: string; name: string; group: IndustryGroup; icon: IconName; image: ImageKey; problem: string; solution: string;
};

export const industries: IndustrySummary[] = [
  { slug: "startups", name: "Startups", group: "growth", icon: "rocket", image: "teamStanding", problem: "Founders end up doing every job while trying to find product-market fit.", solution: "Flexible support for admin, research, inbox and investor-update prep." },
  { slug: "small-businesses", name: "Small Businesses & SMEs", group: "growth", icon: "store", image: "manSuit", problem: "Owners are stuck in day-to-day admin instead of growing the business.", solution: "Reliable help with email, scheduling, customer replies and paperwork." },
  { slug: "ecommerce", name: "E-commerce & Online Retail", group: "growth", icon: "cart", image: "womanDeskYellow", problem: "More orders means more listings, enquiries and returns to manage.", solution: "Store admin, product listings and customer service that scale with sales." },
  { slug: "technology-saas", name: "Technology & SaaS", group: "growth", icon: "cpu", image: "manLaptop2", problem: "Lean teams juggle support tickets, onboarding and ops alongside building product.", solution: "Tier-1 support, onboarding admin, CRM hygiene and documentation help." },
  { slug: "real-estate", name: "Real Estate", group: "property", icon: "home", image: "womanSmiling", problem: "Agents lose selling time to listings admin, CRM updates and scheduling.", solution: "Lead follow-up, listing coordination and transaction document organization." },
  { slug: "property-management", name: "Property Management", group: "property", icon: "key", image: "womanPhoneLaptop", problem: "Tenant enquiries, maintenance requests and records never stop.", solution: "Tenant communication, work-order logging and vendor scheduling support." },
  { slug: "construction", name: "Construction", group: "property", icon: "hardHat", image: "teamDiscussion", problem: "Site teams get buried in quotes, schedules and project paperwork.", solution: "Document control, subcontractor scheduling and estimate admin support." },
  { slug: "marketing-agencies", name: "Marketing Agencies", group: "professional", icon: "megaphone", image: "teamCouch", problem: "Client delivery grows faster than the behind-the-scenes coordination.", solution: "Project coordination, reporting prep, content scheduling and client admin." },
  { slug: "recruitment-staffing", name: "Recruitment & Staffing", group: "professional", icon: "userPlus", image: "twoWomenTalking", problem: "Recruiters spend hours scheduling and updating systems instead of placing candidates.", solution: "Sourcing research, interview scheduling and ATS administration." },
  { slug: "consulting", name: "Consulting", group: "professional", icon: "lightbulb", image: "womanGlasses", problem: "Consultants lose billable time to calendars, proposals and follow-ups.", solution: "Executive assistance, proposal formatting and client coordination." },
  { slug: "coaching", name: "Coaching", group: "professional", icon: "compass", image: "womanLaptopLap", problem: "Coaches want to coach, not chase bookings, invoices and content.", solution: "Client scheduling, onboarding admin, newsletters and social content." },
  { slug: "healthcare-administration", name: "Healthcare Administration", group: "regulated", icon: "stethoscope", image: "womanHeadsetDesk", problem: "Front-office admin pulls clinical staff away from patient care.", solution: "Non-clinical scheduling, reminders and admin, scoped after a compliance review." },
  { slug: "legal-services", name: "Legal Services", group: "regulated", icon: "scale", image: "womenAtTable", problem: "Fee earners spend valuable hours on scheduling and document admin.", solution: "Calendar, intake admin and document organization, never legal advice." },
  { slug: "financial-services", name: "Financial Services", group: "regulated", icon: "landmark", image: "womanOfficeLaptop2", problem: "Advisers and firms carry heavy client-servicing and CRM admin.", solution: "Client scheduling, CRM updates and paperwork prep under your supervision." },
  { slug: "home-services", name: "Home Services", group: "local", icon: "wrench", image: "manHeadset2", problem: "Missed calls and slow quotes mean jobs go to competitors.", solution: "Call handling, job booking, quote follow-up and review requests." },
  { slug: "hospitality", name: "Hospitality", group: "local", icon: "hotel", image: "womanPortrait", problem: "Guest enquiries, bookings and reviews arrive around the clock.", solution: "Reservation admin, guest messaging and online review management." },
  { slug: "education", name: "Education", group: "local", icon: "graduation", image: "teamThreeWomen", problem: "Educators and training providers drown in enrolment and course admin.", solution: "Enrolment support, LMS admin, scheduling and learner communications." },
  { slug: "nonprofits", name: "Nonprofits", group: "local", icon: "heartHandshake", image: "fivePeopleTable", problem: "Small teams stretch to cover donors, volunteers and reporting.", solution: "Donor database updates, volunteer coordination and grant admin support." },
];

export const industryBySlug = (slug: string) => industries.find((s) => s.slug === slug);

/** The ten primary service categories featured on the homepage and in navigation. */
export const primaryServices: { slug: string; label: string; text: string }[] = [
  { slug: "administrative-support", label: "Admin & Executive Support", text: "Inbox, calendar, travel, documents, research and follow-ups." },
  { slug: "customer-support", label: "Customer Support", text: "Email and chat enquiries, helpdesk tickets and clear escalations." },
  { slug: "ecommerce-virtual-assistant", label: "E-commerce & Shopify", text: "Product uploads, inventory updates, orders, returns and store upkeep." },
  { slug: "lead-generation", label: "Lead Generation", text: "Prospect research, lead lists, CRM enrichment and follow-up admin." },
  { slug: "social-media-management", label: "Social Media Support", text: "Content calendars, scheduling, caption drafts and comment monitoring." },
  { slug: "real-estate-virtual-assistant", label: "Real Estate Support", text: "CRM admin, viewings, listing updates and enquiry follow-up." },
  { slug: "wordpress-virtual-assistant", label: "WordPress Support", text: "Content uploads, page updates, blog publishing and routine site admin." },
  { slug: "recruitment-virtual-assistant", label: "Recruitment Support", text: "Candidate research, interview scheduling and ATS updates." },
  { slug: "data-entry-research", label: "Data Entry & Research", text: "Spreadsheets, data cleaning, CRM entry, research and reports." },
  { slug: "bookkeeping-virtual-assistant", label: "Bookkeeping Support", text: "Invoices, receipts, expense categorisation and payment follow-ups." },
];

/** Priority industries featured on the homepage. */
export const priorityIndustries = ["startups", "small-businesses", "ecommerce", "real-estate", "marketing-agencies", "recruitment-staffing", "consulting", "technology-saas", "property-management", "legal-services"];

/** International markets with dedicated pages. */
export const markets: { slug: string; name: string; href: string; flag: string; tz: string; currency: string }[] = [
  { slug: "usa", name: "United States", href: "/virtual-assistant-usa/", flag: "US", tz: "Nairobi is 7-11 hours ahead of mainland US time", currency: "USD" },
  { slug: "uk", name: "United Kingdom", href: "/virtual-assistant-uk/", flag: "UK", tz: "Nairobi is 2-3 hours ahead of UK time", currency: "GBP" },
  { slug: "australia", name: "Australia", href: "/virtual-assistant-australia/", flag: "AU", tz: "Nairobi is 5-8 hours behind Australian time", currency: "AUD" },
  { slug: "canada", name: "Canada", href: "/virtual-assistant-canada/", flag: "CA", tz: "Nairobi is 6-11 hours ahead of most of Canada", currency: "CAD" },
];
