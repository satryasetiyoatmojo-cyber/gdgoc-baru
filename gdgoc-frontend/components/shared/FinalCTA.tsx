
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function FinalCTA() {
  return (
    <section className="bg-neutral-white py-16 md:py-20">
      <div className="mx-auto flex w-[calc(100%-72px)] max-w-[1200px] flex-col justify-between gap-8 rounded-[32px] bg-support-blue-light px-6 py-8 md:flex-row md:items-center md:gap-12 md:px-12 md:py-12">

        {/* CTA Content */}
        <div className="max-w-[650px]">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-blue-primary"
            />
            Your next chapter
          </p>

          <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-neutral-ink md:text-[44px]">
            Bring your curiosity.
            <br />
            We’ll build from there.
          </h2>

          <p className="mt-5 text-sm leading-6 text-neutral-gray md:text-base">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex shrink-0 flex-col items-start gap-4">
          <Link
            href="/overview"
            className="inline-flex h-[52px] w-full items-center justify-center gap-4 whitespace-nowrap rounded-md bg-brand-blue-primary px-6 text-sm font-semibold text-neutral-white transition-colors duration-200 hover:bg-brand-blue-hover active:bg-brand-blue-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-primary sm:w-[241px]"
          >
            <span>Explore the overview</span>
            <HiArrowRight size={18} aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-brand-blue-primary transition-colors duration-200 hover:text-brand-blue-hover"
          >
            <span>Talk to the community</span>
            <HiArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
