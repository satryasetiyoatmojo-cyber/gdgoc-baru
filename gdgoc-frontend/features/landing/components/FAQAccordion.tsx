
"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

import type { FAQ } from "@/types/api";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIds, setActiveIds] = useState<Set<string>>(
    () => new Set(faqs.map((item) => item.id)),
  );

  const toggleFAQ = (id: string) => {
    setActiveIds((currentIds) => {
      const updatedIds = new Set(currentIds);

      if (updatedIds.has(id)) {
        updatedIds.delete(id);
      } else {
        updatedIds.add(id);
      }

      return updatedIds;
    });
  };

  return (
    <div className="w-full">
      {faqs.map((item) => {
        const isOpen = activeIds.has(item.id);
        const answerId = `faq-answer-${item.id}`;

        return (
          <article
            key={item.id}
            className="border-b border-neutral-light-gray"
          >
            {/* FAQ Question */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleFAQ(item.id)}
              className="flex w-full items-center justify-between gap-5 py-5 text-left md:py-6"
            >
              <span className="text-base font-semibold leading-7 text-neutral-ink md:text-xl">
                {item.question}
              </span>

              <HiChevronDown
                aria-hidden="true"
                size={20}
                className={`shrink-0 text-brand-blue-primary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* FAQ Answer */}
            {isOpen && (
              <div
                id={answerId}
                className="pb-5 pr-8 md:pb-6"
              >
                <p className="text-sm leading-6 text-neutral-gray md:text-base md:leading-6">
                  {item.answer}
                </p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
