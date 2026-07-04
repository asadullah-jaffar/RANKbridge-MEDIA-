import { Link } from 'react-router-dom'
import { BRAND_NAME, FOUNDER_NAME } from '../constants'
import LogoMark from './LogoMark'
import ContactEmail from './ContactEmail'
import LinkedInButton from './LinkedInButton'
import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <LogoMark size={32} />
              <span>{BRAND_NAME}</span>
            </Link>
            <p className="footer__tagline">
              Premium guest posting and link building services for agencies, brands, and website owners.
            </p>
            <div className="footer__contact">
              <p>
                Founder: <strong>{FOUNDER_NAME}</strong>
              </p>
              <ContactEmail />
              <LinkedInButton variant="link" compact />
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__nav-title">Quick Links</h3>
            <ul className="footer__links">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 {BRAND_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
