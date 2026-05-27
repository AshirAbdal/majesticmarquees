# Majestic Marquees & Tents — React/Vite Frontend

Static React + Vite rebuild of [majesticmarquees.com](https://majesticmarquees.com/), deployable via FTP.

## Stack

- **Vite + React 18 + TypeScript** — fast dev, optimized static build
- **React Router v6** — SPA routing with `BrowserRouter`
- **TailwindCSS** — utility-first styling, custom `sand` palette
- **Apache `.htaccess`** — SPA fallback for deep links on shared hosting

## Install & Run

```bash
npm install
npm run dev      # local dev server
npm run build    # output to ./dist
npm run preview  # serve the production build locally
```

## Project Structure

```
src/
  components/        # Header, Footer, Hero, Section, FAQ, Testimonials, CTA
  config/site.ts     # Single source of truth for nav, contact, socials
  pages/             # One file per route
    tents/           # Sub-pages for /our-tents/*
  App.tsx            # Router definition
  main.tsx           # Entry
  index.css          # Tailwind layers + global components
public/
  .htaccess          # Apache rewrite rules for SPA fallback
  favicon.svg
```

## Adding / editing content

- Site name, phone, email, address, socials → `src/config/site.ts`
- Navigation links → `primaryNav` in `src/config/site.ts`
- Page copy → directly inside each `src/pages/*.tsx` file
- Images → drop into `public/images/...` and reference as `/images/xyz.webp`

## Deploying via FTP

1. Run `npm run build`. The `dist/` folder contains everything you need.
2. Upload **the contents of `dist/`** (not the folder itself) to the web root
   of your FTP host (e.g. `public_html/`).
3. The included `.htaccess` enables SPA deep-link routing on Apache servers.
   If your host runs **Nginx**, add an equivalent fallback:
   ```
   location / { try_files $uri /index.html; }
   ```
4. If deploying to a sub-folder (e.g. `/new/`), set Vite `base: '/new/'` in
   `vite.config.ts` and update the `RewriteBase` in `.htaccess`.

## Connecting the contact form

The form on `/contact-get-a-quote` posts to nothing by default. Wire it up to one of:

- [Formspree](https://formspree.io) — change `<form>` to `<form action="https://formspree.io/f/XXXX" method="POST">`
- [FormSubmit](https://formsubmit.co) — free, no signup
- Your own PHP/Node endpoint on the same host

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/our-tents` | Our Tents overview |
| `/our-tents/stretch-nomadic-bedouin` | Stretch tent details |
| `/our-tents/sailcloth-silhouette` | Sailcloth tent details |
| `/our-tents/custom-bespoke` | Custom builds |
| `/gallery` | Gallery + process |
| `/about` | About / founder |
| `/faq` | FAQ |
| `/contact-get-a-quote` | Contact form |
| `/weddings` | Weddings |
| `/events` | Events |
| `/terms-conditions`, `/privacy-policy-2`, `/cookie-policy` | Legal |
| `/personalized-quote-thank-you` etc. | Thank-you pages |
