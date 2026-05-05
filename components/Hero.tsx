"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);
  const textY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <motion.video
        autoPlay muted loop playsInline
        style={{ y, opacity }}
        className="absolute w-full h-full object-cover scale-110"
      >
        <source src="/videos/dubai.mp4" type="video/mp4" />
      </motion.video>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col justify-end pb-28 px-8 md:px-20 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-10" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: "var(--gold)" }}>
            Dubai, United Arab Emirates
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] font-light"
        >
          Not a Mall.
          <br />
          <em>A Global Stage.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 text-white/60 text-base md:text-lg max-w-xl font-light leading-relaxed"
        >
          150 million annual visitors. 2,000+ global brands. One address
          where the world's most ambitious businesses come to be seen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-light text-black transition-all duration-300"
            style={{ background: "var(--gold)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold-light)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
          >
            Explore the Property
          </button>
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-light text-white transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
          >
            Partner With Us
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
