# homepage-v2

Personal portfolio website for **Aytac Malkoc**, built with React and Vite.

Live site: [www.aytacmalkoc.com.tr](https://www.aytacmalkoc.com.tr)

## Original Repository Reference

This project is adapted from the original `Gazi-V2` repository:
[https://github.com/gazijarin/Gazi-V2](https://github.com/gazijarin/Gazi-V2)

## Tech Stack

- React 19
- Vite 8
- React Router
- React Bootstrap + Bootstrap 5
- Material UI (icons/components)
- i18next + react-i18next for localization

## Features

- Responsive single-page portfolio layout
- Multilingual content (English and Turkish)
- Structured content sources under `src/data`
- Modular sections for intro, about, experience, projects, and credits

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Analytics Setup

This project includes:

- Vercel Analytics (`@vercel/analytics`)
- Vercel Speed Insights (`@vercel/speed-insights`)
- Google Analytics 4 (`gtag.js`)

### Environment Variable

Create a `.env` file in the project root (you can copy from `.env.example`) and set:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

If `VITE_GA_MEASUREMENT_ID` is missing, GA4 tracking is skipped automatically.

## Project Structure

```text
src/
  components/    Reusable UI sections
  data/          Portfolio content (projects, experiences)
  i18n/          Localization config and translation files
  styles/        Section-based styles
  App.jsx        Main page composition
  main.jsx       App bootstrap and providers
public/
  assets/        Static assets used by the portfolio
```
