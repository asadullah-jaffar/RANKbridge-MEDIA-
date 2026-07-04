import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import WhoWeHelp from '../components/WhoWeHelp'
import QualityStandards from '../components/QualityStandards'
import Founder from '../components/Founder'
import FAQ from '../components/FAQ'
import ConsultationSection from '../components/ConsultationSection'
import CTASection from '../components/CTASection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <WhyUs />
      <WhoWeHelp />
      <QualityStandards />
      <Founder />
      <FAQ />
      <ConsultationSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
