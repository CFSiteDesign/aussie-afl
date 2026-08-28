import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import crowdImage from '@/assets/crowd.jpg'
import { COUNTRIES, LOCATIONS, POSTER_ASSETS_URL, isLive, type CountryFilter } from '@/data/events'

/** Every participating Mad Monkey with its ticket options, Vietnam live first. */
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
    <section id="events" className="relative overflow-hidden bg-[var(--afl-maroon-deep)] py-16 md:py-24">
      {/* Duotone crowd texture, like the FINALS poster's side panels */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={crowdImage} alt="" className="duo-red h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--afl-maroon-deep)] via-[var(--afl-maroon-deep)]/60 to-[var(--afl-maroon-deep)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-12">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] text-[var(--afl-red)] drop-shadow-[0_0_30px_rgba(232,16,28,0.45)]">
            AFL Grand
            <br />
            Final events
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-[var(--afl-white)]/85 md:text-lg">
            Every Mad Monkey showing the game, with its ticket options. Vietnam is on sale now. The
            rest land here the moment they go live.
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-0 z-30 -mx-5 bg-[var(--afl-maroon-deep)]/95 px-5 py-3 backdrop-blur-sm md:-mx-12 md:px-12 md:py-4">
          <label className="sr-only" htmlFor="location-search">
            Search for a location
          </label>
          <input
            id="location-search"
            type="search"
            placeholder="SEARCH LOCATION..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="afl-chip w-full bg-[var(--afl-white)] p-4 text-center text-base font-black uppercase tracking-tight text-[var(--afl-maroon-deep)] outline-none placeholder:text-[var(--afl-maroon-deep)]/35 focus:ring-4 focus:ring-[var(--afl-mint)] md:p-5 md:text-xl"
          />
          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:mt-4 md:justify-center md:gap-3">
            {COUNTRIES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCountry(option)}
                aria-pressed={country === option}
                className={`shrink-0 whitespace-nowrap rounded-[10px] border-[3px] border-[var(--afl-white)] px-4 py-2 text-[0.7rem] font-black uppercase tracking-tight transition-transform hover:-translate-y-0.5 md:px-6 md:py-3 md:text-sm ${
                  country === option
                    ? 'afl-glow bg-[var(--afl-red)] text-[var(--afl-white)]'
                    : 'bg-transparent text-[var(--afl-white)]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {ordered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-8">
            {ordered.map((location) => {
              const live = isLive(location)
              return (
                <article
                  key={location.id}
                  className={`flex flex-col rounded-[var(--radius)] p-5 md:p-7 ${
                    live
                      ? 'afl-chip bg-[var(--afl-white)] text-[var(--afl-maroon-deep)]'
                      : 'border-[3px] border-dashed border-[var(--afl-white)]/35 text-[var(--afl-white)]'
                  }`}
                >
                  <div className="mb-4 flex items-center justify-center gap-2.5">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wide md:text-xs ${
                        live
                          ? 'bg-[var(--afl-maroon-deep)] text-[var(--afl-white)]'
                          : 'border border-[var(--afl-white)]/40 text-[var(--afl-white)]/75'
                      }`}
                    >
                      {location.country}
                    </span>
                    {live ? (
                      <span className="rounded-md bg-[var(--afl-mint)] px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wide text-[var(--afl-maroon-deep)] md:text-xs">
                        On sale
                      </span>
                    ) : (
                      <span className="text-[0.6rem] font-black uppercase tracking-wide text-[var(--afl-white)]/50 md:text-xs">
                        Soon
                      </span>
                    )}
                  </div>

                  <h3 className={`font-display text-center text-3xl md:text-4xl ${live ? '' : 'text-[var(--afl-white)]/55'}`}>
                    {location.city}
                  </h3>

                  <div className="mt-6 flex flex-1 flex-col justify-end gap-2.5 md:mt-8">
                    {live ? (
                      location.tickets.map((ticket) =>
                        ticket.url ? (
                          <a
                            key={ticket.label}
                            href={ticket.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-[10px] bg-[var(--afl-red)] px-3 py-3 text-center text-[0.7rem] font-black uppercase leading-tight tracking-tight text-[var(--afl-white)] transition-transform hover:-translate-y-0.5 md:text-sm"
                          >
                            {ticket.label}
                            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </a>
                        ) : (
                          <span
                            key={ticket.label}
                            className="rounded-[10px] border-2 border-dashed border-[var(--afl-maroon-deep)]/30 px-3 py-3 text-center text-[0.7rem] font-black uppercase leading-tight tracking-tight text-[var(--afl-maroon-deep)]/45 md:text-sm"
                          >
                            {ticket.label} — soon
                          </span>
                        ),
                      )
                    ) : (
                      <span className="text-center text-[0.7rem] font-black uppercase tracking-tight text-[var(--afl-white)]/50 md:text-sm">
                        Tickets not up yet
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="font-display mt-12 py-14 text-center text-2xl text-[var(--afl-white)]/60 md:text-4xl">
            Nothing there. Try another spot.
          </p>
        )}

        {/* Footnote */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t-2 border-[var(--afl-white)]/20 pt-6 text-center md:mt-14">
          <p className="text-[0.7rem] font-black uppercase tracking-widest text-[var(--afl-white)]/60 md:text-xs">
            {ordered.length} of {LOCATIONS.length} locations · {liveCount} on sale
          </p>
          <a
            href={POSTER_ASSETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border-[3px] border-[var(--afl-white)] px-4 py-2.5 text-[0.7rem] font-black uppercase tracking-tight text-[var(--afl-white)] transition-transform hover:-translate-y-0.5 md:text-xs"
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
