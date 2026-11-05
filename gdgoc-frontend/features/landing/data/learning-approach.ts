
export interface LearningApproach {
  id: string;
  title: string;
  description: string;
  supportingText: string;
  icon: "book" | "code" | "users";
}

export const learningApproaches: LearningApproach[] = [
  {
    id: "study-together",
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    supportingText: "Study groups & guided practice",
    icon: "book",
  },
  {
    id: "hands-on",
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    supportingText: "Workshops & technical sessions",
    icon: "code",
  },
  {
    id: "share-process",
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    supportingText: "Project circles & sharing sessions",
    icon: "users",
  },
];
