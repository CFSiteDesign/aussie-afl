# Aussies In × Mad Monkey — AFL Grand Final

One landing page holding every Mad Monkey AFL Grand Final event across South East Asia, so
Aussies In can share a single link across their group chats and socials.

## What's on the page

| Section | Purpose |
| --- | --- |
| Hero | AFL logo, Grand Final date, the two calls to action |
| Ha Giang Loop | The hero package, exclusive to Aussies In — no code needed |
| AFL Grand Final events | Searchable, country-filtered grid of every participating hostel |
| Code note | Reassurance that `AUSSIESIN` is already built into every link |

**Dates:** Grand Final is Saturday 26 September; the Ha Giang Loop departs Sunday 27 September.

**The code:** every ticket link carries `coupon=AUSSIESIN` pre-embedded — it seats guests at an
Aussies In table and lets Aussies In track bookings without anyone typing it. The Ha Giang Loop
package is attributed to Aussies In on its own.

## Design system — the campaign posters

The page is styled to the two AFL Grand Final campaign posters (FINALS and GRAND FINAL
LIVE + LOUD from the Canva folder), not to the general Mad Monkey poster rules.

**Colour.** Deep maroon world (`--afl-maroon-deep` `#3f080b`, `--afl-maroon` `#5c0d12`), bright
AFL red `#e8101c` for display type and CTAs, ice mint `#b8f3e6` for the GRAND FINAL display,
white for chips and body. All declared as CSS custom properties in [`src/index.css`](src/index.css).

**Type.** Anton for display (`.font-display` — the posters' condensed caps), Montserrat 400–600
for body.

**Devices.**

- `.afl-chip` — white-stroked rounded panel with the red glow from the poster's match-up chips.
  Photos sit full-colour inside white chips, the way the team badges do on the FINALS poster.
- `.duo-red` — the red duotone photo treatment; used on the hero and background textures.
- The AFL logo (top-centre of the hero, bottom-left of the footer) and the ALL IN sticker
  (bottom-right of the hero), placed as they are on the posters.
- The marquee separator is the poster's red "V" mark.

## Updating the line-up

All content lives in [`src/data/events.ts`](src/data/events.ts) — no component edits needed. Ticket
URLs come from Mad Monkey's **TRACKER FOR AFL FINAL** sheet (column F, "LINK WITH AUSSIESIN CODE
EMBEDDED"). Copy the link across but **drop the `cart_id` parameter** — that is the checkout session
of whoever generated the link, not something to share. Pai is the only location the tracker still
marks as not live; drop its link in when it lands:

```ts
{ id: 'pai', city: 'Pai', country: 'Thailand', tickets: [
  { label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=...&coupon=AUSSIESIN' },
] },
```

A location with no ticket URLs renders as **Coming soon**; once a URL lands, the card moves to the
front of the grid with an **On sale** badge. Run `npm test` afterwards — `src/test/events.test.ts`
checks every link still carries the code and no cart session.

## Asset provenance

**Brand marks are genuine.** `mm-logo-on-dark.webp` (the monkey-head lockup), `mm-head-white.png`
and `all-in-sticker.png` are the real Mad Monkey assets. `afl-logo.svg` is the official AFL logo (via Wikipedia), used at the client's
direction to match the campaign posters.

**Photography.** The Ha Giang Loop image (`ha-giang.jpg`) is real Mad Monkey Ha Giang tour
photography. The hero (`afl-hero.jpg`) and the events-section crowd texture (`crowd.jpg`) are
generated (Higgsfield, GPT Image 2), purpose-shot for this page — the Mad Monkey library has no
AFL screening photography. Both run under the red duotone, where they read as campaign texture.
Replace them the moment real AFL event photography exists.

The two floating cutouts (`footy-cutout.png`, `beer-cutout.png`) are generated props serving as the
photo-cutout device.

## Development

```sh
npm install
npm run dev
```

Runs on port 5182 via the `aussie-afl` launch config. Other scripts: `npm run build`,
`npm run lint`, `npm test`.

## Lovable

This project is also wired to [Lovable](https://lovable.dev/projects/5c56eb43-1f5e-466b-9386-41dc90593525).
Pushing to `main` syncs back into the Lovable workspace.
