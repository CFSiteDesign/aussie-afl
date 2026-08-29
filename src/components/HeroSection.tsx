import heroImage from '@/assets/afl-hero.jpg'
import aflLogo from '@/assets/afl-logo.svg'
import allInSticker from '@/assets/all-in-sticker.png'
import mmHead from '@/assets/mm-head-white.png'
import { HA_GIANG_URL } from '@/data/events'

/**
 * Hero, built to the GRAND FINAL campaign poster: AFL logo top-centre, giant
 * mint display type over red-duotone crowd photography, everything centred.
 */
const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Red-duotone backdrop, per the FINALS poster treatment */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="duo-red h-full w-full object-cover object-[42%_center]"
        width={1344}
        height={752}
        decoding="async"
        // React 18 does not map the camelCase prop, so pass the DOM attribute.
        {...{ fetchpriority: 'high' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--afl-maroon-deep)]/90 via-[var(--afl-maroon-deep)]/60 to-[var(--afl-maroon-deep)]" />
      {/* Extra vignette behind the headline so the mint type pops even on busy crowd areas. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 42%, rgba(36,4,6,0.72) 0%, rgba(36,4,6,0.35) 55%, transparent 100%)',
        }}
      />
    </div>

    <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-5xl flex-col items-center justify-center px-5 py-10 text-center md:min-h-0 md:px-10 md:py-14">
      {/* Presented by */}
      <p className="text-shadow-hero flex items-center gap-2.5 text-[0.65rem] font-black uppercase tracking-[0.3em] text-[var(--afl-white)] md:text-xs">
        <img src={mmHead} alt="" aria-hidden="true" className="h-6 w-6 md:h-7 md:w-7" width={28} height={28} />
        Mad Monkey <span className="text-[var(--afl-red)]">×</span> Aussies In present
      </p>

      {/* AFL logo, top-centre as on the poster */}
      <img
        src={aflLogo}
        alt="AFL"
        className="mt-6 w-28 drop-shadow-[0_0_24px_rgba(232,16,28,0.55)] md:mt-8 md:w-40"
        width={160}
        height={107}
      />

      {/* Display block */}
      <h1 className="font-display text-shadow-hero-strong mt-6 text-[var(--afl-mint)] md:mt-8">
        <span className="block text-[clamp(4rem,17vw,11rem)]">Grand</span>
        <span className="block text-[clamp(4rem,17vw,11rem)]">Final</span>
      </h1>
      <p className="font-display text-shadow-hero mt-3 text-[clamp(1.3rem,4.5vw,2.4rem)] text-[var(--afl-mint)]">
        Live + Loud
      </p>
      <p className="font-display text-shadow-hero mt-4 text-[clamp(1rem,3.2vw,1.6rem)] tracking-[0.08em] text-[var(--afl-white)] md:mt-5">
        Sat 26 September
      </p>

      <p className="text-shadow-hero mt-6 max-w-xl text-sm font-medium leading-relaxed text-[var(--afl-white)] md:mt-8 md:text-lg">
        Every Mad Monkey Grand Final party across South East Asia, on one page. Find your hostel,
        grab a ticket, watch the game with your new Aussie mates.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4 sm:flex-row md:mt-10">
        <a
          href={HA_GIANG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="afl-chip flex flex-1 items-center justify-center px-6 py-4 text-center text-sm font-black uppercase tracking-tight bg-[var(--afl-red)] text-[var(--afl-white)] transition-transform hover:-translate-y-0.5 md:py-5 md:text-base"
        >
          Book the Ha Giang Loop
        </a>
        <a
          href="#events"
          className="afl-chip flex flex-1 items-center justify-center px-6 py-4 text-center text-sm font-black uppercase tracking-tight bg-[var(--afl-white)] text-[var(--afl-maroon-deep)] transition-transform hover:-translate-y-0.5 md:py-5 md:text-base"
        >
          Find your event
        </a>
      </div>

    </div>

    {/* ALL IN sticker, bottom-right as on the FINALS poster */}
    <img
      src={allInSticker}
      alt="ALL IN"
      className="absolute bottom-6 right-6 z-20 hidden w-24 -rotate-6 select-none lg:block xl:w-28"
      draggable={false}
    />
  </section>
)

export default HeroSection
