import allInSticker from '@/assets/all-in-sticker.png'
import CodeChip from '@/components/CodeChip'
import { HA_GIANG_URL } from '@/data/events'

/** The code note: every ticket link carries AUSSIESIN already, so this reassures rather than instructs. */
const CodeSection = () => (
  <section id="code" className="relative bg-[var(--afl-mint)] py-16 pb-20 text-[var(--afl-maroon-deep)] md:py-24">
    <div className="mx-auto max-w-4xl px-5 text-center md:px-12">
      <p className="text-[0.7rem] font-black uppercase tracking-[0.35em] md:text-xs">
        Nothing to type
      </p>

      <h2 className="font-display mt-5 text-[clamp(2.4rem,7.5vw,5.4rem)] text-[var(--afl-red)]">
        Your code is
        <br />
        built in
      </h2>

      <div className="mt-8 flex justify-center md:mt-10">
        <CodeChip size="lg" />
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-relaxed md:mt-10 md:text-xl">
        Every ticket link on this page already carries the Aussies In code, so booking through
        it puts you on an Aussies In table and lets the crew see who is coming. If a link ever
        drops it, the code above goes in at checkout.
      </p>

      <p className="mx-auto mt-6 max-w-2xl rounded-[var(--radius)] border-[3px] border-[var(--afl-maroon-deep)] p-4 text-sm font-semibold md:text-base">
        One exception:{' '}
        <a
          href={HA_GIANG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-black text-[var(--afl-red)] underline decoration-2 underline-offset-4"
        >
          the Ha Giang Loop package
        </a>{' '}
        is attributed to Aussies In on its own. No code there either.
      </p>

      <img
        src={allInSticker}
        alt="ALL IN"
        className="mx-auto mt-10 w-28 -rotate-6 select-none md:mt-14 md:w-36"
        draggable={false}
        loading="lazy"
      />
    </div>
  </section>
)

export default CodeSection
