import { OrbitControls } from '@react-three/drei'
import { GlassCard, ConnectorLine } from './common'

const STEPS = [
  {
    label: '1 · Evidence',
    sublabel: 'Ask for sources. Open them yourself.',
    color: '#4fd8e8',
    position: [-2.1, -0.9, 0],
  },
  {
    label: '2 · Explanation',
    sublabel: 'Could a classmate follow it?',
    color: '#8b7dff',
    position: [0, 0.15, 0.3],
  },
  {
    label: '3 · Project page',
    sublabel: 'Test links, screens, captions.',
    color: '#ff6fd8',
    position: [2.1, 1.15, 0],
  },
]

export function WorkflowSteps({ reduced = false }) {
  return (
    <>
      <ambientLight intensity={0.7} color="#ffffff" />
      <pointLight position={[3, 3, 4]} intensity={22} color="#4fd8e8" />
      <pointLight position={[-3, -1, -3]} intensity={16} color="#ff6fd8" />

      <ConnectorLine start={STEPS[0].position} end={STEPS[1].position} color="#4fd8e8" />
      <ConnectorLine start={STEPS[1].position} end={STEPS[2].position} color="#ff6fd8" />

      {STEPS.map((step) => (
        <GlassCard
          key={step.label}
          position={step.position}
          color={step.color}
          label={step.label}
          sublabel={step.sublabel}
          floatSpeed={reduced ? 0 : 1.1}
          floatIntensity={reduced ? 0 : 0.35}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />
    </>
  )
}
