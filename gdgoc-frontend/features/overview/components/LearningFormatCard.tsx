
import type { learningFormats } from "@/features/overview/data/learning-formats";

import {
  BookOpenIcon,
  CodeIcon,
  UsersIcon,
  LightbulbIcon,
} from "@/components/shared/icons";

type LearningFormat = (typeof learningFormats)[number];

const iconMap = {
  book: BookOpenIcon,
  code: CodeIcon,
  users: UsersIcon,
  lightbulb: LightbulbIcon,
};

const colorMap = {
  blue: {
    background: "bg-blue-50",
    icon: "text-brand-blue-primary",
  },
  green: {
    background: "bg-green-50",
    icon: "text-brand-green-500",
  },
  yellow: {
    background: "bg-yellow-50",
    icon: "text-brand-yellow-500",
  },
  red: {
    background: "bg-red-50",
    icon: "text-brand-red-500",
  },
};

interface LearningFormatCardProps {
  format: LearningFormat;
}

export default function LearningFormatCard({
  format,
}: LearningFormatCardProps) {
  const Icon = iconMap[format.icon];
  const colors = colorMap[format.color];

  return (
    <article className="flex h-full items-start gap-4 rounded-2xl bg-neutral-white p-4 sm:gap-6 sm:p-7">
      {/* Format Icon */}
      <div
        className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl ${colors.background}`}
      >
        <Icon
          className={`h-5 w-5 ${colors.icon}`}
          aria-hidden="true"
        />
      </div>

      {/* Format Details */}
      <div className="min-w-0 flex-1">
        <h3 className="text-2xl font-bold leading-tight text-neutral-ink">
          {format.title}
        </h3>

        <p className="mt-3 text-base leading-6 text-neutral-gray">
          {format.description}
        </p>

        <p className="mt-2 text-xs font-medium text-brand-blue-500">
          Best for · {format.bestFor}
        </p>
      </div>
    </article>
  );
}
