import { comparisonRows } from "@/content/shared";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { BookCallButton } from "@/components/layout/Booking";

export function BusinessValue({ tone = "white" }: { tone?: "white" | "off" }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">Business value</p>
          <h2 className="h-section mt-4">Grow Your Business Capacity. Without Automatically Growing Your Payroll.</h2>
          <div className="lead mt-6 space-y-4">
            <p>Hiring a full-time employee is the right move for many roles, but it isn&apos;t the only way to add capacity. When the work is recurring but doesn&apos;t yet justify a full-time hire, a managed virtual assistant service lets you add skilled help in a way that flexes with your workload.</p>
            <p>Every option has trade-offs. Here&apos;s an honest comparison to help you decide what fits your business right now.</p>
          </div>
          <BookCallButton className="mt-8" source="business_value">Discuss Your Support Needs</BookCallButton>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-teal/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <caption className="sr-only">Comparison of in-house hiring, freelancers and managed virtual assistant services</caption>
              <thead>
                <tr>
                  <th scope="col" className="bg-offwhite px-5 py-4 font-heading text-sm font-bold text-ink-muted"> </th>
                  <th scope="col" className="bg-offwhite px-5 py-4 font-heading font-bold text-ink">In-house hire</th>
                  <th scope="col" className="bg-offwhite px-5 py-4 font-heading font-bold text-ink">Freelancers</th>
                  <th scope="col" className="bg-teal px-5 py-4 font-heading font-bold text-white"><span className="flex items-center gap-2"><Icon name="star" className="h-4 w-4 fill-orange text-orange" />Managed VA service</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-offwhite/60" : ""}>
                    <th scope="row" className="px-5 py-4 align-top font-heading font-bold text-ink">{r.label}</th>
                    <td className="px-5 py-4 align-top text-ink-muted">{r.inHouse}</td>
                    <td className="px-5 py-4 align-top text-ink-muted">{r.freelancer}</td>
                    <td className="bg-aqua-pale/70 px-5 py-4 align-top font-medium text-ink">{r.managed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-teal/10 px-5 py-4 text-sm text-ink-muted">In-house hires are often the best choice for core, strategic roles. Managed virtual assistance works well for recurring support work that benefits from flexibility.</p>
        </div>
      </div>
    </Section>
  );
}
