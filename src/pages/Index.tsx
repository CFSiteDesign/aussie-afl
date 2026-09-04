import HeroSection from '@/components/HeroSection'
import CodeMarquee from '@/components/CodeMarquee'
import HaGiangSection from '@/components/HaGiangSection'
import EventSelector from '@/components/EventSelector'
import FooterSection from '@/components/FooterSection'

/**
 * Section order follows the brief: hero with the code note up top, the
 * Ha Giang Loop package first, then every AFL Grand Final event.
 */
const Index = () => (
  <div className="relative flex min-h-screen flex-col">
    <HeroSection />
    <CodeMarquee />
    <HaGiangSection />
    <EventSelector />
    <FooterSection />
  </div>
)

export default Index
