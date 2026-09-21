const SOURCES = [
  { id: 1, label: 'OpenAI — GPT-6 Astra introduction' },
  { id: 2, label: 'OpenAI — Safety overview' },
  { id: 3, label: 'OpenAI — GPT-6 Astra system card' },
  { id: 4, label: 'ChatGPT Learn — Sites documentation' },
]

const PUBLISHER_LINKS = [
  { label: 'VknowTech', url: 'https://vknowtech.ai/' },
  { label: 'Logiqgen Pvt. Ltd.', url: 'https://www.logiqgen.com/' },
  { label: 'AI Pulse', url: 'https://news-ai-demo.vercel.app/' },
  { label: 'AI Disha', url: null },
  { label: 'AI Nestham', url: 'https://www.ainestham.com/' },
]

function PublisherLink({ label, url }) {
  return url ? (
    <a className="publisher-link" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <span className="publisher-link">{label}</span>
  )
}

export function SourcesFooter() {
  return (
    <footer className="sources">
      <div className="sources-grid">
        <div>
          <h3>Sources and editorial notes</h3>
          <ol>
            {SOURCES.map((s) => (
              <li key={s.id}>
                <span className="source-index">[{s.id}]</span> {s.label}
              </li>
            ))}
          </ol>
        </div>
        <p className="sources-note">
          Prepared with AI assistance for author review. Based on official documentation checked
          on 15 September 2026; no independent model testing was performed. Product capabilities
          and access may change. Cover created with image generation; remaining figures are
          original explanatory graphics. All illustrations are conceptual, and the benchmark chart
          is a same-source comparison, not independently reproduced for this article.
        </p>
      </div>
      <p className="sources-note sources-publisher">
        Group of{' '}
        {PUBLISHER_LINKS.map((p, i) => (
          <span key={p.label}>
            <PublisherLink {...p} />
            {i < PUBLISHER_LINKS.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <div className="sources-bottom">
        <span>Inside GPT-6 Astra — a field guide</span>
        <span>By AI Disha</span>
      </div>
    </footer>
  )
}
