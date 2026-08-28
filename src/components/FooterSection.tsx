import aflLogo from '@/assets/afl-logo.svg'
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
  <footer className="bg-[var(--afl-maroon-black)] py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-[var(--afl-white)]/85 md:text-xs">
            Mad Monkey <span className="text-[var(--afl-red)]">×</span> Aussies In
          </p>
          <p className="font-display mt-5 max-w-md text-2xl text-[var(--afl-mint)] md:text-4xl">
            One link. Every AFL event. {GRAND_FINAL_DATE}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-xs font-black uppercase tracking-tight text-[var(--afl-white)] underline-offset-4 hover:text-[var(--afl-mint)] hover:underline md:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* AFL bottom-left, brand marks bottom-right, per the FINALS poster */}
      <div className="mt-12 flex flex-col-reverse items-start justify-between gap-8 border-t-2 border-[var(--afl-white)]/15 pt-8 md:mt-16 md:flex-row md:items-end">
        <img src={aflLogo} alt="AFL" className="w-20 md:w-24" loading="lazy" />
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Wordmark />
          <p className="text-[0.7rem] font-black uppercase tracking-widest text-[var(--afl-white)]/50 md:text-xs">
            © {new Date().getFullYear()} Mad Monkey Hostels · with Aussies In
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterSection
