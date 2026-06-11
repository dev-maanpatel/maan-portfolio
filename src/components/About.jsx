import { useEffect, useRef, useState } from 'react'

const info = [
  ['Birthday', '14 April 2003'],
  ['Age', '22'],
  ['Website', 'maan-portfolio.dev'],
  ['Degree', 'Bachelor'],
  ['Phone', '+91 63 51 97 19 18'],
  ['Email', 'dev.maanpatel1@gmail.com'],
  ['City', 'Surat, Gujarat'],
  ['Freelance', 'Available']
]

const stats = [
  { label: 'Projects', value: 15, suffix: '+' },
  { label: 'Skills', value: 10, suffix: '+' },
  { label: 'Responsive', value: 100, suffix: '%' }
]

function CountUpStat({ value, suffix, label }) {
  const statRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = statRef.current
    if (!element) return undefined

    // Starts the counter only when the stat card is visible, keeping page load smooth.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let frameId
        const duration = 950
        const startTime = performance.now()

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(value * easedProgress))

          if (progress < 1) {
            frameId = requestAnimationFrame(animate)
          }
        }

        frameId = requestAnimationFrame(animate)
        observer.unobserve(element)

        return () => cancelAnimationFrame(frameId)
      },
      { threshold: 0.45 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={statRef} className="stat-card">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section-padding about-modern-section">
      <div className="container about-modern-grid">
        <div className="about-intro reveal-left">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Web Developer</h2>
          <p className="about-lead">
            I&apos;m a passionate web developer with experience in designing and developing dynamic websites. I create seamless, interactive and performance-driven web applications tailored to user needs.
          </p>
        </div>

        <div className="about-details-card reveal-right">
          <div className="about-info-list">
            {info.map(([label, value]) => (
              <div className="about-info-item" key={label}>
                <span className="arrow">›</span>
                <strong>{label}:</strong>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <p className="about-description">
            I focus on clean code, responsive design, smooth animations and practical project development. My goal is to build websites that look professional, load fast and work perfectly on every device.
          </p>

          {/* Professional achievement counters with scroll-based animation. */}
          <div className="stats" aria-label="Portfolio highlights">
            {stats.map((item) => (
              <CountUpStat key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
