import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useInView } from '../hooks/useInView'

/**
 * Mounts an R3F Canvas only once it nears the viewport, and unmounts the
 * WebGL context again once it's well out of view — keeps four independent
 * 3D scenes on one page from fighting over the GPU at once.
 */
export function LazyCanvas({
  children,
  camera = { position: [0, 0, 6], fov: 45 },
  className,
  style,
  fallback = null,
  rootMargin = '250px',
  ...canvasProps
}) {
  const [ref, inView] = useInView({ rootMargin })

  return (
    <div ref={ref} className={className} style={{ width: '100%', height: '100%', ...style }}>
      {inView ? (
        <Canvas
          dpr={[1, 1.6]}
          camera={camera}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          {...canvasProps}
        >
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      ) : (
        fallback
      )}
    </div>
  )
}
