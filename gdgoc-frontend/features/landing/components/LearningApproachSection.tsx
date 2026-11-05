
import {
  LuBookOpen,
  LuCode,
  LuUsers,
} from "react-icons/lu";

import { learningApproaches } from "@/features/landing/data/learning-approach";

const approachIcons = {
  book: LuBookOpen,
  code: LuCode,
  users: LuUsers,
};

type ApproachIconName = keyof typeof approachIcons;

function ApproachIcon({ name }: { name: ApproachIconName }) {
  const Icon = approachIcons[name];

  return (
    <Icon
      aria-hidden="true"
      className="h-5 w-5 text-brand-blue-primary"
    />
  );
}

export default function LearningApproachSection() {
  return (
    <section
      aria-labelledby="learning-approach-heading"
      className="bg-neutral-light-gray/40 py-16 md:py-20"
    >
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
        {/* Section Heading */}
        <div className="mb-8">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-gray">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-blue-primary"
            />
            More than a classroom
          </p>

          <h2
            id="learning-approach-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-neutral-ink md:text-4xl"
          >
            Less watching. More making.
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-6 text-neutral-gray">
            Learn in a way that turns a new concept into something you can
            actually use.
          </p>
        </div>

        {/* Learning Approach Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {learningApproaches.map((approach) => (
            <article
              key={approach.id}
              className="flex min-h-[260px] flex-col rounded-2xl bg-neutral-white p-6 transition-shadow duration-200 hover:shadow-md md:min-h-[292px] md:rounded-[24px] md:p-8"
            >
              <div className="mb-5">
                <ApproachIcon name={approach.icon} />
              </div>

              <h3 className="text-[28px] font-semibold leading-tight text-neutral-ink">
                {approach.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-neutral-gray">
                {approach.description}
              </p>

              <div className="mt-5 border-t border-neutral-light-gray pt-4">
                <p className="text-sm font-medium text-brand-blue-primary">
                  {approach.supportingText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
