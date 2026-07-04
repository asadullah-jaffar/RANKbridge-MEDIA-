import ContactForm from './ContactForm'
import ContactEmail from './ContactEmail'
import LinkedInButton from './LinkedInButton'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-section__grid">
          <header className="contact-section__header">
            <span className="section-label">Consultation Request</span>
            <h2>Request Your Guest Posting Consultation</h2>
            <p>
              Share your website, target niche, and monthly guest post requirements. We&apos;ll review
              your site and suggest the best link building direction.
            </p>
            <ContactEmail />
            <div className="contact-section__linkedin">
              <LinkedInButton />
            </div>
          </header>

          <div id="consultation-form">
            <ContactForm id="home-contact-form" />
          </div>
        </div>
      </div>
    </section>
  )
}
