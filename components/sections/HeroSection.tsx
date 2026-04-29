"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const metrics = [
  { value: "94%", label: "Avg. completion rate" },
  { value: "40%", label: "Measurable skill gain" },
  { value: "1,200+", label: "Expert mentors" },
];

const progressBars = [
  { label: "Data Engineering", progress: 94 },
  { label: "ML & AI", progress: 87 },
  { label: "Product Management", progress: 79 },
  { label: "Leadership", progress: 91 },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[62px] overflow-hidden"
      style={{ background: "var(--ink)" }}
      aria-label="Hero section"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(26,86,255,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-widest text-white/50 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A56FF] animate-pulse" />
                Trusted by 500+ enterprise clients
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="display text-white mb-6"
              id="hero-headline"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)" }}
            >
              Upskill your{" "}
              <em className="accent-text not-italic">workforce</em>
              <br />
              at scale.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-[480px]"
              id="hero-subheadline"
            >
              Partner with IITs, IIMs, and global universities to upskill your
              enterprise teams — curated programs, live mentorship, real-time
              analytics, measurable ROI.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-14">
              <a href="#contact" className="btn btn-primary" id="hero-cta-demo">
                Request a Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#features" className="btn btn-ghost !border-white/15 !text-white/70 hover:!text-white hover:!border-white/40" id="hero-cta-explore">
                Explore programs
              </a>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-10 pt-8 border-t border-white/10"
            >
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span
                    className="font-bold text-white tabular-nums"
                    style={{ fontSize: "1.75rem", letterSpacing: "-0.03em", fontFamily: "var(--font-playfair)" }}
                  >
                    {m.value}
                  </span>
                  <span className="text-xs text-white/40">{m.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end"
            id="hero-dashboard"
          >
            <div className="animate-float relative w-full">
              {/* Main card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Card header bar */}
                <div
                  className="flex items-center justify-between px-5 py-4 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div>
                    <p className="eyebrow text-white/30 mb-0.5">Enterprise Dashboard</p>
                    <h3 className="text-sm font-semibold text-white">Q2 Learning Report</h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Progress bars */}
                <div className="px-5 py-5 space-y-4">
                  {progressBars.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs text-white/50">{item.label}</span>
                        <span className="text-xs font-semibold text-white">{item.progress}%</span>
                      </div>
                      <div className="h-[3px] bg-white/8 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--accent)] rounded-full"
                          style={{
                            width: `${item.progress}%`,
                            background: "linear-gradient(to right, #1A56FF, #06B0FF)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metric pills */}
                <div
                  className="grid grid-cols-3 gap-px border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.04)" }}
                >
                  {[
                    { value: "500+", label: "Enterprises" },
                    { value: "94%", label: "Completion" },
                    { value: "40%", label: "Skill Gain" },
                  ].map((m) => (
                    <div key={m.label} className="text-center py-4 px-3 bg-transparent hover:bg-white/5 transition-colors">
                      <p className="text-base font-bold text-white">{m.value}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating label — top right */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.85, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 -right-3 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--ink)] bg-white shadow-lg"
              >
                <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Top-Rated Platform
              </motion.div>

              {/* Floating label — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 -left-3 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#1A56FF] shadow-lg"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489" />
                </svg>
                IIT & IIM Backed
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
