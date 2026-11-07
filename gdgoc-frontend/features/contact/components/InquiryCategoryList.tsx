
import type { InquiryCategory } from "@/types/api";

type InquiryCategoryListProps = {
  categories: InquiryCategory[];
};

export default function InquiryCategoryList({
  categories,
}: InquiryCategoryListProps) {
  return (
    <div className="space-y-3">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`flex items-start gap-4 rounded-xl border p-4 ${
            index === 0
              ? "border-transparent bg-[#e8f0fe]"
              : "border-neutral-light-gray bg-neutral-white"
          }`}
        >
          <span className="mt-0.5 text-lg font-semibold text-brand-blue-primary">
            {category.icon}
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
      ))}
    </div>
  );
}
