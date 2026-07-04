import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND_NAME, NAV_LINKS } from '../constants'
import LogoMark from './LogoMark'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label={`${BRAND_NAME} home`}>
          <LogoMark size={36} />
          <span className="header__logo-text">{BRAND_NAME}</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="header__link" onClick={handleNavClick}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary header__cta-mobile" onClick={handleNavClick}>
            Get Monthly Guest Posts
          </Link>
        </nav>

        <Link to="/contact" className="btn btn-primary header__cta">
          Get Monthly Guest Posts
        </Link>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
