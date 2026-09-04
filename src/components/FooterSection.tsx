import aflLogo from '@/assets/afl-logo.svg'
import Wordmark from '@/components/brand/Wordmark'
import { GRAND_FINAL_DATE, HA_GIANG_URL } from '@/data/events'

const LINKS = [
  { label: 'Ha Giang Loop package', href: '#ha-giang', external: false },
  { label: 'All AFL events', href: '#events', external: false },
  { label: 'Book Ha Giang', href: HA_GIANG_URL, external: true },
]

const FooterSection = () => (
  <footer className="bg-[var(--afl-maroon-black)] py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-12">
      <div className="flex flex-col items-center gap-10 text-center">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-[var(--afl-white)]/85 md:text-xs">
            Mad Monkey <span className="text-[var(--afl-red)]">×</span> Aussies In
          </p>
          <p className="font-display mx-auto mt-5 max-w-md text-2xl text-[var(--afl-mint)] md:text-4xl">
            One link. Every AFL event. {GRAND_FINAL_DATE}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-center gap-3">
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

      {/* Brand marks, centred */}
      <div className="mt-12 flex flex-col items-center gap-6 border-t-2 border-[var(--afl-white)]/15 pt-8 text-center md:mt-16">
        <div className="flex items-center gap-8 md:gap-12">
          <img src={aflLogo} alt="AFL" className="w-20 md:w-24" loading="lazy" />
          <Wordmark />
        </div>
        <p className="text-[0.7rem] font-black uppercase tracking-widest text-[var(--afl-white)]/50 md:text-xs">
          © {new Date().getFullYear()} Mad Monkey Hostels · with Aussies In
        </p>
      </div>
    </div>
  </footer>
)

export default FooterSection
