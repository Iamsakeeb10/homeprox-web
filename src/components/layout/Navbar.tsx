"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Clients", href: "/clients" },
  { label: "Vendor Network", href: "/vendors" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden bg-white/98 backdrop-blur-md shadow-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          <Link href="/" className="flex items-center relative inline-block">
            <Image
              src="/images/logo.png"
              alt="HomeProX Services LLC"
              width={155}
              height={50}
              className="relative z-10 w-auto h-8 sm:h-9 object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-accent text-base transition duration-300 ease-out px-3 py-1 rounded-full ${
                  pathname === link.href
                    ? "text-teal font-semibold"
                    : "text-charcoal hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+6822773555 "
              className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2 rounded-full font-accent font-medium text-sm transition-all duration-300 hover:bg-teal-dark"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (682) 277-3555
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden transition-colors duration-300 p-2 flex-shrink-0 ml-2 text-charcoal hover:text-teal"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, height: "auto" }
            }
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-surface-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-accent text-lg py-2 px-3 rounded-full transition duration-300 ease-out ${
                    pathname === link.href
                      ? "text-teal"
                      : "text-charcoal hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+6822773555"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full bg-teal text-white hover:bg-teal-dark px-6 py-3 rounded-full font-accent font-medium transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                (682) 277-3555
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
