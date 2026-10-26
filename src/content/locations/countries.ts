import type { LocationPage } from "./types";

/** Supporting pages about where the team is based (Kenya) and the wider African outsourcing context. */
export const originPages: LocationPage[] = [
  {
    slug: "kenya",
    path: "/virtual-assistant-kenya/",
    name: "Kenya",
    metaTitle: "Virtual Assistant Kenya | Hire Kenyan Virtual Assistants in Nairobi | Bravura VA",
    metaDescription: "Hire professional Kenyan virtual assistants from Bravura VA in Nairobi. English-speaking, human-led remote support for international businesses, and for Kenyan companies too.",
    eyebrow: "Virtual assistants in Kenya",
    h1: "Professional Virtual Assistants From Nairobi, Kenya",
    intro: "Kenya has become one of the most interesting places in the world to find remote business support. Bravura VA is a Nairobi-based virtual assistant company connecting businesses with skilled, English-speaking Kenyan professionals.",
    image: "womanOfficeTeam",
    context: {
      title: "Why Kenya for virtual assistance?",
      paragraphs: [
        "Kenya combines a young, well-educated population with strong English-language skills: English and Kiswahili are the country's official languages, and English is widely used in schooling, government and business. That gives international clients a workforce that communicates naturally in written and spoken English.",
        "Nairobi, the capital, is a regional hub for business, technology and international organizations, and is often called the heart of 'Silicon Savannah'. Kenya is also known worldwide for digital innovation such as M-Pesa mobile money, and it has a growing community of professionals working remotely for clients abroad.",
        "Practically, Kenya runs on a single time zone, East Africa Time (UTC+3), with no daylight saving. And with the Data Protection Act, 2019 and an independent Office of the Data Protection Commissioner, Kenya has a modern legal framework for personal data.",
      ],
    },
    timezone: {
      zone: "East Africa Time (EAT), UTC+3",
      difference: "2-3 hours ahead of the UK, 7-11 hours ahead of the mainland US and most of Canada, and 5-8 hours behind Australia.",
      overlap: "Nairobi's position makes it possible to overlap with the UK working day, US mornings and Australian afternoons, with the right schedule.",
      tips: ["No daylight saving in Kenya: predictable scheduling", "Overlap windows agreed for each client", "Async workflows for distant time zones", "Clear end-of-day handovers"],
    },
    industries: [
      { name: "Startups", slug: "startups", why: "Lean teams who need flexible support." },
      { name: "Small Businesses", slug: "small-businesses", why: "Owners who want dependable, cost-conscious help." },
      { name: "E-commerce", slug: "ecommerce", why: "Online stores needing daily operations support." },
      { name: "Marketing Agencies", slug: "marketing-agencies", why: "Agencies needing production capacity." },
    ],
    services: ["administrative-support", "customer-support", "executive-virtual-assistant", "data-entry-research", "social-media-management", "lead-generation"],
    considerations: {
      title: "What to look for when hiring a Kenyan virtual assistant",
      points: [
        "Strong written English and a clear communication style",
        "Experience with the specific tools your business uses",
        "Reliable internet and a professional working setup",
        "Clear agreements on confidentiality, data handling and working hours",
        "A provider who supports onboarding and quality, not just a profile on a marketplace",
      ],
    },
    extra: {
      title: "Are you a Kenyan business?",
      paragraphs: [
        "While our services are designed primarily for clients in the US, UK and Australia, Kenyan companies can also work with Bravura VA for remote administrative, customer and creative support. Get in touch to discuss your needs.",
      ],
    },
    faqs: [
      { q: "Why hire a virtual assistant from Kenya?", a: "Kenya offers English-speaking professionals, a predictable time zone with useful overlap for the UK, US and Australia, and a growing remote-work ecosystem centred on Nairobi." },
      { q: "Is Bravura VA a Kenyan company?", a: "Yes. Bravura VA is headquartered in Nairobi, Kenya." },
      { q: "Does Kenya have data protection laws?", a: "Yes. Kenya's Data Protection Act, 2019 regulates the processing of personal data and is overseen by the Office of the Data Protection Commissioner." },
      { q: "Do Kenyan VAs speak English fluently?", a: "English is an official language in Kenya and widely used in education and business. We assess communication skills when matching assistants with clients." },
    ],
  },
  {
    slug: "africa",
    path: "/virtual-assistant-africa/",
    name: "Africa",
    metaTitle: "Hire Virtual Assistants in Africa | African Virtual Assistant Company | Bravura VA",
    metaDescription: "Considering African virtual assistants? Learn why international businesses are hiring remote support in Africa, how key markets compare, and how Bravura VA supports clients from Nairobi, Kenya.",
    eyebrow: "African virtual assistants",
    h1: "Hiring Virtual Assistants in Africa: Talent, Time Zones and Trust",
    intro: "Africa has one of the youngest populations in the world and a fast-growing community of remote professionals. Bravura VA is an African virtual assistant company based in Nairobi, Kenya, helping international businesses tap into that talent with confidence.",
    image: "teamStanding",
    context: {
      title: "Why international businesses are looking to Africa",
      paragraphs: [
        "For years, outsourcing conversations centred on a handful of Asian destinations. Today, more businesses are discovering that Africa offers capable, English-speaking professionals in time zones that line up well with Europe and reasonably with the Americas and Australia.",
        "Several African markets have growing remote-work and business-services sectors. Kenya and Nigeria are known for vibrant tech communities in Nairobi and Lagos; South Africa has an established customer-service industry; and countries such as Ghana and Rwanda are investing in digital skills. Each market has its own strengths, languages and time zones.",
        "Bravura VA operates from Kenya. We focus on doing one thing well, providing professional, human-led support from Nairobi, rather than claiming operations across the continent.",
      ],
    },
    timezone: {
      zone: "African time zones range from UTC+0 to UTC+4",
      difference: "Most of Africa sits between GMT and GMT+3, giving strong overlap with UK and European business hours.",
      overlap: "Kenya (UTC+3) overlaps with the full UK day, US East Coast mornings and Australian afternoons.",
      tips: ["Choose a market whose time zone fits your working day", "Check English-language proficiency for client-facing roles", "Consider reliability of infrastructure and backup arrangements", "Look for a provider with clear contracts and support"],
    },
    industries: [
      { name: "Startups", slug: "startups", why: "Cost-conscious, flexible support for growing teams." },
      { name: "Technology & SaaS", slug: "technology-saas", why: "Tier-1 support and operations help." },
      { name: "E-commerce", slug: "ecommerce", why: "Daily store and customer operations." },
      { name: "Nonprofits", slug: "nonprofits", why: "Mission-driven organizations stretching budgets." },
    ],
    services: ["administrative-support", "customer-support", "data-entry-research", "lead-generation", "content-writing", "operations-support"],
    considerations: {
      title: "Comparing African outsourcing markets",
      points: [
        "Kenya (UTC+3): English and Kiswahili official languages; Nairobi tech hub; strong overlap with the UK and Europe.",
        "Nigeria (UTC+1): English official language; large population and a vibrant Lagos tech scene; close overlap with UK hours.",
        "South Africa (UTC+2): established customer-service and BPO industry; English widely used in business.",
        "Ghana (UTC+0): English official language; same time as the UK in winter.",
        "Whichever market you choose, focus on communication, reliability, data protection and the support structure around the assistant.",
      ],
    },
    faqs: [
      { q: "Is Bravura VA operating in countries other than Kenya?", a: "No. Bravura VA is based in Nairobi, Kenya. We mention other African markets for context only." },
      { q: "Are African virtual assistants good at English?", a: "English is an official or widely used business language in many African countries, including Kenya, Nigeria, Ghana and South Africa. As with any hire, assess communication skills for your specific role." },
      { q: "How do I choose between Kenya, Nigeria and South Africa?", a: "Consider time-zone fit, the type of work, language needs and whether you want a managed provider or to hire individuals directly. Our blog compares outsourcing options in more depth." },
    ],
  },
];
