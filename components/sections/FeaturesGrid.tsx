"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

const icons: Record<string, React.ReactNode> = {
  university: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  ),
  analytics: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  mentorship: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  cohort: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  curriculum: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  certificate: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  ai: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  global: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 01.284-2.253" />
    </svg>
  ),
};

const features = [
  {
    idx: "01",
    iconKey: "university",
    title: "University-Backed Programs",
    description: "Co-created with IITs, IIMs, and global universities. Curated for real enterprise skill gaps — not off-the-shelf catalog courses.",
  },
  {
    idx: "02",
    iconKey: "analytics",
    title: "Real-Time Analytics",
    description: "Track completion rates, assessment scores, and ROI through a live, centralized enterprise dashboard.",
  },
  {
    idx: "03",
    iconKey: "mentorship",
    title: "Live Expert Mentorship",
    description: "Industry veterans guide your teams through capstone projects with personalized 1:1 sessions.",
  },
  {
    idx: "04",
    iconKey: "cohort",
    title: "Cohort-Based Learning",
    description: "Foster peer collaboration with synchronized learning paths designed around your team's timeline.",
  },
  {
    idx: "05",
    iconKey: "curriculum",
    title: "Custom Curriculum",
    description: "Tailor every course to your organization's unique tech stack, business goals, and team skill baseline.",
  },
  {
    idx: "06",
    iconKey: "certificate",
    title: "Recognized Certifications",
    description: "University-backed credentials that boost employee confidence, retention, and career trajectories.",
  },
  {
    idx: "07",
    iconKey: "ai",
    title: "AI-Powered Paths",
    description: "Adaptive AI-driven recommendations that adjust curriculum difficulty to each learner's pace.",
  },
  {
    idx: "08",
    iconKey: "global",
    title: "Global Team Support",
    description: "Seamlessly upskill distributed teams across geographies, timezones, and languages.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-28 bg-white" aria-label="Platform features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 pb-10 border-b border-[var(--border)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <div className="max-w-xl">
            <motion.span variants={fadeInUp} className="eyebrow block mb-5">Platform</motion.span>
            <motion.h2
              variants={fadeInUp}
              className="display text-[var(--ink)]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Everything L&D teams{" "}
              <em className="not-italic accent-text">need to win.</em>
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-[var(--ink-muted)] max-w-sm text-[15px] leading-relaxed lg:text-right">
            One integrated platform to design, deliver, and measure enterprise learning at scale.
          </motion.p>
        </motion.div>

        {/* Grid — 4-col with ruled borders */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group p-7 border-b border-r border-[var(--border)] hover:bg-[var(--surface)] transition-colors duration-200 cursor-default"
              style={{
                // Remove right border on last col, bottom border on last row
                borderRight: (i + 1) % 4 === 0 ? "none" : undefined,
                borderBottom: i >= features.length - 4 ? "none" : undefined,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-[var(--surface-2)] text-[var(--ink-muted)] group-hover:bg-[var(--accent)] group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0">
                  {icons[feature.iconKey]}
                </div>
                <span className="feature-idx text-[var(--ink-faint)/60]">{feature.idx}</span>
              </div>
              <h3 className="font-semibold text-[var(--ink)] text-[14px] leading-snug mb-2.5">{feature.title}</h3>
              <p className="text-[13px] text-[var(--ink-faint)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
