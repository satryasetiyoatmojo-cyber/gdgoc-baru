
"use client";

type OverviewErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function OverviewError({
  error,
  reset,
}: OverviewErrorProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-neutral-white px-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-neutral-ink">
          Something went wrong.
        </h2>

        <p className="mt-3 text-sm text-neutral-gray">
          We couldn't load this page. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-6 rounded-lg bg-brand-blue-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
