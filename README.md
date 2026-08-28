# Aussies In × Mad Monkey — AFL Grand Final

One landing page holding every Mad Monkey AFL Grand Final event across South East Asia, so
Aussies In can share a single link across their group chats and socials.

## What's on the page

| Section | Purpose |
| --- | --- |
| Hero | Grand Final date, the Aussies In speech bubble, and the `AUSSIESIN` code |
| Ha Giang Loop | The hero package, exclusive to Aussies In — no code needed |
| Pick your spot | Searchable, country-filtered grid of every participating hostel |
| How it works | Three steps, ending on the code reminder |
| Code callout | The `AUSSIESIN` checkout reminder, click-to-copy |

**Dates:** Grand Final is Saturday 26 September; the Ha Giang Loop departs Sunday 27 September.

**The code:** `AUSSIESIN` goes in at checkout on every event ticket — it seats guests at an Aussies
In table and lets Aussies In track bookings. The Ha Giang Loop package is the one exception: it is
attributed to Aussies In already.

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

## Adding a location as it goes live

All content lives in [`src/data/events.ts`](src/data/events.ts) — no component edits needed. Find
the location and fill in its ticket URLs:

```ts
{
  id: 'bangkok',
  city: 'Bangkok',
  country: 'Thailand',
  tickets: [
    { label: 'Unlimited Drinks + Parmi', url: 'https://madmonkeyhostels.com/tours-events/...' },
    { label: 'Unlimited Drinks', url: 'https://madmonkeyhostels.com/tours-events/...' },
  ],
},
```

A location with no ticket URLs renders as **Coming soon**; as soon as one URL lands, the card moves
to the front of the grid and shows an **On sale** badge. Run `npm test` afterwards — the suite in
`src/test/events.test.ts` checks the line-up against the brief.

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
