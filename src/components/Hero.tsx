import { CLIENTS, STATS } from '../data/content'
import slideMeta from '../assets/slide-meta.jpg'

function AppMockup() {
  return (
    <div className="app-wrap">
      <div
        className="app"
        role="img"
        aria-label="Automation pipeline running: data collected, AI analysis done, presentation being generated"
      >
        <div className="app-bar">
          <b></b>
          <b></b>
          <b></b>
          <span className="app-url">pipeline.run — monthly-competitor-report</span>
        </div>
        <div className="app-body">
          <div className="app-left">
            <div className="app-h">
              <span>Pipeline · 6 competitors</span>
              <em>running…</em>
            </div>
            <div className="run-step done">
              <span className="run-ic">✓</span>
              <div>
                <div className="run-t">Collect — browser automation</div>
                <div className="run-d">FB pages, Ads Library, Google ATC · 18/18 screenshots</div>
              </div>
            </div>
            <div className="run-step done">
              <span className="run-ic">✓</span>
              <div>
                <div className="run-t">Analyze — GPT-4o vision</div>
                <div className="run-d">Slide copy written in the agency's own style</div>
              </div>
            </div>
            <div className="run-step active">
              <span className="run-ic"></span>
              <div>
                <div className="run-t">Generate — branded PPTX</div>
                <div className="run-d">Layouts, logos, framed screenshots</div>
              </div>
            </div>
            <div className="run-step">
              <span className="run-ic">4</span>
              <div>
                <div className="run-t">Human review</div>
                <div className="run-d">Final read before it goes to the client</div>
              </div>
            </div>
            <div className="run-bar">
              <i></i>
            </div>
            <div className="run-note">
              <span>elapsed 11:42</span>
              <span>eta ~3 min</span>
            </div>
          </div>
          <div className="app-right">
            <div className="app-h">
              <span>Output preview</span>
              <em>report.pptx</em>
            </div>
            <div className="out-deck">
              <div className="out-slide b">
                <span className="out-pill">Google Ads</span>
                <div className="out-row">
                  <div className="out-shot"></div>
                  <div className="out-shot"></div>
                </div>
              </div>
              <div className="out-slide c">
                <span className="out-pill">Creatives</span>
                <div className="out-row">
                  <div className="out-shot"></div>
                  <div className="out-shot"></div>
                  <div className="out-shot"></div>
                </div>
              </div>
              <div className="out-slide photo">
                <img src={slideMeta} alt="Auto-generated slide: Meta Ads analysis" />
              </div>
            </div>
            <div className="toast">
              <span className="tick">✓</span>
              <div>
                <b>Deck ready in 14:38</b>
                <span>previously: a full working day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <span className="badge">
          <i></i>AI automation engineering — one senior engineer, no agency overhead
        </span>
        <h1>
          Replace a day of manual work with a <span className="g-text">15-minute pipeline</span>
        </h1>
        <p className="hero-sub">
          I design and build AI-powered automations for agencies and founders —{' '}
          <strong>browser automation where no API exists</strong>, LLM analysis in your voice, and
          output polished enough to send straight to a client.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">
            Book an intro call
          </a>
          <a className="btn ghost" href="#work">
            See real pipelines ↓
          </a>
        </div>
        <p className="hero-proof">Free 30-min call · fixed-scope pricing · human-reviewed output, always</p>

        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.num}>
              <b className={s.gradient ? 'g' : undefined}>{s.num}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <AppMockup />

        <div className="logos">
          <p>Building for</p>
          <div className="logos-row">
            {CLIENTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
