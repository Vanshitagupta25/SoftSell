"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30 -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sell Your Unused Software Licenses
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turn unused software into cash effortlessly.
        </motion.p>

        {/* Icons with descriptions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-emerald-600 text-lg font-medium">
            <Rocket />
            <span>Fast Selling</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-lg font-medium">
            <ShieldCheck />
            <span>Secure Process</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-lg font-medium">
            <TrendingUp />
            <span>Great Value</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                         Get a Quote
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


