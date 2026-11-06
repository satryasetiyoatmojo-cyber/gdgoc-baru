import OverviewHero from "@/features/overview/components/OverviewHero";
import OverviewNavigation from "@/features/overview/components/OverviewNavigation";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";
export default function OverviewPage() {
  return (
    <main>
      <OverviewHero />
      <OverviewNavigation />
      <LearningTracksSection />
    </main>
  );
}