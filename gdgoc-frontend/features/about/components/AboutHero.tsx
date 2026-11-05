
import Image from "next/image";
import aboutHeroImage from "@/assets/images/about-hero.png";

export default function AboutHero() {
  return (
    <section className="bg-neutral-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_464px] md:gap-16">
       
      {/* Hero Content */}
      <div className="md:translate-x-4">
        <p className="mb-7 flex items-center gap-2 text-[10px] font-medium tracking-wide text-neutral-gray">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-primary" />
          ABOUT GDGOC UGM
        </p>

        <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-neutral-ink md:text-7xl">
          Built by students.
          <span className="block text-brand-blue-primary">
            For what’s next.
          </span>
        </h1>

        <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-gray md:text-xl md:leading-8">
          We’re a community of learners and makers at Universitas Gadjah Mada,
          <span className="block">
            connected by curiosity and the belief that technology can do good.
          </span>
        </p>

        <p className="mt-7 text-[10px] font-medium text-neutral-gray">
          UNIVERSITAS GADJAH MADA
          <span className="mx-1">•</span>
          2026/2027
        </p>
      </div>


        {/* Hero Illustration */}
        <div className="mx-auto w-full max-w-[464px]">
          <Image
            src={aboutHeroImage}
            alt="GDGoC UGM community mark artwork"
            width={464}
            height={400}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
