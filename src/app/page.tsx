import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { QualityProcess } from "@/components/sections/QualityProcess";
import { ServicesSection } from "@/components/sections/ServicesSection";
// import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "HomeProX Services LLC | Texas Statewide Property Maintenance",
  description:
    "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      {/* <StatsBar /> */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUs />
      <div
        className="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"
        aria-hidden="true"
      />
      <QualityProcess />
      <Testimonials />
      {/* <CTABanner variant="dark" /> */}
      <ContactSection />
    </>
  );
}
