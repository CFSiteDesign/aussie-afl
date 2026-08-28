import poolImage from '@/assets/pool-party.jpg'
import parmiImage from '@/assets/parmi.jpg'
import crowdImage from '@/assets/crowd.jpg'

const STEPS = [
  {
    n: '01',
    title: 'Pick your hostel',
    body: 'Find the Mad Monkey you will be at on Grand Final day and choose your ticket — unlimited drinks, or unlimited drinks with a chicken parmi.',
    image: poolImage,
    alt: 'Travellers relaxing around the pool at a Mad Monkey hostel in Southeast Asia',
  },
  {
    n: '02',
    title: 'Enter the code',
    body: 'Add AUSSIESIN at checkout. That is what puts you on an Aussies In table and lets the crew see who is coming.',
    image: parmiImage,
    alt: 'A chicken parmigiana with chips and salad beside two cold beers on a bar table',
  },
  {
    n: '03',
    title: 'Turn up in green & gold',
    body: 'Doors open early, the game goes up on the big screen, and the party keeps rolling long after the siren.',
    image: crowdImage,
    alt: 'A crowd of Australian travellers in green and gold celebrating in a tropical hostel bar',
  },
]

const HowItWorksSection = () => (
  <section className="border-b-4 border-border bg-white py-14 md:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-10">
      <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.88] text-black">
        How it works
      </h2>

      <div className="mt-9 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {STEPS.map((step) => (
          <article key={step.n} className="flex flex-col border-4 border-border brutalist-shadow">
            <img
              src={step.image}
              alt={step.alt}
              className="h-48 w-full border-b-4 border-border object-cover md:h-56"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5 md:p-7">
              <span className="font-display text-4xl leading-none text-[hsl(var(--aussie-green))] md:text-5xl">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm font-bold leading-relaxed text-black/75 md:text-base">
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
