# M.L Remedial — website

A 5-page static website for May Lareza's massage/movement therapy business. Plain HTML/CSS/JS — no build step, no framework, works on any static host.

## Pages
- `index.html` — Home
- `services.html` — Services & pricing (Remedial Massage, Movement + Performance Therapy, FST)
- `about.html` — About May
- `book.html` — Booking (Calendly link + 3 live Stripe payment links, one per service)
- `contact.html` — Contact info & socials

## What's real vs. placeholder

**Real, pulled from the @ml.remedial Instagram:**
- Business name (M.L Remedial), practitioner name (May Lareza)
- Service names: Remedial Massage, Movement + Performance Therapy, Fascia Stretch Therapy (FST)
- The FST description ("pain-free method... decompresses joint capsules...")
- The Calendly booking link: `bit.ly/Calendly-MLRemedial`
- Instagram handle: `@ml.remedial`
- The 3 Stripe Payment Links on `book.html` — live, provided directly, mapped in this order: Remedial Massage → `buy.stripe.com/cNi7sEgoe9UUaisbdz8Zq01`, Movement + Performance Therapy → `buy.stripe.com/eVq5kw6NEffe62cgxT8Zq02`, Fascia Stretch Therapy (FST) → `buy.stripe.com/7sYdR2fka6IIcqA3L78Zq03`. **Double-check each button opens the correct product/price in Stripe before the site goes live** — the order was assumed to match how services are listed everywhere else on the site; if it's wrong, swap the `href`s in `book.html`.

**Placeholder — search for `⚠` in the rendered pages, or `PLACEHOLDER` in the HTML, to find every spot to update:**
- All prices and session durations (services.html) — note these are separate from the Stripe links' own prices; keep them in sync manually
- May's bio text and certifications (about.html)
- Email, phone, address, business hours (contact.html)
- The Facebook page URL (currently `#` everywhere it appears)
- Client testimonial quotes (index.html, about.html)
- The footer credit line ("Site by Totality Digital") — remove or change freely
- Photos — no photos are included; the design uses flat color panels instead so it never looks like a mockup with missing images. Swap the `.hero-visual` and `.service-panel` blocks for real photos whenever you have licensed/approved ones.

## Stripe payments

The Payment Link route was used (not embedded Checkout) since it needs no backend — the links above are hosted, secure Stripe checkout pages. To add more (e.g. package deals), create additional links at https://dashboard.stripe.com under **Payment links → + Create payment link**, then add another button in `book.html` following the same pattern as the three already there.

## Deploying

Any static host works. Easiest options:
- **Netlify / Vercel**: drag-and-drop the whole folder onto their dashboard, or connect a GitHub repo
- **GitHub Pages**: push this folder to a repo and enable Pages in repo settings

No environment variables or build commands are needed — it's plain HTML/CSS/JS.

## Fonts & tech
- Google Fonts: Fraunces (headings) + Inter (body), loaded via CDN
- No JS framework — `js/main.js` only handles the mobile menu and active-nav-link highlighting
