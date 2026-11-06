
import { learningFormats } from "@/features/overview/data/learning-formats";
import LearningFormatCard from "@/features/overview/components/LearningFormatCard";

export default function LearningFormatsSection() {
  return (
    <section
      id="learning-formats"
      aria-labelledby="learning-formats-heading"
      className="bg-[#f1f3f4] py-10 md:py-12"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
        {/* Section Header */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span className="h-2 w-2 rounded-full bg-brand-blue-500" />
            Ways to learn
          </p>

          <h2
            id="learning-formats-heading"
            className="max-w-[850px] text-4xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-5xl"
          >
            The format changes. The curiosity stays.
          </h2>

          <p className="mt-4 max-w-[750px] text-base leading-6 text-neutral-gray">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        {/* Learning Format Cards */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-2">
          {learningFormats.map((format) => (
            <LearningFormatCard
              key={format.id}
              format={format}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
