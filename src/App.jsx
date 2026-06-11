import { useEffect, useState } from 'react'
import ParticlesBackground from './components/ParticlesBackground.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Professional scroll reveal system: adds animation only when content enters the viewport.
    const revealTargets = document.querySelectorAll(
      '.section-padding, .modern-card, .timeline-item, .service-card, .testimonial-card, .skills-grid span, .about-info-item, .stats div'
    )

    revealTargets.forEach((target, index) => {
      target.classList.add('reveal-on-scroll')
      target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 28}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -35px 0px' }
    )

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ParticlesBackground />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
