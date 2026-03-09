import { Button } from "@/components/ui/Button";
import Image from "next/image";

const VENDOR_HERO_IMAGE = "/images/heroes/hero-vendor.jpg";

export default function VendorHero() {
  return (
    <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={VENDOR_HERO_IMAGE}
          alt="Professional property maintenance and vendor network"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/72 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the MEGAFIXX Property Maintenance Network
        </h1>
        <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto mb-10">
          Become part of a structured, performance-driven property maintenance
          team supporting residential portfolios and managed assets across Texas.
        </p>
        <Button
          variant="primary"
          size="lg"
          asChild
          className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base sm:text-lg shadow-orange-glow hover:shadow-card-hover"
        >
          <a href="#vendor-application">Apply Now</a>
        </Button>
      </div>
    </section>
  );
}
