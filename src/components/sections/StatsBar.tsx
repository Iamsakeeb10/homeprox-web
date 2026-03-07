"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Properties" },
  { value: "Statewide", label: "Coverage" },
  { value: "100%", label: "Insured" },
];

function CountUpNumber({ value, label }: StatItem) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    // Check if value is a number
    const numericValue = parseInt(value);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    // Count up animation
    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start).toString());
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-2">
        {displayValue}
        {value.includes("+") && !displayValue.includes("+") && "+"}
        {value.includes("%") && !displayValue.includes("%") && "%"}
      </div>
      <div className="font-body text-text-muted text-sm md:text-base">{label}</div>
    </div>
  );
}

export function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-surface-50 py-12 md:py-16 border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t-2 border-surface-200 pt-4"
            >
              <CountUpNumber value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
