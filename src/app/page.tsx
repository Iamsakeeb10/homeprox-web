import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { QualityProcess } from "@/components/sections/QualityProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance",
  description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
  path: "/"
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUs />
      <QualityProcess />
      <Testimonials />
      <CTABanner variant="dark" />
      <ContactSection />
    </>
  );
}
