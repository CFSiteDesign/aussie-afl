import heroImage from '@/assets/afl-hero.jpg'
import { AUSSIES_IN_CODE, GRAND_FINAL_DATE, HA_GIANG_URL } from '@/data/events'
import CodeChip from '@/components/CodeChip'

const HeroSection = () => (
  <section className="relative border-b-4 border-border">
    {/* Backdrop */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Australian backpackers in green and gold cheering at the AFL Grand Final on a big screen in a Mad Monkey rooftop bar in Southeast Asia"
        className="h-full w-full object-cover"
        width={1344}
        height={752}
        decoding="async"
        // React 18 does not map the camelCase prop, so pass the DOM attribute.
        {...{ fetchpriority: 'high' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
    </div>

    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 py-6 md:min-h-0 md:px-10 md:py-10 lg:py-14">
      {/* Brand lockup */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="border-4 border-white bg-black px-3 py-1.5 text-sm font-black uppercase tracking-tight text-white md:text-base">
          Mad Monkey
        </span>
        <span className="text-xl font-black text-white md:text-2xl">×</span>
        <span className="border-4 border-border bg-[hsl(var(--aussie-gold))] px-3 py-1.5 text-sm font-black uppercase tracking-tight text-black md:text-base">
          Aussies In
        </span>
      </div>

      {/* Headline block */}
      <div className="flex flex-1 flex-col justify-center py-10 md:py-16">
        <div className="-rotate-2 mb-5 w-fit border-4 border-border bg-[hsl(var(--aussie-gold))] px-4 py-2 brutalist-shadow-sm md:mb-7 md:px-6 md:py-3">
          <span className="text-sm font-black uppercase tracking-wide text-black md:text-xl">
            {GRAND_FINAL_DATE} 🏉
          </span>
        </div>

        <h1 className="font-display leading-[0.84] text-white">
          <span className="block text-[clamp(3.4rem,13vw,10rem)]">AFL Grand</span>
          <span className="block text-[clamp(3.4rem,13vw,10rem)] text-[hsl(var(--aussie-gold))]">Final</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg font-bold text-white md:mt-7 md:text-2xl">
          Every Mad Monkey Grand Final party across South East Asia — in one place. Find your
          hostel, grab your ticket, and watch the game with your new Aussie mates.
        </p>

        {/* Primary actions */}
        <div className="mt-7 flex flex-col gap-4 sm:flex-row md:mt-9">
          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-border bg-[hsl(var(--aussie-gold))] px-6 py-4 text-center text-base font-black uppercase tracking-tight text-black brutalist-shadow-hover md:px-8 md:py-5 md:text-xl"
          >
            Book the Ha Giang Loop
          </a>
          <a
            href="#events"
            className="border-4 border-border bg-white px-6 py-4 text-center text-base font-black uppercase tracking-tight text-black brutalist-shadow-hover md:px-8 md:py-5 md:text-xl"
          >
            Find your event
          </a>
        </div>
      </div>

      {/* Aussies In speech bubble */}
      <div className="relative w-full max-w-xl">
        <div className="relative border-4 border-border bg-white p-5 brutalist-shadow md:p-6">
          <p className="text-base font-bold leading-[1.9] text-black md:text-lg">
            <span className="mr-2 inline-block border-2 border-border bg-[hsl(var(--aussie-green))] px-2 py-0.5 align-middle text-xs font-black uppercase text-white">
              Aussies In
            </span>
            Oi! Enter the code <CodeChip /> at checkout so we can sit you at an{' '}
            <strong>Aussies In table</strong> — and keep the whole crew together.
          </p>
          {/* Bubble tail */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[18px] left-9 block h-0 w-0 border-l-[18px] border-r-[18px] border-t-[18px] border-l-transparent border-r-transparent border-t-black"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-[11px] left-[42px] block h-0 w-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"
          />
        </div>
        <p className="mt-6 text-xs font-black uppercase tracking-widest text-white/70">
          Code {AUSSIES_IN_CODE} · Grand Final {GRAND_FINAL_DATE}
        </p>
      </div>
    </div>
  </section>
)

export default HeroSection
