import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ticket, Calendar, Beer, Music, PartyPopper, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/afl-hero.jpg";

const HA_GIANG_LINK = "https://madmonkeyhanoi.rezdy.com/777337/the-ha-giang-loop-tour-4d-3n-easy-rider-hanoi-grand-final-afl-event-with-all-you-can-drink-package";
const HANOI_PARMI_LINK = "https://madmonkeyhostels.com/tours-events/afl-grand-final-hanoi-all-you-can-drink-chicken-parmi";
const POSTER_ASSETS_LINK = "https://www.canva.com/folder/FAHTLxTasjA";

const vietnamEvents = [
  {
    city: "Hanoi",
    name: "Unlimited Drinks + Parmi",
    href: HANOI_PARMI_LINK,
    available: true,
  },
  {
    city: "Hanoi",
    name: "Unlimited Drinks",
    href: "#",
    available: false,
  },
  {
    city: "Hoi An",
    name: "Unlimited Drinks + Parmi",
    href: "#",
    available: false,
  },
  {
    city: "Hoi An",
    name: "Unlimited Drinks",
    href: "#",
    available: false,
  },
];

const confirmedLocations = [
  { city: "Hanoi", country: "Vietnam", hasLink: true },
  { city: "Hoi An", country: "Vietnam", hasLink: false },
  { city: "Bangkok", country: "Thailand", hasLink: false },
  { city: "Manila", country: "Philippines", hasLink: false },
  { city: "Siem Reap", country: "Cambodia", hasLink: false },
  { city: "Phnom Penh", country: "Cambodia", hasLink: false },
  { city: "Luang Prabang", country: "Laos", hasLink: false },
  { city: "Vang Vieng", country: "Laos", hasLink: false },
  { city: "Chiang Mai", country: "Thailand", hasLink: false },
  { city: "Pai", country: "Thailand", hasLink: false },
];

