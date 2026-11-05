
import Hero from "@/features/landing/components/HeroSection";
import AboutSection from "@/features/landing/components/AboutSection";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";
import LearningApproachSection from "@/features/landing/components/LearningApproachSection";
import GettingStartedSection from "@/features/landing/components/GettingStartedSection";
import ProjectBasedSection from "@/features/landing/components/ProjectBasedSection";

export default function HomePage() {
  return (
      <main>
        <Hero />
        <AboutSection />
        <LearningTracksSection />
        <LearningApproachSection />
        <ProjectBasedSection />
        <GettingStartedSection />
      </main>
  );
}
