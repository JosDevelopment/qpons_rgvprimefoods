import { useEffect, useState } from 'react'
import './App.css'
import HomeHero from './components/home/HomeHero'
import HomeServices from './components/home/HomeServices'
import HomeGallary from './components/home/HomeGallary'
import HomePricing from './components/home/HomePricing'
import HomeFaq from './components/home/HomeFAQ'
import { getHomeContent } from './lib/content/home'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FALLBACK_FOOTER_CONTENT, FALLBACK_HEADER_CONTENT } from './constants/content/GlobalConstants'
import HomeContact from './components/home/HomeContact'

type HomeContent = Awaited<ReturnType<typeof getHomeContent>>

function App() {
  const [content, setContent] = useState<HomeContent | null>(null)

  useEffect(() => {
    getHomeContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {
    return <div className="text-center py-10">Cargando…</div>
  }

  return (
    <>
      <Header content={FALLBACK_HEADER_CONTENT} />

      <div className="relative overflow-hidden min-h-screen bg-[url('/img/wood_bg.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/70 pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <HomeHero content={content.homeHeroContent} />
          <HomeServices content={content.homeServicesContent} />
        </div>
      </div>

      <HomeGallary content={content.homeGallaryContent} />

      <div className="relative overflow-hidden min-h-screen bg-[url('/img/wood_bg.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/70 pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <HomePricing content={content.homePricingContent} />
        </div>
      </div>

      <HomeFaq content={content.homeFAQContent} />
      <HomeContact content={content.homeContactContent} />
      <Footer content={FALLBACK_FOOTER_CONTENT} />
    </>
  )
}

export default App
