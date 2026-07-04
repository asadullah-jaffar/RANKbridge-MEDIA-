import { TRUST_POINTS } from '../constants'
import './TrustStrip.css'

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Key value propositions">
      <div className="container">
        <ul className="trust-strip__list">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="trust-strip__item">
              <span className="trust-strip__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 4.5L6.5 11.5L2.5 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
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
    </section>
  )
}
