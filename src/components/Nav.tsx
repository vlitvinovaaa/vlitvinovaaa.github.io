import { NAV_LINKS } from '../data/content'

export function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="nav-in">
          <a className="logo" href="#top">
            Valeria<span>/</span>Litvinova
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta" href="#contact">
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
