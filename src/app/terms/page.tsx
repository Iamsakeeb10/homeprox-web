import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions | MEGAFIXX Home Services LLC",
  description: "Terms and conditions for MEGAFIXX Home Services LLC property maintenance services.",
  path: "/terms"
});

const termsContent = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using the services of MEGAFIXX Home Services LLC ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
  },
  {
    id: "services",
    title: "Services Provided",
    content: `MEGAFIXX Home Services LLC provides professional property maintenance services across Texas, including but not limited to: general property maintenance, minor plumbing, gutter cleaning, drywall repair, interior painting, property cleaning, landscaping, exterior repairs, and property cleanouts. Services are provided on a project basis or through ongoing maintenance contracts.`
  },
  {
    id: "pricing",
    title: "Pricing and Payment",
    content: `All pricing is provided in writing before work begins. Estimates are valid for 30 days unless otherwise specified. Payment terms will be outlined in the service agreement. Full payment is due upon completion of work unless other arrangements have been made in writing.`
  },
  {
    id: "liability",
    title: "Liability and Insurance",
    content: `MEGAFIXX Home Services LLC is fully insured and licensed. We carry general liability insurance and workers' compensation insurance as required by law. Our liability is limited to the cost of the services provided. We are not responsible for damage to property that existed prior to our service or damage caused by factors beyond our control.`
  },
  {
    id: "warranty",
    title: "Workmanship Warranty",
    content: `We stand behind our work and provide a warranty on workmanship for a period of 90 days from completion, unless otherwise specified in writing. This warranty covers defects in workmanship but does not cover normal wear and tear, damage from misuse, or damage from external factors.`
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: `Clients may cancel scheduled services with at least 24 hours notice without penalty. Cancellations with less than 24 hours notice may be subject to a cancellation fee. Emergency services may have different cancellation terms as specified in the service agreement.`
  },
  {
    id: "property",
    title: "Property Access",
    content: `Clients are responsible for providing safe and accessible property access. We reserve the right to refuse service if conditions are unsafe or if access is not provided as agreed. Clients must secure pets and remove personal belongings from work areas.`
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    content: `Any disputes arising from services provided will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be resolved through binding arbitration in Collin County, Texas, in accordance with Texas state law.`
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    content: `MEGAFIXX Home Services LLC reserves the right to modify these terms and conditions at any time. Clients will be notified of significant changes. Continued use of our services after changes constitutes acceptance of the modified terms.`
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `For questions about these terms and conditions, please contact us at info@megafixxhomeservices.com or (469) 378-9262.`
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="font-body text-muted hover:text-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="font-body text-gold">Terms & Conditions</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="font-body text-muted text-lg">
            Last Updated: February 24, 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-display text-xl font-bold text-white mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {termsContent.map((term) => (
                  <a
                    key={term.id}
                    href={`#${term.id}`}
                    className="block font-body text-sm text-muted hover:text-gold transition-colors duration-300 py-1"
                  >
                    {term.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 md:p-12 space-y-12">
              {termsContent.map((term, index) => (
                <section key={term.id} id={term.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {index + 1}. {term.title}
                  </h2>
                  <p className="font-body text-muted leading-relaxed">
                    {term.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Back to Home Link */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="font-body text-gold hover:text-orange transition-colors duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
