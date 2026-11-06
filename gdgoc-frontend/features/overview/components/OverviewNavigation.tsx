
"use client";

import { useState } from "react";
import { HiArrowDown } from "react-icons/hi2";

const navigationItems = [
  {
    label: "Learning tracks",
    href: "#learning-tracks",
  },
  {
    label: "Learning formats",
    href: "#learning-formats",
  },
  {
    label: "Your learning journey",
    href: "#learning-journey",
  },
  {
    label: "Find a starting point",
    href: "#starting-point",
  },
];

export default function OverviewNavigation() {
  const [activeHref, setActiveHref] = useState("#learning-tracks");

  return (
    <nav className="border-y border-neutral-light-gray bg-neutral-white">
      <div className="mx-auto flex max-w-[1200px] translate-x-0 items-center gap-8 overflow-x-auto px-6 py-5 md:translate-x-4 md:gap-12 md:px-4">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveHref(item.href)}
            className={`flex shrink-0 items-center gap-2 text-sm transition-colors focus:outline-none ${
              activeHref === item.href
                ? "font-semibold text-brand-blue-primary"
                : "font-normal text-neutral-gray hover:text-brand-blue-primary"
            }`}
          >
            {item.label}
            <HiArrowDown className="h-4 w-4" />
          </a>
        ))}
      </div>
    </nav>
  );
}
