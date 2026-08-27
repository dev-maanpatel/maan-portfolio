import { skills } from '../data/portfolio.js'

function Skills() {
  return (
    <section id="skills" className="section-padding alt-bg">
      <div className="container">
        <p className="section-label">My Skills</p>
        <h2 className="section-title">Technologies I use</h2>
        <div className="skills-grid">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  )
}

export default Skills
