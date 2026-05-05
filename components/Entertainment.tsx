"use client";
import { motion } from "framer-motion";

const attractions = [
  {
    title: "Dubai Aquarium & Underwater Zoo",
    tag: "World Record",
    desc: "The world's largest suspended aquarium — 10 million litres of water, 33,000 aquatic animals. A draw that converts footfall into extended stays.",
    image: "/images/ent1.jpg",
  },
  {
    title: "Olympic-Scale Ice Rink",
    tag: "Year-Round",
    desc: "An Olympic-size rink open 365 days, delivering a continuous programming engine for events, activations, and elite competitions.",
    image: "/images/ent2.jpg",
  },
  {
    title: "VR Park & Motion Rides",
    tag: "Tech-Forward",
    desc: "A next-generation entertainment zone that attracts youth audiences and tech-savvy visitors who spend more and return more often.",
    image: "/images/ent3.jpg",
  },
];

export default function Entertainment() {
  return (
    <section id="entertainment" className="relative py-32 overflow-hidden" style={{ background: "var(--obsidian)" }}>
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
            <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: "var(--gold)" }}>Attractions & Entertainment</span>
            <div className="h-[1px] w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            A Destination<br /><em>Beyond Shopping</em>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Dubai Mall's entertainment anchors don't just attract visitors — they extend visits by hours and create repeat footfall that no marketing campaign could sustain alone.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display text-xl text-white font-light mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                  {item.desc}
                </p>
                <motion.button
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-3 text-xs tracking-[0.2em] uppercase font-light flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--gold)" }}
                >
                  Partner Here →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Burj Khalifa call-out */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 py-12 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
        >
          <div>
            <div className="text-xs tracking-[0.25em] uppercase mb-3 font-light" style={{ color: "var(--gold)" }}>Adjacent Landmark</div>
            <h3 className="font-display text-3xl text-white font-light">Burj Khalifa Fountain Show</h3>
            <p className="text-white/40 text-sm mt-2">Nightly fountain shows visible from the mall — a captive audience of millions annually, pre-qualified by the world's most iconic backdrop.</p>
          </div>
          <button
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
            className="whitespace-nowrap px-8 py-3 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; (e.target as HTMLElement).style.color = "#080808"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "var(--gold)"; }}
          >
            Explore Event Tie-Ins →
          </button>
        </motion.div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
