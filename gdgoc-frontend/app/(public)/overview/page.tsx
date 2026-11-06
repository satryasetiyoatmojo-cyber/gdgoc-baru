import OverviewHero from "@/features/overview/components/OverviewHero";
import OverviewNavigation from "@/features/overview/components/OverviewNavigation";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";
import LearningOutcomesSection from "@/features/overview/components/LearningOutcomesSection";
import LearningFormatsSection from "@/features/overview/components/LearningFormatsSection";

export default function OverviewPage() {
  return (
    <main>
      <OverviewHero />
      <OverviewNavigation />
      <LearningTracksSection />
      <LearningOutcomesSection />
      <LearningFormatsSection />
    </main>
  );
}