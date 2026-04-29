"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const companies = [
  "TCS", "Infosys", "Wipro", "HCL Tech", "Accenture",
  "Deloitte", "HDFC Bank", "ICICI Bank", "Cognizant", "Capgemini",
];

export default function TrustBar() {
  const items = [...companies, ...companies];

  return (
    <section id="trust-bar" className="py-10 bg-white border-b border-[var(--border)]" aria-label="Trusted by enterprises">
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-7 flex items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <motion.span variants={fadeInUp} className="eyebrow text-[var(--ink-faint)] whitespace-nowrap">
          Trusted by
        </motion.span>
        <div className="h-px flex-1 bg-[var(--border)]" />
        <motion.span variants={fadeInUp} className="eyebrow text-[var(--ink-faint)] whitespace-nowrap">
          500+ enterprises
        </motion.span>
      </motion.div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee" role="list" aria-label="Client logos">
          {items.map((company, i) => (
            <div
              key={`${company}-${i}`}
              role="listitem"
              className="flex items-center mx-5 flex-shrink-0"
            >
              <span className="text-[13px] font-semibold text-[var(--ink-faint)] tracking-wide hover:text-[var(--ink)] transition-colors cursor-default whitespace-nowrap">
                {company}
              </span>
              <span className="ml-5 w-1 h-1 rounded-full bg-[var(--border)] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
