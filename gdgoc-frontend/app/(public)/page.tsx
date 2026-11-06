
import Hero from "@/features/landing/components/HeroSection";
import AboutSection from "@/features/landing/components/AboutSection";
import LearningTracksSection from "@/features/landing/components/LearningTracksSection";
import LearningApproachSection from "@/features/landing/components/LearningApproachSection";
import GettingStartedSection from "@/features/landing/components/GettingStartedSection";
import ProjectBasedSection from "@/features/landing/components/ProjectBasedSection";
import CommunityPromiseSection from "@/features/landing/components/CommunityPromiseSection";
import FAQSection from "@/features/landing/components/FAQSection";
import FinalCTA from "@/components/shared/FinalCTA";

import { Suspense } from "react";
import FAQLoading from "@/features/landing/components/FAQLoading";
export default function HomePage() {
  return (
      <main>
        <Hero />
        <AboutSection />
        <LearningTracksSection />
        <LearningApproachSection />
        <ProjectBasedSection />
        <GettingStartedSection />
        <CommunityPromiseSection />
        
        
        <Suspense fallback={<FAQLoading />}><FAQSection />
        </Suspense>
        <FinalCTA />
      </main>
  );
}
