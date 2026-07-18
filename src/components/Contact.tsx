import { CONTACT } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="contact">
      <div className="wrap">
        <div className="final rv" ref={ref}>
          <span className="sec-kicker">Contact</span>
          <h2>Have a process worth automating?</h2>
          <p className="sec-sub">
            Tell me what your team does by hand every week. I'll tell you if a pipeline can do it —
            honestly, including when it can't.
          </p>
          <div className="final-actions">
            <a className="btn" href={`mailto:${CONTACT.email}`}>
              Book a free intro call
            </a>
            <a className="btn ghost" href={`mailto:${CONTACT.email}`}>
              Email me
            </a>
          </div>
          <a className="big-mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <div className="contact-meta">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <span>{CONTACT.location}</span>
            <span>Remote worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
