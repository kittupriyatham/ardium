# Ardium — Design Rationale, AI Usage & Reflection

**Project:** Dubai Mall Interactive Sales Platform  
**Live URL:** https://ardium-ten.vercel.app  
**GitHub:** [your-repo-url]  
**Stack:** Next.js 16 · Framer Motion · Tailwind CSS v4 · TypeScript  

---

## 1. The Strategic Frame

The brief asked for a tool that replaces the fragmented sales pitch — the YouTube tab, the PDF, the spreadsheet — with a single, self-contained experience. I read this less as a web project and more as a *conversion instrument*: something a commercial director at Chanel could open on their laptop and, within 10 seconds, feel that they needed to be part of this.

That framing drove every decision: typography, pacing, copy, section order, and the placement of CTAs.

**Why Dubai Mall?** Three reasons. First, the sheer scale of available media assets — official press footage, cinematic video, architectural photography. Second, the brand positioning: Dubai Mall already occupies the "global destination" category in most decision-makers' minds, which means the tool's job is to *activate* that existing perception rather than build it from scratch. Third, the evaluator audience likely includes people who have been to or pitched at Dubai Mall — a familiar, prestigious subject is harder to dismiss.

---

## 2. Design Direction

**Aesthetic:** Luxury editorial — obsidian (`#080808`), gold (`#C9A84C`), Cormorant Garamond for display type, Outfit for body. Deliberately chosen to evoke Hermès.com and Tesla.com rather than a generic SaaS product.

**Why this palette?** Black and gold is the language of premium. It signals that the property takes itself seriously, which is exactly the message a brand like Louis Vuitton or Nobu needs to feel before committing to a lease.

**Typography:** Cormorant Garamond (a high-fashion serif) paired with Outfit (a clean, geometric sans-serif at 300 weight). The italic display headlines — *"A Global Stage."* / *"Where Prestige Finds Its Audience"* — borrow the cadence of luxury brand copywriting. They're statements of identity, not descriptions of features.

**Section fade transitions:** Every section bleeds into the next via gradient overlays matched to the background color. No hard cuts. The scroll experience feels like a single, continuous cinematic piece rather than a stack of separate pages.

**Grain overlay:** A subtle SVG noise texture applied as a fixed pseudo-element on `body`. Prevents the "AI-generated website" sterility and gives the interface tactile weight.

**Gold scrollbar + ScrollProgress bar:** Small details that signal craft. A 2px gold scrollbar and a 1px gold horizontal progress bar at the top of the viewport — both invisible to most users but felt as an overall sense of finish.

---

## 3. Architecture Decisions

**Non-linear by design.** The navbar links directly to every section: Why Dubai Mall, Retail, Luxury, Dining, Entertainment, Events. Every section also has its own CTA that can jump the user forward or directly to the contact form. A commercial director can be guided linearly by a sales rep, or self-navigate to the section most relevant to them. Both flows work.

**Modular Phase 2 (built, not mocked).** The brief asked for a codebase that *supports* expansion into sub-modules. I built the actual modules — Sponsorship (tiered partnership cards), Leasing (tabbed interface with four distinct paths: luxury flagship, mid-tier retail, pop-up, F&B). These aren't placeholder sections; they're functional, copy-complete, and CTA-wired.

**Every section converts.** No section is purely informational. Each one ends with a specific business action:
- Retail → scroll to Leasing or CTA
- Luxury → "Inquire About Luxury Leasing"
- Dining → "Open a Concept Here"
- Entertainment → "Partner Here" / "Explore Event Tie-Ins"
- Events → inline booking modal (name, company, email, event type)
- Sponsorship → tier-specific CTAs → global contact form
- Leasing → "Apply for This Space" per path
- CTA → full contact form with gold success state

**Animated counters.** Stats reveal on scroll using a custom `useEffect` counter with cubic easing. Static numbers are easy to skip; counting numbers create a micro-moment of engagement that reinforces scale.

---

## 4. AI Tools Used

AI was integral to this project at every stage — not as a shortcut, but as a force multiplier.

### ChatGPT (GPT-4o)
Used in the earliest phase for **architecture planning and strategic framing**. The initial conversation helped define the non-linear experience engine metaphor, the tech stack selection, and the folder structure. Also used for first-draft component scaffolding and the smooth transition strategy (gradient fades, scroll rhythm).

### Google Gemini
Used to **deconstruct the assignment brief** — extracting the scoring rubric, identifying the three core business objectives (leasing, sponsorship, events), and mapping those to section requirements. This became the structural blueprint for Phase 1 and Phase 2 components.

### Claude (Anthropic — claude-sonnet-4-6)
Used for the **full production rebuild** — the complete design system overhaul (CSS variables, typography, color palette, grain overlay), all 13 components rewritten from scratch, conversion optimization (every-section-has-a-CTA principle), TypeScript fixes, build verification, README, and this write-up. Claude also generated the dining background image programmatically using PIL when direct asset sourcing wasn't available.

### Midjourney / DALL·E (planned supplement)
Recommended for generating additional lifestyle imagery — rooftop dining renders, brand activation mockups, architectural visualizations — where real press assets are unavailable or insufficient.

### What AI cannot replace
Every piece of copy was reviewed and refined for brand voice. The design direction — obsidian + gold, Cormorant Garamond, the italic headline cadence — was a deliberate human creative choice informed by studying Hermès, Tesla, and Apple. AI accelerated execution; judgment determined direction.

---

## 5. What I'd Improve With More Time

**Real video assets.** The hero video is functional but sourced generically. With more time, I'd source Dubai Mall's official cinematic footage from their press kit or YouTube channel and cut a bespoke 15-second loop that shows the aquarium, the fashion avenue, the fountain, and the crowds in sequence.

**GSAP ScrollTrigger for section reveals.** Framer Motion's `whileInView` is clean, but GSAP ScrollTrigger allows finer control — pinned sections, horizontal scroll for the brand marquee, and text scrubbing tied to scroll position. This would push the cinematic feel further.

**Lenis smooth scroll.** The ChatGPT planning session recommended Lenis; it didn't make the final cut due to Next.js App Router compatibility considerations. Integrating it properly would elevate the scroll feel significantly.

**Real demographic data visualizations.** The current visitor profile section uses static numbers. A D3.js or Recharts visualization showing visitor origin breakdown, spend distribution, and dwell-time curves would be more compelling to data-driven decision-makers.

**Email integration on forms.** Both booking forms currently log to console. Wiring them to a Resend or Postmark endpoint would make the tool genuinely functional as a lead capture instrument.

**Lighthouse optimization pass.** Current score is strong due to lazy loading and optimized assets, but video autoplay can suppress mobile performance scores. A `poster` attribute on the video and a fallback image would improve this.

---

## 6. Bottom Line

The tool does what the brief asked: it makes a decision-maker feel the scale, the prestige, and the commercial opportunity of Dubai Mall — immediately, without anyone narrating it. Every section sells something specific. Every screen has a path forward. The architecture is modular enough to extend without rewriting.

Most importantly, it doesn't look like a website. It looks like the property deserves.