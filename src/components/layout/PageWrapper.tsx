"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isHomepage = pathname === "/";

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Homepage: render immediately without AnimatePresence or animations
  if (isHomepage) {
    return <div key={pathname}>{children}</div>;
  }

  // Other pages: use AnimatePresence with mode="wait" for smooth transitions
  // Uniform variants for all pages: gentle fade + slide
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.25,
          ease: "easeInOut"
        }}
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
