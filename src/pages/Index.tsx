import HeroSection from '@/components/HeroSection'
import CodeMarquee from '@/components/CodeMarquee'
import HaGiangSection from '@/components/HaGiangSection'
import EventSelector from '@/components/EventSelector'
import HowItWorksSection from '@/components/HowItWorksSection'
import CodeSection from '@/components/CodeSection'
import FooterSection from '@/components/FooterSection'

const Index = () => (
  <div className="relative flex min-h-screen flex-col">
    <HeroSection />
    <CodeMarquee />
    <HaGiangSection />
    <EventSelector />
    <HowItWorksSection />
    <CodeSection />
    <FooterSection />
  </div>
)

export default Index
