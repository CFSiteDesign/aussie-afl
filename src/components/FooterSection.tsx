import { GRAND_FINAL_DATE, HA_GIANG_URL, POSTER_ASSETS_URL } from '@/data/events'

const FooterSection = () => (
  <footer className="bg-[hsl(var(--aussie-green))] py-11 md:py-16">
    <div className="mx-auto max-w-7xl px-4 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border-4 border-border bg-black px-3 py-1.5 text-sm font-black uppercase tracking-tight text-white">
              Mad Monkey
            </span>
            <span className="text-xl font-black text-white">×</span>
            <span className="border-4 border-border bg-[hsl(var(--aussie-gold))] px-3 py-1.5 text-sm font-black uppercase tracking-tight text-black">
              Aussies In
            </span>
          </div>
          <p className="mt-5 max-w-md text-base font-bold text-white/90 md:text-lg">
            One link, every AFL Grand Final event across South East Asia. {GRAND_FINAL_DATE}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <a
            href="#ha-giang"
            className="text-sm font-black uppercase tracking-tight text-white underline-offset-4 hover:underline md:text-base"
          >
            Ha Giang Loop package
          </a>
          <a
            href="#events"
            className="text-sm font-black uppercase tracking-tight text-white underline-offset-4 hover:underline md:text-base"
          >
            All AFL events
          </a>
          <a
            href="#code"
            className="text-sm font-black uppercase tracking-tight text-white underline-offset-4 hover:underline md:text-base"
          >
            Aussies In code
          </a>
          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-tight text-white underline-offset-4 hover:underline md:text-base"
          >
            Book Ha Giang
          </a>
          <a
            href={POSTER_ASSETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-tight text-white/70 underline-offset-4 hover:underline md:text-base"
          >
            Poster assets
          </a>
        </nav>
      </div>

      <p className="mt-10 border-t-4 border-black/25 pt-6 text-xs font-black uppercase tracking-widest text-white/70 md:mt-14">
        © {new Date().getFullYear()} Mad Monkey Hostels · In partnership with Aussies In
      </p>
    </div>
  </footer>
)

export default FooterSection
