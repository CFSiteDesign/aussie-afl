import lockup from '@/assets/mm-logo-on-dark.webp'

type WordmarkProps = {
  className?: string
}

/**
 * The Mad Monkey lockup (monkey head + wordmark), in the on-dark colourway -
 * the whole site sits on the maroon poster world, so one variant covers it.
 */
const Wordmark = ({ className = '' }: WordmarkProps) => (
  <img
    src={lockup}
    alt="Mad Monkey"
    width={130}
    height={39}
    loading="lazy"
    draggable={false}
    className={`w-[120px] select-none md:w-[140px] ${className}`}
  />
)

export default Wordmark
