import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Mail, Sparkles, MapPin, Clock, ArrowRight, ShieldCheck, Terminal, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

const FOCUS_TAGS = [
  'Computer Vision & Facial Geometry',
  'Low-Latency LLM Workflows (Groq API)',
  'Modern Component-Driven React Architecture',
  'Object-Oriented & Algorithmic Rigor (DSA)',
];

export default function Hero({ onOpenResume, onSelectProject, onToast }) {
  const [localTime, setLocalTime] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
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

  // Cycling focus tags
  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % FOCUS_TAGS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        {/* Dynamic Focus Ticker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div className="hero-status-pill" style={{ marginBottom: 0 }}>
            <span className="status-live-dot" />
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

          <div
            className="pill"
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              borderColor: 'rgba(99, 102, 241, 0.25)',
              color: '#c4b5fd',
              transition: 'all 0.4s ease',
            }}
          >
            <Sparkles size={12} color="#a78bfa" />
            <span>Focus: {FOCUS_TAGS[focusIndex]}</span>
          </div>
        </div>

        {/* Hero Main Grid: Left Content + Right Interactive Terminal */}
        <div className="hero-dual-grid">
          <div className="hero-content">
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

          {/* Right Column: Interactive Developer Shell / Terminal */}
          <div className="hero-terminal-col">
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                INTERACTIVE CLI EXPLORER
              </span>
              <span className="pill" style={{ fontSize: '0.7rem', color: '#c4b5fd' }}>
                Try clicking commands
              </span>
            </div>
            <InteractiveTerminal
              onSelectProject={onSelectProject}
              onOpenResume={onOpenResume}
              onToast={onToast}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
