import OverviewHero from "@/features/overview/components/OverviewHero";
import OverviewNavigation from "@/features/overview/components/OverviewNavigation";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";
import LearningOutcomesSection from "@/features/overview/components/LearningOutcomesSection";
import LearningFormatsSection from "@/features/overview/components/LearningFormatsSection";
import { Suspense } from "react";
import LearningJourneySection from "@/features/overview/components/LearningJourneySection";
import StartingPointSection from "@/features/overview/components/StartingPointSection";
import FinalCTASection from "@/features/landing/components/FinalCTASection";

export default function OverviewPage() {
  return (
    <main>
      <OverviewHero />
      <OverviewNavigation />
      <LearningTracksSection />
      <LearningOutcomesSection />
      <LearningFormatsSection />
      <Suspense
      fallback={
        <section className="bg-neutral-white py-16 md:py-20">
          <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px]">
            <p className="text-sm text-neutral-gray">
              Loading learning journey...
            </p>
          </div>
        </section>
      }
    >
      <LearningJourneySection />
    </Suspense>
    <StartingPointSection />
    <FinalCTASection />
    </main>
  );
}