type SpeechBubbleProps = {
  children: React.ReactNode
  /** Speaker label sitting in the bubble's leading pill. */
  speaker?: string
  className?: string
}

/**
 * Pill speech-bubble from the brief — white chip on the maroon poster world,
 * with the red glow the poster chips carry.
 */
const SpeechBubble = ({ children, speaker, className = '' }: SpeechBubbleProps) => (
  <div className={`relative ${className}`}>
    <div className="afl-glow relative rounded-[999px] border-[3px] border-[var(--afl-white)] bg-[var(--afl-white)] px-6 py-5 text-center md:px-9 md:py-6">
      {speaker ? (
        <span className="mr-2 inline-block rounded-[999px] bg-[var(--afl-red)] px-3 py-0.5 align-middle text-xs font-black uppercase tracking-tight text-[var(--afl-white)]">
          {speaker}
        </span>
      ) : null}
      {children}
    </div>

    {/* Tail */}
    <span
      aria-hidden="true"
      className="absolute -bottom-[14px] left-1/2 block h-0 w-0 -translate-x-1/2 border-l-[14px] border-r-[14px] border-t-[16px] border-l-transparent border-r-transparent border-t-[var(--afl-white)]"
    />
  </div>
)

export default SpeechBubble
