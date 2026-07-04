import { WHO_WE_HELP } from '../constants'
import './WhoWeHelp.css'

const ICONS = {
  agency: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  saas: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9h18M8 4v2M16 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  startup: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6.5 4.5 2.5-7.5-6-4.5h7.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  website: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
}

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section who-we-help">
      <div className="container">
        <header className="section-header centered">
          <span className="section-label">Who We Help</span>
          <h2>Built for Agencies, Brands &amp; Website Owners</h2>
        </header>

        <div className="who-we-help__grid">
          {WHO_WE_HELP.map((item) => (
            <article key={item.title} className="who-we-help__card glow-card glass-card">
              <div className="who-we-help__icon">{ICONS[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
