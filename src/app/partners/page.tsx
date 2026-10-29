import type { Metadata } from "next";
import { LeadForm, type Field } from "@/components/lead-form";
import { Eyebrow, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Accountants, brokers, software consultants and advisers: introduce UK contractors with years of job records and share in every deal.",
};

const who = [
  {
    title: "Construction accountants and FDs",
    body: "You know which clients have ten years of clean cost data in COINS or Sage, and the MD listens to you.",
  },
  {
    title: "Insurance and surety brokers",
    body: "You see their accounts and job history at every renewal. They already trust you with sensitive information.",
  },
  {
    title: "Software consultants",
    body: "You set up the Procore, COINS or Asite systems the records live in. You know which ones are complete and well organised.",
  },
  {
    title: "Corporate finance advisers and trade bodies",
    body: "Owners getting ready to sell or retire want to know what everything's worth. Most have never priced their job archive.",
  },
];

const split = [
  {
    title: "You introduce them",
    body: "Join the first call if you like, then leave it to us.",
  },
  {
    title: "We handle it",
    body: "Contract check, buyers, data prep, paperwork and delivery. Your client deals with one team from start to finish.",
  },
  {
    title: "You get paid",
    body: "We split our fee with you on every deal you bring in. It's agreed in writing before you make the introduction, and it comes out of our share, never your client's.",
  },
];

const fields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  {
    name: "role",
    label: "What do you do?",
    type: "select",
    required: true,
    options: [
      "Construction accountant or FD",
      "Insurance or surety broker",
      "Software consultant",
      "Corporate finance or business adviser",
      "Trade body",
      "Other",
    ],
  },
  {
    name: "count",
    label: "How many contractors could you introduce?",
    type: "select",
    required: true,
    options: ["1 to 5", "6 to 20", "21 to 50", "More than 50"],
  },
  {
    name: "how",
    label: "Who are they, and how do you know them?",
    type: "textarea",
    required: true,
    hint: "Trades, size, region. No company names needed yet.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="grid-sheet-light border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24">
          <Eyebrow>Partners</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Your clients have years of job files. Most don&rsquo;t know they&rsquo;re worth anything.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            They won&rsquo;t believe it from a stranger. They will from their accountant, their insurance broker or the
            person who set up their systems.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            If that&rsquo;s you, introduce them and share in every deal that closes.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="Who this is for" title="People contractors already trust with their numbers." />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {who.map((w) => (
              <div key={w.title} className="bg-card p-8">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="How it works" title="You make the introduction. We do the rest." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {split.map((s) => (
              <div key={s.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="grid-sheet scroll-mt-16 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            inverted
            eyebrow="Apply"
            title="Apply to partner with us."
            intro="We read every application and reply by email."
          />
          <LeadForm
            inverted
            kind="partner_application"
            fields={fields}
            submitLabel="Apply"
            success={{
              title: "Thanks. We'll be in touch.",
              body: "We'll reply by email with next steps and the partner agreement.",
            }}
          />
        </div>
      </section>
    </>
  );
}
