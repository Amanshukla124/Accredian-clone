"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, viewport } from "@/lib/motion";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Toast from "../ui/Toast";

interface LeadFormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  interest: string;
  message: string;
}

interface ToastState {
  type: "success" | "error";
  message: string;
}

const BLOCKED_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com"];

const teamSizeOptions = [
  { value: "10-50", label: "10–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
];

const interestOptions = [
  { value: "Data Science", label: "Data Science" },
  { value: "ML & AI", label: "ML & AI" },
  { value: "Product Management", label: "Product Management" },
  { value: "Leadership", label: "Leadership" },
  { value: "Other", label: "Other" },
];

const valueProps = [
  { label: "IIT & IIM certified programs" },
  { label: "Real-time analytics & ROI tracking" },
  { label: "Live mentorship from industry experts" },
  { label: "Global team support across timezones" },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({ defaultValues: { teamSize: "", interest: "" } });

  const onSubmit: SubmitHandler<LeadFormData> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setToast({ type: "success", message: "We'll be in touch within 24 hours!" });
        reset();
      } else {
        setToast({ type: "error", message: json.error || "Something went wrong. Please retry." });
      }
    } catch {
      setToast({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--ink)" }}
      aria-label="Contact and lead capture form"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-start">

          {/* Left: Copy */}
          <motion.div
            className="text-white lg:pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="eyebrow text-white/30 block mb-6">Get Started</motion.span>
            <motion.h2
              variants={fadeInUp}
              className="display text-white mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Ready to upskill{" "}
              <em className="not-italic accent-text">your workforce?</em>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/40 text-[15px] leading-relaxed mb-12 max-w-sm">
              Talk to our enterprise learning advisors. We&apos;ll craft a customized upskilling
              roadmap for your team within 48 hours.
            </motion.p>

            {/* Value props */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-4 mb-12">
              {valueProps.map((vp) => (
                <motion.li
                  key={vp.label}
                  variants={fadeInUp}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
                    </svg>
                  </div>
                  <span className="text-white/60 text-[14px]">{vp.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="pt-8 border-t border-white/10">
              <p className="text-white/25 text-xs">
                Rated{" "}
                <span className="text-amber-400 font-bold">4.9 / 5</span>{" "}
                by enterprise L&D leaders · No commitment required
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInRight}
            className="bg-white rounded-2xl p-8 shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
          >
            <h3 className="text-lg font-bold text-[var(--ink)] mb-1">Request a Demo</h3>
            <p className="text-sm text-[var(--ink-faint)] mb-7">Fill in the form and we&apos;ll reach out within 24 hours.</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
              noValidate
              id="lead-capture-form"
            >
              <Input
                id="contact-name"
                label="Full Name"
                placeholder="Rahul Sharma"
                required
                error={errors.name?.message}
                {...register("name", { required: "Full name is required" })}
              />
              <Input
                id="contact-email"
                label="Work Email"
                type="email"
                placeholder="rahul@company.com"
                required
                error={errors.email?.message}
                {...register("email", {
                  required: "Work email is required",
                  validate: (val) => {
                    const domain = val.split("@")[1]?.toLowerCase();
                    if (BLOCKED_DOMAINS.includes(domain)) return "Please use your work/company email";
                    if (!/\S+@\S+\.\S+/.test(val)) return "Invalid email";
                    return true;
                  },
                })}
              />
              <Input
                id="contact-company"
                label="Company Name"
                placeholder="TechCorp India"
                required
                error={errors.company?.message}
                {...register("company", { required: "Company name is required" })}
              />
              <div className="grid grid-cols-2 gap-4">
                <Select
                  id="contact-team-size"
                  label="Team Size"
                  placeholder="Select..."
                  required
                  options={teamSizeOptions}
                  error={errors.teamSize?.message}
                  {...register("teamSize", { required: "Please select team size" })}
                />
                <Select
                  id="contact-interest"
                  label="Primary Interest"
                  placeholder="Select..."
                  options={interestOptions}
                  error={errors.interest?.message}
                  {...register("interest")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-[var(--ink-muted)]">
                  Message{" "}
                  <span className="text-[var(--ink-faint)] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="e.g. We want to upskill 80 data engineers..."
                  className="w-full rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--ink)] bg-white placeholder:text-[var(--ink-faint)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-pale)] transition-all resize-none"
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full justify-center mt-1 py-3.5 text-[15px]"
                id="contact-submit"
              >
                {loading ? (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : "Request My Demo"}
              </button>
              <p className="text-center text-xs text-[var(--ink-faint)]">
                By submitting, you agree to our{" "}
                <a href="#" className="text-[var(--accent)] hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
      )}
    </section>
  );
}
