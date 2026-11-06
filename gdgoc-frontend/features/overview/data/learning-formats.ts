
export const learningFormats = [
  {
    id: "study-groups",
    title: "Study groups",
    description:
      "Build foundations with peers. Work through a topic, compare approaches, and make space for questions.",
    bestFor: "Learning the fundamentals",
    icon: "book",
    color: "blue",
  },
  {
    id: "hands-on-workshops",
    title: "Hands-on workshops",
    description:
      "Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.",
    bestFor: "Trying something new",
    icon: "code",
    color: "green",
  },
  {
    id: "project-circles",
    title: "Project circles",
    description:
      "Connect research, design, and development around a shared problem. Learn through making and feedback.",
    bestFor: "Putting skills into practice",
    icon: "users",
    color: "yellow",
  },
  {
    id: "knowledge-sharing",
    title: "Knowledge sharing",
    description:
      "Walk through an idea, share a lesson from your process, and discover how other students approach their work.",
    bestFor: "Exchanging perspectives",
    icon: "lightbulb",
    color: "red",
  },
] as const;
