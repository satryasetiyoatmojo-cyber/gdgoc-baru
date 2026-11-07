
import { getJourney } from "@/lib/api/services";
import JourneySteps from "@/components/shared/JourneySteps";

export default async function LearningJourneySection() {
  try {
    const response = await getJourney();

    if (!response.success) {
      throw new Error("Failed to load learning journey");
    }

    const steps = response.data.map((item) => ({
      id: item.id,
      number: String(item.step).padStart(2, "0"),
      title: item.title,
      description: item.description,
    }));

    if (steps.length === 0) {
      return (
        <section
          id="learning-journey"
          className="bg-neutral-white py-16 md:py-20"
        >
          <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
            <p className="text-sm text-neutral-gray">
              Learning journey is not available yet.
            </p>
          </div>
        </section>
      );
    }

    return (
      <section
        id="learning-journey"
        aria-labelledby="learning-journey-heading"
        className="bg-neutral-white py-16 md:py-20"
      >
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-12 md:mb-14">
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
              <span className="h-2 w-2 rounded-full bg-brand-blue-500" />
              Progress, not perfection
            </p>

            <h2
              id="learning-journey-heading"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-5xl"
            >
              A journey you can keep building on.
            </h2>
          </div>

          {/* Learning Journey Steps */}
          <JourneySteps steps={steps} columns={4} />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to load learning journey:", error);

    return (
      <section
        id="learning-journey"
        className="bg-neutral-white py-16 md:py-20"
      >
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
          <p className="text-sm text-neutral-gray">
            Unable to load the learning journey. Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
