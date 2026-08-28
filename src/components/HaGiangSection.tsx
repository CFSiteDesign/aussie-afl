import { Beer, Bike, Users } from 'lucide-react'
import haGiangImage from '@/assets/ha-giang.jpg'
import FloatingProp from '@/components/FloatingProps'
import { HA_GIANG_DATE, HA_GIANG_URL } from '@/data/events'

const INCLUSIONS = [
  { icon: Beer, text: 'Unlimited drinks package on Grand Final night in Hanoi' },
  { icon: Bike, text: '4 days / 3 nights Easy Rider loop through the Ha Giang mountains' },
  { icon: Users, text: 'Ride out with the same crew you watched the game with' },
]

const HaGiangSection = () => (
  <section
    id="ha-giang"
    className="relative border-b-4 border-border bg-[hsl(var(--aussie-green))] py-14 md:py-24"
  >
    <FloatingProp
      name="footy"
      rotate={-14}
      className="-top-14 right-4 hidden w-28 lg:block xl:w-36"
    />

    <div className="mx-auto max-w-7xl px-4 md:px-10">
      {/* Section heading */}
      <div className="mb-9 md:mb-14">
        <div className="-rotate-1 mb-4 w-fit border-4 border-border bg-[hsl(var(--aussie-gold))] px-4 py-2 brutalist-shadow-sm">
          <span className="text-xs font-black uppercase tracking-wide text-black md:text-base">
            ⭐ Exclusive to Aussies In
          </span>
        </div>
        <h2 className="font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.88] text-white">
          The Ha Giang
          <br />
          Loop Package
        </h2>
        <p className="mt-3 text-lg font-black uppercase tracking-wide text-[hsl(var(--aussie-gold))] md:text-2xl">
          Departs {HA_GIANG_DATE}
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Photo */}
        <div className="border-4 border-border brutalist-shadow">
          <img
            src={haGiangImage}
            alt="A convoy of Easy Rider motorbikes carrying backpackers along a winding mountain pass on the Ha Giang Loop in northern Vietnam"
            className="h-56 w-full object-cover sm:h-80 lg:h-full"
            width={1344}
            height={752}
            loading="lazy"
          />
        </div>

        {/* Detail card */}
        <div className="flex flex-col border-4 border-border bg-white p-6 brutalist-shadow md:p-9">
          <p className="text-base font-bold leading-relaxed text-black md:text-xl">
            Watch the AFL Grand Final on the 26th in Hanoi with your new Aussie mates, enjoy the
            unlimited drinks package, then head off together on a 4D/3N Ha Giang Loop adventure.
          </p>

          <ul className="mt-6 space-y-4 md:mt-8">
            {INCLUSIONS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 border-2 border-border bg-[hsl(var(--aussie-gold))] p-1.5">
                  <Icon className="h-4 w-4 text-black md:h-5 md:w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-black md:text-lg">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-4 border-border bg-[hsl(var(--aussie-cream))] p-4 md:mt-8">
            <p className="text-sm font-bold text-black md:text-base">
              <strong className="font-black uppercase">No code needed.</strong> This product is
              attributed directly to Aussies In, so your booking is tracked automatically.
            </p>
          </div>

          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block border-4 border-border bg-[hsl(var(--aussie-gold))] px-5 py-4 text-center text-base font-black uppercase leading-tight tracking-tight text-black brutalist-shadow-hover md:mt-8 md:py-5 md:text-xl"
          >
            Book the Aussies In Ha Giang Loop
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HaGiangSection
