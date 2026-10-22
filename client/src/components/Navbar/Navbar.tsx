import { useState } from 'react';
import { Phone, Headset, Menu, X } from '../common/Icons';
import './Navbar.css';

interface NavbarProps {
  onOpenTicket: () => void;
}

export default function Navbar({ onOpenTicket }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'תחומי פעילות', href: '#services' },
    { label: 'מחשבון מחיר', href: '#calculator' },
    { label: 'קטלוג ציוד וחבילות', href: '#catalog' },
    { label: 'אודות ויצירת קשר', href: '#contact' },
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">

        {/* לוגו ומיתוג מקורי */}
        <a href="#" className="navbar-brand">
          <img
            src="/logo-banner.jpeg"
            alt="וקסמן פתרונות מחשוב"
            className="brand-logo-image"
          />
          <div className="brand-text">
            <span className="brand-name">
              <span className="brand-highlight">וקסמן שירותי מיחשוב</span>
            </span>
            <span className="brand-tagline">
              לעסקים שחושבים על עצמם
            </span>
          </div>
        </a>

        {/* קישורי ניווט */}
        <nav className="navbar-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* פעולות מהירות */}
        <div className="navbar-actions">
          <a href="tel:099631330" className="btn-phone-call" title="חייג עכשיו">
            <Phone size={16} className="phone-icon" />
            <span dir="ltr">09-9631330</span>
          </a>

          <button onClick={onOpenTicket} className="btn-support-nav">
            <Headset size={16} />
            <span>תמיכה מרחוק</span>
          </button>

          {/* כפתור מובייל */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="פתח תפריט"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* תפריט מובייל נפתח */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:099631330" className="mobile-phone-btn">
            <Phone size={16} />
            <span>חיוג מהיר: 09-9631330</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTicket();
            }}
            className="mobile-support-btn"
          >
            <Headset size={16} />
            <span>פתיחת קריאת שירות</span>
          </button>
        </div>
      )}
    </header>
  );
}
