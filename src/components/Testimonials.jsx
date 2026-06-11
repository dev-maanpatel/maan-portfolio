import { testimonials } from '../data/portfolio.js'

function Testimonials() {
  return (
    <section id="testimonials" className="section-padding alt-bg">
      <div className="container">
        <div className="section-head center">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Feedback that reflects my working style.</h2>
          <p className="section-subtitle">Professional feedback style cards for portfolio presentation and client trust.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote-mark">“</div>
              <p>{item.text}</p>
              <div className="testimonial-author">
                <span>{item.name.charAt(0)}</span>
                <div>
                  <h3>{item.name}</h3>
                  <small>{item.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
