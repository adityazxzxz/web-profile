import HeroSection from './components/molecules/HeroSection'
import AboutSection from './components/molecules/AboutSection'
import PortfolioSection from './components/molecules/PortfolioSection'
import Navbar from './components/molecules/Navbar'
import ClientsSection from './components/molecules/ClientsSection'
import BlogSection from './components/molecules/BlogSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientsSection />
      <BlogSection />
    </main>
  )
}
