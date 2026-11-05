
import { getJourney } from "@/lib/api/services";

export default async function GettingStartedSection() {
  try {
    const response = await getJourney();
    const journey = response.data;

    if (!response.success || journey.length === 0) {
      return null;
    }

    return (
      <section
        aria-labelledby="getting-started-heading"
        className="py-16 md:py-20"
      >
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-10">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-brand-blue-500"
              />
              Your first steps
            </p>

            <h2
              id="getting-started-heading"
              className="max-w-[650px] text-3xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-4xl"
            >
              You don’t need to have it all figured out.
            </h2>

            <p className="mt-4 max-w-[600px] text-sm leading-6 text-neutral-gray">
              Start with curiosity, learn with others, and turn
              what you discover into something meaningful.
            </p>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <article key={item.id} className="flex flex-col">
                <span className="text-3xl font-bold text-brand-blue-500 md:text-4xl">
                  {String(item.step).padStart(2, "0")}
                </span>

                <div className="mt-4 border-t border-neutral-light-gray pt-4">
                  <h3 className="text-lg font-semibold text-neutral-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-gray">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to load learning journey:", error);

    return (
      <section className="py-12">
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
          <p className="text-sm text-neutral-gray" role="status">
            Learning journey is temporarily unavailable.
            Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
