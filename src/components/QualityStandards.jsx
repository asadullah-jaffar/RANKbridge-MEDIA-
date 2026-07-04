import { QUALITY_STANDARDS } from '../constants'
import './QualityStandards.css'

export default function QualityStandards() {
  return (
    <section id="quality" className="section quality">
      <div className="container">
        <div className="quality__inner glow-card glass-card">
          <header className="quality__header">
            <span className="section-label">Quality Standards</span>
            <h2>Our Guest Posting Quality Standards</h2>
            <p>
              Every placement follows a quality-first approach — no shortcuts, no spam, and no
              unrealistic promises.
            </p>
          </header>

          <ul className="quality__list">
            {QUALITY_STANDARDS.map((point) => (
              <li key={point} className="quality__item">
                <span className="quality__bullet" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 3L4.5 8.5 2 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
