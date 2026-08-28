import wordmark from '@/assets/mad-monkey-wordmark.png'

type WordmarkProps = {
  /** `light` inverts the black artwork to white for dark grounds and photos. */
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * The Mad Monkey brand mark. Sits bottom-right of every full-frame layout at
 * ~130px wide with a 48px safe area — non-negotiable per the brand rules.
 */
const Wordmark = ({ tone = 'dark', className = '' }: WordmarkProps) => (
  <img
    src={wordmark}
    alt="Mad Monkey"
    width={130}
    height={39}
    loading="lazy"
    draggable={false}
    className={`w-[110px] select-none md:w-[130px] ${
      tone === 'light' ? 'brightness-0 invert' : ''
    } ${className}`}
  />
)

/** Wordmark parked in the bottom-right safe area of a full-frame section. */
export const CornerWordmark = ({ tone = 'dark' }: { tone?: 'dark' | 'light' }) => (
  <div className="pointer-events-none absolute bottom-6 right-6 z-30 md:bottom-12 md:right-12">
    <Wordmark tone={tone} />
  </div>
)

export default Wordmark
