
import { gettingStartedSteps } from "@/features/landing/data/getting-started";

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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
          {gettingStartedSteps.map((item) => (
            <article key={item.id} className="flex flex-col">
              <span className="text-4xl font-bold leading-none text-brand-blue-500 md:text-[44px]">
                {item.number}
              </span>

              <div className="mt-6 border-t border-neutral-light-gray pt-5">
                <h3 className="text-xl font-semibold leading-snug text-neutral-ink md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-gray md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
