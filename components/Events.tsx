"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const venues = [
  { name: "Grand Atrium", capacity: "10,000+", type: "Concerts & Performances" },
  { name: "Fashion Catwalk", capacity: "2,000", type: "Brand Launches & Shows" },
  { name: "Expo Centre", capacity: "5,000", type: "Conventions & Summits" },
  { name: "Dubai Ice Rink", capacity: "3,000", type: "Gala Events & Activations" },
  { name: "Outdoor Fountain", capacity: "Unlimited", type: "Public Spectacles" },
  { name: "Private Suites", capacity: "20–200", type: "Executive Briefings" },
];

const pastEvents = [
  "World Art Dubai", "Dubai Shopping Festival", "Celebrity Brand Launches",
  "Tech Summit Keynotes", "Fashion Week Activations", "Global Sports Events"
];

export default function Events() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setFormOpen(false); setSubmitted(false); }, 3000);
  };

  return (
    <section id="events" className="relative py-32 overflow-hidden" style={{ background: "var(--mist)", color: "var(--ink)" }}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "var(--gold)" }}>Events & Platform</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-[#111]">
              A Global Stage<br /><em>For Your Moment</em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="md:pt-16"
          >
            <p className="text-[#111]/50 leading-relaxed text-sm md:text-base">
              Dubai Mall's event infrastructure puts your brand in front of millions. From product launches to global conferences, every event here transcends the ordinary — it becomes a global moment.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {pastEvents.map((ev, i) => (
                <span key={i} className="text-xs px-3 py-1.5 tracking-wide font-light border border-[#111]/10 text-[#111]/40">
                  {ev}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Event image + venue grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-3"
          >
            <img src="/images/event.jpg" alt="Event space" className="w-full h-[420px] object-cover" loading="lazy" />
          </motion.div>
          <div className="md:col-span-2 grid grid-cols-1 gap-3 content-start">
            {venues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between p-4 border border-[#111]/8 hover:border-[#C9A84C]/40 transition-colors duration-300"
                style={{ background: "white" }}
              >
                <div>
                  <div className="text-sm font-medium text-[#111]">{v.name}</div>
                  <div className="text-xs text-[#111]/40 mt-0.5">{v.type}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-light" style={{ color: "var(--gold)" }}>{v.capacity}</div>
                  <div className="text-[10px] text-[#111]/30">cap.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-10 bg-[#111] text-white"
        >
          <div>
            <h3 className="font-display text-2xl font-light">Ready to bring your event here?</h3>
            <p className="text-white/40 text-sm mt-1">Our team responds within 24 hours.</p>
          </div>
          <button
            onClick={() => setFormOpen(true)}
            className="whitespace-nowrap px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
            style={{ background: "var(--gold)", color: "var(--obsidian)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold-light)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
          >
            Book an Event Space
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {formOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(8,8,8,0.92)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setFormOpen(false); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg p-10"
            style={{ background: "var(--mist)", color: "var(--ink)" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="font-display text-4xl font-light mb-4 text-[#111]">Thank you.</div>
                <p className="text-[#111]/50 text-sm">Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[1px] w-6" style={{ background: "var(--gold)" }} />
                  <span className="text-xs tracking-[0.25em] uppercase font-light" style={{ color: "var(--gold)" }}>Event Inquiry</span>
                </div>
                <h2 className="font-display text-3xl font-light text-[#111] mb-8">Book a Venue</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="border border-[#111]/15 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors" />
                  <input type="text" placeholder="Company / Brand" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                    className="border border-[#111]/15 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="border border-[#111]/15 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors" />
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
                    className="border border-[#111]/15 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors text-[#111]/60">
                    <option value="">Event Type</option>
                    <option>Product Launch</option>
                    <option>Brand Activation</option>
                    <option>Concert / Performance</option>
                    <option>Corporate Conference</option>
                    <option>Fashion Show</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Tell us about your event..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="border border-[#111]/15 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors resize-none" />
                  <button type="submit" className="py-3.5 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300" style={{ background: "var(--gold)", color: "var(--obsidian)" }}>
                    Submit Inquiry
                  </button>
                </form>
                <button onClick={() => setFormOpen(false)} className="mt-4 text-xs text-[#111]/30 hover:text-[#111]/60 transition-colors">Close</button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
