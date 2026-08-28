type SpeechBubbleProps = {
  children: React.ReactNode
  /** Speaker label sitting in the bubble's leading pill. */
  speaker?: string
  className?: string
}

/**
 * Pill speech-bubble brand device. Fully rounded by design — this is the brand
 * shape, not a default rounded-corner box.
 */
const SpeechBubble = ({ children, speaker, className = '' }: SpeechBubbleProps) => (
  <div className={`relative ${className}`}>
    <div className="mm-shadow relative rounded-[999px] border-4 border-[var(--mm-black)] bg-[var(--mm-paper)] px-6 py-5 md:px-9 md:py-7">
      {speaker ? (
        <span className="mr-2 inline-block rounded-[999px] border-2 border-[var(--mm-black)] bg-[var(--mm-green)] px-3 py-0.5 align-middle text-xs font-black uppercase tracking-tight text-[var(--mm-black)]">
          {speaker}
        </span>
      ) : null}
      {children}
    </div>

    {/* Tail: outer black wedge with the paper wedge sitting just inside it. */}
    <span
      aria-hidden="true"
      className="absolute -bottom-[21px] left-12 block h-0 w-0 border-l-[16px] border-r-[16px] border-t-[22px] border-l-transparent border-r-transparent border-t-[var(--mm-black)]"
    />
    <span
      aria-hidden="true"
      className="absolute -bottom-[12px] left-[54px] block h-0 w-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[var(--mm-paper)]"
    />
  </div>
)

export default SpeechBubble
