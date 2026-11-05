
import Link from "next/link";

import { getRoles } from "@/lib/api/services";
import type { CommunityRole } from "@/types/api";

export default async function PeopleNotLabels() {
  let roles: CommunityRole[] = [];
  let hasError = false;

  try {
    const response = await getRoles();

    if (!response.success || !Array.isArray(response.data)) {
      throw new Error("Failed to retrieve community roles");
    }

    roles = response.data;
  } catch {
    hasError = true;
  }

  return (
    <section className="bg-neutral-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-[1248px] grid-cols-1 gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)] md:gap-16 lg:gap-24">
        {/* Section Introduction */}
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-primary" />
            People, not labels
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-ink md:text-5xl">
            There’s more than one way to contribute.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-gray md:text-lg">
            You can be learning one day and helping someone else the next.
            A community grows through both.
          </p>
        </div>

        {/* Community Roles */}
        <div>
          {hasError ? (
            <p
              role="alert"
              className="rounded-xl bg-support-red-light p-5 text-sm text-neutral-gray"
            >
              We couldn’t load the community roles right now. Please try again
              later.
            </p>
          ) : roles.length === 0 ? (
            <p className="rounded-xl bg-support-footer p-5 text-sm text-neutral-gray">
              Community roles are not available at the moment.
            </p>
          ) : (
            <div>
              {roles.map((role, index) => (
                <article
                  key={role.id}
                  className={`py-6 ${
                    index !== 0
                      ? "border-t border-neutral-light-gray"
                      : "pt-0"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-neutral-ink md:text-xl">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-gray md:text-base">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-primary transition-colors hover:text-brand-blue-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-primary"
          >
            Let’s talk about getting involved
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
