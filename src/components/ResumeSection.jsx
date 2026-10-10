import React from 'react';
import { Download, ExternalLink, Printer, FileText, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

export default function ResumeSection({ onToast }) {
  const handleDownload = () => {
    onToast('Resume PDF downloaded successfully!');
  };

  const handlePrint = () => {
    onToast('Opening print dialog for PDF export...');
    window.print();
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">
            Professional Resume.
          </h2>
          <p className="section-desc">
            Directly viewable on-screen or downloadable as a formatted PDF. Ready for technical internships and developer roles.
          </p>
        </div>

        <div className="resume-section-wrapper">
          {/* Action Toolbar */}
          <div className="resume-header-toolbar no-print">
            <div className="resume-toolbar-info">
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(139,92,246,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c4b5fd',
                }}
              >
                <FileText size={22} />
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600 }}>
                  S_Lohith_Chaitanya_Varma_Resume.pdf
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} />
                    Verified Document
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    B.E. AIML (2027)
                  </span>
                </div>
              </div>
            </div>

            <div className="resume-toolbar-actions">
              <a
                href="/resume.pdf"
                download="S_Lohith_Chaitanya_Varma_Resume.pdf"
                className="btn btn-primary btn-sm"
                onClick={handleDownload}
                id="download-resume-pdf-btn"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                id="view-resume-newtab-btn"
              >
                <ExternalLink size={15} />
                <span>Open in Tab</span>
              </a>

              <button
                onClick={handlePrint}
                className="btn btn-outline btn-sm"
                id="print-resume-btn"
                aria-label="Print or Save PDF"
              >
                <Printer size={15} />
                <span>Print / Save</span>
              </button>
            </div>
          </div>

          {/* Styled Document Paper (Visual preview) */}
          <div className="resume-paper-container">
            {/* Document Header */}
            <header className="resume-paper-header">
              <div>
                <h3 className="resume-candidate-name">{PERSONAL_INFO.name}</h3>
                <div className="resume-candidate-sub">
                  {PERSONAL_INFO.degree} • Class of 2027
                </div>
              </div>

              <div className="resume-meta-contact">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={13} color="#a78bfa" />
                  {PERSONAL_INFO.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={13} color="#38bdf8" />
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </header>

            {/* Education Block */}
            <div className="resume-section-block">
              <h4 className="resume-block-title">Education</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>{EDUCATION_DATA.institution}</strong>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '2px' }}>
                    {EDUCATION_DATA.degree}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                    {EDUCATION_DATA.location} • {EDUCATION_DATA.affiliation}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#c4b5fd' }}>
                    {EDUCATION_DATA.timeline}
                  </span>
                  <div style={{ marginTop: '4px' }}>
                    <span className="pill" style={{ color: '#ffffff', borderColor: 'rgba(139,92,246,0.3)' }}>
                      Current CGPA: <strong>{EDUCATION_DATA.cgpa}</strong> / 10.0
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills Block */}
            <div className="resume-section-block">
              <h4 className="resume-block-title">Technical Skills</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem' }}>
                <div>
                  <strong style={{ color: '#ffffff' }}>Programming Languages: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Python, JavaScript, SQL, HTML, CSS</span>
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Frameworks &amp; Web: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>React, FastAPI, Computer Vision, Groq API</span>
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Developer Tools: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Git, GitHub, VS Code</span>
                </div>
                <div>
                  <strong style={{ color: '#ffffff' }}>Core CS Fundamentals: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Data Structures &amp; Algorithms (DSA), Object-Oriented Programming (OOP)</span>
                </div>
              </div>
            </div>

            {/* Projects Block */}
            <div className="resume-section-block" style={{ marginBottom: 0 }}>
              <h4 className="resume-block-title">Key Projects</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {PROJECTS.map((proj) => (
                  <div key={proj.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <strong style={{ color: '#ffffff', fontSize: '1rem' }}>{proj.title}</strong>
                        <span style={{ color: 'var(--text-dim)', margin: '0 8px' }}>|</span>
                        <span style={{ color: '#a78bfa', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                          {proj.technologies.join(', ')}
                        </span>
                      </div>
                      <span className="pill" style={{ color: '#10b981', borderColor: 'rgba(16,185,129,0.3)', fontSize: '0.74rem' }}>
                        {proj.statusBadge}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.5 }}>
                      {proj.description}
                    </p>

                    <ul style={{ listStyle: 'none', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {proj.keyHighlights.slice(0, 2).map((item, i) => (
                        <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.86rem', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: 'var(--accent-violet)' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
