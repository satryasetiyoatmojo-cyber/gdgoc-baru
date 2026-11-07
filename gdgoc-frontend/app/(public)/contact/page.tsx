import ContactHero from "@/features/contact/components/ContactHero";
import ContactMainSection from "@/features/contact/components/ContactMainSection";
import ContactGuidance from "@/features/contact/components/ContactGuidance";

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-128px)] max-w-[1248px] pt-12 pb-16 md:pt-12 md:pb-20">
        <ContactHero />
        <ContactMainSection />
      </section>

      <ContactGuidance />
    </main>
  );
}