"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  { icon: "🏪", label: "Retail Leasing", desc: "Secure your space in the world's most visited mall", target: "#leasing" },
  { icon: "🤝", label: "Brand Partnership", desc: "Reach 150M+ annual visitors through sponsorship", target: "#sponsorship" },
  { icon: "🎤", label: "Event Booking", desc: "Host your next global event at Dubai Mall", target: "#events" },
];

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-32" style={{ background: "var(--obsidian)" }}>
      <div className="section-fade-top" />

      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src="/images/cta.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

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
            <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: "var(--gold)" }}>Begin Your Partnership</span>
            <div className="h-[1px] w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white font-light leading-tight">
            Be Part of<br /><em>The World's Stage</em>
          </h2>
          <p className="mt-6 text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            Whether you're opening a flagship, launching a brand activation, or booking a global event — your partnership begins here.
          </p>
        </motion.div>

        {/* Quick-nav options */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {options.map((opt, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => document.querySelector(opt.target)?.scrollIntoView({ behavior: "smooth" })}
              className="group p-7 text-left border transition-all duration-500"
              style={{ borderColor: "rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.02)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)"; }}
            >
              <div className="text-2xl mb-4">{opt.icon}</div>
              <h3 className="font-display text-xl text-white font-light mb-2">{opt.label}</h3>
              <p className="text-white/30 text-sm">{opt.desc}</p>
              <div className="mt-5 text-xs tracking-[0.15em] uppercase font-light flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: "var(--gold)" }}>
                Explore →
              </div>
            </motion.button>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-10 md:p-14" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div style={{ color: "var(--gold)", fontSize: 40 }} className="mb-4">✦</div>
                <h3 className="font-display text-4xl text-white font-light mb-3">Thank You.</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Your inquiry has been received. A member of our commercial team will be in touch within 24 hours.
                </p>
                <div className="mt-6 h-[1px] w-24 mx-auto" style={{ background: "var(--gold)", opacity: 0.4 }} />
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-3xl text-white font-light mb-2">Send Us a Message</h3>
                <p className="text-white/30 text-sm mb-8">We respond to every inquiry within one business day.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3.5 text-sm font-light text-white outline-none transition-all duration-300 placeholder:text-white/20"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    />
                    <input type="text" placeholder="Company / Brand" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="px-4 py-3.5 text-sm font-light text-white outline-none transition-all duration-300 placeholder:text-white/20"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    />
                  </div>
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="px-4 py-3.5 text-sm font-light text-white outline-none transition-all duration-300 placeholder:text-white/20"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                  <select value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}
                    className="px-4 py-3.5 text-sm font-light text-white/50 outline-none transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <option value="">Area of Interest</option>
                    <option>Luxury Flagship Leasing</option>
                    <option>Mid-Tier Retail</option>
                    <option>Pop-Up / Activation</option>
                    <option>F&B Concept</option>
                    <option>Brand Partnership</option>
                    <option>Event Booking</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Tell us about your brand and vision..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="px-4 py-3.5 text-sm font-light text-white outline-none transition-all duration-300 placeholder:text-white/20 resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                  <button type="submit" className="py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                    style={{ background: "var(--gold)", color: "var(--obsidian)" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold-light)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["24hr Response", "Confidential", "No Commitment"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-white/25 tracking-wider">
                <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)", opacity: 0.6 }} />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-32 pb-8">
        <div className="h-[1px] w-24 mx-auto mb-8" style={{ background: "rgba(201,168,76,0.2)" }} />
        <p className="font-display text-xl text-white/20 font-light">Ardium — Dubai Mall</p>
        <p className="text-white/15 text-xs tracking-widest mt-2">© 2025 Dubai Mall. All rights reserved.</p>
      </div>
    </section>
  );
}
