import { FACTS } from '../data/content'
import { useCounter } from '../hooks/useCounter'
import { useReveal } from '../hooks/useReveal'

function Fact({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  const { ref, value } = useCounter(to)
  return (
    <div className="fact">
      <span className="fv">
        <span ref={ref}>{value}</span>
        {suffix}
      </span>
      <span className="fk">{label}</span>
    </div>
  )
}

export function About() {
  const headRef = useReveal<HTMLDivElement>()
  const cardRef = useReveal<HTMLDivElement>()
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head rv" ref={headRef}>
          <span className="sec-kicker">About</span>
          <h2>Engineer first</h2>
        </div>
        <div className="about-card rv" ref={cardRef}>
          <div className="about-txt">
            <p>
              I'm Valeria — an AI automation engineer with <b>7+ years in software engineering</b>,
              most recently as a frontend Team Lead at Meest Group, where I grew a team from one
              (me) to five engineers and owned the architecture of three products end-to-end.
            </p>
            <p>
              That background is the point: I don't glue no-code blocks together. I design{' '}
              <b>system architecture, write the code, and ship maintainable pipelines</b> — with
              error handling, contracts and tests — that keep working after I hand them over.
            </p>
            <p>
              Now I apply that to AI automation for agencies, founders and teams. If your team does
              something tedious every week and thinks "surely this could be automated" — it probably
              can. That's my favorite kind of problem.
            </p>
          </div>
          <div className="facts">
            {FACTS.map((f) => (
              <Fact key={f.label} {...f} />
            ))}
            <div className="fact">
              <span className="fv">EN / UA</span>
              <span className="fk">Working languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
