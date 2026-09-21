import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const LINKS = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'try-a-task', label: 'Try a task' },
  { id: 'evidence', label: 'Read the evidence' },
  { id: 'judgment', label: 'Your judgment' },
]

export function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <motion.div className="nav-progress" style={{ scaleX: progress }} />
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark" />
          Astra <span className="nav-brand-sub">field guide</span>
        </a>
        <nav aria-label="Article sections">
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={active === link.id ? 'is-active' : ''}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
