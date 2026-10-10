import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Terminal, Sparkles } from 'lucide-react';
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

export default function Navbar({ onOpenCommandPalette }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

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
      {/* Sleek Gradient Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #38bdf8 100%)',
          width: `${scrollProgress}%`,
          zIndex: 1000,
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.7)',
          transition: 'width 0.1s ease-out',
        }}
        aria-hidden="true"
      />

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

            {/* Quick Actions (Command Palette shortcut & Get in Touch) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Command Palette Trigger Button */}
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="btn btn-secondary btn-sm cmd-palette-trigger"
                style={{
                  padding: '7px 12px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                }}
                aria-label="Open command palette search"
                title="Press Ctrl+K or Cmd+K"
              >
                <Search size={14} color="#a78bfa" />
                <span className="cmd-kbd-hint" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                  ⌘K
                </span>
              </button>

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

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'flex-start', gap: '10px', marginTop: '6px' }}
          >
            <Search size={16} color="#a78bfa" />
            <span>Search &amp; Command Palette (⌘K)</span>
          </button>

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
