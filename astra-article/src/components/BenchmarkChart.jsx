import { useId, useState } from 'react'

const DATA = [
  { key: 'astra', name: 'GPT-6 Astra', value: 72.6, color: 'var(--chart-astra)' },
  { key: 'sol', name: 'GPT-5.6 Sol', value: 65.7, color: 'var(--chart-sol)' },
]

const GRID = [0, 25, 50, 75, 100]

export function BenchmarkChart() {
  const [active, setActive] = useState(null)
  const [showTable, setShowTable] = useState(false)
  const titleId = useId()

  return (
    <div className="viz-root chart-card">
      <div className="chart-head">
        <div>
          <p className="chart-eyebrow">OSWorld 2.0 · offline subset</p>
          <h4 id={titleId}>Computer-use benchmark, as reported by OpenAI</h4>
        </div>
        <button type="button" className="chart-toggle" onClick={() => setShowTable((s) => !s)}>
          {showTable ? 'View chart' : 'View as table'}
        </button>
      </div>

      {showTable ? (
        <table className="chart-table">
          <caption className="sr-only">OSWorld 2.0 offline-subset scores by model</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((d) => (
              <tr key={d.key}>
                <th scope="row">{d.name}</th>
                <td>{d.value}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="chart-plot" role="img" aria-labelledby={titleId}>
          <div className="chart-gridlines" aria-hidden="true">
            {GRID.slice()
              .reverse()
              .map((g) => (
                <div className="chart-gridline" key={g} style={{ bottom: `${g}%` }}>
                  <span>{g}</span>
                </div>
              ))}
          </div>
          <div className="chart-bars">
            {DATA.map((d) => (
              <div
                className="chart-bar-col"
                key={d.key}
                onMouseEnter={() => setActive(d.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(d.key)}
                onBlur={() => setActive(null)}
                tabIndex={0}
              >
                {active === d.key && (
                  <div className="chart-tooltip">
                    <strong>{d.name}</strong>
                    <span>{d.value}% of tasks completed</span>
                  </div>
                )}
                <span className="chart-value">{d.value}%</span>
                <div
                  className="chart-bar"
                  style={{ height: `${d.value}%`, background: d.color }}
                />
                <span className="chart-label">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="chart-note">
        Difference: 6.9 percentage points on this one evaluation — evidence about that test, not a
        probability your task will succeed. Source: OpenAI computer-use comparison, version
        2026.08.08. [1]
      </p>
    </div>
  )
}
