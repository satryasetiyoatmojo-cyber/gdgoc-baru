
export interface GettingStartedStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const gettingStartedSteps: GettingStartedStep[] = [
  {
    id: "curiosity",
    number: "01",
    title: "Follow your curiosity",
    description:
      "Explore the tracks and find a topic you want to understand better.",
  },
  {
    id: "learning",
    number: "02",
    title: "Learn alongside others",
    description:
      "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    id: "action",
    number: "03",
    title: "Turn learning into action",
    description:
      "Practice through a project, exchange feedback, and pass something on.",
  },
];
