import Link from "next/link";

import { learningTracks } from "@/features/learning-tracks/data/learning-tracks";
import TrackCard from "@/features/learning-tracks/components/TrackCard";
import { ArrowRightIcon } from "@/components/shared/icons";

export default function LearningTracksSection() {
  return (
    <section
      id="tracks"
      aria-labelledby="tracks-heading"
      className="py-16 md:py-20"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">

        {/* Section Header */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-blue-500"
            />
            Find your starting point
          </p>

          <h2
            id="tracks-heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-4xl"
          >
            Many interests. One shared
            <br className="hidden sm:block" />
            journey.
          </h2>

          {/* Description and Overview Link */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[600px] text-sm leading-6 text-neutral-gray">
              Follow what excites you. Explore a track, then connect the dots
              with others.
            </p>

            <Link
              href="/overview"
              className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-brand-blue-500 transition-colors duration-200 hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-500"
            >
              <span>See the overview</span>
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
        {/* Learning Track Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

      </div>
    </section>
  );
}