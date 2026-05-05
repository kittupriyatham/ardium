# Ardium — Dubai Mall Interactive Sales Platform

> A cinematic, browser-based sales tool for Dubai Mall — the world's most visited destination.  
> Built as a screening assignment for liat.ai.

**Live URL:** https://ardium-ten.vercel.app  
**Stack:** Next.js 16 · Framer Motion · Tailwind CSS v4 · TypeScript

---

## Scoring Context

| Criteria | Weight | Approach |
|---|---|---|
| Visual & UX Design | 30% | Obsidian + gold luxury editorial aesthetic; Cormorant Garamond; cinematic transitions |
| Technical Execution | 25% | Next.js App Router, Framer Motion parallax, animated counters, TypeScript |
| AI Integration | 15% | ChatGPT (architecture), Gemini (brief analysis), Claude (full rebuild + write-up) |
| Storytelling & Strategy | 15% | Non-linear, every section sells a specific business outcome |
| Expandability | 10% | Phase 2 modules (Sponsorship, Leasing) built and functional |
| Attention to Detail | 5% | Gold scrollbar, scroll progress bar, grain overlay, section fades |

---

## Setup

```bash
npm install
npm run dev
# → http://localhost:3000
```

**Deploy:**
```bash
npx vercel
```

---

## Architecture

```
app/
├── layout.tsx          # Metadata, global wrapper
├── page.tsx            # Section composition (13 components)
└── globals.css         # Design system: CSS vars, fonts, utilities

components/
├── Navbar.tsx          # Scroll-aware nav · all sections linked · mobile overlay menu
├── ScrollProgress.tsx  # 1px gold progress bar (fixed, top)
├── Hero.tsx            # Full-screen video hero · parallax · dual CTA
├── Why.tsx             # Animated counters · demographics grid · the "case" for Dubai Mall
├── Retail.tsx          # Asymmetric image mosaic · brand list · 4 leasing format cards
├── Luxury.tsx          # Parallax image · prestige house list · gold stat overlay card
├── Dining.tsx          # Parallax hero image · concept grid · dwell-time stat bar
├── Entertainment.tsx   # Hover-reveal attraction cards · Burj Khalifa call-out
├── Events.tsx          # Venue grid · past events chips · inline booking modal
├── Sponsorship.tsx     # 3-tier partnership cards · metrics grid  [Phase 2]
├── Leasing.tsx         # Tabbed paths: luxury / retail / pop-up / F&B  [Phase 2]
└── CTA.tsx             # Quick-nav cards · full contact form · gold success state
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--obsidian` | `#080808` | Primary background |
| `--charcoal` | `#111111` | Alternate dark sections |
| `--mist` | `#F5F3EF` | Light sections (Retail, Events) |
| `--gold` | `#C9A84C` | All accents, CTAs, lines |
| `--gold-light` | `#E8D5A3` | Hover states |
| Display font | Cormorant Garamond | All headings |
| Body font | Outfit 300 | All body copy |

---

## AI Tools Used

| Tool | Role |
|---|---|
| **ChatGPT (GPT-4o)** | Architecture planning, tech stack, component scaffolding, transition strategy |
| **Google Gemini** | Assignment brief deconstruction, scoring rubric mapping |
| **Claude (claude-sonnet-4-6)** | Full design system rebuild, all 13 components, TypeScript fixes, README, write-up, dining image generation |

See [`WRITEUP.md`](./WRITEUP.md) for full AI integration detail and design rationale.

---

## Conversion Architecture

Every section drives a specific business action — no dead ends:

| Section | Business Objective | CTA Action |
|---|---|---|
| Hero | Orientation | Scroll to Why / scroll to CTA |
| Why | Build conviction | (leads into Retail) |
| Retail | Leasing interest | Scroll to Leasing or CTA |
| Luxury | Prestige leasing | "Inquire About Luxury Leasing" → CTA |
| Dining | F&B leasing | "Open a Concept Here" → CTA |
| Entertainment | Partnership | "Partner Here" → CTA |
| Events | Event bookings | Inline modal form |
| Sponsorship | Brand partnerships | Tier CTAs → CTA |
| Leasing | Leasing clarity | "Apply for This Space" → CTA |
| CTA | Convert | Full contact form |

---

## Performance Notes

- All images use `loading="lazy"`
- Video: `autoPlay muted loop playsInline` — no layout shift
- Scroll animations: `viewport: { once: true }` — fire once only
- Fonts: Google Fonts with `display=swap`
- Build: static export (`○`) — zero server-side overhead

---

## File Reference

| File | Purpose |
|---|---|
| `README.md` | This file — setup, architecture, design decisions |
| `WRITEUP.md` | Full project rationale, AI integration detail, reflections |
| `public/videos/dubai.mp4` | Hero background video |
| `public/images/` | All section images (retail, luxury, dining, entertainment, events, cta) |
