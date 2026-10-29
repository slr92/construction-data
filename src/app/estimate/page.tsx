import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get an estimate",
  description: "Answer a few questions and see what your job records could be worth.",
};

// Placeholder until the estimator is built. Every CTA on the site points at
// /estimate, so the estimator can replace this page without touching anything else.
export default function EstimatePage() {
  return (
    <section className="grid-sheet-light">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:py-32">
        <Eyebrow>Estimate</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance">
          Our online estimator is coming soon.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Until then, email us and we&rsquo;ll put a number together for you.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Tell us roughly how many years of finished jobs you have, what kind of work you do and which systems you
          use.
        </p>
        <div className="mt-9">
          <ButtonLink href={`mailto:${site.email}?subject=Estimate`}>Email us for an estimate</ButtonLink>
        </div>
      </div>
    </section>
  );
}
