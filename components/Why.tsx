"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8 }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-7xl font-light" style={{ color: "var(--gold)" }}>
        {count}{suffix}
      </div>
      <div className="h-[1px] w-12 mx-auto mt-4 mb-3" style={{ background: "var(--gold)", opacity: 0.4 }} />
      <div className="text-white/50 text-sm tracking-[0.2em] uppercase font-light">{label}</div>
    </motion.div>
  );
}

const demographics = [
  { label: "International visitors", value: "68%" },
  { label: "High-net-worth individuals", value: "34%" },
  { label: "Average dwell time", value: "4.2h" },
  { label: "Annual spend per visitor", value: "$312" },
];

export default function Why() {
  return (
    <section id="why" className="relative py-32 overflow-hidden" style={{ background: "var(--obsidian)" }}>
      <div className="section-fade-top" />

      {/* Faint background image */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src="/images/dubai-bg.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] opacity-10" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
      <div className="absolute right-[15%] top-0 bottom-0 w-[1px] opacity-10" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>The Case for Dubai Mall</span>
            <div className="h-[1px] w-12" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Where the World's<br /><em>Commerce Converges</em>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto text-sm leading-relaxed tracking-wide">
            No marketing budget replicates what 150 million annual footfalls deliver. The reach, the prestige, the captive audience — it exists nowhere else on Earth.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-28">
          <AnimatedStat value={150} suffix="M+" label="Annual Visitors" delay={0} />
          <AnimatedStat value={200} suffix="+" label="Nationalities" delay={0.1} />
          <AnimatedStat value={2000} suffix="+" label="Global Brands" delay={0.2} />
          <AnimatedStat value={6} suffix="B+" label="AED Annual Revenue" delay={0.3} />
        </div>

        {/* Demographics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border rounded-lg p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
          style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
        >
          <div>
            <div className="text-xs tracking-[0.25em] uppercase mb-4 font-light" style={{ color: "var(--gold)" }}>Visitor Profile</div>
            <h3 className="font-display text-3xl md:text-4xl text-white font-light leading-tight">
              Your audience,<br />already here.
            </h3>
            <p className="mt-4 text-white/40 text-sm leading-relaxed">
              Dubai Mall attracts the highest concentration of affluent international consumers in the MENA region — decision-makers, luxury buyers, and experience-seekers who convert.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {demographics.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="font-display text-2xl font-light" style={{ color: "var(--gold)" }}>{d.value}</div>
                <div className="text-white/40 text-xs mt-1 tracking-wide">{d.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
