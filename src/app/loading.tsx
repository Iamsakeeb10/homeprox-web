"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-navy-950 z-50 flex items-center justify-center"
      style={{ minHeight: "100dvh" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-gold mb-8"
        >
          MEGAFIXX
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative w-24 h-24 mx-auto"
        >
          <div className="absolute inset-0 border-4 border-gold/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-gold rounded-full animate-spin" />
        </motion.div>
      </div>
    </motion.div>
  );
}
