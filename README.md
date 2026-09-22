# M.L Remedial — website

A 5-page static website for May Lareza's massage/movement therapy business. Plain HTML/CSS/JS — no build step, no framework, works on any static host.

## Pages
- `index.html` — Home
- `services.html` — Services & pricing (Remedial Massage only, four recurring plans)
- `about.html` — About May
- `book.html` — Booking (Calendly link + 4 live Stripe payment links, one per plan)
- `contact.html` — Contact info & socials

## What's real vs. placeholder

**Real:**
- Business name (M.L Remedial), practitioner name (May Lareza)
- The only real service is **Remedial Massage**, offered as four recurring Stripe subscriptions — there is no Movement + Performance Therapy or Fascia Stretch Therapy (FST); an earlier draft of this site invented those and it's been corrected.
- The Calendly booking link: `bit.ly/Calendly-MLRemedial`
- Instagram handle: `@ml.remedial`
- The 4 Stripe Payment Links on `book.html` — each one opened directly and verified against its actual checkout page (product name + price), not assumed:
  - 2×/week, $180/wk → `buy.stripe.com/9B6dR23Bs1oo3U4chD8Zq04`
  - 1×/week, $100/wk → `buy.stripe.com/cNi7sEgoe9UUaisbdz8Zq01`
  - 1×/fortnight, $110/2wks → `buy.stripe.com/eVq5kw6NEffe62cgxT8Zq02`
  - 1×/month, $120/mo → `buy.stripe.com/7sYdR2fka6IIcqA3L78Zq03`
  - A 5th link (1×/month, $100/mo) exists in the Stripe dashboard but is **deactivated** — not linked anywhere on the site.
- Booking is online-only: all sessions are paid online in advance through one of the plans above — there's no deposit option and no paying on the day.
- All prices on `services.html` match the live Stripe prices above (kept in sync manually — if a Stripe price changes, update both places).

**Placeholder — search for `⚠` in the rendered pages, or `PLACEHOLDER` in the HTML, to find every spot to update:**
- May's bio text and certifications (about.html)
- Email, phone, address, business hours (contact.html)
- The Facebook page URL (currently `#` everywhere it appears)
- Client testimonial quotes (index.html, about.html)
- The footer credit line ("Site by Totality Digital") — remove or change freely
- Photos — no photos are included; the design uses flat color panels instead so it never looks like a mockup with missing images. Swap the `.hero-visual` and `.service-panel` blocks for real photos whenever you have licensed/approved ones.

## Stripe payments

The Payment Link route was used (not embedded Checkout) since it needs no backend — the links above are hosted, secure Stripe checkout pages. To add more (e.g. a package deal), create additional links at https://dashboard.stripe.com under **Payment links → + Create payment link**, then add another button in `book.html` following the same pattern as the four already there — open the new link yourself first and confirm its product/price before publishing.

## Deploying

Any static host works. Easiest options:
- **Netlify / Vercel**: drag-and-drop the whole folder onto their dashboard, or connect a GitHub repo
- **GitHub Pages**: push this folder to a repo and enable Pages in repo settings

No environment variables or build commands are needed — it's plain HTML/CSS/JS.

## Fonts & tech
- Google Fonts: Fraunces (headings) + Inter (body), loaded via CDN
- No JS framework — `js/main.js` only handles the mobile menu and active-nav-link highlighting
