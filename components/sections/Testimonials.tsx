"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Shankar",
    title: "VP Engineering",
    company: "FinEdge Technologies",
    initials: "PS",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Rohit Malhotra",
    title: "Chief Technology Officer",
    company: "CloudScale SaaS",
    initials: "RM",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Anjali Nair",
    title: "Head of L&D",
    company: "Global MNC India",
    initials: "AN",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white" aria-label="Customer testimonials">
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
            <motion.span variants={fadeInUp} className="eyebrow block mb-5">Testimonials</motion.span>
            <motion.h2
              variants={fadeInUp}
              className="display text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Loved by L&D leaders{" "}
              <em className="not-italic accent-text">across India.</em>
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-[var(--ink-muted)] max-w-xs text-[15px] leading-relaxed">
            Real stories from enterprises that have transformed their workforce with Accredian.
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="group p-8 flex flex-col border-r border-[var(--border)] last:border-r-0 hover:bg-[var(--surface)] transition-colors duration-200"
            >
              {/* Stars */}
              <StarRow />

              {/* Opening quote mark */}
              <div className="mt-6 mb-4">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                  <path d="M0 18V10.8C0 4.8 3.6 1.2 10.8 0L12 2.4C8.4 3.2 6.4 5.2 6 8.4H10.8V18H0ZM13.2 18V10.8C13.2 4.8 16.8 1.2 24 0L25.2 2.4C21.6 3.2 19.6 5.2 19.2 8.4H24V18H13.2Z" fill="var(--border)"/>
                </svg>
              </div>

              {/* Quote */}
              <p className="text-[var(--ink-muted)] text-[14px] leading-[1.85] flex-1 mb-8">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[var(--border)]">
                <div className="w-9 h-9 rounded-full bg-[var(--ink)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[11px] font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                  <p className="text-xs text-[var(--ink-faint)]">{t.title} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
