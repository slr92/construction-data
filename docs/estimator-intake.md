# Estimator intake: construction version

Notes for building `/estimate`. They adapt the structure of Grepped's two-step intake form (`/details`) for contractors.

## What Grepped's form does

Step 1 covers who you are. Step 2 covers the company and its data:

- Type of supply: company internals, dataset, or RL environment.
- Contact: name, email, phone, role. The form says if someone referred you.
- Company: name, website, what it does, employees, contractors, number of email inboxes.
- Headline numbers: total storage (for example 40 TB), years of records, where the data lives, and how soon it's ready (now / 1 to 2 weeks / a month / longer).
- Systems: one card per tool, at least two.
- Free text: "What would we find in your files?"
- Attestation: "I can speak for this company's data."
- Result: an indicative value range, labelled "not an offer". The page says long history, records that show outcomes, and specialist fields push the value up.
- Next step: a sample of one recent month per system, roughly 15 minutes. You either upload it yourself, or choose one of three "have our team do it" options: a screen share, temporary read-only access, or sending everything and letting them cut the sample.
- Exclusions it lists: payroll/HR, bank/card details, ID numbers, medical, privileged legal, anything about minors.
- Answers save as you go, and a partner referral link sits at the end.

## Construction fields (UK)

Value drivers to score, roughly in order: linked outcomes, years of history, specialist sector or trade, how structured the systems are, and rights exposure.

**Company**
- Company type: main contractor, specialist subcontractor (which trade), design and build, housebuilder, civils/infrastructure, M&E.
- Turnover band (£), and headcount (direct site staff, office staff, CIS subcontractors).
- Regions worked in (English regions, Scotland, Wales, Northern Ireland).

**Project history**
- Years of completed projects, and roughly how many per year.
- Sector mix as percentages: commercial, residential/BTR, healthcare, education, industrial and logistics, data centres, infrastructure/civils, public sector, refurbishment.
- Typical contract value band.
- Share of public sector or framework work. This flags rights exposure and Official-Sensitive material.
- Any higher-risk buildings under the Building Safety Act. Golden thread and fire strategy material is excluded.

**Systems** (one card each, with years covered)
- Project management and CDE: Procore, Autodesk Construction Cloud / BIM 360, Asite, Viewpoint 4Projects, Aconex, Fieldwire.
- Accounts and cost: COINS, Sage 200/50, Eque2, Causeway, Xero, Access.
- Estimating: CostX, Causeway Estimating, Bluebeam, Excel.
- Programmes: Asta Powerproject, Primavera P6, Microsoft Project.
- Site and safety: Viewpoint Field View, HammerTech, SafetyCulture, Causeway, paper diaries scanned.
- Files: SharePoint, Egnyte, Box, file server.
- Models: Revit/IFC (and whether you produced them or the design team did).

**Record types held** (checkboxes, each with yes / partial / no)
Tenders and BoQs, bid/no-bid log, baseline and updated programmes, EOT claims, RFIs and technical queries, variations (JCT) and compensation events (NEC), early warnings, site diaries, site photos and video, inspections and snagging, accident reports and RIDDOR records with root cause, cost reports and CVRs, interim valuations and payment notices, final accounts, handover and O&M manuals, lessons learned.

**Linkage questions** (these drive the biggest multiplier)
- Can you match the final account back to the tender, by cost code or BoQ item?
- Are variations or compensation events tied to the RFI, early warning or instruction that caused them?
- Do you keep baseline programmes as well as updates?

**Rights screen**
- Which client contract forms do you usually work under (JCT, NEC3/NEC4, bespoke, framework call-off)?
- Do your client contracts include confidentiality or ownership-of-documents clauses?
- How much of your work is design and build, where you may hold copyright in contractor's design?
- Any security-sensitive work (prisons, defence, data centres, utilities, anything under ISO 19650-5 or marked Official-Sensitive)?

**UK exclusions for the sample**
Payroll and CIS records, National Insurance numbers, right-to-work and DBS checks, HR files, accident and occupational health records, drug and alcohol tests, bank details, adjudication and dispute files, and drawings for security-sensitive or higher-risk buildings.

## Result screen

Show a range in £, not a point figure, and break it down by driver so the seller can see what would raise it ("link variations to RFIs: +X%"). Keep Grepped's "estimate, not an offer" wording.
