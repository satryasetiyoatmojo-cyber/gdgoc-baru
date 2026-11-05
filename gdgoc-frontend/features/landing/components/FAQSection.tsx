
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { getFaqs } from "@/lib/api/services";
import FAQAccordion from "@/features/landing/components/FAQAccordion";

export default async function FAQSection() {
  try {
    const response = await getFaqs();
    const faqs = response.data;

    if (!response.success || faqs.length === 0) {
      return (
        <section className="py-20">
          <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
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
        className="bg-neutral-white py-20 md:py-28"
      >
        <div className="mx-auto grid w-[calc(100%-72px)] max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

          {/* FAQ Introduction */}
          <div className="max-w-[300px]">
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-brand-blue-500"
              />
              A few good questions
            </p>

            <h2
              id="faq-heading"
              className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-4xl"
            >
              Wondering where to begin?
            </h2>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand-blue-500 transition-colors duration-200 hover:text-brand-blue-hover"
            >
              Ask us a question
              <HiArrowRight size={14} />
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
      <section className="py-12">
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
          <p className="text-sm text-neutral-gray" role="status">
            Frequently asked questions are temporarily unavailable.
            Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
