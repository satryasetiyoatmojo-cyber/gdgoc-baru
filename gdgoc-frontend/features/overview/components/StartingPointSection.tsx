
import CommunityBanner from "@/components/shared/CommunityBanner";

export default function StartingPointSection() {
  return (
    <CommunityBanner
      variant="yellow"
      layout="split"
      eyebrow="Start where you are"
      title={"New to tech?\nThat’s a starting point,\ntoo."}
      description="You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation."
      action={{
        label: "Ask about getting started",
        href: "/contact",
      }}
contentClassName="md:translate-x-6"

typography={{
  title:
    "max-w-[420px] whitespace-pre-line text-3xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-[36px]",

  description:
    "text-base leading-7 text-neutral-gray md:w-[calc(100%+72px)] md:text-lg md:leading-[1.6]",

  eyebrow:
    "mb-5 text-xs font-medium uppercase tracking-wide text-neutral-gray",

  action:
    "mt-5 text-base font-medium",
}}
    />
  );
}
