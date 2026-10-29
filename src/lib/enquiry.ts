// Questions for the /estimate enquiry flow. Structure follows Grepped's
// /form, adapted for UK contractors. Edit wording and options here; the form
// component renders whatever this file describes.

export type Answers = Record<string, string | string[]>;

export type Option = { value: string; description?: string };

type Base = {
  id: string;
  title: string | ((a: Answers) => string);
  subtitle?: string;
  showIf?: (a: Answers) => boolean;
};

export type Question =
  | (Base & { kind: "single"; options: Option[] })
  | (Base & { kind: "multi"; options: Option[] })
  | (Base & { kind: "groups"; groups: { id: string; prompt: string; hint?: string; options: Option[] }[] })
  | (Base & { kind: "platforms" });

export const REFERRER = "I'm introducing a contractor";

export const isReferrer = (a: Answers) => a.role === REFERRER;
const your = (a: Answers) => (isReferrer(a) ? "their" : "your");
const you = (a: Answers) => (isReferrer(a) ? "they" : "you");

export const platformsBySystem: Record<string, string[]> = {
  "Project management": ["Procore", "Autodesk Construction Cloud", "Asite", "Viewpoint 4Projects", "Aconex", "Fieldwire", "Other"],
  "Accounts and cost": ["COINS", "Sage 200", "Sage 50", "Eque2", "Causeway", "Xero", "Access", "Other"],
  Estimating: ["CostX", "Causeway Estimating", "Bluebeam", "Excel", "Other"],
  Programmes: ["Asta Powerproject", "Primavera P6", "Microsoft Project", "Other"],
  "Site diaries and safety": ["Viewpoint Field View", "HammerTech", "SafetyCulture", "Causeway", "Paper, scanned", "Other"],
  "Drawings and models": ["AutoCAD", "Revit", "Navisworks", "Tekla", "Other"],
  "Shared files": ["SharePoint", "OneDrive", "Egnyte", "Box", "Dropbox", "Google Drive", "Own server", "Other"],
  "Site photos and video": ["Procore photos", "OpenSpace", "Time-lapse cameras", "Drones", "Phones only", "Other"],
  Email: ["Outlook", "Gmail", "Other"],
  "Tendering and CRM": ["HubSpot", "Salesforce", "Microsoft Dynamics", "Excel", "Other"],
  "Team chat": ["Microsoft Teams", "WhatsApp", "Slack", "Other"],
};

