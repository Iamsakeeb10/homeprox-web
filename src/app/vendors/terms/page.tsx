import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Vendor Terms & Onboarding Agreement",
  description:
    "Vendor Terms & Onboarding Agreement for vendors applying to the HomeProX Services LLC network.",
  path: "/vendors/terms",
});

export default function VendorTermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Vendor Terms &amp; Onboarding Agreement
          </h1>
          <p className="font-body text-text-muted text-lg">HOMEPROX SERVICES LLC</p>
        </div>

        <div className="bg-surface-100 border border-surface-200 rounded-xl p-8 md:p-12 space-y-8 font-body text-text-muted leading-relaxed">
          <p>Thank you for your interest in partnering with HomeProX Services LLC (&quot;HomeProX&quot;).</p>
          <p>
            This Vendor Terms &amp; Onboarding Agreement outlines the standards, responsibilities, and
            expectations required to become and remain an approved vendor within the HomeProX network.
          </p>
          <p>
            By submitting your vendor application through the HomeProX onboarding platform, you acknowledge
            and agree to the following:
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">1. Independent Contractor Status</h2>
            <p>All vendors onboarded through HomeProX operate as independent contractors.</p>
            <p>Vendor acknowledges that they are not employees, representatives, partners, or agents of HomeProX Services LLC.</p>
            <p>Vendors are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Their own labor, staff, subcontractors, and equipment</li>
              <li>Transportation, tools, and materials</li>
              <li>Taxes, payroll, and business expenses</li>
              <li>Licensing, permits, certifications, and insurance</li>
              <li>Compliance with all applicable federal, state, and local laws</li>
            </ul>
            <p>Nothing within this onboarding process creates an employer-employee relationship.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">2. Accuracy of Submitted Information</h2>
            <p>Vendor certifies that all onboarding information submitted to HomeProX is accurate, complete, and current, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>W-9 and tax information</li>
              <li>Business information</li>
              <li>Insurance documents</li>
              <li>Licenses and certifications</li>
              <li>Banking/payment details</li>
              <li>Coverage areas</li>
              <li>Services offered</li>
              <li>Operational capabilities</li>
            </ul>
            <p>Vendor agrees to promptly update HomeProX regarding any changes to submitted information.</p>
            <p>HomeProX reserves the right to suspend or remove vendors that provide false, misleading, incomplete, expired, or fraudulent information.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">3. Licensing, Certifications &amp; Compliance</h2>
            <p>Vendor confirms that they maintain all licenses, permits, registrations, and certifications required to legally perform the services they offer.</p>
            <p>Vendor agrees to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Maintain active and valid licensing at all times</li>
              <li>Perform only work legally permitted under their trade classification</li>
              <li>Provide updated documentation upon request</li>
              <li>Follow all safety, code, and regulatory requirements</li>
            </ul>
            <p>HomeProX may request proof of licensing or compliance documentation at any time during the vendor relationship.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">4. Insurance Requirements</h2>
            <p>Vendors are expected to maintain appropriate insurance coverage based on their trade and services performed.</p>
            <p>Coverage may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>General Liability Insurance</li>
              <li>Commercial Auto Insurance</li>
              <li>Workers&apos; Compensation Insurance (if applicable)</li>
            </ul>
            <p>HomeProX may require updated Certificates of Insurance (COI) before assigning work orders or maintaining active vendor status.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">5. Work Order Standards &amp; Expectations</h2>
            <p>Approved vendors are expected to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Perform work professionally and safely</li>
              <li>Meet agreed timelines and deadlines</li>
              <li>Follow all work order instructions and property requirements</li>
              <li>Maintain professional communication with tenants, clients, and coordinators</li>
              <li>Submit accurate updates, invoices, photos, and completion documentation</li>
            </ul>
            <p>Unauthorized repairs, pricing changes, or scope modifications may not be approved for payment.</p>
            <p>HomeProX reserves the right to evaluate vendor performance, workmanship quality, responsiveness, and professionalism.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">6. Payment &amp; Documentation</h2>
            <p>Vendor acknowledges that payment processing may require:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Completed work</li>
              <li>Before/after photos</li>
              <li>Completion notes</li>
              <li>Approved invoices</li>
              <li>Required documentation</li>
            </ul>
            <p>HomeProX reserves the right to delay, dispute, or deny payment for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Incomplete work</li>
              <li>Missing documentation</li>
              <li>Poor workmanship</li>
              <li>Failure to follow instructions</li>
              <li>Unauthorized charges</li>
            </ul>
            <p>Vendor remains solely responsible for all tax reporting obligations associated with payments received.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">7. Background Checks &amp; Verification</h2>
            <p>HomeProX may require vendors to complete:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Background checks</li>
              <li>Identity verification</li>
              <li>License verification</li>
              <li>Insurance verification</li>
              <li>Compliance screening</li>
            </ul>
            <p>Vendor agrees to cooperate with all reasonable onboarding and compliance procedures.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">8. Confidentiality &amp; Client Protection</h2>
            <p>Vendor agrees to keep confidential all non-public information received through HomeProX, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Customer information</li>
              <li>Property information</li>
              <li>Work order details</li>
              <li>Pricing and operational processes</li>
              <li>Client relationships</li>
            </ul>
            <p>Vendor may not misuse, disclose, copy, or distribute confidential information without written authorization.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">9. Non-Solicitation</h2>
            <p>Vendor agrees not to directly solicit or independently contract with clients, customers, tenants, or properties introduced through HomeProX-assigned work orders without prior written approval.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">10. Vendor Responsibility &amp; Liability</h2>
            <p>Vendor is solely responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The quality of services performed</li>
              <li>Actions of employees or subcontractors</li>
              <li>Property damage caused during service</li>
              <li>Compliance with applicable laws and regulations</li>
              <li>Maintaining active licenses and insurance</li>
            </ul>
            <p>Vendor agrees to hold harmless and indemnify HomeProX Services LLC from claims, damages, liabilities, or expenses resulting from vendor negligence, code violations, improper workmanship, or failure to comply with requirements.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">11. Vendor Network Participation</h2>
            <p>Approval within the HomeProX vendor network does not guarantee:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Minimum work volume</li>
              <li>Exclusive territory</li>
              <li>Ongoing assignments</li>
              <li>Guaranteed project opportunities</li>
            </ul>
            <p>HomeProX reserves the right to assign work orders based on vendor performance, coverage area, availability, client requirements, and operational needs.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">12. Suspension &amp; Termination</h2>
            <p>HomeProX reserves the right to suspend, deactivate, or terminate vendor status at any time, with or without cause.</p>
            <p>Reasons may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Poor workmanship</li>
              <li>Failure to meet deadlines</li>
              <li>Compliance violations</li>
              <li>Inactive status</li>
              <li>Customer complaints</li>
              <li>Fraudulent or inaccurate information</li>
              <li>Failure to maintain insurance or licensing</li>
            </ul>
            <p>Termination does not remove vendor responsibility for incomplete work or outstanding obligations.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">13. Electronic Acceptance &amp; Communication Consent</h2>
            <p>By submitting the vendor onboarding application through the HomeProX website, vendor acknowledges and agrees that:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>All submitted information is accurate and complete</li>
              <li>Vendor is operating as an independent contractor</li>
              <li>Vendor maintains all required licenses and insurance</li>
              <li>Vendor agrees to comply with HomeProX operational standards and policies</li>
              <li>Electronic acceptance, checkbox confirmation, digital signatures, or online submission constitute a legally binding acknowledgement and agreement</li>
            </ul>
            <p>Vendor also consents to receive calls, emails, text messages, work order notifications, scheduling updates, compliance notices, and payment communications from HomeProX Services LLC.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">14. Governing Law</h2>
            <p>This onboarding agreement shall be governed by the laws of the State of Texas.</p>
            <p>Any disputes arising from vendor participation or services performed shall be subject to the jurisdiction of the appropriate courts located in Texas.</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/vendors"
            className="font-body text-teal hover:text-teal-dark transition-colors duration-300"
          >
            ← Back to Vendor Application
          </Link>
        </div>
      </div>
    </div>
  );
}
