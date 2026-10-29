import type { Metadata } from "next";
import { LeadForm, type Field } from "@/components/lead-form";
import { Eyebrow, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Construction accountants, surety brokers, software consultants and advisors: introduce contractors with years of project records and share in every deal.",
};

const who = [
  {
    title: "Construction CPAs and controllers",
    body: "You know which clients have ten years of clean job cost in Sage or Viewpoint, and you have the owner's ear.",
  },
  {
    title: "Surety and insurance brokers",
    body: "You see contractors' financials and project histories every renewal, and they already trust you with sensitive information.",
  },
  {
    title: "Procore and ERP consultants",
    body: "You set up the systems the records live in, so you know how complete and well-structured they are.",
  },
  {
    title: "M&A advisors and association leaders",
    body: "Owners preparing to sell or retire want to know what every asset is worth, and their project archive is one most have never priced.",
  },
];

const split = [
  {
    title: "You bring the relationship",
    body: "Make the introduction and stay as involved as you like. Most partners join the first call and leave the rest to us.",
  },
  {
    title: "We do the work",
    body: "Rights review, buyer introductions, de-identification, contracts and delivery. Your client deals with one team from first call to payment.",
  },
  {
    title: "You share in the deal",
    body: "We split our fee with you on every deal you introduce, set out in writing before you make the introduction. It comes out of our share, never your client's.",
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
      "Construction CPA or accountant",
      "Surety or insurance broker",
      "Software or ERP consultant",
      "M&A or business advisor",
      "Industry association",
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
    hint: "Trades, typical size, region. No company names needed yet.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="grid-sheet-light border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24">
          <Eyebrow>Partners</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            You know which contractors are sitting on twenty years of job files.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Most owners have no idea their project archive has a price, and they won&rsquo;t hear it from a stranger.
            They&rsquo;ll hear it from their accountant, their surety broker or the consultant who set up their
            systems. If that&rsquo;s you, introduce them and share in every deal that closes.
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
          <SectionHeading eyebrow="How it works" title="Your relationships, our infrastructure." />
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
            title="Membership is by application."
            intro="We read every application and reply by email."
          />
          <LeadForm
            inverted
            kind="partner_application"
            fields={fields}
            submitLabel="Apply"
            success={{
              title: "Thanks. We'll be in touch.",
              body: "We'll read your application and reply by email with next steps and the partner agreement.",
            }}
          />
        </div>
      </section>
    </>
  );
}
