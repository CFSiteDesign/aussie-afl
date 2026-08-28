import crewImage from '@/assets/mm-crew-sunset.jpg'
import partyImage from '@/assets/mm-boat-party.jpg'
import matesImage from '@/assets/mm-ha-giang-mates.jpg'

const STEPS = [
  {
    n: '01',
    title: 'Pick your hostel',
    body: 'Find the Mad Monkey you will be at on the 26th. Unlimited drinks, or unlimited drinks and a parmi.',
    image: crewImage,
    alt: 'A group of Mad Monkey travellers walking together with drinks at sunset',
  },
  {
    n: '02',
    title: 'Put the code in',
    body: 'AUSSIESIN at checkout. That is what puts you on an Aussies In table instead of on your own.',
    image: partyImage,
    alt: 'Travellers dancing with drinks at a Mad Monkey boat party',
  },
  {
    n: '03',
    title: 'Turn up. Stay out.',
    body: 'Green and gold, big screen, siren goes, nobody goes home. You will leave with a new crew.',
    image: matesImage,
    alt: 'Two Mad Monkey travellers hugging on a viewpoint over the Ha Giang mountains',
  },
]

const HowItWorksSection = () => (
  <section className="border-b-4 border-[var(--mm-black)] bg-[var(--mm-paper)] py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-12">
      <h2 className="font-display text-[clamp(2.2rem,7vw,5.2rem)] text-[var(--mm-black)]">
        How it works
      </h2>

      <div className="mt-10 grid gap-7 md:mt-14 md:grid-cols-3 md:gap-8">
        {STEPS.map((step) => (
          <article
            key={step.n}
            className="mm-shadow flex flex-col border-4 border-[var(--mm-black)] bg-[var(--mm-bone)]"
          >
            <img
              src={step.image}
              alt={step.alt}
              className="mm-photo h-52 w-full border-b-4 border-[var(--mm-black)] object-cover md:h-60"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5 md:p-7">
              <span className="font-display text-4xl text-[var(--mm-black)] md:text-5xl">
                {step.n}
              </span>
              <h3 className="font-display mt-3 text-xl text-[var(--mm-black)] md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--mm-black)]/75 md:text-base">
                {step.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorksSection
