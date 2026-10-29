import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For AI labs",
  description: "Licensed construction datasets from general and specialty contractors, linked at the project level, with per-record provenance.",
};

const offering = [
  {
    title: "Linked at the project level",
    body: "Estimates, schedules, RFIs, submittals, change orders, daily logs, site imagery and job cost from the same projects, joined by consistent IDs so you can follow a job from bid to closeout.",
  },
  {
    title: "Provenance on every record",
    body: "Source system, rights basis and any consent obtained, recorded per record. Built to support training-data disclosure duties such as Article 53 of the EU AI Act.",
  },
  {
    title: "Consistent redaction",
    body: "People, clients, addresses, title blocks, professional stamps, photo location data and faces removed with one documented method across every seller.",
  },
  {
    title: "Formats you can use",
    body: "JSON or Parquet for structured records. Original PDFs and images with redaction applied. Schedule exports in XER or XML. IFC models where the rights allow it.",
  },
];

const terms = [
  { label: "Evaluation", body: "Redacted samples under NDA before you commit." },
  { label: "Non-exclusive", body: "Standard licence, lowest price, fastest to close." },
  { label: "Exclusive", body: "Sole rights to a dataset for an agreed term or in perpetuity." },
  { label: "Custom collection", body: "Tell us the trade, region or record type you need and we'll source it." },
];

export default function BuyersPage() {
  return (
    <>
      <section className="grid-sheet-light border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24">
          <Eyebrow>For AI labs and model builders</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Construction records with a clean rights chain.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Licensed datasets from general and specialty contractors, covering how real projects were estimated,
            scheduled, changed and delivered. Every record is cleared for rights and redacted before it reaches you.
          </p>
          <div className="mt-9">
            <ButtonLink href={`mailto:${site.email}?subject=Data%20request`}>Tell us what you need</ButtonLink>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="What you get" title="Data you can train on and defend." />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {offering.map((o) => (
              <div key={o.title} className="bg-card p-8">
                <h3 className="font-semibold">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-sheet bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading inverted eyebrow="Licensing" title="Start small, then scale." />
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {terms.map((t) => (
              <div key={t.label} className="border-t-2 border-accent pt-5">
                <dt className="font-semibold text-paper">{t.label}</dt>
                <dd className="mt-3 leading-relaxed text-paper/70">{t.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
