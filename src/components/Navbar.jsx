import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-container">
          <nav className={`navbar-inner ${scrolled ? 'navbar-scrolled' : ''}`}>
            {/* Brand Logo / Monogram */}
            <a
              href="#home"
              className="brand-link"
              onClick={(e) => handleNavClick(e, '#home')}
              aria-label="S. Lohith Chaitanya Varma home"
            >
              <div className="brand-badge">
                {PERSONAL_INFO.monogram}
              </div>
              <div className="brand-text">
                <span className="brand-name">{PERSONAL_INFO.shortName}</span>
                <span className="brand-subtitle">AIML '27 • RYMEC</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`nav-item-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Quick Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href="#contact"
                className="nav-cta-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              NAVIGATION MENU
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-drawer-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: '12px', width: '100%' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Contact Lohith</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </>
  );
}
