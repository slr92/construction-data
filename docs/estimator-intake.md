# Estimator intake: construction version

Notes for building `/estimate`. They adapt the structure of Grepped's two-step intake form (`/details`) for contractors.

## What Grepped's form does

Step 1 covers who you are. Step 2 covers the company and its data:

- Type of supply: company internals, dataset, or RL environment.
- Contact: name, email, phone, role. The form says if someone referred you.
- Company: name, website, what it does, employees, contractors, number of email inboxes.
- Headline numbers: total storage (for example 40 TB), years of records, where the data lives, and how soon it's ready (now / 1–2 weeks / a month / longer).
- Systems: one card per tool, at least two.
- Free text: "What would we find in your files?"
- Attestation: "I can speak for this company's data."
- Result: an indicative value range, labelled "not an offer". The page says long history, records that show outcomes, and specialist fields push the value up.
- Next step: a sample of one recent month per system, roughly 15 minutes. You either upload it yourself, or choose one of three "have our team do it" options: a screen share, temporary read-only access, or sending everything and letting them cut the sample.
- Exclusions it lists: payroll/HR, bank/card details, ID numbers, medical, privileged legal, anything about minors.
- Answers save as you go, and a partner referral link sits at the end.

## Construction fields

Value drivers to score, roughly in order: linked outcomes, years of history, specialist sector or trade, how structured the systems are, and rights exposure.

**Company**
- Company type: GC / CM, specialty trade (which one), design-build, developer-builder, civil/heavy.
- Annual revenue band, and employees (field and office).
- Union, open shop, or mixed.
- Regions worked in.

**Project history**
- Years of closed projects, and roughly how many per year.
- Sector mix as percentages: commercial, multifamily, healthcare, education, industrial, data centres, infrastructure/civil, government, residential.
- Typical project size band.
- Share of public or government work. This flags CUI and rights exposure.

**Systems** (one card each, with years covered)
- Project management: Procore, Autodesk Construction Cloud / BIM 360, Trimble Viewpoint Team, Fieldwire, other.
- Accounting/ERP: Sage 300 CRE, Sage Intacct Construction, Viewpoint Vista/Spectrum, Foundation, CMiC, Acumatica, QuickBooks.
- Estimating: Sage Estimating, HCSS HeavyBid, ProEst, Trimble/Accubid, Excel.
- Scheduling: Primavera P6, Microsoft Project, other.
- Field and safety: HCSS HeavyJob, Raken, SafetyCulture, other.
- Files: SharePoint, Egnyte, Box, file server.
- Models: Revit/IFC (and whether you created them).

**Record types held** (checkboxes, each with yes / partial / no)
Estimates and bid history, bid/no-bid log, baseline and updated schedules, RFIs, submittals, change orders, daily logs, site photos and video, inspections and punch lists, safety incidents with root cause, job cost reports (committed vs actual), pay applications, closeout and warranty, lessons learned.

**Linkage questions** (these drive the biggest multiplier)
- Can you match final job cost back to the original estimate, by cost code?
- Are change orders tied to the RFI or event that caused them?
- Do you keep baseline schedules as well as updates?

**Rights screen**
- Which owner contract forms do you usually sign (AIA, ConsensusDocs, owner bespoke, government)?
- Do your owner contracts include confidentiality or records-ownership clauses?
- How much of your work is design-build, where you may hold design rights?
- Any security-sensitive work (data centres, prisons, utilities, defence)?

**Construction-specific exclusions for the sample**
Certified payroll, I-9s and HR files, injury and medical records, drug tests, background checks, bank details, privileged claim and dispute files, and drawings for security-sensitive facilities.

## Result screen

Show a range, not a point figure, and break it down by driver so the seller can see what would raise it ("link change orders to RFIs: +X%"). Keep Grepped's "estimate, not an offer" wording.
