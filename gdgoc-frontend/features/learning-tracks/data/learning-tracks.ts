import type { LearningTrack } from "@/features/learning-tracks/types";

import researchImage from "@/assets/images/track-development.png";
import designImage from "@/assets/images/track-design.png";
import developmentImage from "@/assets/images/track-research.png";

export const learningTracks: LearningTrack[] = [
  {
    id: "research",
    title: "Research & Discovery",
    label: "Explore the why",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    topics: [
      "Problem framing",
      "User research",
      "Product thinking",
    ],
    image: researchImage,
    href: "/overview",
  },
  {
    id: "design",
    title: "Design & Creativity",
    label: "Make it meaningful",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    topics: [
      "UI/UX",
      "Visual storytelling",
      "Prototyping",
    ],
    image: designImage,
    href: "/overview",
  },
  {
    id: "development",
    title: "Development",
    label: "Bring ideas to life",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    topics: [
      "Web & mobile",
      "Cloud",
      "AI foundations",
    ],
    image: developmentImage,
    href: "/overview",
  },
];