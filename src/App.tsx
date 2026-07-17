import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useAOS } from './hooks/useAOS'

function App() {
  useAOS();

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="pt-32 pb-16">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
