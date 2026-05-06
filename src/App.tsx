import { Nav }              from './components/Nav/Nav'
import { Hero }             from './components/Hero/Hero'
import { Services }         from './components/Services/Services'
import { LegalConsulting }  from './components/LegalConsulting/LegalConsulting'
import { TechStrip }        from './components/TechStrip/TechStrip'
import { CodifyMethodology } from './components/CodifyMethodology/CodifyMethodology'
import { Manifesto }        from './components/Manifesto/Manifesto'
import { AboutStrip }       from './components/AboutStrip/AboutStrip'
import { Portfolio }        from './components/Portfolio/Portfolio'
import { Contact }          from './components/Contact/Contact'
import { FAQ }              from './components/FAQ/FAQ'
import { Footer }           from './components/Footer/Footer'
import { WhatsAppButton }   from './components/WhatsAppButton/WhatsAppButton'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <LegalConsulting />
        <TechStrip />
        <CodifyMethodology />
        <Manifesto />
        <Portfolio />
        <Contact />
        <AboutStrip />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
