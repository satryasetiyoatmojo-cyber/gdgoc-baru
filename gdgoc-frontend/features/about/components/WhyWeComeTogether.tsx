
export default function WhyWeComeTogether() {
  return (
    <section className="bg-support-footer px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-16">
        {/* Section Title */}
        <div>
          <p className="mb-5 text-[10px] font-medium tracking-wide text-neutral-gray">
            WHY WE COME TOGETHER
          </p>

          <h2 className="max-w-md text-3xl leading-tight font-bold tracking-tight text-neutral-ink md:text-4xl">
            A bridge from “I wonder” to “I made this.”
          </h2>
        </div>

        {/* Section Description */}
        <div>
          <h3 className="text-lg leading-7 font-medium text-neutral-ink md:text-xl">
            Learning feels different when there’s someone to exchange ideas
            with, a problem you care about, and the space to give it a try.
          </h3>

          <p className="mt-5 text-sm leading-7 text-neutral-gray md:text-base">
            That’s the spirit of Google Developer Groups on Campus at UGM.
            We create room for students to explore technology, develop
            practical skills, and learn from one another.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-gray md:text-base">
            Our campus is the starting point. The questions we ask and the
            things we build can reach beyond it.
          </p>
        </div>
      </div>
    </section>
  );
}
