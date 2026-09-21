import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html, Line } from '@react-three/drei'

const AGENTS = [
  { label: 'Draft sources', color: '#4fd8e8', position: [0, 1.4, 0] },
  { label: 'Check facts', color: '#8b7dff', position: [-1.7, 0.45, 0] },
  { label: 'Write outline', color: '#ff6fd8', position: [1.7, 0.45, 0] },
  { label: 'Build the page', color: '#3987e5', position: [-1.3, -1.65, 0] },
  { label: 'Flag gaps', color: '#fab219', position: [1.3, -1.65, 0] },
]

export function JudgmentCore({ reduced = false }) {
  const coreRef = useRef(null)
  const { viewport, size } = useThree()
  const scale = Math.min(1, viewport.width / 5.4)
  const labelSize = Math.max(10, Math.min(13, size.width * 0.025))

  useFrame((_, delta) => {
    if (reduced || !coreRef.current) return
    coreRef.current.rotation.y += Math.min(delta, 0.05) * 0.45
    coreRef.current.rotation.x += Math.min(delta, 0.05) * 0.18
  })

  return (
    <>
      <ambientLight intensity={0.8} color="#b3b2c1" />
      <pointLight position={[3, 2, 3]} intensity={20} color="#8b7dff" />
      <pointLight position={[-3, -2, 2]} intensity={14} color="#4fd8e8" />

      <group scale={scale}>
        {AGENTS.map(({ label, color, position }) => (
          <group key={label}>
            <Line points={[[0, 0, -0.15], position]} color={color} transparent opacity={0.3} lineWidth={1} />
            <Html center position={position} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
              <div className="orbit-label judgment-label" style={{ fontSize: labelSize }}>
                <span className="judgment-label-dot" style={{ background: color }} />
                {label}
              </div>
            </Html>
          </group>
        ))}

        <group ref={coreRef} rotation={[0.3, 0.2, 0.15]}>
          <mesh>
            <icosahedronGeometry args={[0.52, 0]} />
            <meshStandardMaterial
              color="#b8acff"
              emissive="#5b4fc4"
              emissiveIntensity={0.35}
              roughness={0.35}
              metalness={0.3}
              flatShading
            />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[0.535, 0]} />
            <meshBasicMaterial color="#e0d9ff" wireframe transparent opacity={0.55} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0.35, 0]}>
            <torusGeometry args={[0.7, 0.012, 8, 80]} />
            <meshBasicMaterial color="#4fd8e8" transparent opacity={0.8} />
          </mesh>
        </group>

        <Html center position={[0, -0.92, 0]} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
          <div className="orbit-label orbit-label--core" style={{ fontSize: labelSize + 1 }}>
            You, deciding
          </div>
        </Html>
      </group>
    </>
  )
}
