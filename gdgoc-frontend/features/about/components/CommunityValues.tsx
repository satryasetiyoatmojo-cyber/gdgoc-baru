
import {
  LuBookOpen,
  LuUsers,
  LuCode,
  LuHeart,
} from "react-icons/lu";

const communityValues = [
  {
    title: "Stay curious",
    description:
      "Ask the extra question. Be willing to learn something outside your comfort zone.",
    icon: LuBookOpen,
    accentColor: "bg-brand-blue-primary",
  },
  {
    title: "Make room",
    description:
      "Welcome different perspectives, respect each other, and help people find their voice.",
    icon: LuUsers,
    accentColor: "bg-brand-red-500",
  },
  {
    title: "Learn by building",
    description:
      "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    icon: LuCode,
    accentColor: "bg-brand-yellow-500",
  },
  {
    title: "Give something back",
    description:
      "Share a resource, explain what clicked, or help someone take their next step.",
    icon: LuHeart,
    accentColor: "bg-brand-green-500",
  },
];

export default function CommunityValues() {
  return (
    <section className="bg-neutral-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 max-w-[850px]">
          <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue-primary" />
            What guides us
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-ink md:text-5xl">
            Good technology starts with good company.
          </h2>
        </div>

        {/* Community Values Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {communityValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="overflow-hidden rounded-3xl border border-neutral-light-gray bg-neutral-white p-6"
              >
                {/* Card Accent */}
                <div
                  className={`mb-6 h-1 w-9 rounded-full ${value.accentColor}`}
                />

                {/* Card Icon */}
                <Icon
                  className="mb-6 h-5 w-5 text-brand-blue-primary"
                  aria-hidden="true"
                />

                {/* Card Content */}
                <h3 className="mb-4 text-lg font-semibold text-neutral-ink">
                  {value.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-gray">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
