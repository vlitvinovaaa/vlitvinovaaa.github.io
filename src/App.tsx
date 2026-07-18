import { ProgressBar } from './components/ProgressBar'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Cases } from './components/Cases'
import { HowIBuild } from './components/HowIBuild'
import { Services } from './components/Services'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <ProgressBar />
      <div className="orbs" aria-hidden="true">
        <i className="orb o1"></i>
        <i className="orb o2"></i>
        <i className="orb o3"></i>
      </div>
      <div className="grid-bg" aria-hidden="true"></div>
      <Nav />
      <Hero />
      <Cases />
      <HowIBuild />
      <Services />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
