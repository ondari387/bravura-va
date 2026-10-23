"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { delegateTasks } from "@/content/shared";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { TASKS_STORAGE_KEY } from "@/components/forms/EnquiryForm";
import { track } from "@/lib/analytics";

export function TaskChecklist() {
  const [sel, setSel] = useState<string[]>([]);
  const router = useRouter();
  const toggle = (t: string) => setSel((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
  const go = () => {
    try { sessionStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(sel)); } catch { /* ignore */ }
    track("delegate_checklist_submit", { count: sel.length });
    router.push(`/contact/?tasks=${sel.map(encodeURIComponent).join(",")}#enquiry`);
  };
  return (
    <section className="relative overflow-hidden bg-aqua-pale py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute -left-20 bottom-[-5rem] h-64 w-64 rounded-full bg-orange" />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">What can you delegate?</p>
          <h2 className="h-section mt-4">If It&apos;s Taking Your Time, Let&apos;s See What You Can Delegate.</h2>
          <p className="lead mt-5">Tick everything that&apos;s eating into your week. We&apos;ll carry your list straight into the enquiry form so you don&apos;t have to type it twice.</p>
        </div>
        <div className="rounded-[2.25rem] bg-white p-6 shadow-lift sm:p-8">
          <fieldset>
            <legend className="font-heading text-lg font-extrabold text-ink">I&apos;d like help with...</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {delegateTasks.map((t) => {
                const on = sel.includes(t);
                return (
                  <label key={t} className={cn("flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3.5 text-[15px] font-semibold ring-1 transition", on ? "bg-aqua text-teal ring-aqua" : "bg-offwhite text-ink ring-teal/5 hover:ring-aqua")}>
                    <input type="checkbox" checked={on} onChange={() => toggle(t)} className="sr-only" />
                    <span className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-lg transition", on ? "bg-teal text-white" : "bg-white ring-1 ring-teal/20")}>{on && <Icon name="check" className="h-4 w-4" />}</span>
                    {t}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-muted" aria-live="polite">{sel.length ? `${sel.length} task${sel.length > 1 ? "s" : ""} selected` : "Select one or more tasks"}</p>
            <button type="button" onClick={go} disabled={!sel.length} className={buttonClass("primary")}>
              Get Help With These Tasks <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
