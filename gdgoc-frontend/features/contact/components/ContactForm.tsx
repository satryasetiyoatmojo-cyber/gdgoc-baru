
import type { InquiryCategory } from "@/types/api";

type ContactFormProps = {
  categories: InquiryCategory[];
};

export default function ContactForm({ categories }: ContactFormProps) {
  return (
    <section className="rounded-2xl bg-[#f1f3f4] p-6 md:p-9">
      {/* Form Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-ink md:text-3xl">
          Send us a message
        </h2>

        <span aria-hidden="true" className="text-2xl text-brand-blue-primary">
          ↗
        </span>
      </div>

      <p className="mt-4 text-xs text-neutral-gray">
        Fields marked * are required.
      </p>

      <form className="mt-6 space-y-4">
        {/* First name and Last name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-xs font-semibold text-neutral-ink"
            >
              First name *
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your first name"
              required
              className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-xs font-semibold text-neutral-ink"
            >
              Last name
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Your last name"
              className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold text-neutral-ink"
          >
            Email address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Where we can reply to you"
            required
            className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
          />
        </div>

        {/* University / Organization */}
        <div>
          <label
            htmlFor="organization"
            className="mb-2 block text-xs font-semibold text-neutral-ink"
          >
            University / organization
          </label>

          <input
            id="organization"
            name="organization"
            type="text"
            placeholder="Where you study or work (optional)"
            className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
          />
        </div>

        {/* Inquiry Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-xs font-semibold text-neutral-ink"
          >
            Inquiry category *
          </label>

          <select
            id="category"
            name="category"
            required
            defaultValue="joining-learning"
            className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm text-neutral-gray outline-none focus:border-brand-blue-primary"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-xs font-semibold text-neutral-ink"
          >
            Subject *
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="A short introduction to your question"
            required
            className="w-full rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold text-neutral-ink"
          >
            Your message *
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a little about your question or idea..."
            required
            className="w-full resize-y rounded-lg border border-neutral-light-gray bg-neutral-white px-3 py-3 text-sm outline-none transition focus:border-brand-blue-primary"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 accent-brand-blue-primary"
          />

          <label
            htmlFor="consent"
            className="text-xs leading-5 text-neutral-gray"
          >
            I agree that the information I share can be used to respond to this
            inquiry.
          </label>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="inline-flex w-fit items-center gap-3 rounded-lg bg-brand-blue-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-hover"
          >
            Send message
            <span aria-hidden="true">→</span>
          </button>

          <p className="max-w-[180px] text-xs leading-4 text-neutral-gray">
            Please don’t include passwords or sensitive personal information.
          </p>
        </div>
      </form>
    </section>
  );
}
