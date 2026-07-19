# Altura ONE

A consolidation prototype for Airtel iCreate: one household plan replacing five separate providers for mobile, broadband, OTT, AI tools, IoT, and payments.

**Live site:** https://airtel-i-create-prototype.vercel.app/

## The problem

The average Indian household pays five separate bills to five separate companies for services that could come from one provider: mobile, broadband, OTT, payments, and even the WiFi a smart camera runs on. Built from primary research (281 survey respondents across Tier 1, 2, and 3 cities, plus 5 in-depth interviews), this site walks through the strategy and the product built to answer it.

## Pages

| Page | Path | Content |
|---|---|---|
| Home | `/index.html` | Hero, proof stats, lever preview |
| The Problem | `/html/problem.html` | The fragmentation, itemized, before/after |
| Product Tour | `/html/tour.html` | 8-tab interactive walkthrough of the product journey |
| Levers | `/html/levers.html` | The three strategic levers and how they reinforce each other |
| Numbers | `/html/numbers.html` | Revenue projections, ARPU, churn, secondary research |
| Voices | `/html/voices.html` | Quotes from the 5 in-depth interviews |

## Tech stack

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no dependencies.

```
index.html
css/
  styles.css        design tokens, layout, components, animations
js/
  script.js         nav, product tour tabs, scroll reveals, count-up stats, chart
html/
  problem.html
  tour.html
  levers.html
  numbers.html
  voices.html
vercel.json          caching headers for deployment
Airtel_iCreate_prototype.md   original Figma prototype spec / case notes
```

## Design system

- **Type:** Bricolage Grotesque (display), Hanken Grotesk (body), IBM Plex Mono (labels/data), loaded via Google Fonts
- **Palette:** near-black navy canvas (`#090D14`) with a single red accent (`#E40000`), a deliberate single-theme commitment rather than light/dark toggling
- **Motion:** staggered hero text reveal, scroll-triggered fades, animated count-up stats, an animated revenue chart, all wrapped in `prefers-reduced-motion` guards

## Running locally

No build step required. From the project root:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deployment

Connected to Vercel via GitHub. Every push to `main` triggers an automatic production deploy, no manual steps. `vercel.json` sets long-lived immutable caching for `css/` and `js/`, and `must-revalidate` for HTML so page edits show up immediately.

## Responsive behavior

Breakpoints at 640px, 820px, 900px, and 920px cover grid stacking, the product tour layout, and a hamburger menu that replaces the top nav below 920px.
