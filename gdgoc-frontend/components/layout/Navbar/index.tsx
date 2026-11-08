
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
      <nav className="mx-auto flex min-h-[88px] w-[calc(100%-32px)] max-w-[1200px] items-center justify-between gap-2 sm:w-[calc(100%-48px)] md:min-h-[104px] md:w-[calc(100%-72px)] md:gap-6">
        <div className="min-w-0 flex-1 overflow-hidden md:flex-none">
          <Logo />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-12 items-center rounded-full px-5 text-sm transition-colors ${
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

        <Link
          href="/overview"
          className="flex h-11 shrink-0 items-center justify-center gap-2 
          rounded-lg bg-brand-blue-primary px-3 text-xs font-semibold text-neutral-white transition-colors hover:bg-brand-blue-hover active:bg-brand-blue-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-primary sm:h-[52px] sm:gap-4 sm:px-6 sm:text-sm"
        >
          <span className="md:hidden">Tracks</span>
          <span className="hidden md:inline">Find your track</span>
          <ArrowRightIcon size={18} />
        </Link>
      </nav>
    </header>
  );
}
