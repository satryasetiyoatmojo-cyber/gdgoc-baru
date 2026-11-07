
import Link from "next/link";
import { ArrowRightIcon } from "@/components/shared/icons";
import { contactGuidance } from "@/features/contact/data/contact-guidance";

export default function ContactGuidance() {
  return (
    <section className="border-t border-neutral-light-gray py-14 md:py-16">
      <div className="mx-auto grid w-[calc(100%-128px)] max-w-[1248px] grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/* Left Content */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide text-neutral-gray">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-500" />
            A little guidance
          </p>

          <h2 className="max-w-[350px] text-3xl font-bold leading-tight text-neutral-ink md:text-4xl">
            Help us understand your idea.
          </h2>

          <Link
            href="/overview"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-primary transition-colors hover:text-brand-blue-hover"
          >
            Explore the programs first
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {/* Right Content */}
        <div>
          {contactGuidance.map((item) => (
            <div
              key={item.id}
              className="border-b border-neutral-light-gray py-4 first:pt-0"
            >
              <h3 className="text-base font-bold text-neutral-ink">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
