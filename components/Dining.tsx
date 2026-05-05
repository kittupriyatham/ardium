"use client";
import { motion } from "framer-motion";

const concepts = [
  { name: "Fine Dining", desc: "Michelin-starred chefs and curated tasting menus for the world's most discerning palates.", count: "40+ Restaurants" },
  { name: "Casual Lifestyle", desc: "From artisan coffee to global street food — a lifestyle ecosystem, not just a food court.", count: "120+ Outlets" },
  { name: "Celebrity Chef Outposts", desc: "Gordon Ramsay, Nobu, Zuma — names that draw reservations before guests even arrive.", count: "15+ Celebrity Chefs" },
  { name: "Rooftop & Terrace", desc: "Dining with views of the Burj Khalifa fountain show — an experience money cannot replicate.", count: "8 Venues" },
];

export default function Dining() {
  return (
    <section id="dining" className="relative py-32 overflow-hidden" style={{ background: "var(--charcoal)" }}>
      <div className="section-fade-top" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "var(--gold)" }}>Dining & Lifestyle</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Food as a<br /><em>Destination Itself</em>
          </h2>
          <p className="mt-6 text-white/40 text-sm leading-relaxed">
            Dubai Mall's dining ecosystem drives 4+ hour dwell times. Your F&B concept doesn't just serve meals — it captures an audience that spends, returns, and recommends.
          </p>
        </motion.div>

        {/* Concept grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {concepts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group p-8 border transition-all duration-500 cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-white font-light">{c.name}</h3>
                <span className="text-xs tracking-widest font-light" style={{ color: "var(--gold)" }}>{c.count}</span>
              </div>
              <div className="h-[1px] mb-4" style={{ background: "rgba(201,168,76,0.15)" }} />
              <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
              <div className="mt-6">
                <button
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-xs tracking-[0.2em] uppercase font-light flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--gold)" }}
                >
                  Explore Space →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-12 rounded"
          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div className="font-display text-5xl md:text-7xl font-light text-white">4.2<span className="text-3xl ml-1">hrs</span></div>
          <div className="h-16 w-[1px] hidden md:block" style={{ background: "rgba(201,168,76,0.2)" }} />
          <div className="max-w-sm text-center md:text-left">
            <p className="text-white/50 text-sm leading-relaxed">Average dwell time per visit — the highest in the region. Every minute is commercial opportunity for your brand.</p>
          </div>
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="whitespace-nowrap px-7 py-3 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; (e.target as HTMLElement).style.color = "#080808"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "var(--gold)"; }}
          >
            Open a Concept Here
          </button>
        </motion.div>
      </div>

      <div className="section-fade-bottom" />
    </section>
  );
}
