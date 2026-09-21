import { useState } from 'react'

const PROMPT = `Help me prepare a beginner-friendly project about rainwater harvesting. First identify three relevant primary sources and explain what each supports. Then draft a five-slide outline and a simple project page. Label estimates and unresolved questions. Keep the page private for my review. Report which checks you actually performed and which remain for me. If a required tool is unavailable, explain the limitation.`

export function PromptCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="prompt-card">
      <div className="prompt-card-head">
        <div className="prompt-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="prompt-title">a prompt you can adapt</span>
        <button type="button" className="prompt-copy" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="prompt-body">{PROMPT}</p>
      <p className="prompt-footnote">
        A suggested prompt, not a tested result. Its value is the brief it forces: evidence,
        audience, deliverables, boundaries, review criteria.
      </p>
    </div>
  )
}
