import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Orbit({ radius, tilt, speed, color, thickness = 0.012 }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <group rotation={[tilt, 0, 0]}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, thickness, 16, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
    </group>
  )
}

function Core({ reduced }) {
  const meshRef = useRef(null)
  const groupRef = useRef(null)

  useFrame((state) => {
    if (!reduced && meshRef.current) {
      meshRef.current.rotation.y += 0.0025
      meshRef.current.rotation.x += 0.001
    }
    if (groupRef.current) {
      const targetX = reduced ? 0 : state.pointer.y * 0.25
      const targetY = reduced ? 0 : state.pointer.x * 0.35
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={reduced ? 0 : 1.6} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.6}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.35, 6]} />
          <MeshDistortMaterial
            color="#8b7dff"
            emissive="#4a3aa7"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.65}
            distort={reduced ? 0.15 : 0.42}
            speed={reduced ? 0.4 : 2}
          />
        </mesh>
      </Float>
      <Orbit radius={2.05} tilt={0.6} speed={reduced ? 0 : 0.18} color="#4fd8e8" />
      <Orbit radius={2.5} tilt={-0.35} speed={reduced ? 0 : -0.12} color="#ff6fd8" thickness={0.008} />
    </group>
  )
}

export function AstraOrb({ reduced = false }) {
  return (
    <>
      <color attach="background" args={['#07070b']} />
      <fog attach="fog" args={['#07070b', 6, 13]} />
      <ambientLight intensity={0.5} color="#8b7dff" />
      <pointLight position={[4, 3, 4]} intensity={40} color="#4fd8e8" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#ff6fd8" />
      <pointLight position={[0, 0, 5]} intensity={15} color="#ffffff" />

      <Stars radius={45} depth={25} count={reduced ? 300 : 1200} factor={2.4} saturation={0} fade speed={reduced ? 0 : 0.4} />
      {!reduced && (
        <Sparkles count={70} scale={[7, 5, 5]} size={2.2} speed={0.3} color="#4fd8e8" opacity={0.6} />
      )}

      <Core reduced={reduced} />

      {!reduced && (
        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={0.18} luminanceSmoothing={0.9} intensity={0.85} mipmapBlur radius={0.6} />
        </EffectComposer>
      )}
    </>
  )
}
