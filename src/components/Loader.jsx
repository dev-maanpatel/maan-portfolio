import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [line, setLine] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const messages = [
    '> initializing portfolio...',
    '> loading projects...',
    '> connecting skills...',
    '> preparing experience...',
    '> system ready.'
  ]

  useEffect(() => {
    const duration = 2600
    const start = performance.now()
    let raf

    const animate = (now) => {
      const elapsed = now - start
      const value = Math.min(100, Math.round((elapsed / duration) * 100))

      setProgress(value)

      if (value < 20) setLine(0)
      else if (value < 40) setLine(1)
      else if (value < 65) setLine(2)
      else if (value < 90) setLine(3)
      else setLine(4)

      if (elapsed < duration) {
        raf = requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setLeaving(true)

          setTimeout(() => {
            onComplete?.()
          }, 700)
        }, 250)
      }
    }

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [onComplete])

  return (
    <div
      className={`terminal-loader ${leaving ? 'terminal-loader-exit' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="terminal-grid" />
      <div className="terminal-glow terminal-glow-one" />
      <div className="terminal-glow terminal-glow-two" />

      <div className="terminal-loader-inner">

        <div className="terminal-top">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="terminal-path">
            maan@portfolio:~
          </span>
        </div>

        <div className="terminal-body">

          <div className="terminal-logo">
            <span>&lt;</span>
            MP
            <span>/&gt;</span>
          </div>

          <h1 className="terminal-name">
            MAAN PATEL
          </h1>

          <p className="terminal-role">
            MERN STACK DEVELOPER
          </p>

          <div className="terminal-lines">
            {messages.map((message, index) => (
              <p
                key={message}
                className={index <= line ? 'terminal-line-active' : ''}
              >
                {message}
                {index === line && (
                  <span className="terminal-cursor">_</span>
                )}
              </p>
            ))}
          </div>

          <div className="terminal-progress">

            <div className="terminal-progress-info">
              <span>
                {progress === 100
                  ? 'WELCOME'
                  : 'LOADING SYSTEM'}
              </span>

              <strong>
                {String(progress).padStart(2, '0')}%
              </strong>
            </div>

            <div className="terminal-progress-track">
              <div
                className="terminal-progress-fill"
                style={{
                  width: `${progress}%`
                }}
              />
            </div>

          </div>
        </div>
      </div>

      <div className="terminal-bottom-left">
        REACT • NODE • MONGODB
      </div>

      <div className="terminal-bottom-right">
        PORTFOLIO / 2026
      </div>
    </div>
  )
}