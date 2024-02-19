import HeroSection from './components/molecules/HeroSection'
import AboutSection from './components/molecules/AboutSection'
import PortfolioSection from './components/molecules/PortfolioSection'
import Navbar from './components/molecules/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </main>
  )
}
