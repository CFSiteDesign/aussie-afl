import { describe, expect, it } from 'vitest'
import { COUNTRIES, HA_GIANG_URL, LOCATIONS, isLive } from '@/data/events'

/**
 * The brief fixes which locations appear and which ticket links go live first.
 * These guard that adding a location later does not quietly drop one.
 */
describe('AFL Grand Final line-up', () => {
  it('lists all eleven confirmed locations', () => {
    expect(LOCATIONS.map((l) => l.city).sort()).toEqual(
      [
        'Bangkok',
        'Chiang Mai',
        'Hanoi',
        'Hoi An',
        'Luang Prabang',
        'Manila',
        'Pai',
        'Phnom Penh',
        'Siargao',
        'Siem Reap',
        'Vang Vieng',
      ].sort(),
    )
  })

  it('has Vietnam on sale with both ticket types', () => {
    for (const city of ['Hanoi', 'Hoi An']) {
      const location = LOCATIONS.find((l) => l.city === city)!
      expect(location.tickets.map((t) => t.label)).toEqual([
        'Unlimited Drinks + Parmi',
        'Unlimited Drinks',
      ])
      expect(location.tickets.every((t) => t.url?.startsWith('https://madmonkeyhostels.com/'))).toBe(
        true,
      )
    }
  })

  it('points every live ticket at a distinct product page', () => {
    const urls = LOCATIONS.flatMap((l) => l.tickets.map((t) => t.url)).filter(Boolean)
    expect(new Set(urls).size).toBe(urls.length)
  })

  it('books the Ha Giang package through Rezdy, where no code is needed', () => {
    expect(HA_GIANG_URL).toContain('madmonkeyhanoi.rezdy.com')
  })

  it('offers a filter chip for every country that has a location', () => {
    const used = new Set(LOCATIONS.map((l) => l.country))
    for (const country of used) expect(COUNTRIES).toContain(country)
  })
})
