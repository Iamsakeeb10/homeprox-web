import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions | MEGAFIXX Home Services LLC",
  description: "Terms and Conditions for MEGAFIXX Home Services LLC. Governing use of our website and services. Collin County, Texas.",
  path: "/terms"
});

const termsContent = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the MEGAFIXX Home Services LLC website (\"Website\"), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use this Website.",
      "We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the Website constitutes acceptance of any changes."
    ]
  },
  {
    id: "website-services",
    title: "Website Services",
    content: [
      "This Website is provided for informational purposes regarding handyman, renovation, maintenance, and related home services offered by MEGAFIXX Home Services LLC.",
      "All content and services are provided on an \"AS IS\" basis. We reserve the right to modify, suspend, or discontinue any portion of the Website at any time without notice.",
      "We are not responsible for:",
      "• Temporary unavailability of the Website",
      "• Technical errors",
      "• Inaccurate or outdated information"
    ]
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: [
      "If you submit information through contact forms, service requests, or account registration:",
      "• You agree to provide accurate and truthful information.",
      "• You are responsible for maintaining confidentiality of any login credentials.",
      "• You must notify us immediately of unauthorized use of your account."
    ]
  },
  {
    id: "privacy",
    title: "Privacy",
    content: [
      "Any personal information collected through this Website is handled in accordance with our Privacy Policy. We do not sell personal information."
    ]
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: [
      "You agree not to:",
      "• Use this Website for unlawful purposes",
      "• Submit false, misleading, defamatory, or harmful content",
      "• Attempt to interfere with Website functionality",
      "• Upload viruses or malicious software",
      "• Engage in spam or unauthorized marketing",
      "We reserve the right to restrict access for violations of these Terms."
    ]
  },
  {
    id: "estimates",
    title: "Service Estimates & Contracts",
    content: [
      "All project estimates provided via the Website or email are:",
      "• Non-binding until confirmed in writing",
      "• Subject to on-site inspection",
      "• Subject to material cost changes",
      "• Subject to availability of labor and scheduling",
      "A separate written service agreement may be required for project execution."
    ]
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: [
      "This Website may reference third-party products, materials, or services. MEGAFIXX Home Services LLC is not responsible for third-party representations, warranties, or performance."
    ]
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: [
      "All content on this Website — including logos, text, images, service descriptions, and branding — is the property of MEGAFIXX Home Services LLC and may not be reproduced without written permission."
    ]
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by Texas law, MEGAFIXX Home Services LLC shall not be liable for:",
      "• Direct or indirect damages",
      "• Loss of profits",
      "• Property damage beyond contract scope",
      "• Delays caused by weather, supply chain, or third parties",
      "• Consequential or incidental damages",
      "Your use of this Website is at your own risk."
    ]
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    content: [
      "The Website and its content are provided without warranties of any kind, either express or implied, including but not limited to:",
      "• Merchantability",
      "• Fitness for a particular purpose",
      "• Non-infringement",
      "We do not guarantee uninterrupted, error-free, or secure Website access."
    ]
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      "You agree to indemnify and hold harmless MEGAFIXX Home Services LLC, its owners, employees, contractors, and affiliates from any claims, damages, or legal expenses arising from your misuse of the Website or violation of these Terms."
    ]
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      "These Terms shall be governed by the laws of the State of Texas. Any disputes shall be resolved in courts located in Collin County, Texas."
    ]
  },
  {
    id: "copyright",
    title: "Copyright & Contact",
    content: [
      "If you believe any material on this Website infringes your intellectual property rights, please contact:"
    ],
    contactInfo: true
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    content: [
      "If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force.",
      "Failure to enforce any provision shall not constitute a waiver of rights."
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Terms & Conditions
          </h1>
          <p className="font-body text-text-muted text-lg">
            Last Updated: February 24, 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-display text-xl font-bold text-navy mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {termsContent.map((term, index) => (
                  <a
                    key={term.id}
                    href={`#${term.id}`}
                    className="block font-body text-sm text-text-muted hover:text-blue transition-colors duration-300 py-1"
                  >
                    {index + 1}. {term.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-surface-100 border border-surface-200 rounded-xl p-8 md:p-12 space-y-12">
              {termsContent.map((term, index) => (
                <section key={term.id} id={term.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                    {index + 1}. {term.title}
                  </h2>
                  <div className="font-body text-text-muted leading-relaxed space-y-3">
                    {term.content.map((paragraph, pIndex) => {
                      if (paragraph.startsWith("•")) {
                        return (
                          <ul key={pIndex} className="list-disc list-inside ml-4 space-y-1">
                            <li>{paragraph.substring(1).trim()}</li>
                          </ul>
                        );
                      }
                      return (
                        <p key={pIndex}>{paragraph}</p>
                      );
                    })}
                    {term.contactInfo && (
                      <div className="mt-4 bg-white border border-surface-200 rounded-lg p-6">
                        <table className="w-full">
                          <tbody className="space-y-2">
                            <tr>
                              <td className="font-body text-text-muted font-medium pr-4 py-2">Email</td>
                              <td className="font-body text-navy py-2">
                                <a
                                  href="mailto:info@megafixxhomeservices.com"
                                  className="text-blue hover:text-blue-dark transition-colors duration-300"
                                >
                                  info@megafixxhomeservices.com
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-body text-text-muted font-medium pr-4 py-2">Phone</td>
                              <td className="font-body text-navy py-2">
                                <a
                                  href="tel:4693789262"
                                  className="text-blue hover:text-blue-dark transition-colors duration-300"
                                >
                                  (469) 378-9262
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-body text-text-muted font-medium pr-4 py-2">Location</td>
                              <td className="font-body text-navy py-2">Collin County, Texas</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Back to Home Link */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="font-body text-blue hover:text-blue-dark transition-colors duration-300"
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
