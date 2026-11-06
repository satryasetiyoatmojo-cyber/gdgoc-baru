import CommunityBanner from "@/components/shared/CommunityBanner";

export default function CommunityResponsibility() {
  return (
    <CommunityBanner
      variant="yellow"
      title="A space to learn. A responsibility to care."
      description="We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started."
      typography={{
        title:
          "text-base font-bold leading-[1.0] tracking-tight text-neutral-ink md:text-base",

        description:
          "mt-2 text-xs leading-[1.5] text-neutral-gray md:text-xs",
      }}
    
    />
  );
}