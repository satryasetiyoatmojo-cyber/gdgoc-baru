
export default function FAQEmpty() {
  return (
    <section className="bg-neutral-white py-16 md:py-24">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
        <div className="rounded-xl border border-neutral-light-gray p-6">
          <h2 className="text-lg font-semibold text-neutral-ink">
            No FAQs available yet
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-gray">
            There are currently no frequently asked questions.
            Please check back later.
          </p>
        </div>
      </div>
    </section>
  );
}
