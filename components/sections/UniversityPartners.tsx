"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const partners = [
  { name: "IIT Guwahati", abbr: "IITG", tier: "Premier" },
  { name: "IIT Delhi", abbr: "IITD", tier: "Premier" },
  { name: "IIT Bombay", abbr: "IITB", tier: "Premier" },
  { name: "IIM Visakhapatnam", abbr: "IIMV", tier: "Premier" },
  { name: "IIM Bangalore", abbr: "IIMB", tier: "Premier" },
  { name: "XLRI Jamshedpur", abbr: "XLRI", tier: "Premier" },
  { name: "SP Jain", abbr: "SPJ", tier: "Global" },
  { name: "Great Learning", abbr: "GL", tier: "Global" },
];

export default function UniversityPartners() {
  return (
    <section id="partners" className="py-28 bg-[var(--surface)]" aria-label="University partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16 pb-10 border-b border-[var(--border)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <div className="flex-1">
            <motion.span variants={fadeInUp} className="eyebrow block mb-5">Academic Partners</motion.span>
            <motion.h2
              variants={fadeInUp}
              className="display text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Co-designed with{" "}
              <em className="not-italic accent-text">India&apos;s most<br />prestigious</em>{" "}
              institutions.
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-[var(--ink-muted)] max-w-xs text-[15px] leading-relaxed">
            Every program carries the credential of a top-tier institution — giving your employees certifications that matter.
          </motion.p>
        </motion.div>

        {/* Partner grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              variants={fadeInUp}
              className="group py-8 px-7 flex flex-col gap-3 border-b border-r border-[var(--border)] hover:bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-default"
              style={{
                borderRight: (i + 1) % 4 === 0 ? "none" : undefined,
                borderBottom: i >= partners.length - 4 ? "none" : undefined,
              }}
            >
              {/* Monogram */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--ink)", color: "white" }}
              >
                <span className="font-black text-xs tracking-tight">{partner.abbr}</span>
              </div>

              <div>
                <p className="text-[var(--ink)] font-semibold text-sm leading-snug">{partner.name}</p>
                <span
                  className="inline-block mt-2 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    background: partner.tier === "Premier" ? "rgba(26,86,255,0.08)" : "rgba(5,180,120,0.08)",
                    color: partner.tier === "Premier" ? "var(--accent)" : "#059669",
                  }}
                >
                  {partner.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
