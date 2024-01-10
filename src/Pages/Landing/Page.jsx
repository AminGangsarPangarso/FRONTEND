import { Element } from 'react-scroll'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import BenefitSection from './BenefitSection'
import PartnerSection from './PartnerSection'
import ProductSection from './ProductSection'
import FaqSection from './FaqSection'
import TestimonialSection from './TestimonialSection'

function Landing() {
  return (
    <div className='bg-[#f8eedc]'>
      <Element name='hero-section'>
        <HeroSection />
      </Element>
      <Element name='about-section' className='py-24 xl:py-36'>
        <AboutSection />
        <BenefitSection />
        <PartnerSection />
      </Element>
      <Element name='product-section'>
        <ProductSection />
        <TestimonialSection />
      </Element>
      <Element name='faq-section'>
        <FaqSection />
      </Element>
    </div>
  )
}

export default Landing
