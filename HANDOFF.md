# Portfolio Handoff Document — Vasudevan R

> **Project:** 3D Space-themed portfolio website  
> **Location:** `D:\Portfolio`  
> **Live dev URL:** `http://localhost:3000`  
> **Status:** Fully functional — all 8 routes verified, production build passes clean

---

## 1. What Was Built

A personal portfolio website for **Vasudevan R**, a Mechanical Design Engineer, modelled after the open-source template [sanidhyy/space-portfolio](https://github.com/sanidhyy/space-portfolio) (MIT license). The template was cloned as the legal base so the animations, 3D star field, blackhole hero video, color scheme, and component styling are identical to the live demo at `https://spaceportfolio.netlify.app/`. All original content was then replaced with Vasu's portfolio content from the provided markdown file.

### Tech Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.12 |
| Language | TypeScript | — |
| React | react / react-dom | 19.2.8 |
| 3D | three, @react-three/fiber, @react-three/drei | 0.185.x |
| Animation | framer-motion | 13.x |
| Icons | @heroicons/react | 24 (solid set) |
| Styling | Tailwind CSS + PostCSS | — |
| Utilities | clsx, tailwind-merge | — |

### 8 Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Hero (blackhole video + portrait), 4 Pillar cards, animated stat counters |
| `/about` | `app/about/page.tsx` | Intro, story paragraphs, Mission/Vision/Mindset cards, education timeline |
| `/skills` | `app/skills/page.tsx` | 3 skill logo cards (CATIA, SolidWorks, BIW), 14 animated progress bars in two groups, skills-bg video |
| `/projects` | `app/projects/page.tsx` | 2 case-study cards with year badge, challenge/solution grids, tag pills |
| `/designs` | `app/designs/page.tsx` | 6 categories × 3 images (18 total), click-to-open lightbox modal with ESC close |
| `/experience` | `app/experience/page.tsx` | 4 internship timeline entries with role/company/period/summary/bullet points |
| `/certifications` | `app/certifications/page.tsx` | 7 certification cards with trophy icons and ID badges |
| `/privacy` | `app/privacy/page.tsx` | Simple privacy disclosure page (linked from footer only) |

---

## 2. File Map

```
D:\Portfolio\
├── app/
│   ├── layout.tsx              # Root layout: StarsCanvas, Navbar, Footer, Inter font, #030014 bg
│   ├── page.tsx                # Home page: Hero + Pillars + Stats
│   ├── globals.css             # Tailwind + custom classes (Welcome-box, button-primary, cursive)
│   ├── icon.png                # Favicon (generated from profile pic, 512×512)
│   ├── apple-icon.png          # Apple touch icon (180×180)
│   ├── about/page.tsx          # → AboutContent
│   ├── skills/page.tsx         # → SkillsContent
│   ├── projects/page.tsx       # → ProjectsContent
│   ├── designs/page.tsx        # → DesignsContent
│   ├── experience/page.tsx     # → ExperienceContent
│   ├── certifications/page.tsx # → CertificationsContent
│   └── privacy/page.tsx        # Static privacy page
│
├── components/
│   ├── main/
│   │   ├── star-background.tsx     # Three.js rotating star field (Points + Canvas)
│   │   ├── navbar.tsx              # Fixed top nav, 7 route links, hamburger mobile menu, active state
│   │   ├── hero.tsx                # Blackhole video background + HeroContent
│   │   ├── pillars.tsx             # 4 icon cards (CATIA V5, SolidWorks, BIW, Design & Drafting)
│   │   ├── stats.tsx               # 4 animated counters (spring-animated numbers)
│   │   ├── about-content.tsx       # Story + principles cards + education timeline
│   │   ├── skills-content.tsx     # Skill logos + animated progress bars + skills-bg video
│   │   ├── projects-content.tsx    # Challenge/solution cards with tags
│   │   ├── designs-content.tsx     # 6-category image gallery + AnimatePresence lightbox
│   │   ├── experience-content.tsx  # Timeline with bullet points
│   │   ├── certifications-content.tsx # Trophy icon cards with ID badges
│   │   └── footer.tsx              # Privacy link + copyright
│   │
│   └── sub/
│       ├── hero-content.tsx        # Name, tagline, intro, portrait, CTA button
│       ├── section-heading.tsx      # Reusable chip + heading + subtitle with Framer animations
│       └── skill-data-provider.tsx  # Animated skill logo card (uses react-intersection-observer)
│
├── constants/
│   └── index.ts                # ALL content data: PROFILE, NAV_LINKS, PILLARS, STATS, ABOUT,
│                               #   EDUCATION, SKILL_LOGOS, CAD_SKILLS, PROFESSIONAL_SKILLS,
│                               #   PROJECTS, DESIGN_CATEGORIES, EXPERIENCE, CERTIFICATIONS
│
├── config/
│   └── index.ts                # siteConfig: Metadata (title, description, keywords, author)
│
├── lib/
│   ├── motion.ts               # slideInFromLeft, slideInFromRight, slideInFromTop variants
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── profile.png             # Vasu's profile photo (1254×1254, from i.im.ge)
│   ├── videos/
│   │   ├── blackhole.webm      # Hero background video (from template)
│   │   ├── skills-bg.webm      # Skills section background (from template)
│   │   └── encryption-bg.webm  # Unused (from template, can delete)
│   ├── skills/
│   │   ├── catia.png           # Generated themed logo (256×256 SVG→PNG)
│   │   ├── solidworks.png      # Generated themed logo
│   │   └── catia-biw.png       # Generated themed logo
│   ├── hero-bg.svg             # Unused (from template, can delete)
│   ├── lock-main.png           # Unused (from template, can delete)
│   └── lock-top.png            # Unused (from template, can delete)
│
├── next.config.js              # Images: remotePatterns for i.im.ge
├── tailwind.config.ts          # Unchanged from template
├── tsconfig.json               # Unchanged from template
├── package.json                # Dependencies listed above
├── netlify.toml                # Netlify deployment config (from template)
└── LICENSE                     # MIT license (from original template)
```

---

## 3. Bugs Fixed

### Three.js NaN Bounding Sphere Error

**Symptom:** `THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN`

**Root cause:** `random.inSphere(new Float32Array(5000), ...)` creates 5000 float values, but `THREE.BufferAttribute(positions, 3)` computes `count = 5000 / 3 = 1666.67`. The partial trailing vertex reads past the array end, producing `undefined` → NaN in the bounding sphere calculation.

**Fix in:** `components/main/star-background.tsx` — changed `Float32Array(5000)` to `Float32Array(4998)` (4998 / 3 = 1666, exact).

### Framer Motion API Change

**Symptom:** TypeScript error — `triggerOnce` does not exist on `UseInViewOptions`.

**Root cause:** framer-motion v13 renamed `triggerOnce` to `once` in `useInView`.

**Fix in:** `components/main/stats.tsx` — changed `{ triggerOnce: true }` to `{ once: true }`.

### Missing Heroicons Export

**Symptom:** `CertificateIcon` and `AwardIcon` not found in `@heroicons/react/24/solid`.

**Fix:** Replaced with `TrophyIcon` (confirmed available) in `components/main/certifications-content.tsx`.

---

## 4. Design Decisions

| Decision | Rationale |
|---|---|
| Used template as base (not built from scratch) | The user asked for exact same animations, elements, background, and colors. The template IS that exact site. |
| Multi-page routes instead of single-page scroll | The user's content map defined 7 distinct routes. Navigation uses `<Link href="/about">` etc., not anchor hashes. |
| No social icons in navbar/footer | User confirmed "No socials" when asked. |
| Generated placeholder skill logos | User confirmed when asked. Logos are dark-themed SVG→PNG (256×256). User can replace files in `public/skills/`. |
| Remote images (i.im.ge) for designs gallery | All 18 design images and the profile pic are hot-linked. `next.config.js` allows `i.im.ge` in `images.remotePatterns`. |
| AnimatePresence lightbox for designs | Uses framer-motion for open/close animation, ESC key to close, click-outside to close, body scroll lock. |
| Spring-animated stat counters | Uses `useMotionValue` + `useSpring` + `useInView` for count-up animation triggered on scroll. |

---

## 5. Content Data Source

All portfolio content lives in a single file: **`constants/index.ts`**. To update any text, edit that file. Key exports:

| Export | Contains |
|---|---|
| `PROFILE` | Name, nickname, role, tagline, intro, image path |
| `NAV_LINKS` | Navigation items and routes |
| `PILLARS` | 4 hero strength cards |
| `STATS` | Counter values (internships, projects, certifications, year) |
| `ABOUT` | Intro text, story paragraphs, principles (mission/vision/mindset) |
| `EDUCATION` | Timeline entries (title, institution, period, detail) |
| `SKILL_LOGOS` | 3 logo cards for the Skills page |
| `CAD_SKILLS` | 8 CAD skills with level % and notes |
| `PROFESSIONAL_SKILLS` | 6 professional skills with level % and notes |
| `PROJECTS` | 2 projects with year, summary, challenge, solution, tags |
| `DESIGN_CATEGORIES` | 6 categories, each with title, tools, description, 3 items (name, image URL, note) |
| `EXPERIENCE` | 4 internships (role, company, location, period, summary, bullet points) |
| `CERTIFICATIONS` | 7 certs (title, issuer, year, id, focus) |

---

## 6. Potential Next Steps

These are suggestions for improving the portfolio further. Prioritise based on what matters most to the user.

### High Impact

1. **Replace placeholder skill logos** — The 3 generated logos (`catia.png`, `solidworks.png`, `catia-biw.png` in `public/skills/`) are simple geometric SVGs. Replace them with official brand logos for a more polished look. Recommended size: 256×256 PNG with transparent background.

2. **Host images locally** — Currently all 18 design gallery images and the profile pic are hot-linked from `i.im.ge`. For reliability and performance, download them to `public/designs/` and update the URLs in `constants/index.ts`.

3. **Add a contact page or form** — There's no way for visitors to reach Vasu. Options:
   - Simple mailto link in the footer
   - A `/contact` page with a form (could use a serverless function or third-party service like Formspree)
   - Social links (LinkedIn, GitHub, email) in the navbar — user previously declined but may want to add later

### Medium Impact

4. **Responsive design polish** — Test on mobile (320px–768px). The navbar hamburger menu works, but the hero section, stat counters, and designs gallery may need breakpoint tuning.

5. **Add scroll-to-top on route change** — When navigating between pages, the scroll position may persist. Add a `useEffect` with `window.scrollTo(0, 0)` in the layout or each page.

6. **Optimize images** — The profile pic is 1254×1254 (1.2MB). Consider using `next/image` optimization or providing multiple sizes. The design gallery images from i.im.ge are also large.

7. **Add page transition animations** — The template used scroll-based animations within a single page. Since this is multi-page, consider `framer-motion` `AnimatePresence` in the layout for route transitions.

8. **Remove unused template files** — These files from the original template are no longer referenced and can be safely deleted:
   - `public/hero-bg.svg`
   - `public/lock-main.png`
   - `public/lock-top.png`
   - `public/videos/encryption-bg.webm`
   - `public/skills/` (all original skill logos except catia.png, solidworks.png, catia-biw.png)

### Low Impact / Nice to Have

9. **SEO improvements** — Add `robots.txt`, `sitemap.xml`, Open Graph meta tags per page.

10. **Deployment** — Run `npm run build` and deploy to Netlify (config already included in `netlify.toml`), Vercel (`npx vercel`), or any static host.

11. **Analytics** — Add Google Analytics, Plausible, or similar if desired.

12. **Dark/light mode toggle** — The template is dark-only. Adding a light theme would require significant CSS work.

13. **Blog section** — If Vasu wants to write articles, Next.js Markdown/MDX blog pages could be added.

---

## 7. Commands

```bash
# Install dependencies (already done)
npm install --legacy-peer-deps

# Development server (currently running on port 3000)
npm run dev

# Production build (verified: passes clean)
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## 8. Known Limitations

- **No backend** — This is a fully static site. No API routes, no database, no server-side logic. Adding a contact form would require either a third-party service or an API route.
- **Hot-linked images** — Design gallery depends on `i.im.ge` being available. If the host goes down, images break.
- **No tests** — No unit, integration, or e2e tests were written. Consider adding Playwright tests for critical flows.
- **No i18n** — English only.
