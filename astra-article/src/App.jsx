import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Reveal } from './components/Reveal'
import { Figure } from './components/Figure'
import { PromptCard } from './components/PromptCard'
import { BenchmarkChart } from './components/BenchmarkChart'
import { Checklist } from './components/Checklist'
import { Glossary } from './components/Glossary'
import { SourcesFooter } from './components/SourcesFooter'
import { LazyJudgmentCore, LazySystemLayers, LazyWorkflowSteps } from './three/lazyScenes'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
        {/* ---------- Intro / scenario ---------- */}
        <section className="section" aria-label="Introduction">
          <div className="container container--narrow">
            <Reveal as="p" className="lede">
              Imagine it is Sunday evening. A student has a presentation due on Monday, a folder
              of scattered notes, and a project website that still needs work. The difficult part
              is connecting the research, the explanation, and the finished result. Where could an
              AI assistant help — and what should the student still check?
            </Reveal>

            <Reveal delay={0.1}>
              <Figure
                number={1}
                scene={LazyJudgmentCore}
                camera={{ position: [0, 0, 5.4], fov: 44 }}
                caption="Human judgment at the center of AI-assisted work."
                source="Original animated illustration; not a product screenshot."
                height={420}
              />
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                GPT-6 Astra is an OpenAI model whose launch announcement emphasizes coding,
                computer use, scientific work, and document creation.{' '}
                <sup className="cite">1</sup> The practical question is how to turn those
                capabilities into work you can inspect and trust.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="disclosure">
                This article offers a way to evaluate that promise. The student example is
                fictional, and the workflow is a suggested exercise, not a hands-on test or a
                measured productivity result.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how-it-works" className="section section--soft">
          <div className="container container--narrow">
            <Reveal>
              <p className="eyebrow eyebrow--section">How it works</p>
              <h2 className="section-title">The model is part of a working system</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                An AI <strong>model</strong> is the component that processes information and
                generates responses. The <strong>application</strong> provides the interface
                through which you use it. <strong>Tools</strong> provide ways to retrieve
                information or perform actions. Keeping these layers separate helps explain why
                the same request can produce different experiences in different environments.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Figure
                number={2}
                scene={LazySystemLayers}
                camera={{ position: [0, 0.6, 5.2], fov: 44 }}
                caption="A simplified conceptual view of an AI assistant. Actual product arrangements vary."
                source="Original diagram."
                interactive
                height={400}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                For example, asking for a current source requires access to current information.
                Asking for a document requires a way to create a file. Asking to change a website
                requires access to the relevant project. A model name alone does not tell you
                which of these connections is available.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h3>Features worth paying attention to</h3>
              <p>
                OpenAI reports that Astra can operate software, help develop and test code, and
                produce documents, spreadsheets, and presentations. It also describes an
                experimental Codex feature that preserves notes and searches earlier context
                during long tasks. <sup className="cite">1</sup> These claims are useful starting
                points for choosing a task to evaluate.
              </p>
              <p>
                For a student, a sensible first experiment is a small research assignment with a
                clear deliverable. For a developer, it might be one well-defined interface change.
                Keeping the scope manageable makes it easier to identify mistakes and learn which
                instructions helped.
              </p>
              <p>
                Website creation also depends on the surrounding product. OpenAI's Sites
                documentation describes visitor access separately from editing access, and notes
                that public publishing can be controlled by workspace settings.{' '}
                <sup className="cite">4</sup> Building a page and making it available to an
                audience are separate decisions.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="callout">
                The useful habit is to specify the outcome: who it is for, what it must contain,
                which material it can use, and what would count as a successful result. These are
                project decisions you can make before opening an AI tool.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Try a task ---------- */}
        <section id="try-a-task" className="section">
          <div className="container container--narrow">
            <Reveal>
              <p className="eyebrow eyebrow--section">Try a task</p>
              <h2 className="section-title">One assignment, from brief to review</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Return to our student. Suppose the assignment is to explain rainwater harvesting
                and prepare a simple project page. The following exercise is deliberately narrow
                enough to inspect. It illustrates a review process rather than promising that
                Astra will complete every step in every application.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Figure
                number={3}
                scene={LazyWorkflowSteps}
                camera={{ position: [0, 0.4, 5.6], fov: 44 }}
                caption="An illustrative project workflow. Revise the brief when review reveals a gap."
                source="Original diagram."
                interactive
                height={400}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="workflow-list">
                <li>
                  <strong>Start with the evidence.</strong> Give the assistant the assignment
                  requirements and ask for a short list of relevant sources. Open those sources
                  yourself. A useful research note should let you trace a factual statement back
                  to the passage that supports it.
                </li>
                <li>
                  <strong>Review the explanation.</strong> Could a classmate understand how water
                  moves from a roof into storage? Is a diagram clearly labelled? Have estimates
                  been presented as estimates? A beautiful page can still teach the wrong lesson if
                  its explanation is weak.
                </li>
                <li>
                  <strong>Examine the project page.</strong> Try its links, inspect it on a narrow
                  screen, and check whether the text remains readable. Ask for corrections tied to
                  specific observations, such as a caption that is too small or a claim without a
                  source.
                </li>
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <PromptCard />
            </Reveal>
          </div>
        </section>

        {/* ---------- Evidence ---------- */}
        <section id="evidence" className="section section--soft">
          <div className="container container--narrow">
            <Reveal>
              <p className="eyebrow eyebrow--section">Read the evidence</p>
              <h2 className="section-title">Read the evidence behind the headline</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                OpenAI reports an OSWorld 2.0 offline-subset score of 72.6% for Astra, compared
                with 65.7% for GPT-5.6 Sol, in its computer-use comparison.{' '}
                <sup className="cite">1</sup> That is a 6.9 percentage-point difference. It is
                evidence about a particular evaluation, not the probability that your assignment
                will succeed.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <BenchmarkChart />
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                A benchmark is a structured test. Before using a score to choose a tool, ask what
                work was tested, what resources were available, and how success was judged. A task
                completed under one set of conditions may not represent your files, software,
                instructions, or time constraints.
              </p>
              <p>
                The chart uses a full zero-to-one-hundred scale so the difference remains
                proportional. It compares the models within one reported evaluation; it does not
                combine unrelated scores into an invented overall intelligence rating.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h3>Better results still require interpretation</h3>
              <p>
                OpenAI's system card reports fewer factual errors than Sol on conversations
                previously flagged for mistakes. It explicitly cautions that these difficult
                examples do not measure ordinary production error rates. The card also says that
                observing no failures in a restriction test does not establish reliability across
                other settings. <sup className="cite">3</sup>
              </p>
              <p>
                This distinction matters when reading a launch article. A strong result can
                justify curiosity without justifying certainty. The next useful step is to test a
                representative task and retain the output, sources, and review notes so another
                person can judge the result.
              </p>
              <p>
                For our student, the decisive evidence would be straightforward: an accurate
                explanation, traceable references, a usable project page, and an honest account of
                unfinished work. A benchmark cannot inspect those deliverables on the student's
                behalf.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Judgment ---------- */}
        <section id="judgment" className="section">
          <div className="container container--narrow">
            <Reveal>
              <p className="eyebrow eyebrow--section">Your judgment</p>
              <h2 className="section-title">What still needs your judgment</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                The safety story deserves the same attention as the capability story. OpenAI's
                safety overview classifies Astra at its Critical cybersecurity capability level and
                describes stronger protections and monitoring. It also reports reduced ability to
                monitor the model's written reasoning relative to Sol under adversarial testing.
                These are the developer's findings, not assurances of perfect safety.{' '}
                <sup className="cite">2</sup>
              </p>
              <p>
                For everyday projects, make responsibility concrete. Decide which information
                belongs in the task, what may be changed, and what needs review before sharing.
                Ask for evidence of completed work. Treat an unresolved question as something to
                investigate, rather than something to hide behind polished language.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3>A quick review before you share</h3>
              <Checklist />
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                Back at the student's desk, the goal is a project the student understands well
                enough to explain and defend. My view is that this is the most useful standard for
                judging an advanced AI assistant: how much valuable work it helps you complete
                while leaving the evidence and decisions clear enough to review.
              </p>
              <p className="callout">
                Start with one task you understand. Define success, inspect the result, and revise
                the process. That gives you a more meaningful answer about Astra's value than a
                headline alone.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3>Terms in plain language</h3>
              <Glossary />
            </Reveal>
          </div>
        </section>
      </main>

      <SourcesFooter />
    </>
  )
}

export default App
