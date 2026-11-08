
import { getInquiryCategories } from "@/lib/api/services";
import ContactInteraction from "./ContactInteraction";
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

    return <ContactInteraction categories={response.data} />;

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
