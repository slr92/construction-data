import type { Answers } from "./enquiry";

// Pricing model for the /estimate flow. Runs on the server only (called from
// /api/lead), so the logic never ships to the browser.
//
// Return null to show "we'll email your estimate" instead of a range. Once this
// returns real numbers, set showsInstantEstimate to true so the contact step
// promises an on-screen range.

export const showsInstantEstimate = false;

export type Estimate = {
  low: number; // GBP, value of one licence
  high: number;
  fit: "Strong fit" | "Good fit" | "Possible fit";
  drivers: string[]; // plain-English reasons, e.g. "15 years of finished jobs"
};

export function estimateValue(answers: Answers): Estimate | null {
  void answers;
  return null;
}
