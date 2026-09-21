import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Html, QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'

/** A floating glass-panel card used to represent a concept node in 3D. */
export function GlassCard({
  position,
  width = 1.7,
  height = 1,
  color = '#8b7dff',
  label,
  sublabel,
  floatSpeed = 1.4,
  floatIntensity = 0.5,
}) {
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.PlaneGeometry(width, height)),
    [width, height],
  )

  return (
    <Float speed={floatSpeed} rotationIntensity={0.15} floatIntensity={floatIntensity}>
      <group position={position}>
        <mesh>
          <planeGeometry args={[width, height, 1, 1]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.16}
            roughness={0.25}
            metalness={0.1}
            clearcoat={0.6}
            transmission={0.35}
            thickness={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color={color} transparent opacity={0.6} />
        </lineSegments>
        <Html center position={[0, 0, 0.02]} distanceFactor={6} occlude={false} transform>
          <div className="node-card" style={{ width: `${width * 92}px` }}>
            <strong style={{ color }}>{label}</strong>
            {sublabel ? <span>{sublabel}</span> : null}
          </div>
        </Html>
      </group>
    </Float>
  )
}

/** A slender animated line connecting two nodes, with a traveling pulse. */
export function ConnectorLine({ start, end, color = '#4fd8e8', mid }) {
  const midPoint = mid ?? [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2 + 0.4,
    (start[2] + end[2]) / 2,
  ]
  const pulseRef = useRef(null)
  const curve = useRef(new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(...midPoint),
    new THREE.Vector3(...end),
  ))

  useFrame(({ clock }) => {
    if (!pulseRef.current) return
    const t = (clock.getElapsedTime() * 0.25) % 1
    const p = curve.current.getPoint(t)
    pulseRef.current.position.set(p.x, p.y, p.z)
  })

  return (
    <>
      <QuadraticBezierLine
        start={start}
        end={end}
        mid={midPoint}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.35}
      />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}
