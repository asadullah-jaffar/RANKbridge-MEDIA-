import { BRAND_NAME, FOUNDER_NAME, CONTACT_PAGE_SERVICES } from '../constants'
import LinkedInButton from './LinkedInButton'
import ContactEmail from './ContactEmail'
import './ContactPageSidebar.css'

export default function ContactPageSidebar() {
  return (
    <aside className="contact-sidebar">
      <div className="contact-sidebar__services glow-card glass-card">
        <h2 className="contact-sidebar__title">How We Can Help</h2>
        <ul className="contact-sidebar__list">
          {CONTACT_PAGE_SERVICES.map((service) => (
            <li key={service} className="contact-sidebar__item">
              <span className="contact-sidebar__dot" aria-hidden="true" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-sidebar__trust glow-card glass-card">
        <div className="contact-sidebar__avatar" aria-hidden="true">
          <span>A</span>
        </div>
        <p className="contact-sidebar__label">Founder</p>
        <p className="contact-sidebar__name">{FOUNDER_NAME}</p>
        <p className="contact-sidebar__brand">{BRAND_NAME}</p>
        <p className="contact-sidebar__text">
          Share your website details and we&apos;ll guide you on the right guest posting direction.
        </p>
        <ContactEmail />
        <LinkedInButton className="contact-sidebar__linkedin" />
      </div>
    </aside>
  )
}
