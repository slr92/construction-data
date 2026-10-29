import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estimate your data",
  description: "Answer a few questions and see what your construction records could be worth to AI labs.",
};

// Placeholder until the estimator is built. Every CTA on the site points at
// /estimate, so the estimator can replace this page without touching anything else.
export default function EstimatePage() {
  return (
    <section className="grid-sheet-light">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:py-32">
        <Eyebrow>Estimate</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance">
          The online estimator is nearly ready.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          In the meantime, email us and we&rsquo;ll run an estimate by hand. Tell us roughly how many years of
          closed projects you have, what kind of work you do, and which systems you keep records in.
        </p>
        <div className="mt-9">
          <ButtonLink href={`mailto:${site.email}?subject=Data%20estimate`}>Email us for an estimate</ButtonLink>
        </div>
      </div>
    </section>
  );
}
