
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/shared/Logo";
import { ArrowRightIcon } from "@/components/shared/icons";
import type { NavigationItem } from "@/types/api";

interface NavbarProps {
  navigation: NavigationItem[];
}

export default function Navbar({ navigation }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full border-b border-neutral-light-gray bg-neutral-white">
      <nav className="mx-auto flex min-h-[88px] w-[calc(100%-32px)] max-w-[1200px] items-center justify-between gap-3 sm:w-[calc(100%-48px)] md:min-h-[104px] md:w-[calc(100%-72px)] md:gap-6">

        <div className="min-w-0 flex-1 md:flex-none">
          <Logo />
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <Link
          href="/overview"
          className="hidden h-[52px] shrink-0 items-center justify-center gap-4 rounded-lg bg-brand-blue-primary px-6 text-sm font-semibold text-neutral-white transition-colors hover:bg-brand-blue-hover active:bg-brand-blue-active md:flex"
        >
          Find your track
          <ArrowRightIcon size={18} />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-light-gray text-neutral-ink transition-colors hover:bg-support-blue-light md:hidden"
        >
          {isMenuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-50 w-full border-b border-neutral-light-gray bg-neutral-white px-4 pb-6 pt-3 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-support-blue-light font-semibold text-brand-blue-primary"
                      : "text-neutral-gray hover:bg-support-blue-light"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/overview"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-blue-primary px-4 text-sm font-semibold text-neutral-white hover:bg-brand-blue-hover"
            >
              Find your track
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
