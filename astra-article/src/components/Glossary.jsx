const TERMS = [
  { term: 'Agentic work', def: 'Taking multiple steps toward a goal using tools.' },
  { term: 'Benchmark', def: 'A structured test.' },
  {
    term: 'Hallucination',
    def: 'An incorrect or unsupported statement presented as fact.',
  },
  {
    term: 'Alignment',
    def: 'Whether behavior follows intended goals and constraints.',
  },
]

export function Glossary() {
  return (
    <dl className="glossary">
      {TERMS.map((t) => (
        <div className="glossary-item" key={t.term}>
          <dt>{t.term}</dt>
          <dd>{t.def}</dd>
        </div>
      ))}
    </dl>
  )
}
