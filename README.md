# Construction Data Brokers

Marketing site for constructiondatabrokers.com. We license construction companies' project records to AI labs.

Next.js (App Router) + Tailwind CSS v4. Every page is static. Fonts come from npm, so the build doesn't call Google Fonts.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # type check
```

## Structure

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | Name, domain, contact email, nav. Change brand details here. |
| `src/app/page.tsx` | Home page. All copy sits in arrays at the top of the file. |
| `src/app/buyers/page.tsx` | Page for AI labs and other buyers. |
| `src/app/estimate/page.tsx` | Placeholder for the estimator. Every "Estimate" CTA points to `/estimate`, so the estimator replaces this page and nothing else needs to change. See `docs/estimator-intake.md`. |
| `src/app/security/page.tsx` | How we handle your data: the eight-step sequence, the de-identification table, commitments, incident response. |
| `src/app/partners/page.tsx` | Referral partner programme with application form. |
| `src/app/api/lead/route.ts` | Receives the buyer and partner forms and writes them to Supabase. |
| `supabase/migrations/0001_leads.sql` | `leads` table for form submissions. |
| `src/components/` | Header, footer, logo, buttons, section headings, hero record-chain graphic. |
| `src/app/globals.css` | Design tokens (colours, fonts) and the drawing-grid backgrounds. |

## Forms

The buyer request (`/buyers#request`) and partner application (`/partners#apply`) forms post to `/api/lead`, which inserts into Supabase.

1. Run `supabase/migrations/0001_leads.sql` against your project.
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the deployment environment (server-side only, never `NEXT_PUBLIC_`).

Until those are set, the API returns 503 and the form offers to send the same details by email.

## Before launch

The copy makes commitments. Each one has to be true, and most must be in the Data Supply Agreement, before the site goes live:

- [ ] `hello@constructiondatabrokers.com` inbox exists (or change `site.email`).
- [ ] A Data Supply Agreement exists. `/security` summarises it and offers it to sellers' lawyers.
- [ ] Numbers in `commitments` (`src/lib/site.ts`): 1 business day reply, 5 business day objection window, deletion within 30 days, 48 hour buyer reporting.
- [ ] Fees: nothing up front, nothing if no deal closes, fee paid out of the buyer's payment.
- [ ] Access: read-only, revoked at project end, named staff with MFA only.
- [ ] De-identification: automated detection, human review, re-identification test, release log, "if we can't get it clean, we don't sell it".
- [ ] Never: give buyers originals, train our own models, sell to contractors or bid-intelligence firms, name the seller without consent.
- [ ] Every buyer contract includes the five terms listed under "Every buyer agrees to".
- [ ] Incident response steps on `/security` are in the agreement.
- [ ] Seller can leave on 30 days' notice.
- [ ] Partner fee split: the site says "we split our fee with you". Add the actual split to `/partners` once decided; a number converts better.
- [ ] Buyer page formats (JSON/Parquet, XER/XML, IFC) match what you can deliver.
- [ ] Privacy policy and terms pages (not built yet; get them drafted by counsel).
- [ ] Lawyer review of the rights section (the AIA A201/B101 statements) and the "not legal advice" wording.

## Deploy

Works on Vercel with no config. Import the repo, then add `constructiondatabrokers.com` and `www` under the project's Domains settings and point DNS at Vercel.
