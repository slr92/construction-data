"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  isReferrer,
  platformsBySystem,
  pruneAnswers,
  titleOf,
  visibleQuestions,
  type Answers,
  type Option,
  type Question,
} from "@/lib/enquiry";
import type { Estimate } from "@/lib/estimate";
import { commitments, site } from "@/lib/site";

// Multi-step enquiry for /estimate. Answers autosave in the browser so people
// can leave and come back. The estimate itself is calculated on the server.

const STORAGE_KEY = "cdb-enquiry-v1";

type Contact = Record<"firstName" | "lastName" | "company" | "yourFirm" | "website" | "email" | "phone" | "referredBy", string>;
const emptyContact: Contact = { firstName: "", lastName: "", company: "", yourFirm: "", website: "", email: "", phone: "", referredBy: "" };

type Status = "idle" | "sending" | "invalid" | "failed";

const gbp = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

export function EnquiryForm({ showsInstantEstimate }: { showsInstantEstimate: boolean }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [status, setStatus] = useState<Status>("idle");
  const [done, setDone] = useState<{ estimate: Estimate | null } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const advancing = useRef(false);

  const path = useMemo(() => visibleQuestions(answers), [answers]);
  const onContact = step >= path.length;
  const question = onContact ? null : path[step];
  const referrer = isReferrer(answers);

  // Restore saved progress.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved?.answers) {
        setAnswers(saved.answers);
        setStep(Math.min(saved.step ?? 0, visibleQuestions(saved.answers).length));
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || done) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step }));
    } catch {}
  }, [answers, step, loaded, done]);

  // Move focus to the new question so keyboard and screen reader users follow along.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, done]);

  function next(updated: Answers = answers) {
    setStep((s) => Math.min(s + 1, visibleQuestions(updated).length));
  }

  function back() {
    setStatus("idle");
    setStep((s) => Math.max(s - 1, 0));
  }

  function chooseSingle(q: Question, value: string) {
    if (advancing.current) return;
    advancing.current = true;
    const updated = { ...answers, [q.id]: value };
    setAnswers(updated);
    // Short pause so the tick is visible before the next question appears.
    window.setTimeout(() => {
      next(updated);
      advancing.current = false;
    }, 180);
  }

  function toggle(key: string, value: string) {
    setAnswers((a) => {
      const current = Array.isArray(a[key]) ? (a[key] as string[]) : [];
      return { ...a, [key]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value] };
    });
  }

  function canContinue(q: Question) {
    if (q.kind === "multi") return Array.isArray(answers[q.id]) && (answers[q.id] as string[]).length > 0;
    if (q.kind === "groups") return q.groups.every((g) => typeof answers[g.id] === "string");
    return true;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }
    setStatus("sending");
    const honeypot = (new FormData(form).get("company_url_hp") as string) ?? "";
    const { firstName, lastName, ...rest } = contact;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "estimate_enquiry",
          fields: { name: `${firstName} ${lastName}`.trim(), firstName, lastName, ...rest },
          answers: pruneAnswers(answers),
          website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      setDone({ estimate: data.estimate ?? null });
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    } catch {
      setStatus("failed");
    }
  }

  if (!loaded) return <div className="min-h-[480px]" />;

  if (done) {
    return (
      <div ref={topRef} className="scroll-mt-24">
        <Result estimate={done.estimate} answers={answers} contact={contact} headingRef={headingRef} />
      </div>
    );
  }

  const total = path.length;
  const progress = onContact ? 100 : Math.round((step / total) * 100);

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span>{onContact ? "Last step" : `Question ${step + 1} of ${total}`}</span>
        {step > 0 && (
          <button type="button" onClick={back} className="uppercase tracking-[0.12em] hover:text-ink">
            ← Back
          </button>
        )}
      </div>
      <div className="mt-3 h-1 bg-line" aria-hidden="true">
        <div className="h-1 bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {question ? (
        <div className="mt-10">
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight text-balance outline-none sm:text-3xl">
            {titleOf(question, answers)}
          </h2>
          {question.subtitle && <p className="mt-3 text-lg text-muted">{question.subtitle}</p>}
          <div className="mt-8">
            <QuestionBody question={question} answers={answers} onSingle={chooseSingle} onToggle={toggle} onGroup={(id, v) => setAnswers((a) => ({ ...a, [id]: v }))} />
          </div>
          {question.kind !== "single" && (
            <div className="mt-8 flex items-center gap-5">
              <button
                type="button"
                onClick={() => next()}
                disabled={!canContinue(question)}
                className="inline-flex h-12 items-center justify-center bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
              {question.kind === "platforms" && (
                <button type="button" onClick={() => next()} className="text-base text-muted underline hover:text-ink">
                  Skip
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <ContactStep
          contact={contact}
          setContact={setContact}
          referrer={referrer}
          showsInstantEstimate={showsInstantEstimate}
          status={status}
          onSubmit={submit}
          headingRef={headingRef}
          answers={answers}
        />
      )}
    </div>
  );
}

