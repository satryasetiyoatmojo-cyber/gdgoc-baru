
import Link from "next/link";

export default function CommunityInvitation() {
  return (
    <section className="mt-5 rounded-[24px] bg-support-yellow-light p-6 md:p-7">
      {/* Eyebrow */}
      <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-neutral-gray">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-500" />
        Stay curious, stay connected
      </p>

      {/* Heading */}
      <h2 className="max-w-[340px] text-2xl font-bold leading-[1.15] text-neutral-ink">
        Looking for community updates?
      </h2>

      {/* Description */}
      <p className="mt-4 text-base leading-6 text-neutral-gray">
        Follow{" "}
        <span className="font-semibold text-neutral-ink">
          @gdgoc.ugm
        </span>{" "}
        for learning opportunities and what’s happening in the community.
      </p>

      {/* Instagram Link */}
      <Link
        href="https://www.instagram.com/gdgoc.ugm/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-brand-blue-primary transition-colors hover:text-brand-blue-hover"
      >
        Find @gdgoc.ugm
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
