# Aussies In × Mad Monkey — AFL Grand Final

One landing page holding every Mad Monkey AFL Grand Final event across South East Asia, so
Aussies In can share a single link across their group chats and socials.

Built on the same neo-brutalist layout as the other Mad Monkey global event pages (King's Day,
Tequila Day, Beer Day): flat colour blocks, 4px black borders, hard offset shadows, Anton display
type.

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

## Development

```sh
npm install
npm run dev
```

Runs on port 5182 via the `aussie-afl` launch config. Other scripts: `npm run build`,
`npm run lint`, `npm test`.

## Images

The photography in `src/assets/` was generated with Higgsfield (GPT Image 2). The floating footy
and beer cutouts are background-removed PNGs that drift across section seams.

## Lovable

This project is also wired to [Lovable](https://lovable.dev/projects/5c56eb43-1f5e-466b-9386-41dc90593525).
Pushing to `main` syncs back into the Lovable workspace.
