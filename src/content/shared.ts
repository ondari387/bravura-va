import type { IconName } from "@/components/ui/Icon";

export const problems: { title: string; text: string; icon: IconName }[] = [
  { title: "Endless Admin", text: "Your day disappears into emails, spreadsheets, scheduling and routine tasks.", icon: "hourglass" },
  { title: "Missed Opportunities", text: "Slow customer responses and forgotten follow-ups can cost your business valuable opportunities.", icon: "alert" },
  { title: "Hiring Pressure", text: "You need extra support, but a full-time employee may not be the right fit yet.", icon: "users" },
  { title: "No Time to Grow", text: "You're too busy managing the daily workload to focus on strategy, customers and revenue.", icon: "timerOff" },
];

export const humanAiCards: { title: string; text: string; icon: IconName }[] = [
  { title: "Real Conversations", text: "Customers sometimes need a thoughtful, personalized response, not another automated message.", icon: "chat" },
  { title: "Human Judgment", text: "When priorities change or situations become complicated, human understanding and appropriate escalation matter.", icon: "brain" },
  { title: "Follow-Through", text: "Generating a response is one thing. Making sure the issue is resolved is another.", icon: "checkCircle" },
  { title: "Smarter Workflows", text: "We support efficient ways of working, including suitable AI tools where approved and appropriate.", icon: "workflow" },
];

export const whyBenefits: { title: string; text: string; icon: IconName }[] = [
  { title: "Professional African Talent", text: "Our assistants are Nairobi-based professionals who communicate fluently in English, understand international business etiquette and are comfortable with the cloud tools your team already uses.", icon: "userCheck" },
  { title: "Cost-Conscious Business Support", text: "Get dependable help without automatically taking on the recruitment costs, office space and overheads that come with a local hire. You pay for the support you need, scoped clearly up front.", icon: "coins" },
  { title: "Flexible Working Arrangements", text: "Start part-time, move to dedicated support, or add specialist help for a project. Arrangements are reviewed as your workload changes rather than locked into a one-size-fits-all package.", icon: "shuffle" },
  { title: "Clear Communication", text: "Agreed channels, response expectations and regular check-ins from day one. You'll know what's in progress, what's done and what needs your input, without chasing.", icon: "message" },
  { title: "Human-Led Assistance", text: "Real people who understand context, notice when something looks wrong, escalate the right issues and take responsibility for getting things finished, using AI only where it genuinely helps.", icon: "heartHandshake" },
  { title: "Support Built Around Your Business", text: "We learn your tools, your tone of voice and your priorities, then document how you like things done so support gets more useful over time instead of starting from scratch each week.", icon: "layers" },
];

export const steps: { n: string; title: string; text: string; icon: IconName }[] = [
  { n: "01", title: "Tell Us What You Need", text: "Book a free discovery call and explain the tasks taking up your time.", icon: "phoneCall" },
  { n: "02", title: "Build Your Support Plan", text: "We discuss your workload, priorities, tools, communication requirements and suitable support arrangement.", icon: "clipboard" },
  { n: "03", title: "Delegate and Focus on Growth", text: "Once your engagement is agreed and onboarding is complete, start delegating tasks and tracking progress.", icon: "rocket" },
];

export const pricingModels: { id: string; name: string; text: string; bestFor: string[]; icon: IconName; featured?: boolean; price: string }[] = [
  {
    id: "part-time", name: "Part-Time Support", icon: "clock3",
    text: "For businesses with recurring tasks and limited weekly support requirements.",
    bestFor: ["Founders testing delegation for the first time", "Regular inbox, calendar and admin tasks", "A set number of hours each week", "Room to scale up when you're ready"],
    price: "Custom quote", // EDIT: replace with confirmed pricing, e.g. "From $X / month"
  },
  {
    id: "dedicated", name: "Dedicated Support", icon: "userCheck", featured: true,
    text: "For businesses that need consistent ongoing assistance.",
    bestFor: ["A consistent assistant who learns your business", "Agreed working-hour overlap with your team", "Daily customer, admin or operations support", "Regular reporting and check-ins"],
    price: "Custom quote",
  },
  {
    id: "specialist", name: "Specialist Support", icon: "sparkles",
    text: "For creative, technical or industry-specific tasks.",
    bestFor: ["Graphic design, content and social media", "WordPress and Shopify website updates", "E-commerce, real estate or recruitment workflows", "Project-based or ongoing specialist work"],
    price: "Custom quote",
  },
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
