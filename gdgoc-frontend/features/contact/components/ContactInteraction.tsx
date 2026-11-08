
"use client";

import { useState } from "react";
import type { InquiryCategory } from "@/types/api";

import InquiryCategoryList from "./InquiryCategoryList";
import ContactForm from "./ContactForm";
import CommunityInvitation from "./CommunityInvitation";

type ContactInteractionProps = {
  categories: InquiryCategory[];
};

export default function ContactInteraction({
  categories,
}: ContactInteractionProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id ?? "",
  );

  return (
    <section className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.28fr] md:gap-16">
      {/* Inquiry Categories */}
      <div>
        <h2 className="text-2xl font-bold leading-tight text-neutral-ink">
          What brings you here?
        </h2>

        <p className="mb-5 mt-4 text-sm leading-6 text-neutral-gray">
          Pick the closest topic in the form. We’ll take it from there.
        </p>

        <InquiryCategoryList
          categories={categories}
          selectedId={selectedCategoryId}
          onSelect={setSelectedCategoryId}
        />

        <CommunityInvitation />
      </div>

      {/* Contact Form */}
      <ContactForm
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={setSelectedCategoryId}
      />
    </section>
  );
}
