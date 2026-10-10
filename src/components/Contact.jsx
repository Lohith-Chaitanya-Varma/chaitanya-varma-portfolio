import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink, Sparkles, MessageSquare, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const GithubIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SUBJECT_PRESETS = [
  'Internship Opportunity (AIML / Software)',
  'Computer Vision Project Inquiry',
  'AIVA Platform Collaboration',
  'General Technical Discussion',
];

export default function Contact({ onToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const selectPresetSubject = (preset) => {
    setFormState((prev) => ({ ...prev, subject: preset }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onToast('Please fill in all required fields.', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onToast('Message inquiry successfully dispatched to Lohith!');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 750);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Start a Conversation.
          </h2>
          <p className="section-desc">
            Currently seeking Artificial Intelligence, Machine Learning, and Software Engineering internship opportunities. Reach out directly via email or send a message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Contact Details Left Panel */}
          <div className="contact-info-panel">
            {/* Primary Email Card */}
            <div className="contact-card-box">
              <span className="contact-card-label">DIRECT EMAIL ADDRESS</span>
              <div className="contact-card-value">{PERSONAL_INFO.email}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                Fastest response channel for project inquiries, internships, and technical collaborations.
              </p>

              <div className="contact-card-actions">
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  id="copy-email-btn"
                >
                  {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'Inquiry regarding AIML Opportunity')}`}
                  className="btn btn-primary btn-sm"
                  id="mailto-btn"
                >
                  <Mail size={14} />
                  <span>Open Mail Client</span>
                </a>
              </div>
            </div>

            {/* Location & Institution Card */}
            <div className="contact-card-box">
              <span className="contact-card-label">BASE LOCATION &amp; INSTITUTION</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 600 }}>
                <MapPin size={18} color="#a78bfa" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                {PERSONAL_INFO.college} • Open to on-site, hybrid, and remote internship arrangements.
              </p>
            </div>

            {/* Professional Platforms Card */}
            <div className="contact-card-box">
              <span className="contact-card-label">PROFESSIONAL PLATFORMS</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-item-row"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => onToast('Opening GitHub...')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <GithubIcon size={18} color="#ffffff" />
                    <div>
                      <div style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600 }}>GitHub</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Code repositories &amp; open-source projects</div>
                    </div>
                  </div>
                  <ExternalLink size={14} color="var(--text-dim)" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-item-row"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => onToast('Opening LinkedIn...')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LinkedinIcon size={18} color="#38bdf8" />
                    <div>
                      <div style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600 }}>LinkedIn</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Professional network &amp; career updates</div>
                    </div>
                  </div>
                  <ExternalLink size={14} color="var(--text-dim)" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} color="#a78bfa" />
              <span>Send a Direct Message</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
              Fill in your details or pick a quick topic preset. It will directly target Lohith's communication inbox.
            </p>

            {/* Quick Topic Chips */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                TOPIC PRESETS:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {SUBJECT_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => selectPresetSubject(preset)}
                    className="pill"
                    style={{
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      background: formState.subject === preset ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                      borderColor: formState.subject === preset ? '#8b5cf6' : 'var(--border-subtle)',
                      color: formState.subject === preset ? '#ffffff' : 'var(--text-muted)',
                    }}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem' }}>Inquiry Sent Successfully</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                  Thank you for reaching out! Lohith will review your message promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. S. Alexander"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input"
                    placeholder="Internship Opportunity / Project Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    className="form-textarea"
                    placeholder="Describe the opportunity, role requirements, or collaboration idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                  id="submit-message-btn"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
