import CommunityBanner from "@/components/shared/CommunityBanner";

export default function CommunityPromiseSection() {
  return (
    <CommunityBanner
      variant="green"
      title={
        <>
          Different majors. Different starting points.
          <br />
          A place for all of them.
        </>
      }
      description="You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start."
      typography={{
        title:
          "max-w-[850px] text-2xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:max-w-[850px] md:text-[40px]",
        description:
          "mt-4 text-sm leading-6 text-neutral-gray md:text-base md:leading-7",
      }}
    />
  );
}