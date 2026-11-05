
type CommunityBannerProps = {
  title: string;
  description: string;
  variant: "green" | "yellow";
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
  title,
  description,
  variant,
}: CommunityBannerProps) {
  const styles = bannerVariants[variant];

  return (
    <section className={`${styles.background} py-14 md:py-16`}>
      <div className="mx-auto flex w-[calc(100%-48px)] max-w-[1200px] flex-col items-start gap-6 md:w-[calc(100%-72px)] md:flex-row md:items-center md:gap-16">

        {/* Community Icon */}
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

        {/* Community Message */}
        <div className="max-w-[1000px]">
          <h2 className="text-2xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-[40px]">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-gray md:text-lg md:leading-7">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}
