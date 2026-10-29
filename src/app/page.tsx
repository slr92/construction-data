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
  { title: "Files and photos", tools: "SharePoint, Egnyte, Box, your server, scanned PDFs" },
];

const records = [
  {
    title: "Estimates and bids",
    body: "Takeoffs, unit costs, bid/no-bid calls, and how your number compared with the final cost.",
  },
  {
    title: "Schedules",
    body: "Baselines and updates, with what slipped and why.",
  },
  {
    title: "RFIs, submittals and change orders",
    body: "What came up in the field, how it got resolved, and what it cost in time and money.",
  },
  {
    title: "Daily logs and site photos",
    body: "Crews, weather, deliveries, progress and problems, day by day.",
  },
  {
    title: "Safety and quality",
    body: "Inspections, incidents and what caused them, punch lists, closeout.",
  },
  {
    title: "Job cost",
    body: "Cost codes, committed vs. actual, pay apps and retainage.",
  },
];

const valueDrivers = [
  {
    title: "Jobs you can follow start to finish",
    body: "An estimate on its own isn't worth much. The same estimate tied to that job's RFIs, change orders and final cost is worth a lot more.",
  },
  {
    title: "Years of history",
    body: "Five years of finished jobs beats one big one. Buyers want to see the same problems come up and get solved more than once.",
  },
  {
    title: "Specialist work",
    body: "Healthcare, data centers, heavy civil and MEP are hard for buyers to find, so they pay more for them.",
  },
  {
    title: "Organized records",
    body: "Clean data in Procore or Sage with consistent cost codes is quicker to prepare than boxes of scanned PDFs. That shows up in the price.",
  },
];

const rightsGroups = [
  {
    label: "Yours to sell",
    tone: "text-emerald-400",
    body: "Estimates, schedules, daily logs, job cost, your own photos, and your side of the RFIs and change orders.",
  },
  {
    label: "Needs permission",
    tone: "text-amber-300",
    body: "Anything covered by an owner's confidentiality clause, or with someone else's documents in it. We'll help you ask.",
  },
  {
    label: "Stays put",
    tone: "text-red-400",
    body: "Architects' drawings and specs, government work with security rules, and sensitive buildings like data centers and prisons. These never leave.",
  },
];

const steps = [
  {
    title: "Tell us what you have",
    body: "Answer a few questions about your company and your systems. You'll get a price range. No files needed.",
  },
  {
    title: "We check your contracts",
    body: "Send us your standard owner contracts and subcontracts. We'll tell you what you're allowed to sell before anything else happens.",
  },
  {
    title: "We find a buyer",
    body: "We take a description of your records to AI companies and bring back offers. Take one, or turn them all down.",
  },
  {
    title: "We do the prep",
    body: "We pull only the records in the deal and strip out names, clients, addresses, stamps and faces. You see what we took out before anything goes.",
  },
  {
    title: "You get paid",
    body: "The buyer pays, you get your share, and we delete our copy. If there's no deal, you owe nothing.",
  },
];

const safeguards = [
  {
    title: "Nothing moves until you sign",
    body: "To start, you just describe your records. Files only move after you've approved a buyer and a price.",
  },
  {
    title: "Read-only access",
    body: "We can't change or delete anything in Procore, your accounting system or your server. Access ends when the deal does.",
  },
  {
    title: "Checked by people",
    body: "Software scans everything, then our team checks it by hand. If we can't get it clean, we don't sell it.",
  },
  {
    title: "Never to competitors",
    body: "We don't sell to other contractors or bid-data companies. Buyers only learn your name if you want them to.",
  },
];

