import React from 'react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap no-print">
      <div className="container">
        <div className="footer-top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="brand-badge" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>
                {PERSONAL_INFO.monogram}
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '6px' }}>
              B.E. Artificial Intelligence &amp; Machine Learning (2027) • {PERSONAL_INFO.college}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              id="back-to-top-btn"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Bellary, Karnataka, India</span>
            <span>•</span>
            <span style={{ color: '#a78bfa' }}>Built with React &amp; Vanilla CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
