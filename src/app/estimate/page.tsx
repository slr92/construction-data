import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Eyebrow } from "@/components/section";
import { showsInstantEstimate } from "@/lib/estimate";

export const metadata: Metadata = {
  title: "Get an estimate",
  description: "Answer a few quick questions and see what your job records could be worth. No files needed.",
};

export default function EstimatePage() {
  return (
    <section className="grid-sheet-light min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <Eyebrow>Estimate</Eyebrow>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          See what your job records are worth.
        </h1>
        <p className="mt-4 text-lg text-muted">Quick questions, mostly one tap each. No files needed.</p>
        <div className="mt-12">
          <EnquiryForm showsInstantEstimate={showsInstantEstimate} />
        </div>
      </div>
    </section>
  );
}