const faqs = [
  {
    q: "Will my clients or competitors find out?",
    a: "No. We strip out client names, addresses, people and job names, and blur details that could point to a specific building. Listings describe you in general terms, like \"Midwest commercial GC, $200 million a year\", and you approve the wording.",
  },
  {
    q: "Will the buyer know it's us?",
    a: "Only if you say so. Otherwise they never learn who supplied it, and we never name you publicly without your written OK.",
  },
  {
    q: "What about my employees?",
    a: "Names, phone numbers, emails, signatures and faces come out before anything is shared. We don't touch payroll or HR files.",
  },
  {
    q: "How much of my team's time will this take?",
    a: "Not much. Someone who knows your systems answers our questions and sets up read-only access. We do the rest and keep you updated.",
  },
  {
    q: "Are we big enough?",
    a: "If you have several years of finished jobs in a project management or accounting system, probably. Years of history matter more than headcount.",
  },
  {
    q: "How long does it take?",
    a: "The estimate takes a few minutes. Expect a few weeks for us to check contracts and prepare the data. How fast it sells depends on what buyers are looking for at the time.",
  },
  {
    q: "What does it cost?",
    a: "Nothing up front, and nothing at all if there's no deal. Our fee comes out of the buyer's payment, and your share is written into each deal before you sign.",
  },
  {
    q: "Do we still own the records?",
    a: "Yes. You're licensing them, not selling them outright. If a deal isn't exclusive, you can license the same records again. Exclusive deals pay more because you can't.",
  },
  {
    q: "Who's buying?",
    a: "AI companies building tools that estimate, schedule and manage construction work. Never other contractors or bid-data firms, and you approve every buyer by name.",
  },
  {
    q: "Can my lawyer see the agreement?",
    a: "Yes, and we'd encourage it. Ask us for a copy. Nothing happens until it's signed and you've approved a specific deal.",
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
              Get paid for the job records you already have.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              AI companies are paying contractors for their old project records: estimates, schedules, RFIs, change
              orders, daily logs. We handle the whole thing. You answer some questions, approve the deal and get paid.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Nothing leaves your systems until you&rsquo;ve signed off on a buyer and a price.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/estimate">See what your records are worth</ButtonLink>
              <ButtonLink href="#how" variant="secondary">
                How it works
              </ButtonLink>
            </div>
            <p className="mt-5 text-base text-muted">Free. No upfront cost. You approve every sale.</p>
          </div>
          <RecordChain />
        </div>
      </section>

      {/* Positioning */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            AI can read a spec book. It has no idea how a job actually runs.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              The internet is full of building codes, textbooks and product data, and AI has already read all of it.
              What it&rsquo;s never seen is a real job: the estimate that came in light, the RFI that held up the
              steel, the change order that fixed it and what it cost.
            </p>
            <p>
              That&rsquo;s what AI companies are short of. It&rsquo;s sitting in your Procore account and your
              accounting system, and they&rsquo;ll pay for it.
            </p>
          </div>
        </div>
      </section>

      {/* What sells */}
      <section id="records" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="What sells"
            title="What buyers pay for."
            intro="The day-to-day records of how your jobs ran. The more of these you have for the same jobs, the more they're worth."
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
              <h3 className="text-2xl font-semibold tracking-tight">Works with the systems you already use</h3>
              <p className="mt-4 leading-relaxed text-muted">
                We connect read-only, so we can&rsquo;t change or delete anything. Or you send us exports. Either
                way, you choose which jobs are included.
              </p>
            </div>
            <dl className="grid gap-px self-start border border-line bg-line sm:grid-cols-2">
              {systemGroups.map((g) => (
                <div key={g.title} className="bg-card p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{g.title}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft">{g.tools}</dd>
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
            eyebrow="Pricing"
            title="What gets you a better price."
            intro="Two contractors the same size can get very different offers. This is what makes the difference."
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
            title="Some of what's on your server isn't yours to sell."
            intro="The AIA contracts most contractors sign say the drawings and specs belong to the architect. Owner contracts often have confidentiality clauses. Shop drawings can belong to the supplier."
          />
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            If a broker skips this, you carry the risk. We check first and sort everything into three piles.
          </p>
          <div className="mt-8 grid gap-px border border-paper/10 bg-paper/10 md:grid-cols-3">
            {rightsGroups.map((g) => (
              <div key={g.label} className="bg-ink p-7">
                <p className={`font-mono text-xs font-medium uppercase tracking-[0.14em] ${g.tone}`}>{g.label}</p>
                <p className="mt-4 leading-relaxed text-paper/75">{g.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-paper/55">
            We&rsquo;re not your lawyer. If something needs one, we&rsquo;ll tell you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="How it works" title="Five steps. Most of the work is ours." />
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card p-6">
                <span className="font-mono text-xs text-accent">Step {i + 1}</span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-lg">
              <span className="font-semibold">Your part:</span> answer some questions, send us your standard
              contracts, give us read-only access and sign. We do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading eyebrow="Your data" title="You're in control until the money's in your account." />
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
              How we handle your data, in full
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
            <h2 className="text-xl font-semibold">Know a contractor with years of job files?</h2>
            <p className="mt-2 text-muted">
              Accountants, surety brokers and software consultants can introduce their clients and share in every
              deal.
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
              Find out what your job records are worth.
            </h2>
            <p className="mt-3 text-lg text-paper/65">A few questions, a price range, no commitment.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/estimate">Get an estimate</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="inverted">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
