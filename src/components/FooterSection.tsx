import Wordmark from '@/components/brand/Wordmark'
import { GRAND_FINAL_DATE, HA_GIANG_URL, POSTER_ASSETS_URL } from '@/data/events'

const LINKS = [
  { label: 'Ha Giang Loop package', href: '#ha-giang', external: false },
  { label: 'All AFL events', href: '#events', external: false },
  { label: 'The code', href: '#code', external: false },
  { label: 'Book Ha Giang', href: HA_GIANG_URL, external: true },
  { label: 'Poster assets', href: POSTER_ASSETS_URL, external: true },
]

const FooterSection = () => (
  <footer className="bg-[var(--mm-black)] py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border-4 border-[var(--mm-paper)] bg-[var(--mm-black)] px-3 py-1.5 text-xs font-black uppercase tracking-tight text-[var(--mm-paper)]">
              Mad Monkey
            </span>
            <span className="text-lg font-black text-[var(--mm-paper)]">×</span>
            <span className="border-4 border-[var(--mm-black)] bg-[var(--mm-yellow)] px-3 py-1.5 text-xs font-black uppercase tracking-tight text-[var(--mm-black)]">
              Aussies In
            </span>
          </div>
          <p className="font-display mt-6 max-w-md text-2xl text-[var(--mm-paper)] md:text-4xl">
            One link. Every AFL event. {GRAND_FINAL_DATE}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-xs font-black uppercase tracking-tight text-[var(--mm-paper)] underline-offset-4 hover:text-[var(--mm-yellow)] hover:underline md:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-col-reverse items-start justify-between gap-8 border-t-4 border-[var(--mm-paper)]/20 pt-8 md:mt-16 md:flex-row md:items-end">
        <p className="text-[0.7rem] font-black uppercase tracking-widest text-[var(--mm-paper)]/55 md:text-xs">
          © {new Date().getFullYear()} Mad Monkey Hostels · with Aussies In
        </p>
        <Wordmark tone="light" />
      </div>
    </div>
  </footer>
)

export default FooterSection
