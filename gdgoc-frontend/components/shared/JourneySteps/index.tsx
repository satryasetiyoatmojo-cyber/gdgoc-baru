
import type { JourneyStepsProps } from "./types";

const columnVariants = {
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function JourneySteps({
  steps,
  columns,
}: JourneyStepsProps) {
  return (
    <div className={`grid grid-cols-1 gap-10 ${columnVariants[columns]}`}>
      {steps.map((item) => (
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
  );
}
