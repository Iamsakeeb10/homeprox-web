import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {

  return (
    <footer className="bg-navy-950 text-white border-t-2 border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-display text-2xl font-bold text-white">
                MEGAFIXX
              </span>
              <span className="font-accent text-xs text-gold uppercase tracking-wider">
                Home Services LLC
              </span>
            </Link>
            <p className="font-body text-muted text-sm mb-4">
              Texas-based statewide property maintenance company. Serving property managers, investors, and financial institutions across Texas.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-xs font-accent uppercase">Fully Insured</span>
              <span className="text-muted">•</span>
              <span className="text-xs font-accent uppercase">Licensed</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="font-body text-muted hover:text-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="font-body text-muted hover:text-gold transition-colors duration-300"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-muted hover:text-gold transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-muted hover:text-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  General Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Drywall & Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Property Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Siding & Exterior
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Property Cleanouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4693789262"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                  (469) 378-9262
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@megafixxhomeservices.com"
                  className="font-body text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" aria-hidden="true" />
                  info@megafixxhomeservices.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-muted text-sm">
                  Collin County, TX<br />
                  <span className="text-gold">Serving All of Texas</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-navy-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-muted text-sm text-center md:text-left">
              &copy; 2026 MEGAFIXX Home Services LLC. All rights reserved.
            </p>
            <Link
              href="/terms"
              className="font-body text-muted hover:text-gold transition-colors duration-300 text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
