import { useState } from 'react'

const ITEMS = [
  {
    key: 'accuracy',
    title: 'Accuracy',
    body: 'Open the key references and check that they support the claims beside them.',
  },
  {
    key: 'usefulness',
    title: 'Usefulness',
    body: 'Confirm the output answers the original brief and works for its intended audience.',
  },
  {
    key: 'completion',
    title: 'Completion',
    body: 'Distinguish work actually performed from suggestions, assumptions, and remaining checks.',
  },
]

export function Checklist() {
  const [checked, setChecked] = useState({})

  const toggle = (key) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  const doneCount = Object.values(checked).filter(Boolean).length

  return (
    <div className="checklist">
      <div className="checklist-progress" aria-hidden="true">
        <div className="checklist-progress-bar" style={{ width: `${(doneCount / ITEMS.length) * 100}%` }} />
      </div>
      <ul>
        {ITEMS.map((item) => (
          <li key={item.key}>
            <button
              type="button"
              className={`checklist-item ${checked[item.key] ? 'is-checked' : ''}`}
              onClick={() => toggle(item.key)}
              aria-pressed={!!checked[item.key]}
            >
              <span className="checklist-box" aria-hidden="true">
                {checked[item.key] ? '✓' : ''}
              </span>
              <span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
