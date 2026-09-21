import { lazy } from 'react'

export const LazyAstraOrb = lazy(() =>
  import('./AstraOrb').then((m) => ({ default: m.AstraOrb })),
)
export const LazyJudgmentCore = lazy(() =>
  import('./JudgmentCore').then((m) => ({ default: m.JudgmentCore })),
)
export const LazySystemLayers = lazy(() =>
  import('./SystemLayers').then((m) => ({ default: m.SystemLayers })),
)
export const LazyWorkflowSteps = lazy(() =>
  import('./WorkflowSteps').then((m) => ({ default: m.WorkflowSteps })),
)
