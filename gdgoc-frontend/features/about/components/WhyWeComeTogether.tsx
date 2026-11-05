
export default function WhyWeComeTogether() {
  return (
    <section className="bg-support-footer px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-[1248px] grid-cols-1 gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)] md:gap-16 lg:gap-24">
        {/* Section Heading */}
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase text-neutral-gray">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-primary" />
            Why we come together
          </p>

          <h2 className="text-3xl leading-[1.12] font-bold tracking-tight text-neutral-dark-gray md:text-5xl">
            <span className="block">A bridge from</span>

            <span className="block">
              <span className="text-brand-blue-hover">
                “I wonder”
              </span>{" "}
              to
            </span>

            <span className="block bg-[linear-gradient(to_bottom,var(--gradient-blue-start),var(--gradient-blue-end))] bg-clip-text text-transparent">
              “I made this.”
            </span>
          </h2>
        </div>

        {/* Section Description */}
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-neutral-ink md:text-2xl">
            Learning feels different when there’s someone to exchange ideas
            with, a problem you care about, and the space to give it a try.
          </p>

          <p className="text-base leading-relaxed text-neutral-gray md:text-lg">
            That’s the spirit of Google Developer Groups on Campus at UGM.
            We create room for students to explore technology, develop
            practical skills, and learn from one another.
          </p>

          <p className="text-base leading-relaxed text-neutral-gray md:text-lg">
            Our campus is the starting point. The questions we ask and the
            things we build can reach beyond it.
          </p>
        </div>
      </div>
    </section>
  );
}
