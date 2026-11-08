
import { getInquiryCategories } from "@/lib/api/services";
import InquiryCategoryList from "./InquiryCategoryList";
import ContactForm from "./ContactForm";
import CommunityInvitation from "./CommunityInvitation";

export default async function ContactMainSection() {
  try {
    const response = await getInquiryCategories();

    if (!response.success || !Array.isArray(response.data)) {
    throw new Error("Failed to load inquiry categories");
    }
    // Empty State
    if (response.data.length === 0) {
      return (
        <section className="mt-14 rounded-xl border border-neutral-light-gray p-6">
          <p className="text-sm text-neutral-gray">
            Inquiry categories are not available yet. Please try again later.
          </p>
          <CommunityInvitation />
        </section>
      );
    }
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

          <InquiryCategoryList categories={response.data} />

          <CommunityInvitation />
        </div>

        {/* Contact Form */}
        <ContactForm categories={response.data} />
      </section>
    );
  } catch (error) {
    console.error("Contact main section error:", error);

    return (
      <section className="mt-14 rounded-xl border border-neutral-light-gray p-6">
        <p className="text-sm text-neutral-gray">
          We couldn’t load the inquiry categories. Please try again later.
        </p>
      </section>
    );
  }
}
