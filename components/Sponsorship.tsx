"use client";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Signature Partner",
    reach: "150M+ impressions",
    features: ["Premium naming rights", "Exclusive activation zones", "Flagship digital displays", "Annual event package", "Dedicated account team"],
    cta: "Discuss Partnership",
    highlight: true,
  },
  {
    name: "Category Partner",
    reach: "50M+ impressions",
    features: ["Category exclusivity", "In-mall brand activations", "Digital & print media", "Quarterly event access"],
    cta: "Inquire Now",
    highlight: false,
  },
  {
    name: "Brand Activator",
    reach: "10M+ impressions",
    features: ["Pop-up activation spaces", "Seasonal campaigns", "Social content integration"],
    cta: "Get Started",
    highlight: false,
  },
];

const metrics = [
  { value: "150M", label: "Annual Reach" },
  { value: "4.2h", label: "Avg. Dwell Time" },
  { value: "68%", label: "International Visitors" },
  { value: "#1", label: "Mall in MENA" },
];

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="relative py-32 overflow-hidden" style={{ background: "var(--obsidian)" }}>
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-10" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: "var(--gold)" }}>Brand Partnerships</span>
            <div className="h-[1px] w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Your Brand,<br /><em>Amplified by Millions</em>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Partner with Dubai Mall and access a captive audience of 150 million annual visitors across the world's most coveted commercial real estate.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20" style={{ background: "rgba(201,168,76,0.1)" }}>
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-10"
              style={{ background: "var(--obsidian)" }}
            >
              <div className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--gold)" }}>{m.value}</div>
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mt-2 font-light">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partnership tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className={`p-8 flex flex-col ${tier.highlight ? "ring-1" : "border"}`}
              style={tier.highlight
                ? { background: "var(--gold)", color: "var(--obsidian)" }
                : { background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "white" }
              }
            >
              <div className={`text-xs tracking-[0.25em] uppercase font-light mb-1 ${tier.highlight ? "opacity-60" : ""}`} style={{ color: tier.highlight ? "var(--obsidian)" : "var(--gold)" }}>
                {tier.reach}
              </div>
              <h3 className={`font-display text-2xl font-light mb-6 ${tier.highlight ? "text-[#111]" : "text-white"}`}>{tier.name}</h3>
              <div className={`h-[1px] mb-6 ${tier.highlight ? "bg-[#111]/20" : ""}`} style={!tier.highlight ? { background: "rgba(255,255,255,0.08)" } : {}} />
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className={`text-sm flex items-start gap-2 ${tier.highlight ? "text-[#111]/70" : "text-white/40"}`}>
                    <span style={{ color: tier.highlight ? "var(--obsidian)" : "var(--gold)" }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className={`py-3 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 ${tier.highlight ? "bg-[#111] text-white hover:bg-[#222]" : "border hover:bg-white/5"}`}
                style={!tier.highlight ? { borderColor: "rgba(201,168,76,0.4)", color: "var(--gold)" } : {}}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
