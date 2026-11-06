
export default function FAQError() {
  return (
    <section className="bg-neutral-white py-16 md:py-24">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] md:w-[calc(100%-72px)]">
        <div
          role="alert"
          className="rounded-xl border border-neutral-light-gray p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-ink">
            Unable to load FAQs
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-gray">
            We couldn’t load the frequently asked questions.
            Please try again later.
          </p>
        </div>
      </div>
    </section>
  );
}
