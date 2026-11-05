
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";
import { ArrowRightIcon } from "@/components/shared/icons";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-neutral-light-gray bg-neutral-white">
      <nav className="mx-auto flex min-h-[104px] w-[calc(100%-72px)] max-w-[1200px] items-center justify-between gap-6">
        <Logo />

        {/* Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-12 items-center rounded-full px-4 text-[14px] transition-colors ${
                  isActive
                    ? "bg-support-blue-light font-semibold text-brand-blue-primary"
                    : "font-normal text-neutral-gray hover:bg-support-blue-light hover:text-brand-blue-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/overview"
          className="flex h-[52px] shrink-0 items-center justify-center gap-4 rounded-lg bg-brand-blue-500 px-6 text-sm font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-brand-blue-hover active:bg-brand-blue-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500"
        >
          Find your track
          <ArrowRightIcon size={18} />
        </Link>
      </nav>
    </header>
  );
}
