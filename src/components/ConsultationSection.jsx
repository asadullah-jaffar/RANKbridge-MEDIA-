import { CONSULTATION_CARDS } from '../constants'
import './ConsultationSection.css'

export default function ConsultationSection() {
  return (
    <section id="consultation" className="section consultation">
      <div className="container">
        <header className="section-header centered">
          <span className="section-label">Personal Consultation</span>
          <h2>Need Help Choosing the Right Guest Posting Plan?</h2>
          <p>
            If you are not sure how many guest posts your website needs, which niches are best for
            your backlinks, why your site authority is dropping, or how to compete with stronger
            backlink profiles, you can request a personal consultation with RankBridge Media.
          </p>
        </header>

        <div className="consultation__grid">
          {CONSULTATION_CARDS.map((card) => (
            <article key={card.title} className="consultation__card glow-card glass-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="consultation__cta">
          <a href="#consultation-form" className="btn btn-primary">
            Request Personal Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
