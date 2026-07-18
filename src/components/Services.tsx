import { SERVICES } from '../data/content'
import { Bold } from './Bold'
import { useReveal } from '../hooks/useReveal'

export function Services() {
  const headRef = useReveal<HTMLDivElement>()
  const tiersRef = useReveal<HTMLDivElement>()
  const noteRef = useReveal<HTMLDivElement>()
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <span className="sec-kicker">Services</span>
          <h2>Three ways to work with me</h2>
          <p className="sec-sub">
            Fixed scope, agreed up front — you pay for an outcome, not for hours. We'll put numbers
            on it during a free intro call.
          </p>
        </div>

        <div className="tiers rv" ref={tiersRef}>
          {SERVICES.map((s) => (
            <div className={`tier${s.featured ? ' featured' : ''}`} key={s.title}>
              {s.badge && <span className="tier-badge">{s.badge}</span>}
              <span className="tier-kind">{s.kind}</span>
              <h3>{s.title}</h3>
              <div className="tier-time">{s.time}</div>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <Bold text={item} />
                  </li>
                ))}
              </ul>
              <a className={`btn${s.featured ? '' : ' ghost'}`} href="#contact">
                {s.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="tier-note rv" ref={noteRef}>
          <p>
            <b>After the build — a care plan.</b> Sites change their markup, LLM models get updated,
            new ideas appear. I monitor, fix and iterate on your pipeline so it keeps earning its
            keep.
          </p>
          <span className="np">monthly care plan</span>
        </div>
      </div>
    </section>
  )
}
