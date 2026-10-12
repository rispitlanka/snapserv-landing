# Snapserve landing page

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

Deploys as-is to Vercel, Netlify or any Node host. Set `NEXT_PUBLIC_SITE_URL` to your live domain (e.g. `https://snapserve.lk`) so link previews on WhatsApp and Facebook work.

## Where things are

| What | File |
| --- | --- |
| All text, features, reports, FAQ, prices, WhatsApp number, email | `lib/content.ts` |
| Colours (one brand blue) and fonts | `app/globals.css`, `app/layout.tsx` |
| Page section order | `app/page.tsx` |
| Hero + tabbed product preview | `components/Hero.tsx`, `components/Mockups.tsx` |
| Feature filter buttons | `components/Features.tsx` |
| Phone layout (under 768px) | `components/MobilePage.tsx` — short copy lives in `mobile` in `lib/content.ts` |
| Demo form | `components/DemoForm.tsx` |
| Page skeleton | `app/loading.tsx` |
| Privacy policy page | `app/privacy/page.tsx` |

## Animations and skeletons

- Sections fade and slide up as they scroll into view (`components/Reveal.tsx`).
- Hero: text staggers in, doodles pop in and wiggle on hover, the tab pill slides between tabs, and the dashboard chart line draws itself and the bars grow.
- Feature cards animate in when you change the filter; FAQ answers slide open.
- Skeleton loading: the hero preview shows a skeleton on load and on each tab switch, the logo row shows skeleton tiles until fonts/logos load, the demo form shows a skeleton while sending, and `app/loading.tsx` is the page-level skeleton.
- Everything respects the visitor's "reduce motion" setting.

## Demo form

There's no backend: submitting opens WhatsApp with a ready-made message (name, mobile, best time) to the number in `lib/content.ts`. To store leads instead, replace the `window.open(...)` line in `components/DemoForm.tsx` with a `fetch()` to your API or a form service.

## Before going live — placeholders to replace

- `testimonials` in `lib/content.ts` — real owner quotes.
- `brands` in `lib/content.ts` — the 9 restaurants are made up. Put real logo images in `public/logos/` and show them with `<Image>` in `components/Logos.tsx`; then remove the Playfair Display, Oswald and Pacifico fonts from `app/layout.tsx`.
- "12+ restaurants" in `components/Logos.tsx` — make sure it's accurate.
- FAQ answers in `[brackets]` in `lib/content.ts`.
- Privacy policy text in `app/privacy/page.tsx`.
- Yearly price, if you want it shown (pricing card in `components/Sections.tsx`).
