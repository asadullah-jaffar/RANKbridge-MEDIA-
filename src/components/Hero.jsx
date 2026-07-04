import { Link } from 'react-router-dom'
import { HERO_METRICS } from '../constants'
import BackgroundBlobs from './BackgroundBlobs'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <BackgroundBlobs />
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content animate-in">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Agency Guest Posting &amp; Link Building
          </p>

          <h1 id="hero-heading">
            <span className="gradient-text">Guest Posting</span> &amp;{' '}
            <span className="gradient-text">Link Building</span> Services for Agencies and Brands
          </h1>

          <p className="hero__subheadline">
            RankBridge Media helps SEO agencies, SaaS companies, startups, brands, and website owners
            secure high-quality guest posts on relevant niche websites. We analyze your website,
            identify the best link opportunities, and build a monthly guest posting plan designed to
            improve authority, rankings, and organic revenue.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Start Link Building
            </Link>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </div>
        </div>

        <div className="hero__visual animate-in animate-delay-2" aria-hidden="true">
          <div className="hero-dashboard glow-card glass-card">
            <div className="hero-dashboard__header">
              <div className="hero-dashboard__dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero-dashboard__title">SEO Growth Dashboard</span>
              <span className="hero-dashboard__live">Live</span>
            </div>

            <div className="hero-dashboard__body">
              {HERO_METRICS.map((metric, index) => (
                <div
                  key={metric.label}
                  className="hero-dashboard__row"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="hero-dashboard__row-info">
                    <span className="hero-dashboard__row-label">{metric.label}</span>
                    <span className="hero-dashboard__row-status">{metric.status}</span>
                  </div>
                  <div className="hero-dashboard__bar-track">
                    <div
                      className="hero-dashboard__bar-fill"
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-dashboard__footer">
              <div className="hero-dashboard__stat">
                <span className="hero-dashboard__stat-value">Monthly</span>
                <span className="hero-dashboard__stat-label">Campaign Cycle</span>
              </div>
              <div className="hero-dashboard__stat">
                <span className="hero-dashboard__stat-value">Niche</span>
                <span className="hero-dashboard__stat-label">Relevant Links</span>
              </div>
              <div className="hero-dashboard__stat">
                <span className="hero-dashboard__stat-value">Quality</span>
                <span className="hero-dashboard__stat-label">First Approach</span>
              </div>
            </div>
          </div>
          <div className="hero__glow" />
        </div>
      </div>
    </section>
  )
}
