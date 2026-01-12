// src/app/page.tsx
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Footer />
    </>
  )
}
