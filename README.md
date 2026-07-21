# F-90 Motion — BMW M5 CS Inspired

An interactive web experience dedicated to the BMW M5 CS (F90) — an apex predator born from 40 years of BMW M legacy. This site combines high-end automotive storytelling with fluid, scroll-driven animations to bring the speed, agility, and engineering of the F-90 to life across all devices.

Built as a learning project to explore GSAP animations, CDN-based media pipelines, and modular React architecture.

---

## Live Demo

> 

---

## Features

- Full-screen background video served via jsDelivr CDN
- GSAP-powered page transitions using GPU-composited `scaleY` animations
- Scroll-linked animations and staggered grid expansions via ScrollTrigger
- Dynamic media pipelines — inline autoplaying video pills and scroll-mapped image arrays
- Full-screen navigation menu overlay with animated open/close
- Interactive Track Records page with M5 CS performance data
- Custom hand-crafted F-90 SVG logo with military stencil aesthetic
- Adaptive UI/UX — viewport units (`vw/vh`) for precision across 360px to 4K displays
- Mobile responsive across all pages

---

## Tech Stack

| Layer | Technology |
| Framework | React.js + Vite |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger |
| Routing | React Router DOM |
| Video CDN | jsDelivr (via `shubhamkx34/f90-assets` on GitHub) |

---

## How It Works

### Video Pipeline

1. BMW M5 CS footage downloaded via `yt-dlp`.
2. Compressed using HandBrake for web-optimised file size.
3. Pushed to `shubhamkx34/f90-assets` GitHub repo.
4. Served globally via jsDelivr CDN — no backend required.

### Page Transitions

1. User navigates between routes.
2. GSAP animates a full-screen overlay using `scaleY` (GPU-composited, no layout thrash).
3. New page content fades in after the transition completes.

### Scroll Animations

1. ScrollTrigger tracks the user's scroll position.
2. Elements — image grids, text blocks, video pills — animate in as they enter the viewport.
3. Frame-by-frame image sequence reveals are mapped directly to scroll velocity.

---

## Project Structure

```
src/          → React components and pages
public/       → Static assets
Fonts/        → Custom typography
temp/         → Layout experiments and component scratchpad
```


## Author

Shubham — [@shubhamkx34](https://github.com/shubhamkx34)
