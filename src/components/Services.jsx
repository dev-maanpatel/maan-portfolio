import { services } from '../data/portfolio.js'

function Services() {
  return (
    <section id="services" className="section-padding alt-bg">
      <div className="container">
        <p className="section-label">Services</p>
        <h2 className="section-title">What I can do</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service}>
              <b>0{index + 1}</b>
              <h3>{service}</h3>
              <p>Clean code, attractive design and fully responsive output for all devices.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
