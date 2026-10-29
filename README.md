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
| `src/app/estimate/page.tsx` | Placeholder for the estimator. Every "Estimate" CTA points to `/estimate`, so the estimator replaces this page and nothing else needs to change. |
| `src/components/` | Header, footer, logo, buttons, section headings, hero record-chain graphic. |
| `src/app/globals.css` | Design tokens (colours, fonts) and the drawing-grid backgrounds. |

## Before launch

The copy makes commitments. Each one has to be true before the site goes live:

- [ ] `hello@constructiondatabrokers.com` inbox exists (or change `site.email`).
- [ ] Commission model: the site says no upfront fees and a share of each sale.
- [ ] Data handling: isolated storage per seller, full transfer only after a licence is signed, working copy deleted after delivery.
- [ ] Redaction scope: names, clients, addresses, title blocks, stamps, photo EXIF/GPS, faces.
- [ ] No HR or payroll records are sold.
- [ ] Sellers can exclude buyers by name and approve listing wording.
- [ ] Buyer page formats (JSON/Parquet, XER/XML, IFC) match what you can deliver.
- [ ] Privacy policy and terms pages (not built yet; get them drafted by counsel).
- [ ] Lawyer review of the rights section (the AIA A201/B101 statements) and the "not legal advice" wording.

## Deploy

Works on Vercel with no config. Import the repo, then add `constructiondatabrokers.com` and `www` under the project's Domains settings and point DNS at Vercel.
