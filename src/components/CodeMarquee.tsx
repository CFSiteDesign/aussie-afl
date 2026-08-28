import { AUSSIES_IN_CODE } from '@/data/events'

const MESSAGES = [
  `Use code ${AUSSIES_IN_CODE} at checkout`,
  'Sit at the Aussies In table',
  'One link · every AFL event',
  'Green & gold across South East Asia',
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
          className="flex shrink-0 items-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-wider text-white md:gap-14 md:text-lg"
        >
          {message}
          <span aria-hidden="true" className="text-[hsl(var(--aussie-gold))]">
            ★
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="overflow-hidden border-b-4 border-border bg-black py-3 md:py-4">
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
