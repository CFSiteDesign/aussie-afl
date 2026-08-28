import Starburst from '@/components/brand/Starburst'
import { AUSSIES_IN_CODE } from '@/data/events'

const MESSAGES = [
  `Code ${AUSSIES_IN_CODE} at checkout`,
  'Sit on an Aussies In table',
  'One link. Every AFL event.',
  '26 September. All in.',
]

/**
 * Scrolling reminder strip. The message list is rendered twice so the track can
 * loop seamlessly; the duplicate is hidden from assistive tech.
 */
const CodeMarquee = () => {
  const track = (
    <ul className="flex shrink-0 items-center gap-8 pr-8 md:gap-14 md:pr-14">
      {MESSAGES.map((message) => (
        <li
          key={message}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap text-xs font-black uppercase tracking-widest text-[var(--mm-paper)] md:gap-14 md:text-base"
        >
          {message}
          <Starburst className="h-5 w-5 shrink-0 md:h-6 md:w-6" fill="var(--mm-green)" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className="overflow-hidden border-b-4 border-[var(--mm-black)] bg-[var(--mm-black)] py-3 md:py-4">
      <div className="flex w-max animate-marquee">
        {track}
        <div aria-hidden="true" className="flex">
          {track}
        </div>
      </div>
    </div>
  )
}

export default CodeMarquee
