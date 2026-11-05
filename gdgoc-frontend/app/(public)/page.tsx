import Hero from "@/features/landing/components/HeroSection";
import AboutSection from "@/features/landing/components/AboutSection";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <LearningTracksSection />
    </main>
  );
}