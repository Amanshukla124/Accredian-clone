"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  description: string;
}

function StatItem({ target, suffix, label, description }: StatItemProps) {
  const { count, ref } = useCountUp(target, 2000);

  return (
    <div ref={ref} className="group py-8 px-8 border-r border-[var(--border-dark)] last:border-r-0 hover:bg-white/[0.03] transition-colors duration-200">
      <div
        className="tabular-nums font-bold mb-3 leading-none"
        style={{
          fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
          fontFamily: "var(--font-playfair)",
          letterSpacing: "-0.04em",
          color: "#FFFFFF",
        }}
      >
        {count.toLocaleString()}
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div className="text-white/70 font-semibold text-sm mb-1.5">{label}</div>
      <div className="text-white/30 text-xs leading-relaxed">{description}</div>
    </div>
  );
}

const stats = [
  {
    target: 500,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Mid-to-large organisations across 20+ sectors",
  },
  {
    target: 94,
    suffix: "%",
    label: "Avg. Completion Rate",
    description: "Industry benchmark is 32%",
  },
  {
    target: 40,
    suffix: "%",
    label: "Avg. Skill Improvement",
    description: "Measured via pre & post assessments",
  },
  {
    target: 1200,
    suffix: "+",
    label: "Expert Mentors",
    description: "IIT/IIM alumni & industry veterans",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="bg-[var(--ink)] border-y border-[var(--border-dark)]" aria-label="Platform statistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <StatItem {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
