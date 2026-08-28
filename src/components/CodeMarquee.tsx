import { AUSSIES_IN_CODE } from '@/data/events'

const MESSAGES = [
  `Code ${AUSSIES_IN_CODE} at checkout`,
  'Sit on an Aussies In table',
  'One link. Every AFL event.',
  '26 September. All in.',
]

/**
 * Scrolling reminder strip on AFL red, separated by the poster's "V" mark.
 * The message list renders twice so the track loops seamlessly; the duplicate
 * is hidden from assistive tech.
 */
const CodeMarquee = () => {
  const track = (
    <ul className="flex shrink-0 items-center gap-8 pr-8 md:gap-14 md:pr-14">
      {MESSAGES.map((message) => (
        <li
          key={message}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap text-xs font-black uppercase tracking-widest text-[var(--afl-white)] md:gap-14 md:text-base"
        >
          {message}
          <span aria-hidden="true" className="font-display text-lg leading-none text-[var(--afl-mint)] md:text-2xl">
            V
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="overflow-hidden bg-[var(--afl-red)] py-3 md:py-4">
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
