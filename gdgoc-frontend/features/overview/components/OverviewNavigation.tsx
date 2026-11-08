
"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveHref(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const sectionIds = navigationItems.map((item) =>
      item.href.replace("#", "")
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Overview section navigation"
      className="border-y border-neutral-light-gray bg-neutral-white"
    >
      <div className="mx-auto flex max-w-[1200px] translate-x-0 items-center gap-8 overflow-x-auto px-6 py-5 md:translate-x-4 md:gap-12 md:px-4">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveHref(item.href)}
            aria-current={
              activeHref === item.href ? "location" : undefined
            }
            className={`flex shrink-0 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-primary ${
              activeHref === item.href
                ? "font-semibold text-brand-blue-primary"
                : "font-normal text-neutral-gray hover:text-brand-blue-primary"
            }`}
          >
            {item.label}
            <HiArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
}
