
import { gettingStartedSteps } from "@/features/landing/data/getting-started";
import JourneySteps from "@/components/shared/JourneySteps";

export default function GettingStartedSection() {
  return (
    <section
      aria-labelledby="getting-started-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1200px] md:w-[calc(100%-160px)]">
        {/* Section Header */}
        <div className="mb-12 md:mb-14">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-blue-500"
            />
            Make your first move
          </p>

          <h2
            id="getting-started-heading"
            className="max-w-[700px] text-4xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-5xl"
          >
            You don’t need to have it all figured out.
          </h2>
        </div>

        {/* Getting Started Steps */}
        <JourneySteps steps={gettingStartedSteps} columns={3} />
      </div>
    </section>
  );
}
