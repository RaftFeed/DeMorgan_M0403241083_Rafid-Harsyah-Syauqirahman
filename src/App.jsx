import { useEffect, useMemo, useState } from 'react'
import { animate, stagger } from 'animejs'

function App() {
  const sectionIds = useMemo(() => ['profile', 'projects', 'prestasi', 'contact'], [])
  const [activeSection, setActiveSection] = useState('profile')

  useEffect(() => {
    animate('.topbar', {
      translateY: [-16, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutQuad'
    })

    animate('.hero .avatar', {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 700,
      delay: 150,
      easing: 'easeOutBack'
    })

    animate('.hero .card', {
      translateY: [12, 0],
      opacity: [0, 1],
      duration: 700,
      delay: 220,
      easing: 'easeOutQuad'
    })

    animate('.badges .badge', {
      translateY: [10, 0],
      opacity: [0, 1],
      delay: stagger(60, { start: 260 }),
      duration: 600,
      easing: 'easeOutQuad'
    })

    animate('.project-card', {
      translateY: [18, 0],
      opacity: [0, 1],
      delay: stagger(120, { start: 300 }),
      duration: 700,
      easing: 'easeOutQuad'
    })

    animate('.timeline-item', {
      translateX: [-12, 0],
      opacity: [0, 1],
      delay: stagger(120, { start: 400 }),
      duration: 700,
      easing: 'easeOutQuad'
    })

    animate('.contact-list li', {
      translateY: [12, 0],
      opacity: [0, 1],
      delay: stagger(80, { start: 500 }),
      duration: 700,
      easing: 'easeOutQuad'
    })
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0.1 }
    )

    const revealTargets = document.querySelectorAll('.reveal')
    const activeTargets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    revealTargets.forEach((el) => revealObserver.observe(el))
    activeTargets.forEach((el) => activeObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [sectionIds])

  const year = new Date().getFullYear()

  return (
    <>
      <div className="topbar-wrap" role="navigation" aria-label="Main">
        <div className="topbar">
          <a className="brand" href="https://www.instagram.com/ieeesbipb/" target="_blank" rel="noopener">
            <img src="/assets/logo%20ieee.svg" alt="IEEE Logo" aria-hidden="true" />
            <span>IEEE SB IPB</span>
          </a>
          <nav>
            <a className={`nav-link${activeSection === 'profile' ? ' active' : ''}`} href="#profile">Home</a>
            <a className={`nav-link${activeSection === 'projects' ? ' active' : ''}`} href="#projects">Projects</a>
            <a className={`nav-link${activeSection === 'prestasi' ? ' active' : ''}`} href="#prestasi">Prestasi</a>
            <a className={`nav-link${activeSection === 'contact' ? ' active' : ''}`} href="#contact">Contact</a>
            <a className="btn-primary" href="#contact">Hire me</a>
          </nav>
        </div>
      </div>

      <section id="profile" className="container reveal" aria-labelledby="profile-heading">
        <div className="hero">
          <img
            className="avatar"
            src="/assets/foto.jpg"
            alt="Foto profil Rafid"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="card">
            <h1 id="profile-heading" className="headline">
              Hello, I'm <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank" rel="noopener">Rafid</a> 👋
            </h1>
            <p className="desc">Undergraduate at <strong>IPB University</strong> majoring in <strong>Computer Science</strong>, Aku member <strong>IEEE SB IPB University</strong> coyyy :p.</p>
            <p className="desc">Siap salah NIM saya <strong>M0403214083</strong></p>
            <p className="desc"> Proxy aku <strong>DeMorgan</strong>, sire!</p>
            <div className="badges" aria-label="Highlights">
              <span className="badge">GameDev &amp; Game Designer</span>
              <span className="badge">Godot / GDScript</span>
              <span className="badge">C / R / Python</span>
              <span className="badge">Vibe Coding</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container reveal" aria-labelledby="projects-heading">
        <h2 className="section-title" id="projects-heading">Projects</h2>
        <p className="muted" style={{ marginTop: '-8px' }}>A few things I’ve built recently lmao.</p>
        <div className="projects-grid" role="list">
          <article className="project-card" role="listitem">
            <h3>Driven by The Unknown</h3>
            <p>Deeply atmospheric, <strong>narrative-driven</strong> game that serves as an allegory for the human journey through life — a journey filled with uncertainty, choices, temptation, and the search for meaning.</p>
            <img
              className="project-img"
              src="/assets/Driven_Logo.png"
              alt="Screenshot of Driven by The Unknown game"
              loading="lazy"
              decoding="async"
            />
            <a className="more" href="https://vipipar.itch.io/driven-by-the-unknown" aria-label="Open project details">View more →</a>
          </article>
          <article className="project-card" role="listitem">
            <h3>Catastrophe</h3>
            <p>Catastrophe is a fast, brutal <strong>2D roguelike platformer</strong> where parry-dash combat meets <strong>blackjack duels</strong> that grant buffs or debuffs, with each boss bringing unique styles and strategy to keep every run fresh.</p>
            <img
              className="project-img"
              src="/assets/Catastrophe_Logo.png"
              alt="Screenshot of Catastrophe game"
              loading="lazy"
              decoding="async"
            />
            <a className="more" href="https://www.youtube.com/watch?v=V6elt1Y1G4c" aria-label="Open project details">View more →</a>
          </article>
          <article className="project-card" role="listitem">
            <h3>Web Portofolio</h3>
            <p>Yaa <strong>website ini lah</strong> pake nanya heheheha. Ini kudu ngetik apa lagi ya biar panjang deskripsinya. Lieur euy kumaha atuh ini kang aduh kakangkung</p>
            <img
              className="project-img"
              src="/assets/web porto.jpg"
              alt="Screenshot of Catastrophe game"
              loading="lazy"
              decoding="async"
            />
            <a className="more" href="#" aria-label="Open project details">View more →</a>
          </article>
        </div>
      </section>

      <section id="prestasi" className="container reveal" aria-labelledby="achievements-heading">
        <h2 className="section-title" id="achievements-heading">Prestasi</h2>
        <div className="timeline" role="list">
          <div className="timeline-item" role="listitem">
            <strong>2025 —</strong> IEEE SB IPB Treasurer • Organized Money money money ay ay ay :p
          </div>
          <div className="timeline-item" role="listitem">
            <strong>2024 —</strong> Top 15 Best Work <em>PKM-K Cluster</em> at IPB University
          </div>
          <div className="timeline-item" role="listitem">
            <strong>2023 —</strong> 1st Place <em>Mathematics Competition Parsial Himatika 2023</em> at UIN Syarif Hidayatullah.
          </div>
        </div>
      </section>

      <section id="contact" className="container reveal" aria-labelledby="contact-heading">
        <h2 className="section-title" id="contact-heading">Contact Me</h2>
        <ul className="contact-list">
          <li>
            <a href="https://www.instagram.com/rafidhrsyh/" target="_blank" rel="noopener" aria-label="Instagram @raftfeed">
              <img src="/assets/logo%20instagram.svg" alt="Instagram" />
              <span>@rafidhrsyh</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rafid-harsyah-syauqirahman-300903323/" target="_blank" rel="noopener" aria-label="LinkedIn profile of Rafid Harsyah Syauqirahman">
              <img src="/assets/logo%20linkedin.svg" alt="LinkedIn" />
              <span>Rafid Harsyah Syauqirahman</span>
            </a>
          </li>
          <li>
            <a href="http://wa.me/6285236467838" target="_blank" rel="noopener" aria-label="WhatsApp Rafid">
              <img src="/assets/logo%20wangsaf.svg" alt="WhatsApp" />
              <span>Wangsaf</span>
            </a>
          </li>
          <li>
            <a href="mailto:rafidharsyahh@gmail.com?subject=Hi%20Rafid%20—%20from%20your%20portfolio" aria-label="Send email to Rafid">
              <img src="/assets/logo%20email.svg" alt="Email" />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1kaTbHWKoDyE-awMlh0D4OP51Ly8mYbQk/view?usp=sharing" aria-label="Download CV">
              <img src="/assets/logo%20cv.svg" alt="Download" />
              <span>Download CV (PDF)</span>
            </a>
          </li>
        </ul>
      </section>

      <footer>
        <div className="container">
          © {year} Rafid Harsyah Syauqirahman • RaftFeed
        </div>
      </footer>
    </>
  )
}

export default App
