
export default function OverviewLoading() {
  return (
    <main className="bg-neutral-white">
      <section className="py-16 md:py-20">
        <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px] animate-pulse">
          <div className="mb-4 h-3 w-40 rounded bg-neutral-light-gray" />

          <div className="mb-12 h-12 max-w-xl rounded bg-neutral-light-gray" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-3">
                <div className="h-8 w-12 rounded bg-neutral-light-gray" />
                <div className="h-6 w-32 rounded bg-neutral-light-gray" />
                <div className="h-16 w-full rounded bg-neutral-light-gray" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
