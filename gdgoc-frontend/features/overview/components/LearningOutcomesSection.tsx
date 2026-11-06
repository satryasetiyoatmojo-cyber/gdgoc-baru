
import { learningOutcomes } from "@/features/overview/data/learning-outcomes";

export default function LearningOutcomesSection() {
  return (
    <section
      aria-labelledby="learning-outcomes-heading"
      className="bg-neutral-white py-16 md:py-8"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
        {/* Section Heading */}
        <h2
          id="learning-outcomes-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-neutral-ink md:text-4xl"
        >
          From an interest to something you can show.
        </h2>

        {/* Learning Outcomes Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-light-gray">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-neutral-light-gray">
                <tr>
                  <th className="w-[23%] px-7 py-5 text-xs font-medium text-neutral-gray">
                    Pathway
                  </th>
                  <th className="w-[39%] px-7 py-5 text-xs font-medium text-neutral-gray">
                    What you can practice
                  </th>
                  <th className="w-[38%] px-7 py-5 text-xs font-medium text-neutral-gray">
                    A possible outcome
                  </th>
                </tr>
              </thead>

              <tbody>
                {learningOutcomes.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-neutral-light-gray"
                  >
                    <th
                      scope="row"
                      className="px-7 py-6 text-base font-semibold text-neutral-ink"
                    >
                      {item.pathway}
                    </th>

                    <td className="px-7 py-6 text-base leading-relaxed text-neutral-gray">
                      {item.practice}
                    </td>

                    <td className="px-7 py-6 text-base leading-relaxed text-neutral-gray">
                      {item.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Note */}
        <p className="mt-8 text-xs leading-5 text-neutral-gray">
          Illustrative learning outcomes. Topics and opportunities are shared
          through community updates.
        </p>
      </div>
    </section>
  );
}
