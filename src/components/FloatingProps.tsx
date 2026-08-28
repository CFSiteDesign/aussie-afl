import footy from '@/assets/footy-cutout.png'
import beer from '@/assets/beer-cutout.png'

const PROPS = { footy, beer } as const

export type PropName = keyof typeof PROPS

type FloatingPropsProps = {
  /** Which cutout to float. */
  name: PropName
  /**
   * Where it sits relative to the parent section. The parent must be
   * `relative` and must NOT clip overflow, so the prop can straddle the
   * section seam.
   */
  className: string
  /** Tilt in degrees, fed to the shared float keyframes. */
  rotate?: number
  /** Use the reverse (downward-first) float so neighbouring props desync. */
  reverse?: boolean
}

/**
 * Decorative cutout that drifts between sections. Purely ornamental, so it is
 * hidden from assistive tech and never intercepts clicks.
 */
const FloatingProp = ({ name, className, rotate = 0, reverse = false }: FloatingPropsProps) => (
  <img
    src={PROPS[name]}
    alt=""
    aria-hidden="true"
    loading="lazy"
    draggable={false}
    style={{ '--float-rotate': `${rotate}deg` } as React.CSSProperties}
    className={`pointer-events-none absolute z-20 select-none drop-shadow-2xl ${
      reverse ? 'animate-float-reverse' : 'animate-float'
    } ${className}`}
  />
)

export default FloatingProp
