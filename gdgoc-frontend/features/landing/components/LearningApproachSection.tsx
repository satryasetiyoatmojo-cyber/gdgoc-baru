import { learningApproaches } from "@/features/landing/data/learning-approach";

function ApproachIcon({ name }: { name: "book" | "code" | "users" }) {
  const iconPaths = {
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
        <path d="M4 5.5V21" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
        <path d="m14 4-4 16" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-brand-blue-500"
    >
      {iconPaths[name]}
    </svg>
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
              className="h-2 w-2 rounded-sm bg-brand-blue-500"
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
              className="
                flex min-h-[260px] flex-col
                rounded-2xl bg-neutral-white 
                p-6 md:min-h-[292px] md:rounded-[24px] md:p-8
                transition-shadow duration-200 hover:shadow-md
              "
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
              <p className="text-sm font-medium text-brand-blue-500">
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