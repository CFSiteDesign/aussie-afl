import CodeChip from '@/components/CodeChip'
import FloatingProp from '@/components/FloatingProps'
import { HA_GIANG_URL } from '@/data/events'

const CodeSection = () => (
  <section id="code" className="relative border-b-4 border-border bg-black py-14 md:py-24">
    <FloatingProp
      name="footy"
      rotate={18}
      reverse
      className="-top-12 left-1/2 hidden w-24 -translate-x-1/2 lg:block xl:w-28"
    />

    <div className="mx-auto max-w-4xl px-4 text-center md:px-10">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[hsl(var(--aussie-gold))] md:text-sm">
        Don't forget
      </p>

      <h2 className="mt-4 font-display text-[clamp(2.4rem,7.5vw,5.5rem)] leading-[0.88] text-white">
        Enter this at
        <br />
        checkout
      </h2>

      <div className="mt-7 flex justify-center md:mt-9">
        <CodeChip size="lg" />
      </div>

      <p className="mx-auto mt-7 max-w-2xl text-base font-bold leading-relaxed text-white/85 md:mt-9 md:text-xl">
        Add the code to any AFL Grand Final ticket to secure your spot at an{' '}
        <strong className="text-[hsl(var(--aussie-gold))]">Aussies In table</strong> — it is also
        how Aussies In tracks bookings, so the crew knows exactly who is coming.
      </p>

      <p className="mx-auto mt-5 max-w-2xl border-4 border-white/25 p-4 text-sm font-bold text-white/70 md:text-base">
        The one exception:{' '}
        <a
          href={HA_GIANG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-black text-[hsl(var(--aussie-gold))] underline decoration-2 underline-offset-4"
        >
          the Ha Giang Loop package
        </a>{' '}
        is attributed to Aussies In already — no code needed there.
      </p>
    </div>
  </section>
)

export default CodeSection
