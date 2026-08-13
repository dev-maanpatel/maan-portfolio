import { certifications, education, experience, resumeSummary, timeline } from '../data/portfolio.js'

function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container">
        <div className="section-head center">
          <p className="section-label">Resume</p>
          <h2 className="section-title">Professional background and learning journey.</h2>
          <p className="section-subtitle">A clean resume section with summary, education, experience and web development growth.</p>
        </div>

        <div className="resume-layout">
          <aside className="resume-panel resume-summary-card">
            <p className="section-label">Summary</p>
            <h3>{resumeSummary.name}</h3>
            <p className="resume-summary-text">{resumeSummary.text}</p>
            <ul className="resume-contact-list">
              <li>{resumeSummary.address}</li>
              <li>{resumeSummary.phone}</li>
              <li>{resumeSummary.email}</li>
            </ul>
            <div className="resume-actions">
              <a href="/docs/Maan-Patel-CV.pdf" target="_blank" rel="noreferrer" className="btn secondary">View Resume</a>
              <a href="/docs/Maan-Patel-CV.pdf" download className="btn primary">Download CV</a>
            </div>
          </aside>

          <div className="">
            <div className="resume-column">
              <h3 className="resume-column-title">Education</h3>
              <div className="timeline resume-line">
                {education.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <div className="resume-column">
                <h3 className="resume-column-title">Certifications</h3>
                <div className="timeline resume-line">
                    {certifications.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p>{item.desc}</p>
                  </article>
                ))}
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="resume-column-title">Experience</h3>
              <div className="timeline resume-line">
                {experience.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>

              <h3 className="resume-column-title resume-growth-title">Development Journey</h3>
              <div className="timeline resume-line compact-line">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
