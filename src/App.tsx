import { Nav }         from './components/Nav/Nav'
import { Hero }        from './components/Hero/Hero'
import { Services }    from './components/Services/Services'
import { Manifesto }   from './components/Manifesto/Manifesto'
import { AboutStrip }  from './components/AboutStrip/AboutStrip'
import { Portfolio }   from './components/Portfolio/Portfolio'
import { Contact }     from './components/Contact/Contact'
import { Footer }      from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Manifesto />
        <AboutStrip />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
