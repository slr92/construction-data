import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow, SectionHeading } from "@/components/section";
import { commitments, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we handle your data",
  description:
    "What we access, what we take out of your project records, who receives them and what we put in writing before a single file moves.",
};

const steps = [
  {
    title: "You describe it, you don't send it",
    body: "Tell us which systems you use, how many years of projects you have and what kind of work you do. No files come to us until we've agreed in writing what's in scope. Any project, client or folder you mark off-limits stays with you.",
    approval: false,
  },
  {
    title: "We check what you can sell",
    body: "We go through your standard owner contracts, subcontracts and design agreements and sort your records into three groups: yours to sell, needs consent, and excluded.",
    approval: false,
  },
  {
    title: "We find a buyer",
    body: "We take a description of your records to AI labs, never the records themselves, and bring offers back. You don't have to accept any of them, and you pay nothing unless a deal closes.",
    approval: false,
  },
  {
    title: "You approve the deal",
    body: "Each sale gets its own one-page schedule: the buyer, the exact records, how they may use them, exclusivity, term, price and your share. Nothing moves until you sign it.",
    approval: true,
  },
  {
    title: "Secure transfer",
    body: "We connect read-only to Procore, Autodesk Construction Cloud or your accounting system, or you upload through an encrypted link. We can't change or delete anything in your systems, and access is revoked when the project ends. Only named staff with multi-factor sign-in can open your files.",
    approval: false,
  },
  {
    title: "We de-identify it",
    body: "Every document, drawing, photo and video goes through automated detection, then human review, then a re-identification test. Details below.",
    approval: false,
  },
  {
    title: "You see what we removed",
    body: `Before delivery you get a release summary: what was taken out, how it was reviewed and a sample of the output. You have ${commitments.objectionBusinessDays} business days to object, and nothing ships while you do.`,
    approval: true,
  },
  {
    title: "Delivery, then deletion",
    body: `Only the buyer named in your schedule receives the clean copy. We delete your originals and every working copy within ${commitments.deletionDays} days of final delivery, or sooner if you ask, and confirm it in writing.`,
    approval: false,
  },
];

const removals = [
  {
    what: "People",
    examples: "Names, emails, phone numbers, signatures, faces and badges in site photos, voices in site video, vehicle plates",
    action: "Removed, or replaced with consistent placeholders like [SUPER_1] or [SUB_ELECTRICAL_2] so the record still reads properly",
  },
  {
    what: "The project",
    examples: "Project and job names, owner and client names, street addresses, parcel and permit numbers, photo GPS data, site signage",
    action: "Replaced with placeholders. Location becomes a region, dates become a month or year",
  },
  {
    what: "Facts that pinpoint a building",
    examples: "Exact storeys, floor area, contract value and completion date. Together these can identify a project through public permit records and news coverage",
    action: "Generalised into bands (8 to 12 storeys, $20M to $50M) wherever the combination is rare",
  },
  {
    what: "Professional marks",
    examples: "PE and architect stamps and seals, licence numbers, title blocks, firm logos",
    action: "Removed",
  },
  {
    what: "Sensitive records",
    examples: "Certified payroll, Social Security numbers, I-9s, injury and medical details, drug test results, background checks, bank details",
    action: "Removed entirely",
  },
  {
    what: "Security-sensitive work",
    examples: "Layouts and systems for data centres, prisons, utilities, defence and government facilities, controlled unclassified information",
    action: "Excluded at source",
  },
  {
    what: "Other people's material",
    examples: "Architects' drawings and specifications, manufacturers' shop drawings, owner confidential information, privileged claim and dispute files",
    action: "Excluded unless the rights review clears it",
  },
  {
    what: "Anything you hold back",
    examples: "Any project, client, folder, field or topic you mark off-limits",
    action: "Never passed on to anyone",
  },
];

const process = [
  {
    title: "Scope",
    body: "We agree what's in the data, where it came from and what must stay out, and leave excluded projects and folders at the source wherever we can.",
  },
  {
    title: "Automated detection",
    body: "Text extraction runs across scanned PDFs and drawings so nothing hides in an image. Vision models find faces, plates, badges, stamps and signage in photos and video.",
  },
  {
    title: "Human review",
    body: "Trained reviewers check every dataset by hand. Daily logs, incident reports, site photos and video get a larger sample and a second reviewer.",
  },
  {
    title: "Re-identification test",
    body: "Before release, a reviewer tries to identify a project, company or person using the data plus public sources: permit databases, news, street imagery. If they can, it goes back for another pass.",
  },
  {
    title: "Release log",
    body: "We record what was removed, who reviewed it and what each buyer received, so every delivery can be traced.",
  },
];

