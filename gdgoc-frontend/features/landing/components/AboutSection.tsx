import Link from "next/link";
import { ArrowRightIcon } from "@/components/shared/icons";

const communityTraits = [
  "Student-led",
  "Peer-powered",
  "Curiosity-first",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-20"
    >
      <div className="mx-auto grid w-[calc(100%-72px)] max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

        {/* Section Heading */}
        <div className="max-w-[440px]">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-blue-500"
            />
            A Campus Community
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-ink md:text-4xl"
          >
            Not just learning tech.
            <br />
            Finding your people.
          </h2>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue-500 transition-colors duration-200 hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-500"
          >
            <span>More about GDGoC UGM</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {/* Section Description */}
        <div className="flex flex-col justify-center">
          <p className="text-base leading-7 text-neutral-gray">
            Google Developer Groups on Campus, Universitas Gadjah Mada,
            brings students together around one simple idea: we can go
            further when we learn with each other.
          </p>

          <p className="mt-4 text-sm leading-6 text-neutral-gray">
            From your first line of code to your next product idea,
            there is always room to ask questions, explore new
            perspectives, and discover something new.
          </p>

          {/* Community Traits */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {communityTraits.map((trait) => (
              <li
                key={trait}
                className="rounded-full bg-support-blue-light px-3 py-1.5 text-xs font-medium text-neutral-ink"
              >
                {trait}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}