"use client";
import { useEffect, useState } from "react";

type Draft = { to: string; subject: string; body: string };

function readHash(): Draft | null {
  const p = new URLSearchParams(window.location.hash.slice(1));
  const to = p.get("to") || "";
  if (!to) return null;
  return { to, subject: p.get("subject") || "", body: p.get("body") || "" };
}

function mailto(d: Draft) {
  return `mailto:${encodeURIComponent(d.to)}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.body)}`;
}

export function ComposeRelay() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const d = readHash();
    setDraft(d);
    setReady(true);
    if (d) window.location.href = mailto(d);
  }, []);

  const copy = async (label: string, text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(label); } catch { setCopied(""); }
  };

  return (
    <section className="bg-offwhite py-16">
      <div className="container-x"><div className="mx-auto max-w-2xl">
        {!ready ? null : !draft ? (
          <p className="text-ink-muted">No email draft was found in this link.</p>
        ) : (
          <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
            <h1 className="font-heading text-2xl font-extrabold">Your email is opening in Mail</h1>
            <p className="mt-2 text-ink-muted">If it didn&apos;t open, use the button below, or copy the parts into webmail.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={mailto(draft)} className="rounded-full bg-aqua px-5 py-2.5 font-heading font-bold text-teal hover:bg-teal hover:text-white">Open in Mail</a>
              <button onClick={() => copy("To", draft.to)} className="rounded-full border border-teal/15 px-4 py-2.5 font-semibold">Copy address</button>
              <button onClick={() => copy("Subject", draft.subject)} className="rounded-full border border-teal/15 px-4 py-2.5 font-semibold">Copy subject</button>
              <button onClick={() => copy("Body", draft.body)} className="rounded-full border border-teal/15 px-4 py-2.5 font-semibold">Copy body</button>
            </div>
            <p className="mt-2 h-5 text-sm text-teal" aria-live="polite">{copied && `${copied} copied`}</p>
            <dl className="mt-4 space-y-3 text-[15px]">
              <div><dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">To</dt><dd className="select-all">{draft.to}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Subject</dt><dd>{draft.subject}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Body</dt><dd className="whitespace-pre-wrap rounded-2xl bg-offwhite p-4">{draft.body}</dd></div>
            </dl>
          </div>
        )}
      </div></div>
    </section>
  );
}
