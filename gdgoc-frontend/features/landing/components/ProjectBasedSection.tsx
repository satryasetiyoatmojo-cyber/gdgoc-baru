
import Link from "next/link";
import { LuCode } from "react-icons/lu";
import { ArrowRightIcon } from "@/components/shared/icons";

export default function ProjectBasedSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid w-[calc(100%-72px)] max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Project Illustration */}
        <div className="rounded-[24px] bg-support-yellow-light p-6 md:p-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-gray">
              Idea → Prototype
            </p>

            <LuCode
              className="h-5 w-5 text-brand-blue-primary"
              aria-hidden="true"
            />
          </div>

          {/* Mini Project Preview */}
          <div className="rounded-xl border border-neutral-light-gray bg-neutral-white p-5">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-red-500" />
              <span className="h-2 w-2 rounded-full bg-brand-yellow-500" />
              <span className="h-2 w-2 rounded-full bg-brand-green-500" />
            </div>

            <h3 className="max-w-[280px] text-xl font-bold leading-tight text-neutral-ink">
              A little less friction.
              <br />
              A better campus day.
            </h3>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-support-blue-light px-3 py-3 text-center text-xs font-semibold text-neutral-ink">
                Discover
              </div>

              <div className="rounded-lg bg-support-green-light px-3 py-3 text-center text-xs font-semibold text-neutral-ink">
                Connect
              </div>

              <div className="rounded-lg bg-support-red-light px-3 py-3 text-center text-xs font-semibold text-neutral-ink">
                Share
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-neutral-gray">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>

          <p className="mt-4 text-[9px] font-medium uppercase tracking-wide text-neutral-gray">
            Example project brief · Not a launched product
          </p>
        </div>

        {/* Project Content */}
        <div className="max-w-[520px]">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span className="h-2 w-2 rounded-full bg-brand-blue-500" />
            Build something that matters
          </p>

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-4xl">
            Your next project could start on campus.
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-gray">
            What if finding a study partner, sharing resources, or
            navigating campus felt easier? Small, familiar problems
            can be the beginning of meaningful work.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-gray">
            Bring research, design, and development together. Try an
            idea, get feedback, and make the next version better.
          </p>

          <Link
            href="/overview"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-500 transition-colors hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-500"
          >
            <span>Explore project-based learning</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
