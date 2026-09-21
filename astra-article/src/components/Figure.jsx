import { LazyCanvas } from '../three/LazyCanvas'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Figure({ number, caption, source, scene: Scene, camera, interactive = false, height = 380 }) {
  const reduced = usePrefersReducedMotion()

  return (
    <figure className="figure">
      <div className="figure-canvas" style={{ height }}>
        <LazyCanvas camera={camera} fallback={<div className="figure-fallback" aria-hidden="true" />}>
          <Scene reduced={reduced} />
        </LazyCanvas>
        {interactive && <span className="figure-hint">Drag to look around</span>}
      </div>
      <figcaption>
        <span className="figure-number">Figure {number}</span> {caption}
        {source && <span className="figure-source"> {source}</span>}
      </figcaption>
    </figure>
  )
}
