import React from 'react'
import NavRail from './components/NavRail'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import HeroFigure from './components/HeroFigure'
import AnimateOnView from './components/AnimateOnView'

export default function App() {
  return (
    <div className="app">
      <NavRail />
      <main className="content">
        <section id="hero" className="section hero">
          <div className="hero-left">
            <p className="eyebrow">UC SAN DIEGO · COMPUTER ENGINEERING · CLASS OF 2030</p>
            <h1 className="display">Anish Baghel</h1>
            <p className="subhead">I build close to the hardware. A CPU simulator and C compiler from scratch. Full-stack web apps with real users.</p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">View Projects →</a>
              <a href="#contact" className="btn btn-ghost">Contact</a>
            </div>
          </div>
          <HeroFigure />
        </section>

        <section id="about" className="section">
          <AnimateOnView>
            <h2>About & Education</h2>
            <p>I'm a first-year Computer Engineering student at UCSD, graduating in 2030. I like computer architecture, C, and microcontrollers. Before UCSD I did competitive programming and published explainable AI research.</p>
          </AnimateOnView>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <Projects />
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <Leadership />
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <Skills />
        </section>

        <section id="awards" className="section">
          <h2>Awards</h2>
          <Awards />
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>If you'd like to collaborate or have questions, email me at <a href="mailto:anbaghel@ucsd.edu">anbaghel@ucsd.edu</a>.</p>
          <p>
            <a href="https://github.com/Abagel-coder" target="_blank" rel="noopener noreferrer">GitHub</a> ·
            <a href="https://www.linkedin.com/in/anish-baghel/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </section>
      </main>
    </div>
  )
}
