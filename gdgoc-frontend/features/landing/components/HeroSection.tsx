import Image from "next/image";
import Link from "next/link";
import heroIllustration from "@/assets/images/hero-illustration.png";
import { ArrowRightIcon } from "@/components/shared/icons";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="mx-auto grid min-h-[666px] w-[calc(100%-72px)] max-w-[1200px] grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-0"
        >
      
        {/* Hero Content */}
        <div className="max-w-[540px]">

          <p className="mb-6 flex items-center text-xs font-medium text-neutral-gray">
            <span className="mr-2 h-2 w-2 rounded-full bg-brand-blue-500" />
            GDGoC UGM · 2026/2027
          </p>

          <h1 className="text-[clamp(3.5rem,6.5vw,6rem)] font-bold leading-[1.02] tracking-[-0.055em] text-neutral-ink">
            Big ideas.
            <br />
            <span className="text-brand-blue-500">
              Built together.
            </span>
          </h1>

          <p className="mt-7 max-w-[480px] text-sm leading-7 text-neutral-gray lg:text-base">
            A place for curious minds at{" "}
            <strong className="font-semibold text-neutral-ink">
              Universitas Gadjah Mada
            </strong>{" "}
            to learn, connect, and build technology that matters.
          </p>

          {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">

              {/* Primary CTA */}
              <Link
                href="/overview"
                className="  inline-flex h-[52px] w-full shrink-0
                items-center justify-center gap-3
                whitespace-nowrap rounded-md
                bg-brand-blue-500 px-4
                text-[13px] font-semibold text-white
                transition-colors duration-200 ease-in-out
                hover:bg-brand-blue-hover
                active:bg-brand-blue-active
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-brand-blue-500
                sm:w-[230px]"
              >
                <span>Find your learning track</span>

                <ArrowRightIcon size={18} />

              </Link>

              {/* Secondary CTA */}
              <Link
                 href="/about"
             className="inline-flex h-[52px] w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-md border border-neutral-light-gray bg-neutral-white px-4 text-[13px] font-medium text-brand-blue-500 transition-colors hover:bg-support-blue-light sm:w-[177px]"
               >
            <span>Get to know us</span>
            <ArrowRightIcon size={18} />
          </Link>

            </div>

          {/* Community Caption */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-500" />
              <span className="-ml-0.5 h-2.5 w-2.5 rounded-full bg-brand-red-500" />
              <span className="-ml-0.5 h-2.5 w-2.5 rounded-full bg-brand-yellow-500" />
              <span className="-ml-0.5 h-2.5 w-2.5 rounded-full bg-brand-green-500" />
            </div>

            <p className="text-xs text-neutral-gray">
              Different backgrounds. A shared curiosity.
            </p>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative mx-auto w-full max-w-[700px] lg:translate-y-6 lg:justify-self-end lg:-translate-x-8">
          <Image
            src={heroIllustration}
            alt="Illustration representing research, design, and development"
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="h-auto w-full object-contain"
          />

        </div>
      </section>

      {/* Community Values */}
      <section className="border-y border-neutral-light-gray">
        <div className="mx-auto flex w-[calc(100%-72px)] max-w-[1200px] flex-col justify-between gap-5 py-5 sm:flex-row sm:items-center">

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-ink">
            <span className="h-2 w-2 rounded-sm bg-brand-blue-500" />
            Learn by doing
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-ink">
            <span className="h-2 w-2 rounded-sm bg-brand-red-500" />
            Connect across disciplines
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-ink">
            <span className="h-2 w-2 rounded-sm bg-brand-green-500" />
            Build with purpose
          </div>

        </div>
      </section>
    </>
  );
}
