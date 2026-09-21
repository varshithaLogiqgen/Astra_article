import { OrbitControls } from '@react-three/drei'
import { GlassCard, ConnectorLine } from './common'

const NODES = [
  {
    label: 'Model',
    sublabel: 'Processes & generates',
    color: '#8b7dff',
    position: [-1.9, 0.6, 0],
  },
  {
    label: 'Application',
    sublabel: 'The interface you use',
    color: '#4fd8e8',
    position: [0, -0.5, 0.6],
  },
  {
    label: 'Tools',
    sublabel: 'Search, files, actions',
    color: '#ff6fd8',
    position: [1.9, 0.6, 0],
  },
]

export function SystemLayers({ reduced = false }) {
  return (
    <>
      <ambientLight intensity={0.7} color="#ffffff" />
      <pointLight position={[3, 3, 4]} intensity={22} color="#4fd8e8" />
      <pointLight position={[-3, -2, -3]} intensity={16} color="#8b7dff" />

      <ConnectorLine start={NODES[0].position} end={NODES[1].position} color="#8b7dff" />
      <ConnectorLine start={NODES[1].position} end={NODES[2].position} color="#4fd8e8" />

      {NODES.map((node) => (
        <GlassCard
          key={node.label}
          position={node.position}
          color={node.color}
          label={node.label}
          sublabel={node.sublabel}
          floatSpeed={reduced ? 0 : 1.2}
          floatIntensity={reduced ? 0 : 0.4}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />
    </>
  )
}
