import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white border-t-0 relative">
      {/* Optional accent strip */}
      <div
        className="h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent opacity-40"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="inline-flex bg-white rounded-md  mb-4">
              <Image
                src="/images/logo.png"
                alt="HomeProX Services LLC"
                width={220}
                height={10}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="font-body text-surface-300 text-sm mb-4">
              Statewide property maintenance company supporting managers,
              operators, and institutions across Texas with professional service
              delivery.
            </p>
            <div className="flex items-center gap-2 text-surface-300">
              <span className="text-xs font-accent uppercase">
                Fully Insured
              </span>
              <span>•</span>
              <span className="text-xs font-accent uppercase">Licensed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  General Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Drywall & Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Property Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Siding & Exterior
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Property Cleanouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6822773555"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal" aria-hidden="true" />
                  (682) 277-3555
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@homeproxsvcs.com"
                  className="font-body text-surface-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-teal" aria-hidden="true" />
                  info@homeproxsvcs.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-teal mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-body text-surface-300 text-sm">
                  517 WATERVIEW DR, COPPELL, TX 75019
                  <br />
                  <span className="text-teal">Serving All of Texas</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-300 hover:text-white transition-colors duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-300 hover:text-white transition-colors duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-300 hover:text-white transition-colors duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-300 hover:text-white transition-colors duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-surface-300 text-sm text-center md:text-left">
              &copy; 2026 HomeProX Services LLC. All rights reserved.
            </p>
            <Link
              href="/terms"
              className="font-body text-surface-300 hover:text-white underline-offset-2 hover:underline transition-colors duration-200 text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
