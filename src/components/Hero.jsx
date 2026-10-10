import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Mail, Sparkles, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Bellary, Karnataka, India is Asia/Kolkata (IST)
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Status Pill with live pulse */}
          <div className="hero-status-pill">
            <span className="status-live-dot"></span>
            <span>AVAILABLE FOR AIML &amp; SOFTWARE INTERNSHIPS</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={13} color="#a78bfa" />
              Bellary, India
            </span>
            {localTime && (
              <>
                <span style={{ opacity: 0.3 }}>|</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={13} color="#38bdf8" />
                  {localTime} IST
                </span>
              </>
            )}
          </div>

          {/* Oversized Headline */}
          <h1 className="hero-headline">
            Architecting Intelligence. <br />
            <span className="hero-gradient-text">Engineering with Precision.</span>
          </h1>

          {/* Subhead / Introduction */}
          <p className="hero-subhead">
            I am <strong style={{ color: '#ffffff', fontWeight: 600 }}>{PERSONAL_INFO.name}</strong>, an Artificial Intelligence and Machine Learning undergraduate at <span style={{ color: '#c4b5fd' }}>{PERSONAL_INFO.college}</span>. I design computer vision applications, high-performance React frontends, and applied AI systems backed by rigorous Object-Oriented and Algorithmic foundations.
          </p>

          {/* Interactive CTAs */}
          <div className="hero-actions">
            <button
              onClick={() => scrollTo('work')}
              className="btn btn-primary"
              id="hero-explore-work-btn"
            >
              <span>Explore Featured Work</span>
              <ArrowDown size={17} />
            </button>

            <button
              onClick={onOpenResume}
              className="btn btn-secondary"
              id="hero-view-resume-btn"
            >
              <FileText size={17} color="#a78bfa" />
              <span>View Resume</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-outline"
              id="hero-contact-btn"
            >
              <Mail size={17} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Hero Key Stats Bar */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="hero-stat-value">
                AIML
                <span className="hero-stat-sub">'27</span>
              </div>
              <span className="hero-stat-label">B.E. Specialization</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value">
                {PERSONAL_INFO.cgpa}
                <span className="hero-stat-sub">/ 10.0</span>
              </div>
              <span className="hero-stat-label">Current CGPA</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value">
                DSA &amp; OOP
              </div>
              <span className="hero-stat-label">Core Fundamentals</span>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-value" style={{ color: '#38bdf8' }}>
                Vision &amp; LLM
              </div>
              <span className="hero-stat-label">Production Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
