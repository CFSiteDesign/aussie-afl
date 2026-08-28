import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import FloatingProp from '@/components/FloatingProps'
import { COUNTRIES, LOCATIONS, POSTER_ASSETS_URL, isLive, type CountryFilter } from '@/data/events'

const EventSelector = () => {
  const [country, setCountry] = useState<CountryFilter>('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return LOCATIONS.filter((location) => {
      const matchesCountry = country === 'All' || location.country === country
      const matchesSearch =
        term === '' ||
        location.city.toLowerCase().includes(term) ||
        location.country.toLowerCase().includes(term)
      return matchesCountry && matchesSearch
    })
  }, [country, search])

  // Live locations first so bookable events never sit below "coming soon" ones.
  const ordered = useMemo(
    () => [...filtered].sort((a, b) => Number(isLive(b)) - Number(isLive(a))),
    [filtered],
  )

  const liveCount = LOCATIONS.filter(isLive).length

  return (
    <section id="events" className="relative border-b-4 border-border py-14 md:py-24">
      <FloatingProp
        name="beer"
        rotate={11}
        reverse
        className="-top-16 left-4 hidden w-24 lg:block xl:w-32"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-10">
        {/* Section heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.88] text-black">
            Pick your
            <br />
            Grand Final spot
          </h2>
          <p className="mt-4 max-w-3xl text-base font-bold text-black/75 md:text-xl">
            Every participating Mad Monkey with its ticket options. Vietnam is live now — the
            remaining locations go up here as each product launches.
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-0 z-30 -mx-4 bg-[hsl(var(--aussie-cream))] px-4 py-3 md:-mx-10 md:px-10 md:py-4">
          <label className="sr-only" htmlFor="location-search">
            Search for a location
          </label>
          <input
            id="location-search"
            type="search"
            placeholder="SEARCH LOCATION..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full border-4 border-border bg-white p-4 text-base font-black uppercase text-black outline-none placeholder:text-black/35 focus:bg-[hsl(var(--aussie-gold))] md:p-5 md:text-xl"
          />
          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:mt-4 md:gap-3">
            {COUNTRIES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCountry(option)}
                aria-pressed={country === option}
                className={`shrink-0 whitespace-nowrap border-4 border-border px-4 py-2 text-xs font-black uppercase tracking-tight transition-transform md:px-6 md:py-3 md:text-base ${
                  country === option
                    ? 'bg-black text-white'
                    : 'bg-white text-black brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {ordered.length > 0 ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-7">
            {ordered.map((location) => {
              const live = isLive(location)
              return (
                <article
                  key={location.id}
                  className={`flex flex-col border-4 border-border p-5 md:p-7 ${
                    live
                      ? 'bg-white brutalist-shadow brutalist-card-hover'
                      : 'bg-[hsl(var(--muted))]'
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="border-2 border-border bg-[hsl(var(--aussie-green))] px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-wide text-white md:text-xs">
                      {location.country}
                    </span>
                    {live ? (
                      <span className="border-2 border-border bg-[hsl(var(--aussie-gold))] px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-wide text-black md:text-xs">
                        On sale
                      </span>
                    ) : (
                      <span className="text-[0.65rem] font-black uppercase tracking-wide text-black/45 md:text-xs">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl leading-none text-black md:text-4xl">
                    {location.city}
                  </h3>

                  <div className="mt-5 flex flex-1 flex-col justify-end gap-2.5 md:mt-7">
                    {live ? (
                      location.tickets.map((ticket) =>
                        ticket.url ? (
                          <a
                            key={ticket.label}
                            href={ticket.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-2 border-4 border-border bg-[hsl(var(--aussie-gold))] px-3 py-3 text-xs font-black uppercase leading-tight tracking-tight text-black transition-transform hover:-translate-y-0.5 md:text-sm"
                          >
                            {ticket.label}
                            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </a>
                        ) : (
                          <span
                            key={ticket.label}
                            className="border-4 border-dashed border-black/25 px-3 py-3 text-xs font-black uppercase leading-tight tracking-tight text-black/40 md:text-sm"
                          >
                            {ticket.label} — soon
                          </span>
                        ),
                      )
                    ) : (
                      <span className="border-4 border-dashed border-black/25 px-3 py-4 text-center text-xs font-black uppercase tracking-tight text-black/40 md:text-sm">
                        Tickets coming soon
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="mt-12 py-14 text-center font-display text-2xl text-black/60 md:text-4xl">
            Nothing found. Try another spot.
          </p>
        )}

        {/* Footnote */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t-4 border-border pt-6 md:mt-12 md:flex-row md:items-center">
          <p className="text-xs font-black uppercase tracking-widest text-black/55 md:text-sm">
            Showing {ordered.length} of {LOCATIONS.length} locations · {liveCount} on sale
          </p>
          <a
            href={POSTER_ASSETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-4 border-border bg-white px-4 py-2.5 text-xs font-black uppercase tracking-tight text-black brutalist-shadow-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-sm"
          >
            Event poster assets
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventSelector
