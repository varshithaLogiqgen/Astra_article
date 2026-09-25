import { motion } from 'framer-motion'
import { LazyCanvas } from '../three/LazyCanvas'
import { LazyAstraOrb } from '../three/lazyScenes'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

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
          By <strong>AI Disha</strong>
        </motion.div>
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
