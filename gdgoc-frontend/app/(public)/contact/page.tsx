import { Suspense } from "react";
import ContactHero from "@/features/contact/components/ContactHero";
import ContactMainSection from "@/features/contact/components/ContactMainSection";
import ContactGuidance from "@/features/contact/components/ContactGuidance";
import ContactLoading from "@/features/contact/components/ContactLoading";
export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-32px)] max-w-[1248px] pt-12 pb-16 sm:w-[calc(100%-48px)] lg:w-[calc(100%-128px)] md:pt-12 md:pb-20">
        <ContactHero />
        <Suspense fallback={<ContactLoading />}>
        <ContactMainSection />
        </Suspense> 
      </section>

      <ContactGuidance />
    </main>
  );
}