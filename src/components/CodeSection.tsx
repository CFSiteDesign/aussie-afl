import CodeChip from '@/components/CodeChip'
import FloatingProp from '@/components/FloatingProps'
import AllInSticker from '@/components/brand/AllInSticker'
import { CornerWordmark } from '@/components/brand/Wordmark'
import { HA_GIANG_URL } from '@/data/events'

const CodeSection = () => (
  <section
    id="code"
    className="relative border-b-4 border-[var(--mm-black)] bg-[var(--mm-green)] py-16 pb-24 md:py-24 md:pb-32"
  >
    <FloatingProp
      name="footy"
      rotate={18}
      reverse
      className="-top-12 left-1/2 hidden w-24 -translate-x-1/2 lg:block xl:w-28"
    />

    <div className="mx-auto max-w-4xl px-5 text-center md:px-12">
      <p className="text-[0.7rem] font-black uppercase tracking-[0.35em] text-[var(--mm-black)] md:text-xs">
        Do not forget this bit
      </p>

      <h2 className="font-display mt-5 text-[clamp(2.2rem,7.5vw,5.4rem)] text-[var(--mm-black)]">
        Put this in
        <br />
        at checkout
      </h2>

      <div className="mt-8 flex justify-center md:mt-10">
        <CodeChip size="lg" />
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-relaxed text-[var(--mm-black)] md:mt-10 md:text-xl">
        Add it to any AFL Grand Final ticket and you are on an Aussies In table. It is also how
        Aussies In sees who is coming, so nobody turns up to a room full of strangers.
      </p>

      <p className="mx-auto mt-6 max-w-2xl border-4 border-[var(--mm-black)] p-4 text-sm font-semibold text-[var(--mm-black)] md:text-base">
        One exception:{' '}
        <a
          href={HA_GIANG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-black underline decoration-4 underline-offset-4"
        >
          the Ha Giang Loop package
        </a>{' '}
        is already attributed to Aussies In. No code there.
      </p>

      <AllInSticker className="mx-auto mt-10 w-28 md:mt-14 md:w-36" rotate={-6} />
    </div>

    <CornerWordmark tone="dark" />
  </section>
)

export default CodeSection
