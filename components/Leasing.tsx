"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const paths = [
  {
    id: "luxury",
    label: "Luxury Flagship",
    headline: "The world's elite choose this address.",
    desc: "Dubai Mall's luxury wing is one of the most coveted retail addresses globally. For global luxury houses seeking a MENA presence that reflects their prestige, this is the only address that qualifies.",
    specs: ["5,000–15,000 sqft", "Bespoke fit-out support", "Dedicated luxury clientele", "Invitation-only positioning"],
    ideal: "Hermès · Dior · Bottega Veneta · Valentino",
  },
  {
    id: "retail",
    label: "Mid-Tier Retail",
    headline: "Scale meets accessibility.",
    desc: "Capture the world's largest volume of aspirational shoppers within a prestige environment. Dubai Mall's mid-tier retail zone is where global brands build market penetration across 200+ nationalities.",
    specs: ["1,000–5,000 sqft", "High-footfall locations", "Flexible lease terms", "Fit-out incentives available"],
    ideal: "Zara · Mango · Levi's · Sephora",
  },
  {
    id: "popup",
    label: "Pop-Up & Activation",
    headline: "Test, launch, and captivate.",
    desc: "Dubai Mall pop-up spaces are among the most powerful brand-building tools in retail. Short-term, high-impact, with direct access to a global audience that no other single location provides.",
    specs: ["200–800 sqft", "2-week to 6-month terms", "Turnkey build options", "Campaign integration"],
    ideal: "Emerging brands · Product launches · Seasonal campaigns",
  },
  {
    id: "fb",
    label: "F&B Concept",
    headline: "Feed millions. Build loyalty.",
    desc: "Dubai Mall's dining landscape is the region's most visited F&B ecosystem. Whether a quick-service concept or a celebrity chef destination, your brand joins a circuit that drives 4+ hour dwell times.",
    specs: ["800–3,000 sqft", "Indoor & terrace options", "Fountain view premiums", "Chef & operator programs"],
    ideal: "Restaurant groups · Celebrity chef concepts · QSR brands",
  },
];

export default function Leasing() {
  const [active, setActive] = useState(0);

  return (
    <section id="leasing" className="relative py-32 overflow-hidden" style={{ background: "var(--charcoal)" }}>
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "var(--gold)" }}>Leasing Paths</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Find Your<br /><em>Perfect Space</em>
          </h2>
        </motion.div>

        {/* Tabs + Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tab List */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-1">
            {paths.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 text-sm tracking-wide transition-all duration-300 border-l-2 ${active === i ? "font-light" : "opacity-40 hover:opacity-70"}`}
                style={{
                  borderColor: active === i ? "var(--gold)" : "transparent",
                  color: active === i ? "white" : "white",
                  background: active === i ? "rgba(201,168,76,0.06)" : "transparent",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-10 border"
            style={{ borderColor: "rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-xs tracking-[0.2em] uppercase font-light mb-3" style={{ color: "var(--gold)" }}>
              {paths[active].label}
            </div>
            <h3 className="font-display text-3xl text-white font-light mb-5">{paths[active].headline}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8">{paths[active].desc}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {paths[active].specs.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-white/50">
                  <span style={{ color: "var(--gold)" }}>—</span>
                  {s}
                </div>
              ))}
            </div>

            <div className="mb-8 text-xs text-white/25 tracking-wide">
              <span className="text-white/40">Ideal for: </span>{paths[active].ideal}
            </div>

            <button
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ background: "var(--gold)", color: "var(--obsidian)" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold-light)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
            >
              Apply for This Space
            </button>
          </motion.div>
        </div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
