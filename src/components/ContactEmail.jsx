import { CONTACT_EMAIL } from '../constants'
import './ContactEmail.css'

export default function ContactEmail({ className = '' }) {
  return (
    <p className={`contact-email ${className}`.trim()}>
      Email:{' '}
      <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email__link">
        {CONTACT_EMAIL}
      </a>
    </p>
  )
}
