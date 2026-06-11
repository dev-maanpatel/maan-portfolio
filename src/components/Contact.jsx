import { useState } from 'react'
import { socials } from '../data/portfolio.js'

const Icon = ({ type }) => {
  const icons = {
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
        <path d="M3.4 9.8h3.2V21H3.4V9.8Z" />
        <path d="M9.2 9.8h3.05v1.55h.05c.42-.8 1.48-1.75 3.05-1.75 3.26 0 3.86 2.15 3.86 4.95V21H16v-5.72c0-1.36-.02-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.03V21H8.7V9.8h.5Z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.58 5.04.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.18 10.18 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    )
  }
  return icons[type]
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Sending message...')

    try {
      const response = await fetch('https://formsubmit.co/ajax/dev.maanpatel1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New portfolio contact from ${form.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      })

      if (!response.ok) throw new Error('Message service failed')

      setStatus('✅ Message submitted successfully. You will receive it at dev.maanpatel1@gmail.com.')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('⚠️ Message ready. Your mail app will open as backup to send it to dev.maanpatel1@gmail.com.')
      window.location.href = `mailto:dev.maanpatel1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding alt-bg">
      <div className="container contact-grid">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something great.</h2>
          <p className="contact-text">Fill this form and your message will be sent/share directly to <b>dev.maanpatel1@gmail.com</b>. After submit, you will see a notification below the button.</p>

          <div className="social-icons-row" aria-label="Social media links">
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon type="instagram" /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon type="linkedin" /></a>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon type="github" /></a>
          </div>
        </div>
        <form className="contact-form modern-card" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
          <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {status && <p className="success notification-box">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
