
import Link from "next/link";
import { ArrowRightIcon } from "@/components/shared/icons";
import type { ReactNode } from "react";

type CommunityBannerProps = {
  id?: string;
  title: ReactNode;
  description: string;
  variant: "green" | "yellow";
  layout?: "default" | "split";
  eyebrow?: string;

  action?: {
    label: string;
    href: string;
  };

  typography?: {
    title?: string;
    description?: string;
    eyebrow?: string;
    action?: string;
  };

  contentClassName?: string;
};

const bannerVariants = {
  green: {
    background: "bg-support-green-light",
    icon: "text-brand-green-500",
  },
  yellow: {
    background: "bg-support-yellow-light",
    icon: "text-brand-yellow-500",
  },
};

export default function CommunityBanner({
  id,
  title,
  description,
  variant,
  layout = "default",
  eyebrow,
  action,
  typography,
  contentClassName,
}: CommunityBannerProps) {
  const styles = bannerVariants[variant];
  const isSplit = layout === "split";

  // Typography defaults and page-specific overrides
  const typographyStyles = {
    title:
      typography?.title ??
      "text-2xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-[40px]",

    description:
      typography?.description ??
      "mt-4 text-sm leading-6 text-neutral-gray md:text-lg md:leading-7",

    eyebrow:
      typography?.eyebrow ??
      "mb-5 text-xs font-medium uppercase tracking-wide text-neutral-gray",

    action:
      typography?.action ??
      "mt-5 text-sm font-medium md:text-base",
  };

  return (
    <section
      id={id}
      className={`${styles.background} py-14 md:py-16`}
    >
      <div
        className={`mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)] ${
          isSplit
            ? "grid grid-cols-1 items-center gap-6 md:grid-cols-[0.75fr_1fr] md:gap-16"
            : "flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-16"
        }`}
      >
        {/* Community Icon - Default Layout */}
        {!isSplit && (
          <div
            aria-hidden="true"
            className={`flex shrink-0 items-center justify-center ${styles.icon}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-16 w-16 md:h-[104px] md:w-[104px]"
              fill="currentColor"
            >
              <path d="M32 2 C36 19 43 26 62 32 C43 38 36 45 32 62 C28 45 21 38 2 32 C21 26 28 19 32 2 Z" />
            </svg>
          </div>
        )}

        {/* Community Message */}
        <div
          className={`${
            isSplit ? "min-w-0" : "min-w-0 flex-1"
          } ${contentClassName ?? ""}`}
        >
          {/* Eyebrow */}
          {isSplit && eyebrow && (
            <p
              className={`${typographyStyles.eyebrow} flex items-center gap-2`}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-500"
              />
              {eyebrow}
            </p>
          )}

          {/* Heading */}
          <h2
            className={
              isSplit
                ? typographyStyles.title
                : "text-2xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-[40px]"
            }
          >
            {title}
          </h2>

          {/* Default Layout Description */}
          {!isSplit && (
            <p className="mt-4 text-sm leading-6 text-neutral-gray md:text-lg md:leading-7">
              {description}
            </p>
          )}
        </div>

        {/* Split Layout Description and CTA */}
        {isSplit && (
          <div className="min-w-0">
            <p className={typographyStyles.description}>
              {description}
            </p>

            {action && (
              <Link
                href={action.href}
                className={`${typographyStyles.action} inline-flex w-fit items-center gap-3 text-brand-blue-500 transition-colors hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-500`}
              >
                <span>{action.label}</span>
                <ArrowRightIcon size={18} />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
