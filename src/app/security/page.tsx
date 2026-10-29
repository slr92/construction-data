import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow, SectionHeading } from "@/components/section";
import { commitments, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we handle your data",
  description:
    "What we look at, what we take out of your job records, who ends up with them and what we put in writing before anything moves.",
};

const steps = [
  {
    title: "You tell us what you have",
    body: "Which systems, how many years, what kind of work. No files change hands until we've agreed in writing what's included. Anything you want kept out stays out.",
    approval: false,
  },
  {
    title: "We check your contracts",
    body: "We read your standard client contracts, subcontracts and design appointments. Then we sort your records into yours to sell, needs permission, and stays put.",
    approval: false,
  },
  {
    title: "We find a buyer",
    body: "We show AI companies a description, never the records themselves. You don't have to take any offer, and you pay nothing if there's no deal.",
    approval: false,
  },
  {
    title: "You approve the deal",
    body: "Every sale gets a one-page summary: who's buying, which records, what they can use them for, the price and your share. Nothing moves until you sign it.",
    approval: true,
  },
  {
    title: "We connect, read-only",
    body: "We connect to Procore, COINS or your other systems, or you upload through an encrypted link. We can't change or delete anything, and our access ends with the deal.",
    approval: false,
  },
  {
    title: "We clean it",
    body: "Software scans every document, drawing, photo and video. Then our team checks it by hand and tries to work out who and where it is. Details below.",
    approval: false,
  },
  {
    title: "You see what we removed",
    body: `You get a summary of what came out and a sample of the finished data. You have ${commitments.objectionWorkingDays} working days to object, and nothing ships while you do.`,
    approval: true,
  },
  {
    title: "Delivery, then deletion",
    body: `Only the buyer you approved gets the clean copy. We delete your originals and all our working copies within ${commitments.deletionDays} days and confirm it in writing.`,
    approval: false,
  },
];

const removals = [
  {
    what: "People",
    examples: "Names, emails, phone numbers, signatures, CSCS card details, faces in photos, voices in video, number plates",
    action: "Taken out, or swapped for labels like [SITE_MANAGER_1] or [M&E_SUB_2] so the record still makes sense",
  },
  {
    what: "The job",
    examples: "Job and scheme names, client names, addresses and postcodes, planning references, Land Registry title numbers, photo GPS, site hoardings",
    action: "Swapped for labels. Location becomes a region. Dates become a month or year.",
  },
  {
    what: "Details that point to a building",
    examples: "Exact number of storeys, floor area, contract value and completion date. Put together, a planning portal search can match these to a real building.",
    action: "Put into ranges, like 8 to 12 storeys or £20 to £50 million",
  },
  {
    what: "Professional marks",
    examples: "Title blocks, logos, ARB and chartership numbers, company registration numbers",
    action: "Taken out",
  },
  {
    what: "Personal and HR records",
    examples: "Payroll and CIS records, National Insurance numbers, right-to-work checks, DBS checks, injury and medical records, drug and alcohol tests, bank details",
    action: "Never included",
  },
  {
    what: "Sensitive buildings",
    examples: "Prisons, data centres, defence, utilities and other critical infrastructure, anything marked Official-Sensitive or managed under ISO 19650-5, and fire strategies for higher-risk buildings",
    action: "Never included",
  },
  {
    what: "Other people's documents",
    examples: "Architects' and engineers' drawings and specs, specialist subcontractor design, clients' confidential information, adjudication and dispute files",
    action: "Left out unless the contract check clears them",
  },
  {
    what: "Anything you hold back",
    examples: "Any job, client, folder or topic you tell us to leave out",
    action: "Never shared with anyone",
  },
];

const checks = [
  {
    title: "Agree what's in",
    body: "We agree up front what's included and what isn't, and leave excluded jobs and folders where they are.",
  },
  {
    title: "Software scan",
    body: "We read the text in every scanned PDF and drawing, so nothing hides in an image. Image tools find faces, plates, badges, logos and signs.",
  },
  {
    title: "Human check",
    body: "Our team checks every dataset by hand. Site diaries, accident reports, photos and video get a bigger sample and a second reviewer.",
  },
  {
    title: "Try to identify it",
    body: "Before release, someone tries to work out the job, company or people using the data plus planning portals, Companies House, local news and Street View. If they can, it goes back for another pass.",
  },
  {
    title: "Keep a record",
    body: "We log what was removed, who checked it and what each buyer received.",
  },
];

const neverDo = [
  "Give a buyer your original files. They only get the cleaned copy.",
  "Sell your records to anyone you didn't approve, or use them to train our own AI.",
  "Sell to another contractor, a cost consultant or a construction intelligence firm.",
  "Let a buyer use your records for anything outside the deal you signed.",
  "Name you as a supplier, publicly or to a buyer, without your written agreement.",
];

const buyersSign = [
  "Never try to identify any person, job or company in the data.",
  "Never contact anyone they think is in it.",
  "Use it only for what the deal allows. No reselling, no sharing.",
  "Keep it secure, and delete it when the deal ends or we ask, confirming in writing.",
  `Tell us within ${commitments.breachNoticeHours} hours if they find anything identifying, stop using it and delete it.`,
];

