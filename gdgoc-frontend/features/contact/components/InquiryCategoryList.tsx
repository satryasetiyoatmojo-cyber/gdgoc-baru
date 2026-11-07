
import type { InquiryCategory } from "@/types/api";

import {
  ArrowUpRightIcon,
  PlusIcon,
  DiamondIcon,
  CircleHelpIcon,
} from "@/components/shared/icons";

type InquiryCategoryListProps = {
  categories: InquiryCategory[];
};

const categoryIcons = {
  "joining-learning": ArrowUpRightIcon,
  collaboration: PlusIcon,
  "speaking-sharing": DiamondIcon,
  "general-inquiry": CircleHelpIcon,
};

export default function InquiryCategoryList({
  categories,
}: InquiryCategoryListProps) {
  return (
    <div className="space-y-3">
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
          ?? CircleHelpIcon;

        return (
          <div
            key={category.id}
            className={`flex items-start gap-4 rounded-xl border p-4 ${
              index === 0
                ? "border-transparent bg-[#e8f0fe]"
                : "border-neutral-light-gray bg-neutral-white"
            }`}
          >
            <span className="mt-0.5 text-brand-blue-primary">
              <Icon size={20} aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-sm font-semibold text-neutral-ink">
                {category.label}
              </h3>

              <p className="mt-1 text-xs leading-5 text-neutral-gray">
                {category.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
