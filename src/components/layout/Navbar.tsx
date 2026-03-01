"use client";

import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const isScrolled = scrollPosition > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative inline-flex items-center justify-center rounded-lg bg-white backdrop-blur-sm border border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/logo.png"
                alt="MEGAFIXX Home Services LLC"
                width={220}
                height={66}
                className="h-12 w-auto sm:h-16 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-accent text-base transition-colors duration-300 relative group ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors duration-300 p-2 flex-shrink-0 ml-2"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950 border-t border-navy-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-accent text-lg py-2 transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="primary"
                size="md"
                className="w-full"
                asChild
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
