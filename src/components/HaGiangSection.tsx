import { Beer, Bike, Users } from 'lucide-react'
import haGiangImage from '@/assets/ha-giang.jpg'
import FloatingProp from '@/components/FloatingProps'
import Starburst from '@/components/brand/Starburst'
import { CornerWordmark } from '@/components/brand/Wordmark'
import { HA_GIANG_DATE, HA_GIANG_URL } from '@/data/events'

const INCLUSIONS = [
  { icon: Beer, text: 'Unlimited drinks on Grand Final night in Hanoi' },
  { icon: Bike, text: '4 days, 3 nights, one Easy Rider loop through Ha Giang' },
  { icon: Users, text: 'You ride out with the crew you watched the game with' },
]

const HaGiangSection = () => (
  <section
    id="ha-giang"
    className="relative border-b-4 border-[var(--mm-black)] bg-[var(--mm-black)] py-16 pb-24 md:py-24 md:pb-32"
  >
    <FloatingProp name="footy" rotate={-14} className="-top-14 right-6 hidden w-28 lg:block xl:w-32" />

    <div className="mx-auto max-w-7xl px-5 md:px-12">
      {/* Heading */}
      <div className="mb-10 flex flex-wrap items-start justify-between gap-6 md:mb-14">
        <div>
          <h2 className="font-display text-[clamp(2.2rem,7vw,5.2rem)] text-[var(--mm-paper)]">
            The Ha Giang
            <br />
            Loop package
          </h2>
          <p className="mt-4 text-base font-black uppercase tracking-tight text-[var(--mm-green)] md:text-xl">
            Departs {HA_GIANG_DATE}
          </p>
        </div>

        <Starburst
          className="h-24 w-24 shrink-0 md:h-32 md:w-32"
          fill="var(--mm-yellow)"
          points={13}
        >
          <span className="max-w-[62%] text-[0.5rem] leading-[1.15] text-[var(--mm-black)] md:text-[0.65rem]">
            Aussies In
            <br />
            only
          </span>
        </Starburst>
      </div>

      <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
        {/* Photo */}
        <div className="mm-shadow border-4 border-[var(--mm-black)]">
          <img
            src={haGiangImage}
            alt="A convoy of Easy Rider motorbikes carrying backpackers along a winding mountain pass on the Ha Giang Loop, one trailing a green and gold flag"
            className="mm-photo h-64 w-full object-cover object-center sm:h-96 lg:h-[620px]"
            width={1344}
            height={752}
            loading="lazy"
          />
        </div>

        {/* Detail */}
        <div className="mm-shadow flex flex-col border-4 border-[var(--mm-black)] bg-[var(--mm-paper)] p-6 md:p-9">
          <p className="text-base font-medium leading-relaxed text-[var(--mm-black)] md:text-xl">
            Watch the AFL Grand Final on the 26th in Hanoi with your new Aussie mates, enjoy the
            unlimited drinks package, then head off together on a 4D/3N Ha Giang Loop adventure.
          </p>

          <ul className="mt-7 space-y-4 md:mt-9">
            {INCLUSIONS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 border-2 border-[var(--mm-black)] bg-[var(--mm-green)] p-1.5">
                  <Icon className="h-4 w-4 text-[var(--mm-black)] md:h-5 md:w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[var(--mm-black)] md:text-lg">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-4 border-[var(--mm-black)] bg-[var(--mm-green)] p-4 md:mt-9">
            <p className="text-sm font-semibold text-[var(--mm-black)] md:text-base">
              <strong className="font-black uppercase">No code needed.</strong> This one is
              attributed to Aussies In already, so the booking tracks itself.
            </p>
          </div>

          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mm-shadow-lift mt-7 block border-4 lg:mt-auto border-[var(--mm-black)] bg-[var(--mm-yellow)] px-5 py-4 text-center text-sm font-black uppercase leading-tight tracking-tight text-[var(--mm-black)] md:py-5 md:text-lg"
          >
            Book the Aussies In Ha Giang Loop
          </a>
        </div>
      </div>
    </div>

    <CornerWordmark tone="light" />
  </section>
)

export default HaGiangSection
