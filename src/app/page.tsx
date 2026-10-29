import { ButtonLink } from "@/components/button-link";
import { RecordChain } from "@/components/record-chain";
import { Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

const systemGroups = [
  { title: "Project management", tools: "Procore, Autodesk Construction Cloud, Fieldwire, Trimble Viewpoint Team" },
  { title: "Accounting and job cost", tools: "Sage 300 CRE, Sage Intacct, Vista, Spectrum, Foundation, CMiC" },
  { title: "Estimating", tools: "HCSS HeavyBid, Sage Estimating, ProEst, Accubid, Excel" },
  { title: "Scheduling", tools: "Primavera P6, Microsoft Project" },
  { title: "Field and safety", tools: "HCSS HeavyJob, Raken, SafetyCulture" },
  { title: "Files and photos", tools: "SharePoint, Egnyte, Box, file servers, PDF archives" },
];

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
    title: "Describe it",
    body: "Tell us which systems you use, how many years of projects you have and what kind of work you do. You get a value range. You don't send any files.",
  },
  {
    title: "Rights review",
    body: "We read your standard contracts and tell you what you can sell before you share anything.",
  },
  {
    title: "Offers",
    body: "We take a description of your records to AI labs and bring offers back. You approve the buyer, the records, the use and the price, or turn it down.",
  },
  {
    title: "Preparation",
    body: "We pull only the approved records and remove people, clients, addresses, title blocks, stamps, photo GPS data and faces. You see what we removed before anything ships.",
  },
  {
    title: "Payment",
    body: "The buyer gets the clean copy, you get paid, and we delete your originals. Our fee comes out of the sale. If no deal closes, you pay nothing.",
  },
];

const safeguards = [
  {
    title: "Nothing moves until you sign",
    body: "You describe your records, you don't send them. Files only move once you've approved a specific buyer and deal.",
  },
  {
    title: "Read-only access",
    body: "We can't change or delete anything in Procore, your ERP or your file server, and access ends with the project.",
  },
  {
    title: "Checked by people",
    body: "Automated detection, human review and a re-identification test on every dataset. If it can't be made clean, it isn't sold.",
  },
  {
    title: "Never to competitors",
    body: "We don't license your records to other contractors or bid-intelligence firms, and a buyer only learns who you are if you say so.",
  },
];

const faqs = [
  {
    q: "Will clients or competitors know it's our data?",
    a: "Buyers receive records with client names, addresses, people and project identifiers removed, and details that could pinpoint a building are generalised. Listings describe your company in general terms, such as \"Midwest commercial GC, $200M annual volume\", and you approve the wording.",
  },
  {
    q: "Will the buyer know the data came from us?",
    a: "Only if you choose that in your deal schedule. Otherwise the buyer licenses the records without learning who supplied them, and we never name you publicly without your written consent.",
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
    a: "Nothing up front, and nothing at all if no deal closes. Our fee comes out of the buyer's payment, and your share is set out in each deal schedule before you sign.",
  },
  {
    q: "Who buys it?",
    a: "AI research labs and teams building models for construction. Never other contractors or bid-intelligence firms, and you approve every buyer by name.",
  },
  {
    q: "Can our lawyer review the agreement first?",
    a: "Yes, and we recommend it. Ask us for the Data Supply Agreement. Nothing is shared until it's signed and you've approved a specific deal.",
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

      {/* Positioning */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Public data teaches a model what a building is. Your records teach it how one gets built.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Codes, textbooks and product sheets are already on the internet, and AI models have read them. What
              they&rsquo;ve never seen is a real job running: the estimate that came in light, the RFI that held up
              the steel, the change order that fixed it and what it cost.
            </p>
            <p>
              That&rsquo;s why AI still can&rsquo;t do most of the work an estimator, scheduler or project manager
              does, and why labs pay for private records that show it. Scraped public data can&rsquo;t fill that gap.
            </p>
          </div>
        </div>
      </section>

      {/* What sells */}
      <section id="records" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="What sells"
            title="Labs want the working record, not the polished deliverable."
            intro="Six kinds of record carry most of the value. The more of them you hold for the same jobs, the more your archive is worth."
          />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {records.map((r) => (
              <div key={r.title} className="bg-card p-7">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Where it lives</h3>
              <p className="mt-4 leading-relaxed text-muted">
                We connect read-only to the systems you already use, or work from exports. We can&rsquo;t change or
                delete anything, and you choose which projects and folders are in scope.
              </p>
            </div>
            <dl className="grid gap-px self-start border border-line bg-line sm:grid-cols-2">
              {systemGroups.map((g) => (
                <div key={g.title} className="bg-card p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{g.title}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{g.tools}</dd>
                </div>
              ))}
            </dl>
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
          <div className="mt-12">
            <ButtonLink href="/security" variant="secondary">
              Read exactly how we handle your data
            </ButtonLink>
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

      {/* Partners */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold">Know a contractor sitting on years of job files?</h2>
            <p className="mt-2 text-muted">
              Accountants, surety brokers and software consultants can introduce clients and share in every deal.
            </p>
          </div>
          <ButtonLink href="/partners" variant="secondary">
            Partner with us
          </ButtonLink>
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
