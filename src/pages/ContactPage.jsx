import ContactForm from '../components/ContactForm'
import ContactPageSidebar from '../components/ContactPageSidebar'
import BackgroundBlobs from '../components/BackgroundBlobs'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <BackgroundBlobs />
        <div className="contact-page__bg" aria-hidden="true" />
        <div className="container contact-page__hero-inner">
          <span className="section-label">Contact RankBridge Media</span>
          <h1>Request a Guest Posting Consultation</h1>
          <p>
            Tell us about your website, niche, competitors, and monthly guest posting needs.
            RankBridge Media will help you understand the right link building direction.
          </p>
        </div>
      </section>

      <section className="section contact-page__form-section">
        <div className="container contact-page__grid">
          <ContactPageSidebar />
          <div id="consultation-form">
            <ContactForm id="contact-page-form" />
          </div>
        </div>
      </section>
    </div>
  )
}