const incident = [
  "Stop all deliveries of that data, and tell every buyer who has it to stop using it and delete it.",
  "Tell you in writing what was exposed, which buyers had it, and when.",
  "Send you each buyer's written confirmation that it's deleted, and our report on what went wrong and what we changed.",
  "Only send a cleaned replacement if you approve it.",
  "Give you what you need for any report to the ICO. We won't contact your clients, your staff or a regulator, or name you, without your agreement, unless the law requires it.",
];

const yourRights = [
  "You keep ownership. You grant a licence and never sell the rights.",
  "Pull anything out before it's delivered, without cancelling the agreement.",
  "Keep anything out: a job, a client, a folder, a field.",
  "See the money: a statement with every payment, and the buyer's payment records if you ask.",
  "Walk away with 30 days' notice.",
];

const weAsk = [
  "Only share what you have the right to. JCT, NEC and bespoke client contracts, framework agreements and public sector contracts can all limit this. We'll go through them with you.",
  "Tell us where the sensitive files are, like payroll, accident records or secure-site jobs, so we keep them out.",
  "Point out other people's documents in your files, like architects' drawings or specialist design.",
  "Let us know if any of this changes.",
];

function Checklist({ items, inverted = false }: { items: readonly string[]; inverted?: boolean }) {
  return (
    <ul className="mt-6 grid gap-4">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${inverted ? "text-paper/75" : "text-muted"}`}>
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SecurityPage() {
  return (
    <>
      <section className="grid-sheet-light border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:pt-24">
          <Eyebrow>Security</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Exactly what happens to your records.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Before you share anything, you should know what we look at, what we remove, who ends up with it and what
            we put in writing. It&rsquo;s all on this page.
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted">
            This is a plain-English summary of our Data Supply Agreement. Ask for the full version and have your
            solicitor read it. If the two ever differ, the agreement wins.
          </p>
        </div>
      </section>

      {/* Sequence */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Step by step"
            title="The same eight steps, every time."
            intro="Nothing goes past the two steps marked 'You approve' without your signature."
          />
          <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {s.approval && (
                    <span className="bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                      You approve
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we take out */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="What we take out"
            title="Construction records give away more than most."
            intro="A site diary names your site manager. A title block names the architect. A site photo has GPS and faces in it. And a building can be identified from a few facts and a planning search. This is how we deal with each."
          />
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-paper font-mono text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">What</th>
                  <th className="px-5 py-3 font-medium">For example</th>
                  <th className="px-5 py-3 font-medium">What we do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {removals.map((r) => (
                  <tr key={r.what} className="align-top">
                    <td className="px-5 py-4 font-medium">{r.what}</td>
                    <td className="px-5 py-4 leading-relaxed text-muted">{r.examples}</td>
                    <td className="px-5 py-4 leading-relaxed">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-16 text-2xl font-semibold tracking-tight">How we check</h3>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {checks.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-5">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-accent pl-5">
              <p className="text-lg font-semibold">If we can&rsquo;t get it clean, we don&rsquo;t sell it.</p>
              <p className="mt-2 text-muted">
                If a dataset can&rsquo;t meet this standard, none of it goes out. We tell you, then delete or return
                your records.
              </p>
            </div>
            <div className="border-l-2 border-ink pl-5">
              <p className="text-lg font-semibold">Anonymised to the ICO&rsquo;s standard.</p>
              <p className="mt-2 text-muted">
                We follow the ICO&rsquo;s anonymisation guidance and keep no key that links labels back to real
                people. Properly anonymised data is no longer personal data under UK GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="grid-sheet bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading inverted eyebrow="In writing" title="What we promise, and what every buyer signs." />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-paper">We will never</h3>
              <Checklist items={neverDo} inverted />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-paper">Every buyer agrees to</h3>
              <Checklist items={buyersSign} inverted />
            </div>
          </div>
        </div>
      </section>

      {/* Incident */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="If something slips through"
            title="We've written down what happens before it's needed."
            intro="If anything identifying ever turns up in data a buyer has, this is what we're bound to do."
          />
          <ol className="grid gap-px self-start border border-line bg-line">
            {incident.map((item, i) => (
              <li key={item} className="flex gap-4 bg-card p-5">
                <span className="font-mono text-xs leading-6 text-accent">0{i + 1}</span>
                <p className="leading-relaxed text-ink-soft">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Rights and obligations */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="Both sides" title="What stays yours, and what we need from you." />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Your rights</h3>
              <Checklist items={yourRights} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">What we ask of you</h3>
              <Checklist items={weAsk} />
              <p className="mt-6 text-base text-muted">
                Cleaning the data properly is our job, not yours. You don&rsquo;t sign any promise about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-sheet bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-paper text-balance">
              Start by telling us what you have. That&rsquo;s it.
            </h2>
            <p className="mt-3 text-lg text-paper/65">
              Questions, or want the agreement for your solicitor? Email {site.email}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/estimate">Tell us what you have</ButtonLink>
            <ButtonLink href={`mailto:${site.email}?subject=Data%20Supply%20Agreement`} variant="inverted">
              Ask for the agreement
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
