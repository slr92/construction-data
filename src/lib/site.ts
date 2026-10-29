// Brand and contact details live here so a rename is a one-file change.
export const site = {
  name: "Construction Data Brokers",
  shortName: "CDB",
  url: "https://constructiondatabrokers.com",
  tagline: "Construction data licensing",
  description:
    "Get paid for the job records you already have. We check your contracts, strip out identifying details and license your construction data to AI companies. You approve every sale.",
  // Set up this inbox before launch.
  email: "hello@constructiondatabrokers.com",
  nav: [
    { label: "How it works", href: "/#how" },
    { label: "Security", href: "/security" },
    { label: "Partners", href: "/partners" },
    { label: "For AI labs", href: "/buyers" },
  ],
} as const;

// Operational promises quoted in the copy. Each must match the signed
// Data Supply Agreement before launch.
export const commitments = {
  replyBusinessDays: 1,
  objectionBusinessDays: 5,
  deletionDays: 30,
  breachNoticeHours: 48,
} as const;
