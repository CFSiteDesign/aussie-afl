/**
 * Single source of truth for the AFL Grand Final line-up.
 *
 * Ticket URLs come from Mad Monkey's "TRACKER FOR AFL FINAL" sheet and carry the
 * Aussies In code pre-embedded (`coupon=AUSSIESIN`), so customers never type it.
 * The sheet's links also carry a `cart_id` from whoever generated them; that is
 * one person's checkout session, so it is deliberately left off here.
 *
 * A location with no ticket that has a `url` renders as "COMING SOON".
 */

/** Grand Final match day. */
export const GRAND_FINAL_DATE = 'Saturday 26 September'
/** Ha Giang Loop departure, the morning after the Grand Final. */
export const HA_GIANG_DATE = 'Sunday 27 September'

export const HA_GIANG_URL =
  'https://madmonkeyhanoi.rezdy.com/777337/the-ha-giang-loop-tour-4d-3n-easy-rider-hanoi-grand-final-afl-event-with-all-you-can-drink-package'

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
      { label: 'Unlimited Drinks + Parmi', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=P4K0GK&tour_date=2026-09-26&currency=USD&propertyid=243481&coupon=AUSSIESIN' },
      { label: 'Unlimited Drinks', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PLDSHT&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=243481&coupon=AUSSIESIN' },
    ],
  },
  {
    id: 'hoi-an',
    city: 'Hoi An',
    country: 'Vietnam',
    tickets: [
      { label: 'Unlimited Drinks + Parmi', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PR7VMD&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=5022&coupon=AUSSIESIN' },
      { label: 'Unlimited Drinks', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PCV2DG&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=5022&coupon=AUSSIESIN' },
    ],
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    country: 'Thailand',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=P1ZCBB&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=8697&coupon=AUSSIESIN' }],
  },
  {
    id: 'chiang-mai',
    city: 'Chiang Mai',
    country: 'Thailand',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PDRPK4&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=19621&coupon=AUSSIESIN' }],
  },
  { id: 'pai', city: 'Pai', country: 'Thailand', tickets: [] },
  {
    id: 'siem-reap',
    city: 'Siem Reap',
    country: 'Cambodia',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PXJ9TU&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=8873&coupon=AUSSIESIN' }],
  },
  {
    id: 'phnom-penh',
    city: 'Phnom Penh',
    country: 'Cambodia',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=P3SUQW&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=8836&coupon=AUSSIESIN' }],
  },
  {
    id: 'luang-prabang',
    city: 'Luang Prabang',
    country: 'Laos',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PBXL00&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=16774&coupon=AUSSIESIN' }],
  },
  {
    id: 'vang-vieng',
    city: 'Vang Vieng',
    country: 'Laos',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PPU41V&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=295599&coupon=AUSSIESIN' }],
  },
  {
    id: 'manila',
    city: 'Manila',
    country: 'Philippines',
    tickets: [{ label: 'AFL Grand Final Ticket', url: 'https://madmonkeyhostels.com/booking?type=tours&prodid=PLRZKK&tour_date=2026-09-26&tour_qty=1&checkIn=2026-09-26&adult=1&currency=USD&propertyid=308827&coupon=AUSSIESIN' }],
  },
]

export const isLive = (location: Location) => location.tickets.some((t) => t.url !== null)
