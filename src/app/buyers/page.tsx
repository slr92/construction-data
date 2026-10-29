import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { LeadForm, type Field } from "@/components/lead-form";
import { Eyebrow, SectionHeading } from "@/components/section";
import { commitments } from "@/lib/site";

export const metadata: Metadata = {
  title: "For AI labs",
  description:
    "Licensed construction datasets from general and specialty contractors, linked at the project level, with per-record provenance.",
};

const offering = [
  {
    title: "Real field records, not synthetic",
    body: "Data from contractors doing the work: how jobs were bid, scheduled, changed, inspected and closed out, including the mistakes.",
  },
  {
    title: "Linked at the project level",
    body: "Estimates, schedules, RFIs, submittals, change orders, daily logs, site imagery and job cost from the same projects, joined by consistent IDs so you can follow a job from bid to closeout.",
  },
  {
    title: "De-identified by default",
    body: "People, clients, addresses, title blocks, professional stamps, photo location data and faces are removed with one documented method across every seller. Project facts that could pinpoint a building are banded.",
  },
  {
    title: "Clear provenance",
    body: "Every source is licensed under a signed agreement with the contractor, and every record carries its source system and rights basis. Built to support training-data disclosure duties such as Article 53 of the EU AI Act.",
  },
  {
    title: "Packaged to spec",
    body: "JSON or Parquet for structured records, original PDFs and images with redaction applied, schedules as XER or XML, and IFC models where the rights allow. Schemas and labeling matched to your training or eval pipeline.",
  },
  {
    title: "Ready for evals and environments",
    body: "Linked outcomes make natural tasks: estimate a job and compare with final cost, draft an RFI response, forecast a schedule slip, price a change order.",
  },
];

const terms = [
  { label: "Evaluation", body: "De-identified samples under NDA before you commit." },
  { label: "Non-exclusive", body: "Standard license, lowest price, fastest to close." },
  { label: "Exclusive", body: "Sole rights to a dataset for an agreed term or permanently." },
  { label: "Custom collection", body: "Tell us the trade, region or record type you need and we'll source it." },
];

const fields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "organization", label: "Organization" },
  {
    name: "looking_for",
    label: "What are you looking for?",
    type: "textarea",
    required: true,
    hint: "Record types, trades or sectors, regions, volume, and whether you need exclusivity.",
  },
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
            scheduled, changed and delivered. Every record is cleared for rights and de-identified before it reaches
            you.
          </p>
          <div className="mt-9">
            <ButtonLink href="#request">Request data</ButtonLink>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="What you get" title="Data you can train on and defend." />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {offering.map((o) => (
              <div key={o.title} className="bg-card p-8">
                <h3 className="font-semibold">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="Licensing" title="Start small, then scale." />
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {terms.map((t) => (
              <div key={t.label} className="border-t-2 border-accent pt-5">
                <dt className="font-semibold">{t.label}</dt>
                <dd className="mt-3 leading-relaxed text-muted">{t.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="request" className="grid-sheet scroll-mt-16 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            inverted
            eyebrow="Request data"
            title="Tell us what you need."
            intro={`We reply within ${commitments.replyBusinessDays === 1 ? "one business day" : `${commitments.replyBusinessDays} business days`} with available supply and a sample plan.`}
          />
          <LeadForm
            inverted
            kind="buyer_request"
            fields={fields}
            submitLabel="Request data"
            footnote="Samples are de-identified and covered by an NDA."
            success={{
              title: "Thanks. We'll be in touch.",
              body: "We'll review your request and reply with available supply and a sample plan.",
            }}
          />
        </div>
      </section>
    </>
  );
}
