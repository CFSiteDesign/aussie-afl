import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { AUSSIES_IN_CODE } from '@/data/events'

type CodeChipProps = {
  /** `lg` is used for the standalone code callout; `sm` sits inline in body copy. */
  size?: 'sm' | 'lg'
}

/** The AUSSIESIN discount code, click-to-copy. */
const CodeChip = ({ size = 'sm' }: CodeChipProps) => {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  // Clear the pending reset if the chip unmounts mid-countdown.
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(AUSSIES_IN_CODE)
    } catch {
      // Clipboard is unavailable (insecure context, denied permission). The code
      // is on screen either way, so fall through and still show confirmation.
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  const isLarge = size === 'lg'

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `Copied code ${AUSSIES_IN_CODE}` : `Copy code ${AUSSIES_IN_CODE}`}
      className={`group inline-flex items-center gap-2 bg-[var(--afl-red)] font-black uppercase tracking-tight text-[var(--afl-white)] transition-transform hover:-translate-y-0.5 ${
        isLarge
          ? 'afl-chip afl-glow-strong px-6 py-3 text-2xl md:px-9 md:py-4 md:text-4xl'
          : 'my-0.5 rounded-md px-2 py-0.5 align-middle text-[0.9em]'
      }`}
    >
      {AUSSIES_IN_CODE}
      {copied ? (
        <Check className={isLarge ? 'h-6 w-6' : 'h-3.5 w-3.5'} aria-hidden="true" />
      ) : (
        <Copy
          className={`${isLarge ? 'h-6 w-6' : 'h-3.5 w-3.5'} opacity-60 transition-opacity group-hover:opacity-100`}
          aria-hidden="true"
        />
      )}
    </button>
  )
}

export default CodeChip
