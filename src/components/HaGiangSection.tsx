import { Beer, Bike, Bus, Users } from 'lucide-react'
import haGiangImage from '@/assets/ha-giang-2026.jpg'
import { HA_GIANG_DATE, HA_GIANG_URL } from '@/data/events'

const INCLUSIONS = [
  { icon: Beer, text: 'Unlimited drinks on Grand Final night in Hanoi' },
  { icon: Bike, text: '4 days, 3 nights, one Easy Rider loop through Ha Giang' },
  { icon: Bus, text: 'VIP cabin bus tickets from Hanoi and back' },
  { icon: Users, text: 'You ride out with the crew you watched the game with' },
]

/** The hero package - first section under the hero, per the brief. */
const HaGiangSection = () => (
  <section id="ha-giang" className="relative bg-[var(--afl-maroon)] py-16 pb-24 md:py-24 md:pb-28">
    <div className="mx-auto max-w-7xl px-5 md:px-12">
      {/* Heading */}
      <div className="mb-10 text-center md:mb-14">
        <span className="afl-chip inline-block bg-[var(--afl-white)] px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-[var(--afl-maroon-deep)] md:text-xs">
          Exclusive to Aussies In
        </span>
        <h2 className="font-display mt-6 text-[clamp(2.6rem,8vw,6rem)] text-[var(--afl-red)] drop-shadow-[0_0_30px_rgba(232,16,28,0.45)]">
          The Ha Giang
          <br />
          Loop package
        </h2>
        <p className="font-display mt-4 text-[clamp(1rem,3vw,1.5rem)] tracking-[0.08em] text-[var(--afl-mint)]">
          Departs {HA_GIANG_DATE}
        </p>
      </div>

      <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
        {/* Photo - full colour inside a white poster chip, like the team badges */}
        <div className="afl-chip overflow-hidden bg-[var(--afl-white)] p-2 md:p-2.5">
          <img
            src={haGiangImage}
            alt="Two travellers on an Easy Rider motorbike winding through the green karst mountains of the Ha Giang Loop"
            className="h-64 w-full rounded-[10px] object-cover sm:h-96 lg:h-full"
            width={1344}
            height={752}
            loading="lazy"
          />
        </div>

        {/* Detail */}
        <div className="afl-chip flex flex-col bg-[var(--afl-white)] p-6 text-center text-[var(--afl-maroon-deep)] md:p-9">
          <p className="text-base font-medium leading-relaxed md:text-xl">
            Watch the AFL Grand Final on the 26th in Hanoi with your new Aussie mates, enjoy the
            unlimited drinks package, then head off together on a 4D/3N Ha Giang Loop adventure.
          </p>

          <ul className="mx-auto mt-7 w-fit space-y-4 text-left md:mt-9">
            {INCLUSIONS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-md bg-[var(--afl-red)] p-1.5">
                  <Icon className="h-4 w-4 text-[var(--afl-white)] md:h-5 md:w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold md:text-lg">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-[10px] bg-[var(--afl-mint)] p-4 md:mt-9">
            <p className="text-sm font-semibold md:text-base">
              <strong className="font-black uppercase">No code needed.</strong> This one is
              attributed to Aussies In already, so the booking tracks itself.
            </p>
          </div>

          <a
            href={HA_GIANG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="afl-chip afl-glow-strong mt-7 flex items-center justify-center bg-[var(--afl-red)] px-5 py-4 text-center text-sm font-black uppercase leading-tight tracking-tight text-[var(--afl-white)] transition-transform hover:-translate-y-0.5 md:py-5 md:text-lg lg:mt-auto"
          >
            Book the Aussies In Ha Giang Loop
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HaGiangSection
