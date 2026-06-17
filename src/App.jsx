import React from 'react'
import NavRail from './components/NavRail'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import AnimateOnView from './components/AnimateOnView'

export default function App() {
  return (
    <div className="app">
      <NavRail />
      <main className="content">
        <section id="hero" className="section hero">
          <div className="hero-left">
            <p className="eyebrow">PLEASANTON, CA · INCOMING @ UCSD, COMPUTER ENGINEERING</p>
            <h1 className="display">Anish Baghel</h1>
            <p className="subhead">I build things for fun.</p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">View Projects →</a>
              <a href="#contact" className="btn btn-ghost">Contact</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <AnimateOnView>
            <h2>About & Education</h2>
            <p>I'm an incoming Computer Engineering student at UCSD (expected 2030). I graduated from Foothill High School with a strong background in competitive programming and machine learning projects. HS GPA: 4.34</p>
          </AnimateOnView>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <Projects />
        </section>

        <section id="leadership" className="section">
          <h2>Leadership & Teaching</h2>
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
          <p>If you'd like to collaborate or have questions, email me at <a href="mailto:anish@example.com">anish@example.com</a>.</p>
          <p>
            <a href="https://github.com/Abagel-coder" target="_blank" rel="noopener noreferrer">GitHub</a> ·
            <a href="https://www.linkedin.com/in/anish-baghel-782909220/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </section>
      </main>
    </div>
  )
}