const neverDo = [
  "Give a buyer your original files. Buyers only receive the de-identified copy.",
  "Sell your records to anyone other than the buyer you approved, or use them to train a model of our own.",
  "License your records to another contractor, estimating service or bid-intelligence firm.",
  "Deliver outside the use you agreed in your deal schedule.",
  "Name you as a supplier, publicly or to a buyer, without your written consent.",
];

const buyersSign = [
  "Never try to identify any person, project or company in the data, alone or combined with other data.",
  "Never contact anyone they think appears in the data.",
  "Use it only for the agreed purpose, and never resell or share it.",
  "Keep it secure, and delete it when the licence ends or we ask, confirming in writing.",
  `Report anything identifying they find within ${commitments.breachNoticeHours} hours, stop using it and delete it.`,
];

const incident = [
  "We stop all delivery of the affected data and instruct every buyer that has it to stop using it and delete it.",
  "You get written notice: which data, what was exposed, which buyers had it and when.",
  "You get each buyer's written deletion confirmation and our report on the cause and what we changed.",
  "A cleaned replacement goes out only with your approval.",
  "You decide whether to notify anyone. We won't contact your clients, your people or a regulator, or name you, without your consent unless the law requires it.",
];

const yourRights = [
  "You keep ownership. You license the records; you never sell the rights to them.",
  "Pull any data before it's delivered, without ending the agreement.",
  "Mark anything off-limits: a project, a client, a folder, a field.",
  "See the money: a statement with every payment, and the buyer's payment records on request.",
  "Leave on 30 days' notice.",
];

const weAsk = [
  "You have the right to license what you share. Owner contracts, AIA and ConsensusDocs forms, and government contracts can all restrict it. We'll go through them with you.",
  "You tell us where sensitive records sit, such as certified payroll, injury files or security-sensitive projects, so we keep them out.",
  "You flag third-party material in your files, such as architects' drawings or suppliers' shop drawings.",
  "You tell us promptly if any of this stops being true.",
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
            What happens to your project records, step by step.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            You&rsquo;re thinking about licensing your company&rsquo;s project history. This page covers what we
            access, what we take out, who ends up with it and what we put in writing before a single file moves.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            It summarises our Data Supply Agreement. Ask us for the full agreement and have your own lawyer read it.
            If anything here differs from the signed agreement, the agreement applies.
          </p>
        </div>
      </section>

      {/* Sequence */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="The sequence"
            title="The same eight steps for every company and every dataset."
            intro="Steps marked 'Your approval' don't go ahead until you've signed off."
          />
          <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {s.approval && (
                    <span className="bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                      Your approval
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* De-identification */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="De-identification"
            title="Construction records identify people and projects in ways most data doesn't."
            intro="A daily log names the superintendent. A title block names the architect. A photo carries GPS and a face. And a building can be identified through public permit records from just a few facts. Every dataset has to clear all of this before a buyer sees it."
          />
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] text-left text-[15px]">
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

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-l-2 border-accent pl-5">
            <p className="font-semibold">If we can&rsquo;t get it clean, we don&rsquo;t sell it.</p>
            <p className="mt-2 max-w-2xl text-muted">
              When a dataset can&rsquo;t meet this standard, we deliver none of it. We tell you, and delete or return
              your records.
            </p>
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
            title="The response is written down before anything ships."
            intro="If identifying information ever turns up in data a buyer received, whoever finds it, this is what we're bound to do."
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
          <SectionHeading eyebrow="Both sides" title="What stays in your hands, and what we need from you." />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Your rights</h3>
              <Checklist items={yourRights} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">What we ask of you</h3>
              <Checklist items={weAsk} />
              <p className="mt-6 text-sm text-muted">
                You make no promise about how well we de-identify. That part is our responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-sheet bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-paper text-balance">
              Start by telling us what you have. Nothing more.
            </h2>
            <p className="mt-3 text-paper/65">Questions, or want the agreement for your lawyer? {site.email}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/estimate">Describe your records</ButtonLink>
            <ButtonLink href={`mailto:${site.email}?subject=Data%20Supply%20Agreement`} variant="inverted">
              Request the agreement
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
