import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { LeadForm, type Field } from "@/components/lead-form";
import { Eyebrow, SectionHeading } from "@/components/section";
import { commitments } from "@/lib/site";

export const metadata: Metadata = {
  title: "For AI labs",
  description:
    "Licensed UK construction datasets from main contractors and specialists, linked at the project level, with per-record provenance.",
};

const offering = [
  {
    title: "Real site records, not synthetic",
    body: "Data from UK contractors doing the work: how jobs were tendered, programmed, varied, inspected and handed over, including the mistakes.",
  },
  {
    title: "Linked at the project level",
    body: "Tenders and BoQs, programmes, RFIs and technical queries, variations and compensation events, site diaries, site imagery, CVRs and final accounts from the same projects, joined by consistent IDs.",
  },
  {
    title: "Anonymised by default",
    body: "People, clients, addresses, planning references, title blocks, photo location data and faces are removed with one documented method, following ICO anonymisation guidance. Project facts that could pinpoint a building are banded.",
  },
  {
    title: "A licence that covers training",
    body: "UK copyright law only permits text and data mining for non-commercial research, so commercial training needs a licence. Every source is licensed under a signed agreement with the contractor, with its rights basis recorded per record.",
  },
  {
    title: "Packaged to spec",
    body: "JSON or Parquet for structured records, original PDFs and images with redaction applied, programmes as XER, PP or XML, and IFC models where the rights allow. Schemas and labelling matched to your training or eval pipeline.",
  },
  {
    title: "Ready for evals and environments",
    body: "Linked outcomes make natural tasks: price a BoQ and compare with the final account, answer a technical query, forecast a programme slip, assess a compensation event.",
  },
];

const terms = [
  { label: "Evaluation", body: "Anonymised samples under NDA before you commit." },
  { label: "Non-exclusive", body: "Standard licence, lowest price, fastest to close." },
  { label: "Exclusive", body: "Sole rights to a dataset for an agreed term or permanently." },
  { label: "Custom collection", body: "Tell us the trade, region or record type you need and we'll source it." },
];

const fields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "organisation", label: "Organisation" },
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
            UK construction records with a clean rights chain.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Licensed datasets from UK main contractors and specialists, covering how real projects were tendered,
            programmed, varied and delivered. Every record is cleared for rights and anonymised before it reaches
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
            intro={`We reply within ${commitments.replyWorkingDays === 1 ? "one working day" : `${commitments.replyWorkingDays} working days`} with available supply and a sample plan.`}
          />
          <LeadForm
            inverted
            kind="buyer_request"
            fields={fields}
            submitLabel="Request data"
            footnote="Samples are anonymised and covered by an NDA."
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
