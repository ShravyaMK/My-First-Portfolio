# My-First-Portfolio

## Shravya M K - Personal Portfolio Website

A modern, responsive, accessible personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** for **Shravya M K**, AI & ML Undergraduate Student at AJ Institute of Engineering and Technology, Microsoft Student Ambassador (2026), and Aspiring AI Engineer.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher recommended; developed and tested on v24.18.0)
- npm (v9+; tested on v11.16.0)

### 1. Installation
Navigate into the portfolio project directory and install dependencies:
```bash
cd C:\Users\SHRAVYA\.gemini\antigravity\scratch\portfolio
npm install
```

### 2. Run Local Development Server
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the local port displayed in the console).

### 3. Build for Production
Generate an optimized production build:
```bash
npm run build
```
Output files are generated in the `dist/` directory.

### 4. Preview Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## 📂 Project Architecture

```
portfolio/
├── dist/                     # Optimized production bundle
├── public/
│   └── favicon.svg           # Geometric neural AI monogram favicon
├── src/
│   ├── assets/               # Static graphics
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky glass header, active spy, mobile drawer
│   │   ├── Hero.jsx          # Headline, status pills, CTAs, interactive neural visual
│   │   ├── NeuralVisual.jsx  # Canvas-based neural network node constellation
│   │   ├── About.jsx         # Academic background, core pillars, stats
│   │   ├── Skills.jsx        # DBMS, OOP, and Communication skill cards
│   │   ├── Education.jsx     # Vertical timeline with AJIET engineering highlight
│   │   ├── Credentials.jsx   # Microsoft SA (2026) and Tata GenAI simulation
│   │   ├── Contact.jsx       # Direct mailto, clipboard copy, LinkedIn card
│   │   └── Footer.jsx        # Social links, dynamic year, back to top
│   ├── data/
│   │   └── profileData.js    # Single source of truth for all profile details
│   ├── App.jsx               # Application root
│   ├── index.css             # Tailwind base & custom animations
│   └── main.jsx              # DOM entry point
├── implementation.md         # Detailed architectural design & QA checklist
├── index.html                # HTML entry point with SEO metadata
├── package.json              # Project dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Custom theme colors and typography
└── vite.config.js            # Vite configuration
```

---

## 🎯 Profile Customization

All personal details, educational milestones, credentials, and skills are strictly managed in a single file:
👉 **`src/data/profileData.js`**

To update your email, add new projects, or log new certifications in the future, simply edit `profileData.js`. The UI will reflect changes automatically.

---

## 📄 License & Integrity
Built strictly with verified profile details from `Profile.pdf`. No fabricated experience, metrics, or external certificate URLs.
