
import { learningTracks } from "@/features/learning-tracks/data/learning-tracks";
import TrackCard from "@/features/learning-tracks/components/TrackCard";

export default function LearningTracksSection() {
  return (
    <section
      id="learning-tracks"
      aria-labelledby="learning-tracks-heading"
      className="bg-neutral-white py-16 md:py-20"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
        {/* Section Header */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            Explore your interests
          </p>

          <h2
            id="learning-tracks-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-neutral-ink md:text-4xl"
          >
            Three tracks. Endless possibilities.
          </h2>

          <p className="mt-4 max-w-[600px] text-sm leading-6 text-neutral-gray md:text-base">
            Discover different ways to learn, explore ideas, and build
            something meaningful with the community.
          </p>
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
