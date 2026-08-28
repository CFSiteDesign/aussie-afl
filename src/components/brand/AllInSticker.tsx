import allIn from '@/assets/all-in-sticker.png'

type AllInStickerProps = {
  className?: string
  /** Tilt in degrees — stickers are always slapped on slightly crooked. */
  rotate?: number
  /** `light` inverts the artwork to white for dark grounds and photos. */
  tone?: 'dark' | 'light'
}

/** The ALL IN sticker brand device. */
const AllInSticker = ({ className = '', rotate = -8, tone = 'dark' }: AllInStickerProps) => (
  <img
    src={allIn}
    alt="ALL IN"
    loading="lazy"
    draggable={false}
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none ${tone === 'light' ? 'brightness-0 invert' : ''} ${className}`}
  />
)

export default AllInSticker
