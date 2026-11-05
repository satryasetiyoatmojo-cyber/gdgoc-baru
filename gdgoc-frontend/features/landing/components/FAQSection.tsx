
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import FAQAccordion from "@/features/landing/components/FAQAccordion";
import { getFaqs } from "@/lib/api/services";

export default async function FAQSection() {
  try {
    const response = await getFaqs();
    const faqs = response.data;

    if (!response.success || faqs.length === 0) {
      return (
        <section className="bg-neutral-white py-16 md:py-20">
          <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
            <p className="text-sm text-neutral-gray" role="status">
              Frequently asked questions are currently unavailable.
            </p>
          </div>
        </section>
      );
    }

    return (
      <section
        aria-labelledby="faq-heading"
        className="bg-neutral-white py-16 md:py-24"
      >
        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1200px] grid-cols-1 gap-10 md:w-[calc(100%-72px)] md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          {/* FAQ Introduction */}
          <div className="max-w-[300px]">
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-primary"
              />
              A few good questions
            </p>

            <h2
              id="faq-heading"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-5xl"
            >
              Wondering where to begin?
            </h2>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-brand-blue-primary transition-colors duration-200 hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-primary"
            >
              Ask us a question
              <HiArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div>
            <FAQAccordion faqs={faqs} />
          </div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to load FAQs:", error);

    return (
      <section className="bg-neutral-white py-16 md:py-20">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
          <p className="text-sm text-neutral-gray" role="status">
            Frequently asked questions are temporarily unavailable.
            Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
