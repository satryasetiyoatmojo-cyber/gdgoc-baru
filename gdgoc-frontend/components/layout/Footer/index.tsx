
import Link from "next/link";
import { SiInstagram, SiYoutube } from "react-icons/si";

import Logo from "@/components/shared/Logo";
import {
  getCommunityStats,
  getNavigation,
} from "@/lib/api/services";

const fallbackNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default async function Footer() {
  const [navigationResult, statsResult] = await Promise.allSettled([
    getNavigation(),
    getCommunityStats(),
  ]);

  const navigation =
    navigationResult.status === "fulfilled" &&
    navigationResult.value.success
      ? navigationResult.value.data
      : fallbackNavigation;

  const social =
    statsResult.status === "fulfilled" &&
    statsResult.value.success
      ? statsResult.value.data.social
      : null;

  if (navigationResult.status === "rejected") {
    console.error(
      "Failed to load footer navigation:",
      navigationResult.reason,
    );
  }

  if (statsResult.status === "rejected") {
    console.error(
      "Failed to load footer social links:",
      statsResult.reason,
    );
  }

  const instagramUsername = social?.instagram ?? "@gdgoc.ugm";

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/gdgoc.ugm/",
      icon: SiInstagram,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@gdgocugm",
      icon: SiYoutube,
    },
  ];

  return (
    <footer className="border-t border-neutral-light-gray bg-support-footer">
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
              className="mt-4 flex flex-col items-start gap-3"
            >
              {navigation.map((item) => (
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

            <a
              href="https://www.instagram.com/gdgoc.ugm/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-brand-blue-500 transition-colors duration-200 hover:text-brand-blue-hover"
            >
              {instagramUsername}
            </a>

            <div className="mt-3 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.label}`}
                    title={item.label}
                    className="flex items-center justify-center text-neutral-gray transition-colors duration-200 hover:text-brand-blue-500"
                  >
                    <Icon size={24} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <p className="mt-4 text-xs leading-5 text-neutral-gray">
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
