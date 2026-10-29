import { ButtonLink } from "@/components/button-link";
import { RecordChain } from "@/components/record-chain";
import { Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

const systems = ["Procore", "Autodesk Construction Cloud", "Sage 300 CRE", "Viewpoint", "HCSS", "Excel and PDF archives"];

const records = [
  {
    title: "Estimates and bid history",
    body: "Takeoffs, unit costs, bid and no-bid decisions, and how your numbers compared with the final cost.",
  },
  {
    title: "Schedules",
    body: "Baseline and updated schedules, with the delays that happened and the reasons behind them.",
  },
  {
    title: "RFIs, submittals and change orders",
    body: "The questions raised in the field, how they were resolved, and what each one cost in time and money.",
  },
  {
    title: "Daily logs and site photos",
    body: "Crew counts, weather, deliveries, progress and problems, recorded day by day.",
  },
  {
    title: "Safety and quality records",
    body: "Inspections, incidents and root causes, punch lists and closeout.",
  },
  {
    title: "Job cost and financials",
    body: "Cost codes, committed against actual, pay applications and retention.",
  },
];

const valueDrivers = [
  {
    title: "Records that connect",
    body: "An estimate on its own is worth little. The same estimate tied to the RFIs, change orders and final cost of the job is worth far more.",
  },
  {
    title: "Years of history",
    body: "Five years of closed projects beats one large job. Buyers want to see the same kinds of problems come up and get solved more than once.",
  },
  {
    title: "Specialist work",
    body: "Healthcare, data centres, heavy civil, MEP and other technical trades are thin in what labs hold today, so they command more.",
  },
  {
    title: "Structured systems",
    body: "Records in Procore or Sage with consistent cost codes are quicker to prepare than folders of scanned PDFs, and buyers pay for that.",
  },
];

const rightsGroups = [
  {
    label: "Yours to sell",
    tone: "text-emerald-400",
    body: "Estimates, schedules, daily logs, cost reports, your own photos, and the reasoning in your RFIs and change orders.",
  },
  {
    label: "Needs consent",
    tone: "text-amber-300",
    body: "Records covered by owner confidentiality clauses, or that include third-party documents. We'll help you ask.",
  },
  {
    label: "Excluded",
    tone: "text-red-400",
    body: "Architects' drawings and specifications, controlled government work and security-sensitive facilities. These never leave your systems.",
  },
];

const steps = [
  {
    title: "Estimate",
    body: "Answer a few questions about your company, your systems and your project history. You get a value range in minutes.",
  },
  {
    title: "Rights review",
    body: "We read your standard contracts and tell you what you can sell before you share a single file.",
  },
  {
    title: "Preparation",
    body: "We pull the cleared records and remove client names, addresses, title blocks, professional stamps, photo location data, faces and anything else that identifies a person or a project.",
  },
  {
    title: "Listing",
    body: "Buyers see a description and redacted samples. You read and approve the listing before it goes out.",
  },
  {
    title: "Sale",
    body: "You sign the licence, the buyer pays, and you get paid. We take an agreed share of the sale and nothing before it.",
  },
];

const safeguards = [
  {
    title: "Nothing moves until there's a buyer",
    body: "Samples come from a small extract. The full dataset transfers only after a licence is signed.",
  },
  {
    title: "Kept separate",
    body: "Each seller's records sit in their own isolated storage and are never pooled with another company's.",
  },
  {
    title: "Deleted after delivery",
    body: "Once the buyer has the data, we delete our working copy.",
  },
  {
    title: "Your terms",
    body: "Exclusive or non-exclusive, one-off fee or recurring. You see every offer and can turn any of them down.",
  },
];

const faqs = [
  {
    q: "Will clients or competitors know it's our data?",
    a: "Buyers receive records with client names, addresses, people and project identifiers removed. Listings describe your company in general terms, such as \"Midwest commercial GC, $200M annual volume\", and you approve the wording.",
  },
  {
    q: "Do we still own the data after a sale?",
    a: "Yes. You grant the buyer a licence to use it. Under a non-exclusive licence you can sell the same records again. Under an exclusive licence you agree not to, which is why exclusive deals pay more.",
  },
  {
    q: "What about our employees' personal information?",
    a: "Names, phone numbers, email addresses, signatures and faces are removed before anything is shared. We don't sell HR or payroll records.",
  },
  {
    q: "Is my company the right size?",
    a: "It works best for general and specialty contractors with several years of closed projects in a project management or accounting system. History matters more than headcount.",
  },
  {
    q: "How long does it take?",
    a: "The estimate takes a few minutes. Expect the rights review and preparation to take a few weeks, depending on how your records are stored. When a sale closes depends on buyer demand for your type of work.",
  },
  {
    q: "What does it cost?",
    a: "Nothing up front. We earn a share of each sale, agreed in writing before we start.",
  },
  {
    q: "Who buys it?",
    a: "AI research labs and companies building software for construction. You can exclude any buyer by name.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-sheet-light border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24 lg:pb-28">
          <div>
            <Eyebrow>{site.tagline}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Get paid for project records you&rsquo;ve already closed out.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              AI labs are licensing real construction records to teach models how projects get estimated, scheduled
              and built. We check what you have the right to sell, remove anything that identifies your clients or
              your people, and negotiate the licence. Nothing leaves your systems until a buyer has agreed to pay.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/estimate">Estimate what your data is worth</ButtonLink>
              <ButtonLink href="#how" variant="secondary">
                See how it works
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-muted">Free estimate. No upfront fees. You approve every sale.</p>
          </div>
          <RecordChain />
        </div>
      </section>

      {/* Systems */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-sm text-muted">We work from records kept in</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-ink-soft">
            {systems.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What sells */}
      <section id="records" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="What sells"
            title="Labs want the working record, not the polished deliverable."
            intro="Models already know what a finished building looks like. What they lack is the trail of decisions, problems and costs that got it built. That trail is sitting in your archive."
          />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {records.map((r) => (
              <div key={r.title} className="bg-card p-7">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value drivers */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Pricing your data"
            title="What makes your records worth more."
            intro="Two contractors with the same revenue can get very different offers. These are the things that move the number."
          />
          <dl className="grid gap-10 sm:grid-cols-2">
            {valueDrivers.map((v, i) => (
              <div key={v.title}>
                <dt className="flex items-baseline gap-3 font-semibold">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {v.title}
                </dt>
                <dd className="mt-3 leading-relaxed text-muted">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Rights */}
      <section id="rights" className="grid-sheet scroll-mt-16 bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            inverted
            eyebrow="Rights first"
            title="A lot of what's on your server isn't yours to sell."
            intro="Under AIA A201 and B101, drawings and specifications belong to the architect as instruments of service. Owner contracts often add confidentiality terms, and shop drawings can carry a supplier's IP. A broker that skips this step leaves the risk with you."
          />
          <p className="mt-10 max-w-2xl text-paper/80">
            Before anything is listed, we review your contract set and sort every record into one of three groups.
          </p>
          <div className="mt-8 grid gap-px border border-paper/10 bg-paper/10 md:grid-cols-3">
            {rightsGroups.map((g) => (
              <div key={g.label} className="bg-ink p-7">
                <p className={`font-mono text-xs font-medium uppercase tracking-[0.14em] ${g.tone}`}>{g.label}</p>
                <p className="mt-4 leading-relaxed text-paper/75">{g.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-paper/50">
            This is a commercial review, not legal advice. We&rsquo;ll tell you when something needs your lawyer.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="From estimate to payment in five steps."
          />
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card p-6">
                <span className="font-mono text-xs text-accent">Step {i + 1}</span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Safeguards */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Handling your data"
            title="You stay in control until the money is in your account."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {safeguards.map((s) => (
              <div key={s.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="What contractors ask us first." />
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="font-mono text-lg text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="grid-sheet bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-paper text-balance">
              Find out what your project history is worth.
            </h2>
            <p className="mt-3 text-paper/65">A few questions, a value range, no commitment.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/estimate">Start the estimate</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="inverted">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
