
export default function ContactHero() {
  return (
    <section>
      <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-gray">
        <span className="h-2 w-2 rounded-full bg-brand-blue-500" />
        Contact · Let's connect
      </p>

      <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-neutral-ink md:text-7xl">
        Good things start with{" "}
        <span className="text-brand-blue-primary">hello.</span>
      </h1>

      <p className="mt-6 max-w-[760px] text-lg leading-[1.7] text-neutral-gray md:text-xl">
        A question, a collaboration, or an idea for the community? Tell us
        what’s on your mind.
      </p>
    </section>
  );
}
