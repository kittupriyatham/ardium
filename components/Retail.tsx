"use client";
import { motion } from "framer-motion";

const brands = ["Gucci","Louis Vuitton","Chanel","Dior","Hermès","Prada","Apple","Nike","Zara","H&M","Cartier","Rolex"];

const opportunities = [
  { title: "Luxury Flagship", size: "5,000–15,000 sqft", footfall: "Elite", cta: "Apply" },
  { title: "Mid-Tier Retail", size: "1,000–5,000 sqft", footfall: "High", cta: "Apply" },
  { title: "Pop-Up Activation", size: "200–800 sqft", footfall: "Targeted", cta: "Inquire" },
  { title: "F&B Concept", size: "800–3,000 sqft", footfall: "Lifestyle", cta: "Inquire" },
];

export default function Retail() {
  return (
    <section id="retail" className="relative py-32 overflow-hidden" style={{ background: "var(--mist)", color: "var(--ink)" }}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "var(--gold)" }}>Retail</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-[#111]">
              The World's Brands<br /><em>Choose This Address</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="text-[#111]/50 leading-relaxed md:text-lg"
          >
            From global luxury houses to mid-tier powerhouses, Dubai Mall's retail environment is unmatched in the region. Join 2,000+ brands already capturing the world's most coveted consumers.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-12 gap-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7"
          >
            <img src="/images/retail1.jpg" alt="Luxury corridor" className="w-full h-[420px] object-cover" loading="lazy" />
          </motion.div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <img src="/images/retail2.jpg" alt="Storefronts" className="w-full h-[200px] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src="/images/retail3.jpg" alt="Retail atmosphere" className="w-full h-[200px] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>

        {/* Brand marquee */}
        <div className="mb-20 overflow-hidden relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] w-6" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.25em] uppercase font-light text-[#111]/40">Present Tenants Include</span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-xl font-light text-[#111]/30 hover:text-[#111]/70 transition-colors cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Leasing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group p-7 border border-[#111]/10 hover:border-[#C9A84C]/50 transition-all duration-500"
              style={{ background: "white" }}
            >
              <div className="text-xs tracking-[0.2em] uppercase font-light text-[#111]/30 mb-4">Format</div>
              <h3 className="font-display text-xl font-light text-[#111] mb-2">{opp.title}</h3>
              <div className="text-sm text-[#111]/40 mb-1">{opp.size}</div>
              <div className="text-xs text-[#111]/30 mb-6">Footfall: {opp.footfall}</div>
              <button
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                style={{ color: "var(--gold)" }}
              >
                {opp.cta} <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
