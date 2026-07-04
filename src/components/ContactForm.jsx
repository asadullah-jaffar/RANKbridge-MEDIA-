import { useState } from 'react'
import {
  CONTACT_EMAIL,
  SERVICE_TYPE_OPTIONS,
  MONTHLY_REQUIREMENT_OPTIONS,
  MAILTO_CONSULTATION,
} from '../constants'
import ContactEmail from './ContactEmail'
import './ContactForm.css'

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  serviceType: '',
  requirement: '',
  niche: '',
  message: '',
  callTime: '',
}

function getLabel(options, value) {
  return options.find((o) => o.value === value)?.label ?? value
}

function buildMailtoLink(form) {
  const subject = encodeURIComponent('RankBridge Media Consultation Request')
  const body = encodeURIComponent(
    [
      'RankBridge Media — Consultation Request',
      '',
      `Full Name: ${form.name}`,
      `Company / Website URL: ${form.company}`,
      `Email Address: ${form.email}`,
      `Service Type / Help Needed: ${getLabel(SERVICE_TYPE_OPTIONS, form.serviceType)}`,
      `Monthly Guest Post Requirement: ${getLabel(MONTHLY_REQUIREMENT_OPTIONS, form.requirement)}`,
      `Target Niche: ${form.niche}`,
      `Preferred Call Time: ${form.callTime}`,
      '',
      'Main SEO Problem / Message:',
      form.message,
    ].join('\n'),
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export default function ContactForm({ id = 'contact-form' }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailtoLink(form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form__success glass-card" role="status">
        <div className="contact-form__success-icon" aria-hidden="true">
          ✓
        </div>
        <h3>Consultation request prepared</h3>
        <p>
          Your email app should open with your consultation request. Please send the email to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to complete your request.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form id={id} className="contact-form glow-card glass-card" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor={`${id}-name`}>Full Name</label>
          <input
            type="text"
            id={`${id}-name`}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-company`}>Company / Website URL</label>
          <input
            type="text"
            id={`${id}-company`}
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-email`}>Email Address</label>
          <input
            type="email"
            id={`${id}-email`}
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-serviceType`}>Service Type / Help Needed</label>
          <select
            id={`${id}-serviceType`}
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select service type
            </option>
            {SERVICE_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-requirement`}>Monthly Guest Post Requirement</label>
          <select
            id={`${id}-requirement`}
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select monthly volume
            </option>
            {MONTHLY_REQUIREMENT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-niche`}>Target Niche</label>
          <input
            type="text"
            id={`${id}-niche`}
            name="niche"
            value={form.niche}
            onChange={handleChange}
            required
            placeholder="e.g. SaaS, finance, health, ecommerce"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-callTime`}>Preferred Call Time</label>
          <input
            type="text"
            id={`${id}-callTime`}
            name="callTime"
            value={form.callTime}
            onChange={handleChange}
            placeholder="e.g. Weekdays 2–5 PM EST"
          />
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor={`${id}-message`}>Main SEO Problem / Message</label>
          <textarea
            id={`${id}-message`}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Describe your website, competitors, authority concerns, or guest posting goals..."
          />
        </div>
      </div>

      <ContactEmail className="contact-form__email" />

      <p className="contact-form__hint">
        Request a consultation and share your website details. We&apos;ll review your requirements
        and guide you on the right guest posting direction.
      </p>
      <p className="contact-form__note">
        For detailed strategy discussions, you can request a personal consultation by email.
      </p>

      <div className="contact-form__actions">
        <button type="submit" className="btn btn-primary contact-form__submit">
          Request Consultation
        </button>
        <a href={MAILTO_CONSULTATION} className="btn btn-secondary contact-form__email-btn">
          Email Us Directly
        </a>
      </div>
    </form>
  )
}
