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
- Real photos of May (from her own gallery) are now in place on the home hero (`images/hero-home.jpg`), the About page hero (`images/hero-about.jpg`) and the services panel (`images/service-massage.jpg`) — see "Photos" below.
- May's real bio on `about.html` — her own words (from her Instagram bio posts) on how she got into training and remedial work, and her mission statement. Note: FST is a real qualification of May's, but it is **not** a separate bookable service on this site — the only paid, bookable service is still Remedial Massage (see above).
- Real contact details on `contact.html`: email `bodybymay@gmail.com`, phone `0439 320 399`, and studio location `14/174 Gibbs St, Roseville NSW (Lower Level)`.
- Real certifications & memberships on `about.html` (Qualifications card + a dedicated "Certifications & Memberships" section), sourced directly from May's certificates — not paraphrased or approximated:
  - **HLT52021 Diploma of Remedial Massage** — Australian Institute of Fitness, nationally recognised (AQF), awarded 2026
  - **Registered Member, Association of Massage Therapists (AMT)**, Senior Level One, Member #19046, financial to Sep 2027 — this is what lets many of her clients claim remedial massage rebates through private health insurance
  - **Certified Fascial Stretch Practitioner — Level 1**, Stretch to Win Institute (FST), certified 2021
  - **Trigger Point Myofascial Compression Techniques**, Personal Training Academy, certified 2014

**Placeholder — search for `⚠` in the rendered pages, or `PLACEHOLDER` in the HTML, to find every spot to update:**
- Business hours (contact.html) — not yet provided
- The Facebook page URL (currently `#` everywhere it appears) — not yet provided
- Client testimonial quotes (index.html, about.html)
- The map/studio-photo block on `contact.html` — swap for an embedded Google Map or studio photo
- The footer credit line ("Site by Totality Digital") — remove or change freely

## Photos

Three real photos of May are in `images/`, sized and compressed for web (~120–330 KB each):
- `hero-home.jpg` — Home page hero (`.hero-visual--home` in `css/style.css`)
- `hero-about.jpg` — About page hero, headshot (`.hero-visual--about`)
- `service-massage.jpg` — Services page panel background (`.service-panel--photo`)

To swap any of them for a different shot later, drop the new file into `images/` under the same filename (or update the `url(...)` path in `css/style.css`) — no HTML changes needed.

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
