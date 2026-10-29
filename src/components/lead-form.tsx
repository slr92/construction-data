"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  hint?: string;
  options?: string[];
};

type Props = {
  kind: "buyer_request" | "partner_application";
  fields: Field[];
  submitLabel: string;
  footnote?: string;
  success: { title: string; body: string };
  inverted?: boolean;
};

type Status = "idle" | "sending" | "sent" | "invalid" | "failed";

export function LeadForm({ kind, fields, submitLabel, footnote, success, inverted = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState<Record<string, string>>({});

  const input = inverted
    ? "border-paper/20 bg-ink-soft text-paper placeholder:text-paper/40 focus:border-paper/60"
    : "border-line bg-card text-ink focus:border-ink/50";
  const labelTone = inverted ? "text-paper" : "text-ink";
  const hintTone = inverted ? "text-paper/55" : "text-muted";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }
    setStatus("sending");
    const website = (new FormData(form).get("website") as string) ?? "";
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, fields: values, website }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className={`border p-8 ${inverted ? "border-paper/20" : "border-line bg-card"}`} role="status">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Received</p>
        <h3 className={`mt-3 text-2xl font-semibold ${labelTone}`}>{success.title}</h3>
        <p className={`mt-3 leading-relaxed ${hintTone}`}>{success.body}</p>
      </div>
    );
  }

  const mailBody = encodeURIComponent(fields.map((f) => `${f.label.replace(/\?$/, "")}: ${values[f.name] ?? ""}`).join("\n"));

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        const common = {
          id,
          name: f.name,
          required: f.required,
          value: values[f.name] ?? "",
          className: `w-full border px-3.5 py-2.5 outline-none transition-colors ${input}`,
        };
        const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
          setValues((v) => ({ ...v, [f.name]: e.target.value }));
        return (
          <div key={f.name}>
            <label htmlFor={id} className={`block text-sm font-medium ${labelTone}`}>
              {f.label}
              {!f.required && <span className={`ml-1 font-normal ${hintTone}`}>(optional)</span>}
            </label>
            {f.hint && <p className={`mt-1 text-sm ${hintTone}`}>{f.hint}</p>}
            <div className="mt-2">
              {f.type === "textarea" ? (
                <textarea {...common} rows={4} onChange={onChange} />
              ) : f.type === "select" ? (
                <select {...common} onChange={onChange}>
                  <option value="">Choose one</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input {...common} type={f.type ?? "text"} onChange={onChange} />
              )}
            </div>
          </div>
        );
      })}

      {/* Honeypot, hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${kind}-website`}>Leave this empty</label>
        <input id={`${kind}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "invalid" && <p className="text-sm text-accent">Please fill in the required fields.</p>}
      {status === "failed" && (
        <p className={`text-sm ${inverted ? "text-paper/80" : "text-ink-soft"}`}>
          That didn&rsquo;t go through.{" "}
          <a className="text-accent underline" href={`mailto:${site.email}?subject=${encodeURIComponent(submitLabel)}&body=${mailBody}`}>
            Send it by email instead
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center bg-accent px-6 text-base font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        {footnote && <p className={`text-sm ${hintTone}`}>{footnote}</p>}
      </div>
    </form>
  );
}
