"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CATFramework() {
  return (
    <section id="cat" className="bg-gray-50 py-14 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
        >
          The <span className="text-blue-600">CAT Framework</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-3 text-sm sm:text-base"
        >
          Our Proven Approach to{" "}
          <span className="text-blue-600 font-medium">
            Learning Excellence
          </span>
        </motion.p>

        {/* ================= MAIN SVG ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <Image
            src="/zigzag.svg"
            alt="CAT Framework"
            width={1200}
            height={500}
            className="w-full max-w-[1100px] mx-auto"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}