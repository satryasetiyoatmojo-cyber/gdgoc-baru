
import Link from "next/link";

import Logo from "@/components/shared/Logo";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-light-gray bg-[#F1F3F4]">
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1200px] py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">

          {/* Community Identity */}
          <div className="max-w-[360px]">
            <Logo />

            <p className="mt-4 text-sm leading-6 text-neutral-gray">
              A student community for curious minds, sharing,
              learning, and technology with purpose.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold text-neutral-ink">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-col items-start gap-2"
            >
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-gray transition-colors duration-200 hover:text-brand-blue-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-sm font-semibold text-neutral-ink">
              Keep in the loop
            </h2>

            <p className="mt-4 text-sm text-brand-blue-500">
              @gdgoc.ugm
            </p>

            <p className="mt-3 text-sm text-neutral-gray">
              Learn together. Build together.
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-neutral-light-gray pt-6 sm:flex-row sm:items-center">

          <p className="text-xs text-neutral-gray">
            © GDGoC Universitas Gadjah Mada · 2026/2027
          </p>

          <p className="text-xs text-neutral-gray">
            Made for the campus. Open to possibilities.
          </p>

        </div>

        {/* Google Color Accent */}
        <div className="mt-6 flex h-[3px] w-24 overflow-hidden rounded-full">
          <span className="flex-1 bg-brand-blue-500" />
          <span className="flex-1 bg-brand-red-500" />
          <span className="flex-1 bg-brand-yellow-500" />
          <span className="flex-1 bg-brand-green-500" />
        </div>

      </div>
    </footer>
  );
}
