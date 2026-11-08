
export default function ContactLoading() {
  return (
    <section
      role="status"
      aria-label="Loading contact form"
      className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.28fr] md:gap-16 animate-pulse"
    >
      {/* Inquiry Categories Skeleton */}
      <div className="space-y-5">
        <div className="h-8 w-3/4 rounded bg-neutral-light-gray" />
        <div className="h-4 w-full rounded bg-neutral-light-gray" />

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="space-y-3 rounded-xl border border-neutral-light-gray p-4"
          >
            <div className="h-4 w-1/2 rounded bg-neutral-light-gray" />
            <div className="h-3 w-full rounded bg-neutral-light-gray" />
          </div>
        ))}
      </div>

      {/* Contact Form Skeleton */}
      <div className="space-y-5 rounded-2xl bg-support-footer p-6 md:p-9">
        <div className="h-8 w-2/3 rounded bg-neutral-light-gray" />

        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="space-y-2">
            <div className="h-4 w-1/3 rounded bg-neutral-light-gray" />
            <div className="h-11 w-full rounded-lg bg-neutral-light-gray" />
          </div>
        ))}

        <div className="h-12 w-36 rounded-lg bg-neutral-light-gray" />
      </div>
    </section>
  );
}
