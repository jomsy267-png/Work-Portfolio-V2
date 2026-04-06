import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ClientsSection from '@/components/sections/ClientsSection'
import WorkSection from '@/components/sections/WorkSection'
import ServicesSection from '@/components/sections/ServicesSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <div className="h-px bg-white/[0.15] max-w-[1280px] mx-auto" />
      <ClientsSection />
      <div className="h-px bg-white/[0.15] max-w-[1280px] mx-auto" />
      <WorkSection />
      <div className="h-px bg-white/[0.15] max-w-[1280px] mx-auto" />
      <ServicesSection />
      <Footer />
    </main>
  )
}
