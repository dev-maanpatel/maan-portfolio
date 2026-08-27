import { useEffect, useRef } from 'react'

function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let raf = 0
    let particles = []
    const mouse = { x: null, y: null }

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const count = Math.min(110, Math.floor((width * height) / 13000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 1.8 + 0.8
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      const dot = isLight ? 'rgba(28, 96, 150, .55)' : 'rgba(32, 227, 159, .72)'
      const line = isLight ? 'rgba(28, 96, 150, .16)' : 'rgba(71, 166, 255, .17)'
      ctx.fillStyle = dot

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.strokeStyle = line
            ctx.lineWidth = 1 - d / 130
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        if (mouse.x !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 170) {
            ctx.strokeStyle = isLight ? 'rgba(6, 182, 212, .24)' : 'rgba(32, 227, 159, .28)'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      })

      raf = requestAnimationFrame(draw)
    }

    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const leave = () => { mouse.x = null; mouse.y = null }
    resize(); draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />
}

export default ParticlesBackground
