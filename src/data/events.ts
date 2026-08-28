/**
 * Single source of truth for the AFL Grand Final line-up.
 *
 * As Mad Monkey brings each remaining location live, add its ticket URLs to
 * `tickets` below — the page picks the change up with no other edits. A location
 * with no ticket that has a `url` renders as "COMING SOON".
 */

export const AUSSIES_IN_CODE = 'AUSSIESIN'

/** Grand Final match day. */
export const GRAND_FINAL_DATE = 'Saturday 26 September'
/** Ha Giang Loop departure, the morning after the Grand Final. */
export const HA_GIANG_DATE = 'Sunday 27 September'

export const HA_GIANG_URL =
  'https://madmonkeyhanoi.rezdy.com/777337/the-ha-giang-loop-tour-4d-3n-easy-rider-hanoi-grand-final-afl-event-with-all-you-can-drink-package'

export const POSTER_ASSETS_URL = 'https://www.canva.com/folder/FAHTLxTasjA'

export type Ticket = {
  label: string
  /** `null` until Mad Monkey publishes the product. */
  url: string | null
}

export type Location = {
  id: string
  city: string
  country: Country
  tickets: Ticket[]
}

export const COUNTRIES = ['All', 'Vietnam', 'Thailand', 'Cambodia', 'Laos', 'Philippines'] as const
export type CountryFilter = (typeof COUNTRIES)[number]
export type Country = Exclude<CountryFilter, 'All'>

export const LOCATIONS: Location[] = [
  {
    id: 'hanoi',
    city: 'Hanoi',
    country: 'Vietnam',
    tickets: [
      {
        label: 'Unlimited Drinks + Parmi',
        url: 'https://madmonkeyhostels.com/tours-events/afl-grand-final-hanoi-all-you-can-drink-chicken-parmi',
      },
      {
        label: 'Unlimited Drinks',
        url: 'https://madmonkeyhostels.com/tours-events/afl-grand-final-hanoi-all-you-can-drink',
      },
    ],
  },
  {
    id: 'hoi-an',
    city: 'Hoi An',
    country: 'Vietnam',
    tickets: [
      {
        label: 'Unlimited Drinks + Parmi',
        url: 'https://madmonkeyhostels.com/tours-events/afl-grand-final-hoi-an-all-you-can-drink-chicken-parmi',
      },
      {
        label: 'Unlimited Drinks',
        url: 'https://madmonkeyhostels.com/tours-events/afl-grand-final-hoi-an-all-you-can-drink',
      },
    ],
  },
  { id: 'bangkok', city: 'Bangkok', country: 'Thailand', tickets: [] },
  { id: 'chiang-mai', city: 'Chiang Mai', country: 'Thailand', tickets: [] },
  { id: 'pai', city: 'Pai', country: 'Thailand', tickets: [] },
  { id: 'siem-reap', city: 'Siem Reap', country: 'Cambodia', tickets: [] },
  { id: 'phnom-penh', city: 'Phnom Penh', country: 'Cambodia', tickets: [] },
  { id: 'luang-prabang', city: 'Luang Prabang', country: 'Laos', tickets: [] },
  { id: 'vang-vieng', city: 'Vang Vieng', country: 'Laos', tickets: [] },
  { id: 'manila', city: 'Manila', country: 'Philippines', tickets: [] },
]

export const isLive = (location: Location) => location.tickets.some((t) => t.url !== null)
