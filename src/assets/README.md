# LSPP — Leapfrog Student Partnership Program (Recreation)

A redesigned, feature-enhanced version of the Leapfrog Student Partnership Program landing page, built as a React + TypeScript assignment after the Leapfrog React workshop.

🔗 **Live Demo:** https://leapfrog-student-partnership.vercel.app/

## About

This project recreates the spirit of the original [LSPP landing page](https://studentpartner.lftechnology.com) with an original visual theme (green, orange, and black/cream) and several added features beyond the original site.

## Features

- 🌓 **Dark mode toggle** — built with React Context API, persists theme across the whole site
- ⬆️ **Go-to-top button** — appears after scrolling, smooth scrolls back up
- 🖼️ **Image gallery carousel** — with lightbox view and navigation dots
- 📊 **Animated stats counters** — count up into view using IntersectionObserver
- ❓ **FAQ accordion** — expandable questions with smooth transitions
- 👥 **Mentors section** — grid of mentor cards with a detail lightbox modal
- 📱 **Fully responsive** — adjusted layouts for desktop, tablet, and mobile

## Tech Stack

- React + TypeScript
- Vite
- Plain CSS with CSS variables for theming
- [lucide-react](https://lucide.dev/) for icons

## Running Locally

```bash
git clone https://github.com/nozomi-giri/leapfrog-student-partnership.git
cd leapfrog-student-partnership
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Disclaimer

This is a student assignment project inspired by Leapfrog Technology's Student Partnership Program. It is not an official Leapfrog product and is not affiliated with or endorsed by Leapfrog Technology.
