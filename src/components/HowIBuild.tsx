import { useReveal } from '../hooks/useReveal'

export function HowIBuild() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()
  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <span className="sec-kicker">How I build</span>
          <h2>Engineering, not no-code glue</h2>
          <p className="sec-sub">Principles from 7+ years of shipping production software.</p>
        </div>
        <div className="bento rv" ref={gridRef}>
          <div className="b-card w4">
            <span className="b-kicker">No API? No problem.</span>
            <h3>Automation where none "should" exist</h3>
            <p>
              When the data lives behind a UI with no API, most automation stops. I build{' '}
              <b>browser automation that navigates like a human</b> — stable, screenshot-driven,
              resilient to partial failures: if one step falls over, the rest of the run still
              completes.
            </p>
            <div className="b-steps">
              <em>Playwright</em>
              <i>→</i>
              <em>Node.js</em>
              <i>→</i>
              <em>REST APIs</em>
              <i>→</i>
              <em>JSON processing</em>
            </div>
          </div>
          <div className="b-card w2">
            <span className="b-kicker">Contracts between stages</span>
            <h3>Pipelines you can test</h3>
            <p>
              Every stage speaks a <b>JSON-schema contract</b> — each is testable in isolation, so
              debugging stays cheap forever.
            </p>
            <div className="b-code">
              <span className="c">{'// deck builder runs on mocks —'}</span>
              {'\n'}
              <span className="c">{'// no scraping, no LLM calls'}</span>
              {'\n'}
              <span className="k">$</span> node test-pptx.js{'\n'}
              <span className="s">✓ report.pptx built in 1.2s</span>
            </div>
          </div>
          <div className="b-card w2">
            <span className="b-kicker">Style is part of the spec</span>
            <h3>Output in your voice</h3>
            <p>
              An automation nobody trusts gets abandoned. I train the LLM layer on{' '}
              <b>your real documents and tone</b> — few-shot from actual work — so the output reads
              like your team wrote it.
            </p>
          </div>
          <div className="b-card w4 hl">
            <span className="b-kicker">Human in the loop — always</span>
            <h3>Automate the grind, keep the judgment</h3>
            <p>
              The goal isn't replacing people — it's <b>removing the day of screenshots</b> so a
              person spends 15 minutes on review instead. Every pipeline I build ends with a human
              sign-off before anything reaches your client.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
