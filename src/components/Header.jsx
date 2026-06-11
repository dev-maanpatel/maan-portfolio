import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio.js'

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const getSectionName = (id) => navLinks.find((item) => item.toLowerCase() === id) || 'Home'

    const onScroll = () => {
      const sections = navLinks
        .map((item) => document.getElementById(item.toLowerCase()))
        .filter(Boolean)

      let bestSection = 'Home'
      let bestScore = Number.POSITIVE_INFINITY
      const headerGap = 115

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top - headerGap)
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= headerGap && distance < bestScore) {
          bestScore = distance
          bestSection = getSectionName(section.id)
        }
      })

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
        bestSection = 'Contact'
      }

      setActiveSection(bestSection)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goToSection = (section) => {
    const target = document.getElementById(section.toLowerCase())
    if (!target) return
    const y = target.getBoundingClientRect().top + window.scrollY - 92
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActiveSection(section)
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <button className="brand" onClick={() => goToSection('Home')}>
          <span>M</span> Maan Patel
        </button>

        <nav className={open ? 'nav active' : 'nav'}>
          {navLinks.map((item) => (
            <button className={activeSection === item ? 'active-link' : ''} key={item} onClick={() => goToSection(item)}>
              {item}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Change theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
