import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function VendorCTABanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-charcoal overflow-hidden">
      {/* Accent overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E8621A 0, #E8621A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      {/* Top orange rule */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Join the MEGAFIXX Vendor Network?
        </h2>
        <p className="font-body text-lg text-surface-300 mb-8">
          Partner with a structured, professional property maintenance operator.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="#vendor-application">Apply Now</Link>
        </Button>
      </div>
    </section>
  );
}
