import { describe, expect, it } from 'vitest'
import { COUNTRIES, HA_GIANG_URL, LOCATIONS, isLive } from '@/data/events'

/**
 * The line-up and its links come from Mad Monkey's AFL tracker sheet. These guard
 * that a later edit does not quietly drop a location, lose the embedded code, or
 * reintroduce someone's personal cart session.
 */
describe('AFL Grand Final line-up', () => {
  it('lists exactly the ten confirmed locations, with Siargao gone', () => {
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
        'Siem Reap',
        'Vang Vieng',
      ].sort(),
    )
  })

  it('has every location on sale except Pai, which the tracker still marks not live', () => {
    const notLive = LOCATIONS.filter((l) => !isLive(l)).map((l) => l.city)
    expect(notLive).toEqual(['Pai'])
  })

  it('gives Hanoi and Hoi An both ticket types', () => {
    for (const city of ['Hanoi', 'Hoi An']) {
      const location = LOCATIONS.find((l) => l.city === city)!
      expect(location.tickets.map((t) => t.label)).toEqual([
        'Unlimited Drinks + Parmi',
        'Unlimited Drinks',
      ])
    }
  })

  it('embeds the Aussies In code in every live link and never a cart session', () => {
    const urls = LOCATIONS.flatMap((l) => l.tickets.map((t) => t.url)).filter(
      (u): u is string => u !== null,
    )
    expect(urls.length).toBe(11)
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/madmonkeyhostels\.com\/booking\?type=tours&/)
      expect(url).toContain('coupon=AUSSIESIN')
      expect(url).toContain('tour_date=2026-09-26')
      expect(url).not.toContain('cart_id')
    }
  })

  it('points every live ticket at a distinct product', () => {
    const prodids = LOCATIONS.flatMap((l) => l.tickets.map((t) => t.url))
      .filter((u): u is string => u !== null)
      .map((u) => new URL(u).searchParams.get('prodid'))
    expect(new Set(prodids).size).toBe(prodids.length)
  })

  it('books the Ha Giang package through Rezdy, where no code is needed', () => {
    expect(HA_GIANG_URL).toContain('madmonkeyhanoi.rezdy.com')
  })

  it('offers a filter chip for every country that has a location', () => {
    const used = new Set(LOCATIONS.map((l) => l.country))
    for (const country of used) expect(COUNTRIES).toContain(country)
  })
})
