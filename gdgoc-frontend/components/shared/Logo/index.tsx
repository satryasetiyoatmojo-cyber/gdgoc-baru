import Image from "next/image";
import Link from "next/link";

import gdgocLogo from "@/assets/images/gdgoc-logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="GDGoC UGM - Home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={gdgocLogo}
        alt="Google Developer Groups on Campus Universitas Gadjah Mada"
        priority
        sizes="(min-width: 1280px) 345px, 280px"
        className="h-auto w-[220px] lg:w-[280px] xl:w-[345px]"
      />
    </Link>
  );
}