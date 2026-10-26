import type { IconName } from "@/components/ui/Icon";

export const problems: { title: string; text: string; icon: IconName }[] = [
  { title: "Overloaded inboxes", text: "Important messages get buried under newsletters, notifications and routine requests.", icon: "inbox" },
  { title: "Missed customer enquiries", text: "Questions wait hours or days for a reply, and some customers simply move on.", icon: "alert" },
  { title: "Scheduling conflicts", text: "Back-and-forth emails, double bookings and meetings that eat the whole day.", icon: "calendar" },
  { title: "Out-of-date CRM records", text: "Notes never get logged, so pipeline reports stop telling the truth.", icon: "database" },
  { title: "Delayed follow-ups", text: "Quotes, proposals and invoices go unchased while you deal with today's fires.", icon: "repeat" },
  { title: "Repetitive store admin", text: "Product listings, order checks and returns take hours every week.", icon: "cart" },
  { title: "Admin backlogs", text: "Filing, data entry and paperwork pile up until a weekend disappears.", icon: "hourglass" },
  { title: "No time to grow", text: "Strategy, sales and customers get whatever time is left over, which is rarely enough.", icon: "timerOff" },
];

export const humanAiCards: { title: string; text: string; icon: IconName }[] = [
  { title: "Real Conversations", text: "Customers sometimes need a thoughtful, personalized response, not another automated message.", icon: "chat" },
  { title: "Human Judgment", text: "When priorities change or situations become complicated, human understanding and appropriate escalation matter.", icon: "brain" },
  { title: "Follow-Through", text: "Generating a response is one thing. Making sure the issue is resolved is another.", icon: "checkCircle" },
  { title: "Smarter Workflows", text: "We support efficient ways of working, including suitable AI tools where approved and appropriate.", icon: "workflow" },
];

export const whyBenefits: { title: string; text: string; icon: IconName }[] = [
  { title: "Human-led support", text: "Real people who understand context, notice when something looks wrong and take responsibility for finishing the job.", icon: "heartHandshake" },
  { title: "Flexible arrangements", text: "Hourly help, a monthly package or a dedicated assistant. Support is reviewed as your workload changes.", icon: "shuffle" },
  { title: "Skilled assistance", text: "Nairobi-based professionals with strong written English who are comfortable in the cloud tools your team already uses.", icon: "userCheck" },
  { title: "Clear communication", text: "Agreed channels, response expectations and regular check-ins, so you always know what is done and what needs you.", icon: "message" },
  { title: "Agreed working-hour overlap", text: "We agree the hours that overlap with your day before work starts. No vague promises of round-the-clock cover.", icon: "clock" },
  { title: "Practical onboarding", text: "We document how you like things done as we go, so support improves every week instead of starting from scratch.", icon: "clipboard" },
  { title: "Responsible AI use", text: "AI tools only where you approve them, with a person checking every output and no confidential data in unapproved tools.", icon: "bot" },
  { title: "Cost-conscious outsourcing", text: "Add capable support without the recruitment, payroll and office overheads that come with a local hire.", icon: "coins" },
];

export const steps: { n: string; title: string; text: string; icon: IconName }[] = [
  { n: "01", title: "Tell us what you need", text: "Book a free consultation or send an enquiry, and tell us which tasks are taking up your time.", icon: "phoneCall" },
  { n: "02", title: "Discuss your workflow", text: "We talk through your tools, processes, priorities, communication preferences and the working-hour overlap you need.", icon: "workflow" },
  { n: "03", title: "Agree scope and pricing", text: "You receive a clear written proposal covering tasks, availability, hours and price, with no obligation.", icon: "clipboard" },
  { n: "04", title: "Onboard and delegate", text: "We set up secure access, document your first processes and you start handing work over, with regular check-ins.", icon: "rocket" },
];

export const pricingFactors: { title: string; text: string; icon: IconName }[] = [
  { title: "Workload", text: "The volume of tasks and how predictable it is week to week.", icon: "layers" },
  { title: "Complexity", text: "Routine admin is scoped differently from multi-step, judgment-heavy work.", icon: "brain" },
  { title: "Hours", text: "The number of hours of support you need each week or month.", icon: "clock" },
  { title: "Specialist skills", text: "Design, technical, e-commerce or industry-specific experience.", icon: "sparkles" },
  { title: "Working-hour requirements", text: "Live overlap with your business day versus flexible, asynchronous hours.", icon: "globe" },
  { title: "Engagement duration", text: "Ongoing support, a fixed-term project or a trial period.", icon: "calendar" },
];

export const comparisonRows: { label: string; inHouse: string; freelancer: string; managed: string }[] = [
  { label: "Flexibility", inHouse: "Fixed role and hours; changes take time.", freelancer: "Flexible, but availability can vary between projects.", managed: "Support adjusted as your workload changes." },
  { label: "Recruitment", inHouse: "You advertise, interview, vet and hire.", freelancer: "You search marketplaces, review profiles and test.", managed: "We help scope the role and match a suitable assistant." },
  { label: "Working arrangements", inHouse: "Employment contract, benefits and local employment rules.", freelancer: "Individual agreements per freelancer.", managed: "One clear service agreement with defined scope." },
  { label: "Administrative overhead", inHouse: "Payroll, equipment, workspace and HR admin.", freelancer: "Invoices, payments and tool access for each person.", managed: "Handled within the service; you review one relationship." },
  { label: "Management requirements", inHouse: "Day-to-day management and development.", freelancer: "You manage quality, deadlines and handovers.", managed: "Shared: you set priorities, we support onboarding and quality." },
  { label: "Scalability", inHouse: "Adding capacity usually means another hire.", freelancer: "Finding more freelancers takes time.", managed: "Hours or specialist support can be added as needed." },
];

export const delegateTasks = [
  "Emails", "Scheduling", "Customer Support", "Data Entry", "Research", "Lead Follow-ups",
  "E-commerce Administration", "Social Media", "Executive Assistance", "Project Coordination",
];

/** Trust & security commitments (no certification claims). */

export const trustPoints: { title: string; text: string; icon: IconName }[] = [
  { title: "Transparent onboarding", text: "A clear, written scope of work, agreed tools and channels, and a named point of contact before any work begins.", icon: "clipboard" },
  { title: "Confidentiality by default", text: "Confidentiality expectations in writing, NDAs signed on request, and discretion with everything we see in your systems.", icon: "lock" },
  { title: "Secure access practices", text: "Least-privilege access, individual logins or password managers instead of shared passwords, and access removed when no longer needed.", icon: "shield" },
  { title: "Careful data handling", text: "Your data stays in your systems wherever possible. We don't copy client data to personal devices or unapproved tools.", icon: "database" },
  { title: "Responsible AI use", text: "AI tools are used only where you approve them, with a person checking every output, and never with confidential data you haven't cleared.", icon: "bot" },
  { title: "Honest communication", text: "Clear expectations on availability, turnaround and scope. If something isn't a good fit, we'll say so.", icon: "message" },
];
