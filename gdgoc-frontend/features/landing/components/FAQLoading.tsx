
export default function FAQLoading() {
  return (
    <section
      aria-label="Loading frequently asked questions"
      className="bg-neutral-white py-16 md:py-24"
    >
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
        <p className="mb-6 text-sm text-neutral-gray" role="status">
          Loading frequently asked questions...
        </p>

        <div className="animate-pulse space-y-6">
          <div className="h-6 w-3/4 rounded bg-neutral-light-gray" />
          <div className="h-6 w-full rounded bg-neutral-light-gray" />
          <div className="h-6 w-5/6 rounded bg-neutral-light-gray" />
        </div>
      </div>
    </section>
  );
}
