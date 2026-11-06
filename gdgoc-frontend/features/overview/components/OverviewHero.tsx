
import Image from "next/image";
import overviewHeroImage from "@/assets/images/overviewhero.png";

export default function OverviewHero() {
  return (
    <section className="border-b border-neutral-light-gray bg-neutral-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-[1fr_320px] md:gap-12 md:px-10 md:py-16">

        {/* Hero Content */}
        <div>
          <p className="mb-6 flex items-center gap-2 text-[10px] font-medium tracking-wide text-neutral-gray">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-primary" />
            OVERVIEW · PROGRAMS & LEARNING TRACKS
          </p>

          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-neutral-ink md:text-6xl">
            Find your spark.
            <span className="block text-brand-blue-primary">
              Build your own path.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-gray md:text-base md:leading-7">
            Explore how research, creativity, and development connect.
            Start with one interest. Grow through practice and the people
            around you.
          </p>
        </div>

        {/* Hero Illustration */}
        <div className="mx-auto w-full max-w-[320px]">
          <Image
            src={overviewHeroImage}
            alt="Research and discovery illustration"
            width={447}
            height={448}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
