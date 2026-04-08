"use client";

import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import React from "react";

/* ─── Stat cards inside the right glass panel ─────────────────── */
const STATS = [
  { icon: Building2, value: "500+", label: "Properties Maintained" },
  { icon: CalendarCheck, value: "10+", label: "Years of Leadership" },
  { icon: ShieldCheck, value: "100%", label: "Certified & Bonded" },
  { icon: Wrench, value: "7", label: "Service Categories" },
];

/* ─── Trust chips below buttons ───────────────────────────────── */
const TRUST_CHIPS = [
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "Fast Scheduling" },
  { icon: Camera, label: "Photo Docs" },
  { icon: MapPin, label: "Statewide Coverage" },
];

/* ─── Right-panel service highlights ─────────────────────────── */
const HIGHLIGHTS = [
  "REO & Bank-Owned Properties",
  "Portfolio & Institutional Management",
  "Emergency Repair Services (24/7)",
  "Renovation & Property Preservation",
];

/* ─── Marquee items ────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Licensed & Insured",
  "Statewide Coverage",
  "Photo Documentation",
  "Fast Response",
  "Background-Checked Crews",
  "No Hidden Fees",
  "Portfolio Management",
  "REO Specialists",
  "General Repairs & Handyman Services",
  "Renovation & Remodeling",
  "Property Maintenance",
  "Property Preservation",
  "Exterior Services",
  "Cleaning & Sanitization",
  "Electrical & Plumbing",
  "HVAC & Energy Efficiency",
  "Smart Home Upgrades",
  "Preventive Maintenance Plans",
  "Emergency Repair Services (24/7)",
  "Commercial Property Services",
];

const Diamond = () => (
  <span
    aria-hidden="true"
    className="inline-block w-[5px] h-[5px] bg-teal rotate-45 mx-6 flex-shrink-0 opacity-70"
  />
);

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  const slide = (delay: number, x = 0, y = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x, y },
          animate: { opacity: 1, x: 0, y: 0 },
          transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    /*
     * The section is exactly 100dvh tall so the video fills the screen
     * and the marquee strip sits flush at the viewport bottom.
     */
    <section
      className="relative flex flex-col bg-hero-bg-dark overflow-hidden pt-20"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── Full-cover video ────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-charcoal/72" />
        {/* Stronger vignette on right so glass card pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/30 to-charcoal/55" />
        {/* Bottom gradient so marquee strip transitions cleanly */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-charcoal/80 to-transparent" />
      </div>

      {/* ── Subtle diagonal texture ──────────────────────────────── */}
      <div className="hero-texture absolute inset-0 z-10 pointer-events-none" />

      {/* ── Top teal accent bar ──────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

      {/* ════════════════════════════════════════════════════════════
          MAIN LAYOUT — left text / right glass card
          flex-1 so it expands and pushes marquee to the bottom
      ════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 xl:gap-14 items-center">
            {/* ════════════════════════════════════════════════════
                LEFT COLUMN — primary message
            ════════════════════════════════════════════════════ */}
            <div className="flex flex-col gap-5">
              {/* Eyebrow */}
              <motion.div
                {...slide(0, -20)}
                className="flex items-center gap-3"
              >
                {/* Teal vertical accent bar */}
                <span className="hidden sm:block w-[3px] h-10 bg-teal rounded-full flex-shrink-0" />
                <div className="inline-flex items-center gap-2 bg-teal/12 border border-teal/28 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse flex-shrink-0" />
                  <span className="font-accent text-xs sm:text-sm font-semibold text-teal tracking-widest uppercase">
                    Texas Statewide Property Maintenance
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...slide(0.1, -24)}
                className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-white leading-[1.08] tracking-tight"
              >
                Expert Property
                <br />
                <span className="relative">
                  <span className="text-teal">Maintenance</span> Services
                </span>
                <br />
                <span className="text-surface-200 text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-semibold">
                  Across Texas
                </span>
              </motion.h1>

              {/* Body */}
              <motion.p
                {...slide(0.18, -20)}
                className="font-body text-base sm:text-lg text-hero-muted max-w-lg leading-relaxed"
              >
                Trusted by property managers, investors, banks, and institutions
                for reliable statewide maintenance — delivered with speed,
                documentation, and institutional quality.
              </motion.p>

              {/* CTA row */}
              <motion.div
                {...slide(0.26, -16)}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/55 bg-white/5 backdrop-blur-sm"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>

              {/* Trust chips */}
              <motion.div
                {...slide(0.34, -12)}
                className="flex flex-wrap gap-2"
              >
                {TRUST_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 bg-white/6 border border-white/14 rounded-full px-3 py-1.5 backdrop-blur-sm"
                  >
                    <chip.icon className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                    <span className="font-body text-xs font-medium text-white/85 tracking-wide">
                      {chip.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Quick contact strip */}
              <motion.div
                {...slide(0.4, -10)}
                className="flex items-center gap-2 pt-1"
              >
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="font-body text-sm text-surface-300">
                  Available statewide —&nbsp;
                  <a
                    href="tel:+1-800-000-0000"
                    className="text-white hover:text-teal transition-colors font-medium"
                  >
                    Call us for same-day response
                  </a>
                </span>
              </motion.div>
            </div>

            {/* ════════════════════════════════════════════════════
                RIGHT COLUMN — floating glass card
            ════════════════════════════════════════════════════ */}
            <motion.div
              {...slide(0.22, 30)}
              className="hidden lg:flex flex-col gap-0 rounded-2xl overflow-hidden border border-white/14 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              style={{ background: "rgba(31,42,51,0.62)" }}
            >
              {/* Card header */}
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-accent text-xs font-semibold text-teal tracking-widest uppercase mb-0.5">
                    HomeProX Services
                  </p>
                  <p className="font-display text-base font-bold text-white">
                    Why Clients Choose Us
                  </p>
                </div>
                {/* Live indicator dot */}
                <div className="flex items-center gap-1.5 bg-teal/15 border border-teal/30 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <span className="font-accent text-[10px] font-semibold text-teal tracking-wider uppercase">
                    Live
                  </span>
                </div>
              </div>

              {/* Stats 2×2 grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 p-5 group hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal/18 flex items-center justify-center group-hover:bg-teal/28 transition-colors">
                      <stat.icon className="w-4 h-4 text-teal" />
                    </div>
                    <div className="font-display text-2xl font-bold text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="font-body text-[11px] text-surface-300 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Service highlights list */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <p className="font-accent text-[10px] font-semibold text-surface-300 tracking-widest uppercase">
                  Specialized In
                </p>
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-px" />
                    <span className="font-body text-sm text-white/80 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card CTA footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-teal/8">
                <Link
                  href="/quote"
                  className="font-accent text-sm font-semibold text-teal hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  Request a free property assessment
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          MARQUEE STRIP — flush at viewport bottom
      ════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 border-t border-white/10 bg-charcoal/65 backdrop-blur-sm overflow-hidden flex-shrink-0">
        {/* Edge fade masks */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-charcoal/65 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-charcoal/65 to-transparent pointer-events-none" />

        {prefersReducedMotion ? (
          <div className="flex flex-wrap gap-x-6 gap-y-1 items-center justify-center py-3.5 px-8 text-sm text-surface-300">
            {MARQUEE_ITEMS.slice(0, 8).map((item) => (
              <span key={item} className="font-body">
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div
            className="flex items-center whitespace-nowrap"
            style={{
              animation: "marquee 60s linear infinite",
              willChange: "transform",
            }}
          >
            {doubled.map((item, idx) => (
              <React.Fragment key={`${item}-${idx}`}>
                <span className="font-body text-[13px] font-medium text-surface-300 tracking-wide flex-shrink-0 py-3.5">
                  {item}
                </span>
                <Diamond />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
