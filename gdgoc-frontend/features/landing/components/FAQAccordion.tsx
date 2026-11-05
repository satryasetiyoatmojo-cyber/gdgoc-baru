
"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import type { FAQ } from "@/types/api";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full">
      {faqs.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <article
            key={item.id}
            className="border-b border-neutral-light-gray"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              onClick={() => setActiveId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-5 py-4 text-left"
            >
              <span className="text-sm font-medium leading-6 text-neutral-ink">
                {item.question}
              </span>

              <HiChevronDown
                aria-hidden="true"
                size={18}
                className={`shrink-0 text-brand-blue-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="pb-4 pr-8"
              >
                <p className="text-sm leading-6 text-neutral-gray">
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
