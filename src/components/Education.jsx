import React, { useState } from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  const [selectedMilestone, setSelectedMilestone] = useState(1);

  const academicMilestones = [
    {
      year: 'Year 1 & 2 (2023 — 2025)',
      title: 'Foundations & Algorithmic Rigor',
      highlights: 'Object-Oriented Programming, Data Structures & Algorithms, Python & JavaScript core logic, Database Systems (SQL).',
    },
    {
      year: 'Year 3 (Current • 2025 — 2026)',
      title: 'Applied AI & Systems Specialization',
      highlights: 'Computer Vision landmark analysis, Artificial Intelligence algorithms, FastAPI backend engineering, and LLM orchestration (Groq API).',
    },
    {
      year: 'Year 4 (Expected 2027)',
      title: 'Graduation & Industry Engineering',
      highlights: 'Advanced machine learning pipelines, scalable distributed architectures, and technical internship engineering.',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">
            Education &amp; Credentials.
          </h2>
          <p className="section-desc">
            Formal undergraduate training in Artificial Intelligence, Machine Learning, and fundamental Computer Science theory.
          </p>
        </div>

        {/* Education Showcase Card */}
        <div className="education-showcase-card">
          <div className="education-top-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="pill" style={{ color: '#a78bfa', borderColor: 'rgba(167,139,250,0.3)' }}>
                  Undergraduate Program
                </span>
                <span style={{ color: 'var(--text-dim)' }}>•</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Batch 2023 — 2027
                </span>
              </div>

              <h3 className="degree-name">{EDUCATION_DATA.degree}</h3>

              <div className="institution-name">
                <GraduationCap size={20} color="#a78bfa" />
                <span>{EDUCATION_DATA.institution}</span>
              </div>

              <div className="institution-location">
                <MapPin size={15} color="#38bdf8" />
                <span>{EDUCATION_DATA.location}</span>
                <span style={{ color: 'var(--text-dim)', margin: '0 6px' }}>•</span>
                <span>{EDUCATION_DATA.affiliation}</span>
              </div>
            </div>

            {/* CGPA Stat Display with Circular Ring Aesthetic */}
            <div className="cgpa-stat-box" style={{ position: 'relative' }}>
              <span className="cgpa-caption">Current Cumulative GPA</span>
              <div className="cgpa-number">{EDUCATION_DATA.cgpa}</div>
              <div className="cgpa-scale">Scale: {EDUCATION_DATA.cgpaScale}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', fontSize: '0.8rem', color: '#10b981' }}>
                <CheckCircle size={14} />
                <span>Verified Academic Standing</span>
              </div>
            </div>
          </div>

          {/* Academic Journey Timeline */}
          <div style={{ padding: '28px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="#a78bfa" />
              <span>Academic Progression Timeline</span>
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {academicMilestones.map((m, idx) => (
                <div
                  key={m.year}
                  onClick={() => setSelectedMilestone(idx)}
                  style={{
                    padding: '16px',
                    borderRadius: '14px',
                    background: selectedMilestone === idx ? 'rgba(139, 92, 246, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: selectedMilestone === idx ? '1px solid #8b5cf6' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#a78bfa', marginBottom: '4px' }}>
                    {m.year}
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 600, marginBottom: '6px' }}>
                    {m.title}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {m.highlights}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Bottom Grid */}
          <div className="education-bottom-grid">
            <div className="edu-detail-col">
              <h4>
                <Award size={16} color="#a78bfa" />
                <span>Degree Status</span>
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Expected Graduation: <strong>2027</strong>
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                Pre-final year undergraduate actively seeking technical and machine learning internship engagements.
              </p>
            </div>

            <div className="edu-detail-col" style={{ gridColumn: 'span 2' }}>
              <h4>
                <BookOpen size={16} color="#38bdf8" />
                <span>Core Academic Curriculum Focus</span>
              </h4>
              <div className="edu-course-pills">
                {EDUCATION_DATA.coreFocusAreas.map((area) => (
                  <span key={area} className="pill">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
