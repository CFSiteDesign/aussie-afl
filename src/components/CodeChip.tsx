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
      className={`group inline-flex items-center gap-2 border-border bg-[hsl(var(--aussie-gold))] font-black uppercase tracking-tight text-black transition-transform hover:-translate-y-0.5 ${
        isLarge
          ? 'border-4 px-5 py-3 text-2xl brutalist-shadow md:px-7 md:py-4 md:text-4xl'
          : 'border-2 px-1.5 py-0 my-0.5 align-middle text-[0.95em] brutalist-shadow-sm'
      }`}
    >
      {AUSSIES_IN_CODE}
      {copied ? (
        <Check className={isLarge ? 'h-6 w-6' : 'h-3.5 w-3.5'} aria-hidden="true" />
      ) : (
        <Copy
          className={`${isLarge ? 'h-6 w-6' : 'h-3.5 w-3.5'} opacity-50 transition-opacity group-hover:opacity-100`}
          aria-hidden="true"
        />
      )}
    </button>
  )
}

export default CodeChip
