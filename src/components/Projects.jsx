import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio.js'

const filters = ['All', 'React', 'Website', 'Section', 'JavaScript']

function Projects() {
  const [active, setActive] = useState('All')
  const visibleProjects = useMemo(() => active === 'All' ? projects : projects.filter((p) => p.category === active), [active])

  return (
    <section id="projects" className="section-padding alt-bg">
      <div className="container">
        <div className="section-head center">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">My Real Projects</h2>
          <p className="section-subtitle">Project preview with clean cards, GitHub source and live demo buttons.</p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter) => (
            <button className={active === filter ? 'active' : ''} key={filter} onClick={() => setActive(filter)}>{filter}</button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card modern-card" key={project.title}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-body">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.desc}</span>
                <div className="tech-list">{project.tech.map((tech) => <small key={tech}>{tech}</small>)}</div>
                <div className="project-actions">
                  <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">Live Link</a>
                  <a className="btn secondary" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
