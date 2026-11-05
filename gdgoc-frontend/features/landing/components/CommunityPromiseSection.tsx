
export default function CommunityPromiseSection() {
  return (
    <section className="bg-support-green-light py-12 md:py-16">
      <div className="mx-auto flex w-[calc(100%-72px)] max-w-[1200px] flex-col items-start gap-6 md:flex-row md:items-center md:gap-16">

        {/* Community Icon */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center text-brand-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="104"
            height="104"
            fill="currentColor"
          >
            <path
              d="
                M32 2
                C36 19 43 26 62 32
                C43 38 36 45 32 62
                C28 45 21 38 2 32
                C21 26 28 19 32 2
                Z
              "
            />
          </svg>
        </div>

        {/* Community Message */}
        <div className="max-w-[1000px]">
          <h2 className="text-2xl font-bold leading-[1.12] tracking-tight text-neutral-ink md:text-[40px]">
            Different majors. Different starting points.
            <br />
            A place for all of them.
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-gray md:text-base">
            You don’t have to be the most experienced person in the room.
            Curiosity, kindness, and a willingness to learn are a good place to start.
          </p>
        </div>

      </div>
    </section>
  );
}
