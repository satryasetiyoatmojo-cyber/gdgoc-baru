
import type { InquiryCategory } from "@/types/api";

import {
  ArrowUpRightIcon,
  PlusIcon,
  DiamondIcon,
  CircleHelpIcon,
} from "@/components/shared/icons";

type InquiryCategoryListProps = {
  categories: InquiryCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
};

const categoryIcons = {
  "joining-learning": ArrowUpRightIcon,
  collaboration: PlusIcon,
  "speaking-sharing": DiamondIcon,
  "general-inquiry": CircleHelpIcon,
};

export default function InquiryCategoryList({
  categories,
  selectedId,
  onSelect,
}: InquiryCategoryListProps) {
  return (
    <div className="space-y-3">
      {categories.map((category) => {
        const Icon =
          categoryIcons[category.id as keyof typeof categoryIcons] ??
          CircleHelpIcon;

        const isSelected = selectedId === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            aria-pressed={isSelected}
            className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
              isSelected
                ? "border-transparent bg-[#e8f0fe]"
                : "border-neutral-light-gray bg-neutral-white hover:bg-neutral-50"
            }`}
          >
            <span className="mt-0.5 text-brand-blue-primary">
              <Icon size={20} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm font-semibold text-neutral-ink">
                {category.label}
              </span>

              <span className="mt-1 block text-xs leading-5 text-neutral-gray">
                {category.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