const Index = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("AUSSIESIN");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-[hsl(var(--aussie-green))]">
            MAD MONKEY
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#ha-giang" className="transition-colors hover:text-[hsl(var(--aussie-green))]">
              Ha Giang Loop
            </a>
            <a href="#events" className="transition-colors hover:text-[hsl(var(--aussie-green))]">
              AFL Events
            </a>
            <a href="#locations" className="transition-colors hover:text-[hsl(var(--aussie-green))]">
              Locations
            </a>
          </nav>
          <Button asChild size="sm" className="bg-[hsl(var(--aussie-green))] text-white hover:bg-[hsl(var(--aussie-green))]/90">
            <a href={HA_GIANG_LINK} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Backpackers watching AFL Grand Final at a Mad Monkey hostel rooftop bar in Southeast Asia"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--aussie-navy))]/90 via-[hsl(var(--aussie-navy))]/70 to-transparent" />
        </div>

        <div className="container relative z-10 flex min-h-[70vh] flex-col justify-center py-20 md:min-h-[80vh]">
          <div className="max-w-2xl space-y-6">
            <Badge className="w-fit bg-[hsl(var(--aussie-gold))] px-3 py-1 text-sm font-bold text-[hsl(var(--aussie-navy))] hover:bg-[hsl(var(--aussie-gold))]">
              <Calendar className="mr-1.5 h-4 w-4" />
              26 September 2026
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Aussies In x Mad Monkey
              <span className="block text-[hsl(var(--aussie-gold))]">AFL Grand Final</span>
            </h1>

            <p className="text-lg text-white/90 md:text-xl">
              One link. Every AFL Grand Final event across Southeast Asia. Watch the game with your new Aussie mates, then keep the party going on the road.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[hsl(var(--aussie-gold))] px-6 text-base font-bold text-[hsl(var(--aussie-navy))] hover:bg-[hsl(var(--aussie-gold))]/90">
                <a href={HA_GIANG_LINK} target="_blank" rel="noopener noreferrer">
                  Book the Ha Giang Loop
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur hover:bg-white/20 hover:text-white">
                <a href="#events">
                  Find an Event
                </a>
              </Button>
            </div>

            {/* Aussies In bubble */}
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-[hsl(var(--aussie-gold))]/40 bg-[hsl(var(--aussie-gold))]/10 px-4 py-2 text-white backdrop-blur-sm">
              <span className="rounded-full bg-[hsl(var(--aussie-green))] px-2.5 py-0.5 text-xs font-bold text-white">
                Aussies In
              </span>
              <span className="text-sm">Use code <strong className="text-[hsl(var(--aussie-gold))]">AUSSIESIN</strong> at checkout to sit at an Aussies In table</span>
              <button
                onClick={copyCode}
                className="inline-flex items-center gap-1 rounded-md p-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Copy AUSSIESIN code"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ha Giang Loop — main hero package */}
      <section id="ha-giang" className="bg-[hsl(var(--aussie-cream))] py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge className="mb-3 bg-[hsl(var(--aussie-green))] px-3 py-1 text-sm font-bold text-white hover:bg-[hsl(var(--aussie-green))]">
                Exclusive to Aussies In
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-[hsl(var(--aussie-navy))] md:text-5xl">
                Ha Giang Loop Package
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">27 September 2026</p>
            </div>

            <Card className="overflow-hidden border-[hsl(var(--aussie-green))]/20 shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-[hsl(var(--aussie-green))] p-8 text-white md:p-10">
                  <h3 className="text-2xl font-bold md:text-3xl">4D/3N Easy Rider Adventure</h3>
                  <p className="mt-4 text-white/90">
                    Watch the AFL Grand Final on the 26th in Hanoi with your new Aussie mates, enjoy the unlimited drinks package, then head off together on a 4D/3N Ha Giang Loop adventure.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <Beer className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--aussie-gold))]" />
                      Unlimited drinks package on Grand Final night
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--aussie-gold))]" />
                      4 days / 3 nights exploring Ha Giang
                    </li>
                    <li className="flex items-start gap-2">
                      <Music className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--aussie-gold))]" />
                      Travel with your new AFL crew
                    </li>
                  </ul>
                  <div className="mt-6 rounded-lg bg-white/10 p-4 text-sm text-white/90">
                    <strong>No code needed</strong> — this product is directly attributed to Aussies In.
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Departs</p>
                    <p className="text-2xl font-bold text-[hsl(var(--aussie-navy))]">27 September 2026</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Includes</p>
                    <p className="text-lg text-foreground">AFL Grand Final night in Hanoi + Ha Giang Loop tour</p>
                  </div>
                  <Button asChild size="lg" className="w-full bg-[hsl(var(--aussie-gold))] text-base font-bold text-[hsl(var(--aussie-navy))] hover:bg-[hsl(var(--aussie-gold))]/90">
                    <a href={HA_GIANG_LINK} target="_blank" rel="noopener noreferrer">
                      Book the Aussies In Ha Giang Loop
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AFL Grand Final events */}
      <section id="events" className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[hsl(var(--aussie-navy))] md:text-5xl">
              AFL Grand Final Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every Mad Monkey AFL Grand Final party in one place. Vietnam links are live now — more locations coming soon.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[hsl(var(--aussie-green))]">
              <MapPin className="h-5 w-5" />
              Vietnam
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {vietnamEvents.map((event, idx) => (
                <Card key={idx} className="flex flex-col border-border/60 transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{event.city}</CardTitle>
                    <CardDescription>{event.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    {event.available ? (
                      <Button asChild size="sm" className="w-full bg-[hsl(var(--aussie-green))] text-white hover:bg-[hsl(var(--aussie-green))]/90">
                        <a href={event.href} target="_blank" rel="noopener noreferrer">
                          <Ticket className="mr-1.5 h-4 w-4" />
                          Book Tickets
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confirmed locations */}
      <section id="locations" className="border-t border-border/60 bg-secondary py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[hsl(var(--aussie-navy))] md:text-4xl">
              Confirmed Locations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              More Mad Monkey locations across Southeast Asia joining the party.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {confirmedLocations.map((loc, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-lg border border-border/60 bg-background p-5 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <MapPin className="mb-2 h-6 w-6 text-[hsl(var(--aussie-green))]" />
                <p className="font-bold text-foreground">{loc.city}</p>
                <p className="text-sm text-muted-foreground">{loc.country}</p>
                {loc.hasLink ? (
                  <Badge className="mt-3 bg-[hsl(var(--aussie-green))] text-white hover:bg-[hsl(var(--aussie-green))]">Live</Badge>
                ) : (
                  <Badge variant="outline" className="mt-3">Coming soon</Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poster assets + code reminder */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[hsl(var(--aussie-navy))] text-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <PartyPopper className="mb-4 h-10 w-10 text-[hsl(var(--aussie-gold))]" />
                <h2 className="text-2xl font-extrabold md:text-3xl">Promote the Party</h2>
                <p className="mt-3 text-white/80">
                  Grab posters, stories, and shareable assets from the Canva folder to spread the word in your group chats and socials.
                </p>
                <Button asChild size="lg" className="mt-6 bg-[hsl(var(--aussie-gold))] font-bold text-[hsl(var(--aussie-navy))] hover:bg-[hsl(var(--aussie-gold))]/90">
                  <a href={POSTER_ASSETS_LINK} target="_blank" rel="noopener noreferrer">
                    Event Poster Assets
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-8 md:border-t-0 md:border-l md:p-12">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Aussies In Code</p>
                <p className="mt-2 text-4xl font-black tracking-wider text-[hsl(var(--aussie-gold))]">AUSSIESIN</p>
                <p className="mt-4 text-white/80">
                  Enter <strong className="text-white">AUSSIESIN</strong> at checkout on any AFL event ticket to secure your spot at an Aussies In table — so we can track bookings and keep the crew together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mad Monkey Hostels. Proudly partnered with Aussies In.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href={HA_GIANG_LINK} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--aussie-green))] hover:underline">
              Ha Giang Loop
            </a>
            <a href="#events" className="text-[hsl(var(--aussie-green))] hover:underline">
              AFL Events
            </a>
            <a href={POSTER_ASSETS_LINK} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--aussie-green))] hover:underline">
              Assets
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
