
import Logo from "@/components/shared/Logo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-light-gray bg-white">
  <nav className="mx-auto flex min-h-[104px] w-[calc(100%-72px)] max-w-[1200px] items-center justify-between gap-6">

    <Logo />

    <div className="hidden items-center gap-3 md:flex">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex h-12 items-center rounded-full px-4 text-[14px] transition-colors ${
            item.label === "Home"
              ? "bg-support-blue-light font-medium text-brand-blue-500"
              : "text-neutral-gray hover:bg-support-blue-light hover:text-brand-blue-500"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>

    <a
      href="/overview"
      className="flex h-[52px] w-[197px] shrink-0 items-center justify-center gap-3 rounded-md bg-brand-blue-500 text-sm font-medium text-white transition-colors hover:bg-brand-blue-primary"
    >
      Find your track
      <span aria-hidden="true">→</span>
    </a>

  </nav>
</header>
  );
}
