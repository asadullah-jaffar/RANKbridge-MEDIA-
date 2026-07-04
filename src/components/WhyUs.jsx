import { WHY_US_POINTS } from '../constants'
import './WhyUs.css'

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us__inner">
          <header className="section-header why-us__header">
            <span className="section-label">Why Choose Us</span>
            <h2>Why Companies &amp; Agencies Choose RankBridge Media</h2>
            <p>
              We combine website analysis, niche-relevant outreach, and monthly link building
              strategies designed for agencies, brands, and website owners who care about quality.
            </p>
          </header>

          <ul className="why-us__grid">
            {WHY_US_POINTS.map((point) => (
              <li key={point.title} className="why-us__card glow-card glass-card">
                <span className="why-us__check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M11.5 3.5L5.5 9.5L2.5 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
