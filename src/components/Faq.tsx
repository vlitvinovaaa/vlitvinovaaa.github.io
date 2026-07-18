import { FAQ } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Faq() {
  const headRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()
  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <span className="sec-kicker">FAQ</span>
          <h2>Before you ask</h2>
        </div>
        <div className="faq-list rv" ref={listRef}>
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
