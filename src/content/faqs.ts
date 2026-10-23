import type { FAQ } from "@/components/ui/FAQAccordion";

export const faqGroups: { id: string; title: string; faqs: FAQ[] }[] = [
  {
    id: "getting-started",
    title: "Hiring a virtual assistant",
    faqs: [
      { q: "What does a virtual assistant actually do?", a: "A virtual assistant handles business tasks remotely, things like managing your inbox and calendar, replying to customer enquiries, updating your CRM, entering data, researching suppliers or prospects, coordinating projects, scheduling social posts or keeping your online store tidy. If a task is repeatable, can be explained, and can be done with online tools, it can usually be delegated." },
      { q: "How do I know which tasks to delegate first?", a: "Start with work that is frequent, time-consuming and doesn't need your personal expertise: inbox triage, scheduling, data entry, customer FAQs, follow-ups and reporting. On your discovery call we'll walk through a typical week with you and suggest a sensible first set of tasks." },
      { q: "Do I need to have processes documented before I start?", a: "No. Many clients don't. During onboarding we'll capture how you like things done, often by recording a short screen walkthrough or writing a simple checklist together, and turn that into working notes your assistant follows and keeps up to date." },
      { q: "What's the difference between Bravura VA and hiring a freelancer?", a: "With a freelancer you usually manage recruitment, quality, cover and continuity yourself. Bravura VA provides a managed service: we help scope the work, match you with a suitable assistant, support onboarding and stay involved so communication and quality stay on track. Freelancers can be a great fit for one-off projects; a managed service suits ongoing support." },
    ],
  },
  {
    id: "kenya",
    title: "Working with a Kenya-based team",
    faqs: [
      { q: "Why work with virtual assistants in Kenya?", a: "Kenya has a large, well-educated, English-speaking workforce and Nairobi is one of East Africa's most established business and technology hubs. English is an official language and widely used in business and education, which makes written and spoken communication with US, UK and Australian clients straightforward. Many businesses also find the cost of remote support more manageable than local hiring, while still getting professional, human-led help." },
      { q: "Is communication in English?", a: "Yes. All client communication is in English, by email, chat, video call or phone, whichever your team already uses." },
      { q: "Do you have offices in the USA, UK or Australia?", a: "No. Bravura VA is headquartered in Nairobi, Kenya, and supports clients in the United States, United Kingdom and Australia remotely. We're transparent about that from the first conversation." },
    ],
  },
  {
    id: "time-zones",
    title: "Time zones & availability",
    faqs: [
      { q: "How do time zones work between Kenya and my business?", a: "Kenya runs on East Africa Time (UTC+3) all year, with no daylight saving. That puts Nairobi 2-3 hours ahead of the UK, 7-8 hours ahead of US Eastern time, 10-11 hours ahead of US Pacific time, and 7-8 hours behind Sydney. We agree working hours with you during onboarding: some clients want live overlap with their business day, others prefer work completed overnight so it's ready each morning." },
      { q: "Can my assistant work during my business hours?", a: "Often, yes. Working hours are agreed before your engagement starts and depend on the role and the overlap you need. We'll be upfront about what's practical for your time zone rather than promising round-the-clock cover." },
      { q: "Do you offer 24/7 support?", a: "We don't promise 24/7 coverage by default. If you need extended hours, tell us on your discovery call and we'll discuss what arrangement, if any, is realistic for your needs." },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & engagement",
    faqs: [
      { q: "How much does a virtual assistant cost?", a: "Pricing depends on the hours you need, the complexity and skill level of the work, required working-hour overlap and how long the engagement runs. We'll give you a clear quote after a short discovery call, no hidden fees, and no obligation to proceed." },
      { q: "Can I start with part-time support?", a: "Yes. Many businesses begin with a part-time arrangement covering their most time-consuming tasks, then adjust as they see what works. Part-time support is a sensible way to test delegation without a big commitment." },
      { q: "Can I scale support up or down?", a: "Flexibility is a core part of how we work. Support can be reviewed and adjusted as your workload changes, subject to the notice terms agreed in your engagement." },
    ],
  },
  {
    id: "security",
    title: "Confidentiality, security & AI",
    faqs: [
      { q: "How do you keep my business information confidential?", a: "Confidentiality expectations are set out in writing before work begins, and we're happy to sign your NDA. We recommend least-privilege access: your assistant gets only the accounts they need, ideally through their own user login or a password manager rather than shared passwords, and access is removed when no longer required." },
      { q: "Will my assistant use AI tools?", a: "Only where you approve it and where it's appropriate. AI can speed up drafting, summarising and research, but a person stays responsible for checking the output, applying judgment and following through. We won't put your confidential or customer data into AI tools you haven't approved." },
      { q: "Can you support regulated industries like healthcare, legal or finance?", a: "We can provide administrative support to businesses in regulated sectors, but specialist obligations (for example HIPAA in US healthcare, or professional conduct rules in law and financial services) must be assessed before any work begins. Our assistants do not provide clinical, legal, financial or accounting advice." },
    ],
  },
  {
    id: "onboarding",
    title: "Onboarding & communication",
    faqs: [
      { q: "What happens after the discovery call?", a: "We'll summarise what we heard, recommend a support arrangement and send a proposal. Once you agree, we plan onboarding: tool access, communication channels, task priorities and how you'd like progress reported." },
      { q: "How will we communicate day to day?", a: "Through the channels you already use: Slack, Microsoft Teams, email, WhatsApp, Asana, Trello or similar. We agree response expectations and a regular check-in rhythm during onboarding so you always know what's in progress." },
      { q: "How do I track what my assistant is working on?", a: "We agree a reporting format that suits you: a shared task board, an end-of-day summary, a weekly report, or a combination. The goal is visibility without you having to chase updates." },
      { q: "Do you work with businesses outside the USA, UK and Australia?", a: "Our services are designed for businesses in the USA, UK and Australia, but we're happy to talk to international businesses elsewhere, including in Canada and across Africa, if the working arrangement fits." },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);

/** Homepage selection, one from each topic the brief requires. */
export const homeFaqs: FAQ[] = [
  faqGroups[0].faqs[0], // hiring
  faqGroups[1].faqs[0], // kenya
  faqGroups[2].faqs[0], // time zones
  faqGroups[3].faqs[0], // pricing
  faqGroups[4].faqs[0], // confidentiality
  faqGroups[4].faqs[1], // AI
  faqGroups[5].faqs[1], // communication
  faqGroups[5].faqs[0], // onboarding
  faqGroups[3].faqs[1], // part-time
  faqGroups[5].faqs[3], // international
];
