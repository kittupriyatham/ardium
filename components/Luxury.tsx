"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const houses = [
  { name: "Hermès", since: "Est. 2008" },
  { name: "Chanel", since: "Est. 2010" },
  { name: "Louis Vuitton", since: "Est. 2009" },
  { name: "Dior", since: "Est. 2011" },
  { name: "Cartier", since: "Est. 2007" },
  { name: "Bulgari", since: "Est. 2010" },
];

export default function Luxury() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="luxury" ref={ref} className="relative py-40 overflow-hidden" style={{ background: "var(--obsidian)" }}>
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.img
                src="/images/luxury.jpg"
                alt="Luxury wing"
                style={{ y: imgY }}
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 p-6 w-52"
              style={{ background: "var(--gold)", color: "var(--obsidian)" }}
            >
              <div className="font-display text-4xl font-light">300+</div>
              <div className="text-xs tracking-widest uppercase mt-1 opacity-70">Luxury Brands</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: "var(--gold)" }}>Luxury Wing</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white font-light leading-tight">
              Where Prestige<br /><em>Finds Its Audience</em>
            </h2>

            <p className="mt-6 text-white/40 leading-relaxed text-sm">
              The Dubai Mall luxury wing is one of the most coveted retail addresses in the world — an environment curated to attract affluent clientele who expect nothing less than extraordinary. The architecture, the clientele, the experience: all conspire to elevate your brand.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {houses.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="py-4 px-5 flex justify-between items-center"
                  style={{ border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <span className="font-display text-white/80 font-light">{h.name}</span>
                  <span className="text-[10px] tracking-widest" style={{ color: "var(--gold)", opacity: 0.6 }}>{h.since}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
                style={{ background: "var(--gold)", color: "var(--obsidian)" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold-light)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
              >
                Inquire About Luxury Leasing
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