export const questions: Question[] = [
  {
    id: "role",
    kind: "single",
    title: "Which best describes your role?",
    options: [
      { value: "Owner or managing director", description: "I run the company" },
      { value: "Operations or construction director", description: "I run how the work gets done" },
      { value: "Finance director or commercial lead", description: "I look after the numbers" },
      { value: "IT, digital or data lead", description: "I look after our systems" },
      { value: REFERRER, description: "Accountant, broker, consultant or adviser who knows the owner" },
    ],
  },
  {
    id: "business",
    kind: "single",
    title: (a) => (isReferrer(a) ? "What kind of contractor are they?" : "What kind of contractor are you?"),
    options: [
      { value: "Main contractor" },
      { value: "Specialist subcontractor" },
      { value: "Civils and infrastructure" },
      { value: "M&E and building services" },
      { value: "Housebuilder or developer" },
      { value: "Fit-out and refurbishment" },
      { value: "Other construction" },
    ],
  },
  {
    id: "trade",
    kind: "single",
    title: "Which trade?",
    showIf: (a) => a.business === "Specialist subcontractor",
    options: [
      { value: "Groundworks and concrete" },
      { value: "Steel and frame" },
      { value: "Envelope, cladding and roofing" },
      { value: "Drylining, ceilings and interiors" },
      { value: "Joinery and finishes" },
      { value: "Demolition and enabling works" },
      { value: "Other trade" },
    ],
  },
  {
    id: "years",
    kind: "single",
    title: (a) => `How many years of finished jobs do ${your(a)} systems hold?`,
    subtitle: "Count from the oldest records you could still find, paper included.",
    options: [
      { value: "20 years or more" },
      { value: "10 to 19 years" },
      { value: "5 to 9 years" },
      { value: "2 to 4 years" },
      { value: "Under 2 years" },
    ],
  },
  {
    id: "team",
    kind: "single",
    title: "Roughly how many people work for the company?",
    subtitle: "Direct staff only, not subcontractors.",
    options: [
      { value: "Under 10" },
      { value: "10 to 24" },
      { value: "25 to 49" },
      { value: "50 to 99" },
      { value: "100 to 249" },
      { value: "250 to 499" },
      { value: "500 to 999" },
      { value: "1,000 or more" },
    ],
  },
  {
    id: "size",
    kind: "groups",
    title: "How big is the business?",
    subtitle: "A best guess is fine. It tells us how much the systems have recorded.",
    groups: [
      {
        id: "jobsPerYear",
        prompt: "How many jobs are finished in a typical year?",
        options: [
          { value: "Under 10" },
          { value: "10 to 24" },
          { value: "25 to 49" },
          { value: "50 to 99" },
          { value: "100 to 249" },
          { value: "250 or more" },
          { value: "Not sure" },
        ],
      },
      {
        id: "turnover",
        prompt: "Roughly what's the annual turnover?",
        hint: "A range is enough. It stays private.",
        options: [
          { value: "Under £5m" },
          { value: "£5m to £20m" },
          { value: "£20m to £50m" },
          { value: "£50m to £100m" },
          { value: "£100m to £250m" },
          { value: "£250m to £500m" },
          { value: "Over £500m" },
          { value: "Prefer not to say" },
        ],
      },
    ],
  },
  {
    id: "sectors",
    kind: "multi",
    title: (a) => `What kind of work do ${you(a)} do?`,
    subtitle: "Tick all that apply. Specialist sectors are worth more.",
    options: [
      { value: "Commercial and offices" },
      { value: "Residential and build-to-rent" },
      { value: "Healthcare" },
      { value: "Education" },
      { value: "Industrial and logistics" },
      { value: "Data centres" },
      { value: "Infrastructure and civils" },
      { value: "Public sector and frameworks" },
      { value: "Retail, hotels and leisure" },
      { value: "Refurbishment and fit-out" },
    ],
  },
  {
    id: "systems",
    kind: "multi",
    title: "Which systems does the company use day to day?",
    subtitle: "Tick all that apply. The mix tells us how much the records can show.",
    options: [
      { value: "Project management", description: "For example Procore, Asite, 4Projects" },
      { value: "Accounts and cost", description: "For example COINS, Sage, Eque2" },
      { value: "Estimating", description: "For example CostX, Causeway, Bluebeam" },
      { value: "Programmes", description: "For example Asta Powerproject, P6" },
      { value: "Site diaries and safety", description: "For example Field View, HammerTech, paper" },
      { value: "Drawings and models", description: "For example AutoCAD, Revit, Navisworks" },
      { value: "Shared files", description: "For example SharePoint, Egnyte, a server" },
      { value: "Site photos and video", description: "Phones, drones, time-lapse cameras" },
      { value: "Email", description: "For example Outlook, Gmail" },
      { value: "Tendering and CRM", description: "For example HubSpot, Salesforce, Excel" },
      { value: "Team chat", description: "For example Teams, WhatsApp groups" },
    ],
  },
  {
    id: "platforms",
    kind: "platforms",
    title: "Which tools exactly?",
    subtitle: "Optional, but it sharpens the estimate.",
  },
  {
    id: "ownership",
    kind: "single",
    title: "Are the records the company's to license?",
    subtitle: "Assume they're anonymised and covered by a proper agreement. This is about contracts, not privacy.",
    options: [
      { value: "Yes, they're ours", description: "We own what our systems record" },
      { value: "Most likely", description: "We'd want to check a few contracts first" },
      { value: "Some of them", description: "Some jobs have client confidentiality clauses or other people's design" },
      { value: "Not sure yet", description: "We'd need to look at our contracts. That's normal, and checking is part of what we do." },
    ],
  },
  {
    id: "readiness",
    kind: "groups",
    title: "Where are you with this?",
    subtitle: "There's no wrong answer. It shapes what we show you first.",
    groups: [
      {
        id: "stage",
        prompt: "How ready are you?",
        options: [
          { value: "Ready to start" },
          { value: "Want to learn more" },
          { value: "Want to understand the risks first" },
          { value: "Just looking" },
        ],
      },
      {
        id: "goal",
        prompt: "What would you most want from it?",
        options: [
          { value: "New income", description: "Earn from records we already have" },
          { value: "Just a number", description: "Know what it's worth before deciding anything" },
          { value: "Value for a sale or succession", description: "Show what the business holds before an exit" },
          { value: "A head start on AI", description: "Get ahead of how AI will change our work" },
        ],
      },
    ],
  },
];

export function titleOf(q: Question, a: Answers) {
  return typeof q.title === "function" ? q.title(a) : q.title;
}

export function visibleQuestions(a: Answers) {
  return questions.filter((q) => !q.showIf || q.showIf(a));
}

// Answers that belong to questions no longer on the path (e.g. trade after
// switching away from specialist subcontractor) are dropped before submitting.
export function pruneAnswers(a: Answers): Answers {
  const keep = new Set<string>();
  for (const q of visibleQuestions(a)) {
    if (q.kind === "groups") q.groups.forEach((g) => keep.add(g.id));
    else keep.add(q.id);
  }
  return Object.fromEntries(Object.entries(a).filter(([k]) => keep.has(k)));
}
