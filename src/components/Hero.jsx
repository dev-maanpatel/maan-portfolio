import profileImg from '../assets/maan-developer-laptop.png'

function Hero() {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1 className="animated-name"><span>Maan</span> <span>Patel</span></h1>
          <h2>MERN Stack Developer</h2>
          <p className="hero-text">
            I build clean, responsive and stylish websites with particles background, modern UI, project showcases and practical coding logic.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Hire Me</a>
            <a href="/docs/Maan-Patel-CV.pdf" target="_blank" rel="noreferrer" className="btn ghost">View Resume</a>
          </div>
        </div>

        <div className="profile-card profile-card-with-bio developer-photo-card">
          <div className="profile-glow"></div>
          <div className="profile-photo-wrap">
            <img src={profileImg} alt="Maan Patel working on laptop" className="profile-photo developer-photo" />
          </div>
          <div className="profile-bio">
            <h3>Maan Patel</h3>
            <p>
              Passionate web developer from Surat creating modern, responsive and user-friendly websites with React, JavaScript and clean UI design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
