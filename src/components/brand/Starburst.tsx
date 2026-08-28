type StarburstProps = {
  /** Points around the burst. Odd counts look less mechanical. */
  points?: number
  className?: string
  /** Rendered inside the burst — kept short, one or two words. */
  children?: React.ReactNode
  /** Fill colour; pass a canonical palette value. */
  fill?: string
}

/** Builds the spiky polygon path by alternating outer and inner radii. */
const burstPath = (points: number, outer = 50, inner = 37) => {
  const step = Math.PI / points
  const coords: string[] = []
  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner
    const angle = i * step - Math.PI / 2
    coords.push(`${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`)
  }
  return coords.join(' ')
}

/**
 * Spiky starburst brand device. Used as a sticker behind short shouty copy and
 * as the separator in the reminder strip.
 */
const Starburst = ({
  points = 13,
  className = '',
  children,
  fill = 'var(--mm-yellow)',
}: StarburstProps) => (
  <span className={`relative inline-flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <polygon points={burstPath(points)} fill={fill} stroke="var(--mm-black)" strokeWidth="3" />
    </svg>
    {children ? (
      <span className="font-display absolute inset-0 flex items-center justify-center text-center leading-none">
        {children}
      </span>
    ) : null}
  </span>
)

export default Starburst
