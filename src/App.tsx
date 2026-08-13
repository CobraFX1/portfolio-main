import BackgroundEffects from './components/BackgroundEffects'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { useAOS } from './hooks/useAOS'
import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
  useAOS();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
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
