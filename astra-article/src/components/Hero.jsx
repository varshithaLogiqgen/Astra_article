import { motion } from 'framer-motion'
import { LazyCanvas } from '../three/LazyCanvas'
import { LazyAstraOrb } from '../three/lazyScenes'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const NAV = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'try-a-task', label: 'Try a task' },
  { id: 'evidence', label: 'Read the evidence' },
  { id: 'judgment', label: 'Your judgment' },
]

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="top" className="hero">
      <div className="hero-canvas">
        <LazyCanvas
          camera={{ position: [0, 0, 6], fov: 42 }}
          rootMargin="0px"
          style={{ height: '100%' }}
        >
          <LazyAstraOrb reduced={reduced} />
        </LazyCanvas>
      </div>
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A field guide, not a press release
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Inside GPT&#8209;6 <span className="gradient-text">Astra</span>
        </motion.h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What it can do, and what still needs a human.
        </motion.p>
        <motion.div
          className="hero-byline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          By <strong>AI Disha</strong> · Sources checked 15 September 2026
        </motion.div>

        <motion.nav
          className="hero-nav"
          aria-label="Jump to section"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <span className="hero-nav-label">Explore</span>
          <ul>
            {NAV.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
                {i < NAV.length - 1 && <span className="hero-nav-sep">/</span>}
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span />
        Scroll
      </motion.div>
    </section>
  )
}
