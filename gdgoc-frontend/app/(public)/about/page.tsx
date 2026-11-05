import AboutHero from "@/features/about/components/AboutHero";
import WhyWeComeTogether from "@/features/about/components/WhyWeComeTogether";
import CommunityValues from "@/features/about/components/CommunityValues";
import PeopleNotLabels from "@/features/about/components/PeopleNotLabels";
import { Suspense } from "react";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhyWeComeTogether />
      <CommunityValues />

      <Suspense
        fallback={
          <section className="bg-neutral-white px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-[1248px]">
              <p className="text-sm text-neutral-gray">
                Loading community roles...
              </p>
            </div>
          </section>
        }
      >
        <PeopleNotLabels />
      </Suspense>
    </main>
  );
}