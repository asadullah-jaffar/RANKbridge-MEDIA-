import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-section__inner glass-card">
          <div className="cta-section__glow" aria-hidden="true" />
          <h2 id="cta-heading">Need Guest Posts That Actually Support Your SEO Goals?</h2>
          <p>
            Tell us about your website and we&apos;ll help you understand which niches, websites, and
            guest post opportunities can move your rankings forward.
          </p>
          <a href="#consultation-form" className="btn btn-primary">
            Request a Guest Posting Plan
          </a>
        </div>
      </div>
    </section>
  )
}
