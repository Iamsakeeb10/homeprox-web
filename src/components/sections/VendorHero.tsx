import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function VendorHero() {
  return (
    <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-hero-bg pt-28 sm:pt-32">
      {/* Optional subtle texture overlay — matches home hero */}
      <div className="hero-texture absolute inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the MEGAFIXX Property Maintenance Network
        </h1>
        <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto mb-8">
          Become part of a structured, performance-driven property maintenance
          team supporting residential portfolios and managed assets across Texas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" asChild>
            <Link href="#vendor-application">Apply Now</Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-charcoal"
            asChild
          >
            <Link href="#vendor-application">Vendor Login</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