function QuestionBody({
  question: q,
  answers,
  onSingle,
  onToggle,
  onGroup,
}: {
  question: Question;
  answers: Answers;
  onSingle: (q: Question, v: string) => void;
  onToggle: (key: string, v: string) => void;
  onGroup: (id: string, v: string) => void;
}) {
  if (q.kind === "single") {
    return (
      <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label={titleOf(q, answers)}>
        {q.options.map((o) => (
          <Choice key={o.value} option={o} selected={answers[q.id] === o.value} onClick={() => onSingle(q, o.value)} role="radio" />
        ))}
      </div>
    );
  }

  if (q.kind === "multi") {
    const picked = Array.isArray(answers[q.id]) ? (answers[q.id] as string[]) : [];
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {q.options.map((o) => (
          <Choice key={o.value} option={o} selected={picked.includes(o.value)} onClick={() => onToggle(q.id, o.value)} role="checkbox" />
        ))}
      </div>
    );
  }

  if (q.kind === "groups") {
    return (
      <div className="grid gap-10">
        {q.groups.map((g) => (
          <fieldset key={g.id}>
            <legend className="text-lg font-semibold">{g.prompt}</legend>
            {g.hint && <p className="mt-1 text-muted">{g.hint}</p>}
            <div className={`mt-4 grid gap-3 ${g.options.some((o) => o.description) ? "sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`} role="radiogroup" aria-label={g.prompt}>
              {g.options.map((o) => (
                <Choice key={o.value} option={o} selected={answers[g.id] === o.value} onClick={() => onGroup(g.id, o.value)} role="radio" compact={!o.description} />
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    );
  }

  // platforms: one chip group per system ticked in the previous question.
  const systems = Array.isArray(answers.systems) ? (answers.systems as string[]) : [];
  const picked = Array.isArray(answers.platforms) ? (answers.platforms as string[]) : [];
  return (
    <div className="grid gap-8">
      {systems.map((system) => (
        <fieldset key={system}>
          <legend className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{system}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(platformsBySystem[system] ?? []).map((tool) => {
              const value = `${system}: ${tool}`;
              const on = picked.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => onToggle("platforms", value)}
                  className={`border px-3.5 py-2 text-base transition-colors ${on ? "border-accent bg-accent/10 text-ink" : "border-line bg-card text-ink-soft hover:border-ink/40"}`}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

function Choice({
  option,
  selected,
  onClick,
  role,
  compact = false,
}: {
  option: Option;
  selected: boolean;
  onClick: () => void;
  role: "radio" | "checkbox";
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={`flex w-full items-start gap-3 border text-left transition-colors ${compact ? "px-4 py-3" : "p-4"} ${
        selected ? "border-accent bg-accent/5" : "border-line bg-card hover:border-ink/40"
      }`}
    >
      <span
        aria-hidden="true"
        className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center border-2 ${role === "radio" ? "rounded-full" : ""} ${
          selected ? "border-accent bg-accent" : "border-ink/30"
        }`}
      >
        {selected && <span className={`h-1.5 w-1.5 bg-white ${role === "radio" ? "rounded-full" : ""}`} />}
      </span>
      <span>
        <span className="block font-medium">{option.value}</span>
        {option.description && <span className="mt-1 block text-muted">{option.description}</span>}
      </span>
    </button>
  );
}

function ContactStep({
  contact,
  setContact,
  referrer,
  showsInstantEstimate,
  status,
  onSubmit,
  headingRef,
  answers,
}: {
  contact: Contact;
  setContact: React.Dispatch<React.SetStateAction<Contact>>;
  referrer: boolean;
  showsInstantEstimate: boolean;
  status: Status;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  answers: Answers;
}) {
  const field = (name: keyof Contact) => ({
    id: `enquiry-${name}`,
    name,
    value: contact[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setContact((c) => ({ ...c, [name]: e.target.value })),
    className: "mt-2 w-full border border-line bg-card px-3.5 py-2.5 text-base outline-none transition-colors focus:border-ink/50",
  });
  const label = "block font-medium";
  const reply = commitments.replyWorkingDays === 1 ? "one working day" : `${commitments.replyWorkingDays} working days`;

  const summary = Object.entries(pruneAnswers(answers))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
  const mailBody = encodeURIComponent(
    `${contact.firstName} ${contact.lastName}\n${contact.company}\n${contact.email}\n${contact.phone}\n\n${summary}`,
  );

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10">
      <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight outline-none sm:text-3xl">
        {showsInstantEstimate ? "Your estimate is ready." : "Where should we send the estimate?"}
      </h2>
      <p className="mt-3 text-lg text-muted">
        {showsInstantEstimate
          ? "Tell us who you are and we'll show your range now and email you the full breakdown."
          : `Tell us who you are and we'll email the estimate within ${reply}.`}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-firstName" className={label}>First name</label>
          <input {...field("firstName")} required maxLength={100} autoComplete="given-name" />
        </div>
        <div>
          <label htmlFor="enquiry-lastName" className={label}>Last name</label>
          <input {...field("lastName")} required maxLength={100} autoComplete="family-name" />
        </div>
        {referrer && (
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-yourFirm" className={label}>Your firm</label>
            <input {...field("yourFirm")} required maxLength={200} autoComplete="organization" />
          </div>
        )}
        <div>
          <label htmlFor="enquiry-company" className={label}>{referrer ? "The contractor you're introducing" : "Company"}</label>
          <input {...field("company")} required maxLength={200} autoComplete={referrer ? "off" : "organization"} />
        </div>
        <div>
          <label htmlFor="enquiry-website" className={label}>
            {referrer ? "Their website" : "Company website"} <span className="font-normal text-muted">(optional)</span>
          </label>
          <input {...field("website")} maxLength={300} placeholder="company.co.uk" />
        </div>
        <div>
          <label htmlFor="enquiry-email" className={label}>{referrer ? "Your work email" : "Work email"}</label>
          <input {...field("email")} type="email" required maxLength={254} autoComplete="email" placeholder="you@company.co.uk" />
        </div>
        <div>
          <label htmlFor="enquiry-phone" className={label}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input {...field("phone")} type="tel" maxLength={40} autoComplete="tel" placeholder="Best number to reach you" />
        </div>
        {!referrer && (
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-referredBy" className={label}>
              Who sent you our way? <span className="font-normal text-muted">(optional)</span>
            </label>
            <p className="mt-1 text-muted">So we can thank them.</p>
            <input {...field("referredBy")} maxLength={200} placeholder="A person, company or event" />
          </div>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_url_hp">Leave this empty</label>
        <input id="company_url_hp" name="company_url_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "invalid" && <p className="mt-5 text-accent">Please fill in the required fields.</p>}
      {status === "failed" && (
        <p className="mt-5 text-ink-soft">
          That didn&rsquo;t go through.{" "}
          <a className="text-accent underline" href={`mailto:${site.email}?subject=Estimate%20enquiry&body=${mailBody}`}>
            Send your answers by email instead
          </a>
          .
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Get the estimate"}
        </button>
        <p className="text-muted">We only use this to send your estimate and follow up about it. No newsletters.</p>
      </div>
    </form>
  );
}

function Result({
  estimate,
  answers,
  contact,
  headingRef,
}: {
  estimate: Estimate | null;
  answers: Answers;
  contact: Contact;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const referrer = isReferrer(answers);
  const contractsFlag = answers.ownership === "Some of them" || answers.ownership === "Not sure yet";
  const reply = commitments.replyWorkingDays === 1 ? "one working day" : `${commitments.replyWorkingDays} working days`;

  const nextSteps = referrer
    ? [
        "We email you first to agree how to approach them. We won't contact them until you say so.",
        `We send the estimate within ${reply}, so you have something concrete to share.`,
        "We check their standard contracts and find a buyer. You share in the deal when it closes.",
      ]
    : [
        estimate ? "We email you the full breakdown." : `We email your estimate within ${reply}.`,
        "A short call to talk it through and answer your questions.",
        "We check your standard contracts so you know what you can sell.",
        "A buyer sees a small anonymised sample and makes a firm offer. You decide.",
      ];

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Received</p>
      <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-3xl font-semibold tracking-tight outline-none">
        {estimate ? "Your estimate" : `Thanks, ${contact.firstName}. We've got your answers.`}
      </h2>

      {estimate && (
        <div className="mt-8 border border-line bg-card p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-muted">Estimated value of one licence</p>
            <span className="bg-accent/10 px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-accent">{estimate.fit}</span>
          </div>
          <p className="mt-3 text-4xl font-semibold tracking-tight">
            {gbp.format(estimate.low)} to {gbp.format(estimate.high)}
          </p>
          {estimate.drivers.length > 0 && (
            <>
              <p className="mt-6 font-semibold">What drives it</p>
              <ul className="mt-3 grid gap-2">
                {estimate.drivers.map((d) => (
                  <li key={d} className="flex gap-3 text-muted">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {contractsFlag && !referrer && (
        <div className="mt-8 border-l-2 border-accent pl-5">
          <p className="text-lg">
            You said some records may be covered by client contracts. That&rsquo;s common, and we&rsquo;ll go through
            them with you before anything else happens.
          </p>
        </div>
      )}

      <h3 className="mt-10 text-xl font-semibold">What happens next</h3>
      <ol className="mt-4 grid gap-px border border-line bg-line">
        {nextSteps.map((s, i) => (
          <li key={s} className="flex gap-4 bg-card p-5">
            <span className="font-mono text-xs leading-6 text-accent">0{i + 1}</span>
            <p className="leading-relaxed text-ink-soft">{s}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-muted">
        An estimate is not an offer. The final price comes after a buyer has seen a small anonymised sample, and it
        goes up with long history, jobs you can follow from tender to final account, and specialist work.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        <Link href="/security" className="text-accent underline">
          How we handle your data
        </Link>
        <Link href="/" className="text-accent underline">
          Back to the home page
        </Link>
      </div>
    </div>
  );
}
