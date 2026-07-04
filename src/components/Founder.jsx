import { BRAND_NAME, FOUNDER_NAME } from '../constants'
import LinkedInButton from './LinkedInButton'
import ContactEmail from './ContactEmail'
import './Founder.css'

export default function Founder() {
  return (
    <section id="founder" className="section founder">
      <div className="container">
        <div className="founder__card glow-card glass-card">
          <div className="founder__glow" aria-hidden="true" />
          <div className="founder__content">
            <header className="section-header">
              <span className="section-label">About the Agency</span>
              <h2>Founded by {FOUNDER_NAME}</h2>
            </header>

            <p className="founder__text">
              {BRAND_NAME} is a guest posting and link building agency founded by {FOUNDER_NAME}.
              The agency helps SEO agencies, SaaS companies, startups, brands, and website owners
              secure niche-relevant placements on real websites through website analysis, outreach,
              and monthly link building strategy.
            </p>

            <div className="founder__meta">
              <div className="founder__avatar" aria-hidden="true">
                <span>A</span>
              </div>
              <div className="founder__meta-info">
                <p className="founder__name">{FOUNDER_NAME}</p>
                <p className="founder__role">Founder, {BRAND_NAME}</p>
                <ContactEmail className="founder__email" />
                <LinkedInButton className="founder__linkedin" />
              </div>
            </div>
          </div>

          <div className="founder__visual" aria-hidden="true">
            <div className="founder__visual-card">
              <span className="founder__visual-label">Focus</span>
              <span className="founder__visual-value">Guest Posting</span>
            </div>
            <div className="founder__visual-card">
              <span className="founder__visual-label">Approach</span>
              <span className="founder__visual-value">Quality First</span>
            </div>
            <div className="founder__visual-card">
              <span className="founder__visual-label">Strategy</span>
              <span className="founder__visual-value">Monthly Plans</span>
            </div>
            <div className="founder__visual-card">
              <span className="founder__visual-label">Goal</span>
              <span className="founder__visual-value">Long-Term SEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
