
import Image from "next/image";
import Link from "next/link";

import type { LearningTrack } from "@/features/learning-tracks/types";
import { ArrowRightIcon } from "@/components/shared/icons";

interface TrackCardProps {
  track: LearningTrack;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-light-gray bg-neutral-white">

      {/* Track Illustration */}
      <div className="relative h-[232px] w-full overflow-hidden">
        <Image
          src={track.image}
          alt={`Illustration for ${track.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Track Details */}
      <div className="flex flex-1 flex-col p-6">

        {/* Track Label */}
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-blue-500">
          {track.label}
        </p>

        {/* Track Title */}
        <h3 className="mt-4 text-2xl font-bold leading-tight text-neutral-ink">
          {track.title}
        </h3>

        {/* Track Description */}
        <p className="mt-4 text-base leading-[1.6] text-neutral-gray">
          {track.description}
        </p>

        {/* Track Topics */}
        <div className="mt-5 border-t border-neutral-light-gray pt-4">
          <p className="text-xs leading-5 text-neutral-gray">
            {track.topics.join(" · ")}
          </p>
        </div>

        {/* Track Link */}
        <Link
          href={track.href}
          className="
            mt-4 inline-flex w-fit items-center gap-2
            text-sm font-semibold text-brand-blue-500
            transition-colors duration-200
            hover:text-brand-blue-hover
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-brand-blue-500
          "
        >
          <span>Explore this track</span>
          <ArrowRightIcon size={18} />
        </Link>

      </div>
    </article>
  );
}
