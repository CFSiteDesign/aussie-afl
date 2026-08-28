import heroImage from '@/assets/afl-hero.jpg'
import CodeChip from '@/components/CodeChip'
import AllInSticker from '@/components/brand/AllInSticker'
import SpeechBubble from '@/components/brand/SpeechBubble'
import { CornerWordmark } from '@/components/brand/Wordmark'
import { GRAND_FINAL_DATE, HA_GIANG_URL } from '@/data/events'

const HeroSection = () => (
  <section className="relative border-b-4 border-[var(--mm-black)] bg-[var(--mm-black)]">
    {/* Backdrop */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Australian backpackers in green and gold cheering at the AFL Grand Final on a big screen in a Mad Monkey rooftop bar in South East Asia"
        className="mm-photo h-full w-full object-cover object-[42%_center]"
        width={1344}
        height={752}
        decoding="async"
        // React 18 does not map the camelCase prop, so pass the DOM attribute.
        {...{ fetchpriority: 'high' }}
      />
      {/* Weighted left so the display type always lands on solid ground. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--mm-black)] via-[var(--mm-black)]/85 to-[var(--mm-black)]/35" />
    </div>

    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 py-7 md:min-h-0 md:px-12 md:py-12 lg:py-16">
      {/* Partner lockup */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="border-4 border-[var(--mm-paper)] bg-[var(--mm-black)] px-3 py-1.5 text-xs font-black uppercase tracking-tight text-[var(--mm-paper)] md:text-sm">
          Mad Monkey
        </span>
        <span className="text-lg font-black text-[var(--mm-paper)]">×</span>
        <span className="border-4 border-[var(--mm-black)] bg-[var(--mm-yellow)] px-3 py-1.5 text-xs font-black uppercase tracking-tight text-[var(--mm-black)] md:text-sm">
          Aussies In
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-1 flex-col justify-center py-10 md:py-14">
        <div className="mm-shadow-sm mb-5 w-fit -rotate-2 border-4 border-[var(--mm-black)] bg-[var(--mm-yellow)] px-4 py-2 md:mb-7 md:px-6 md:py-2.5">
          <span className="text-xs font-black uppercase tracking-tight text-[var(--mm-black)] md:text-lg">
            {GRAND_FINAL_DATE}
          </span>
        </div>

        <h1 className="font-display text-[var(--mm-paper)]">
          <span className="block text-[clamp(2.7rem,9.5vw,7rem)]">AFL Grand</span>
          <span className="block text-[clamp(2.7rem,9.5vw,7rem)] text-[var(--mm-yellow)]">Final</span>
        </h1>

        <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[var(--mm-paper)] md:mt-8 md:text-xl">
          Every Mad Monkey Grand Final party across South East Asia, on one page. Find your hostel,
          grab a ticket, watch the game with people you have not met yet.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mm-shadow-lift border-4 border-[var(--mm-black)] bg-[var(--mm-yellow)] px-6 py-4 text-center text-sm font-black uppercase tracking-tight text-[var(--mm-black)] md:px-9 md:py-5 md:text-lg"
          >
            Book the Ha Giang Loop
          </a>
          <a
            href="#events"
            className="mm-shadow-lift border-4 border-[var(--mm-black)] bg-[var(--mm-paper)] px-6 py-4 text-center text-sm font-black uppercase tracking-tight text-[var(--mm-black)] md:px-9 md:py-5 md:text-lg"
          >
            Find your event
          </a>

          {/* Artwork is already white-on-black, so it reads as-is over the photo. */}
          <AllInSticker className="hidden w-24 self-center lg:block xl:w-28" rotate={-9} />
        </div>
      </div>

      {/* Aussies In pill bubble */}
      <div className="relative pb-12 md:pb-16">
        <SpeechBubble speaker="Aussies In" className="w-full max-w-xl">
          <span className="text-sm font-medium leading-[2] text-[var(--mm-black)] md:text-base">
            Oi. Put <CodeChip /> in at checkout so we can sit you on an{' '}
            <strong className="font-black">Aussies In table</strong>.
          </span>
        </SpeechBubble>
      </div>
    </div>

    <CornerWordmark tone="light" />
  </section>
)

export default HeroSection
