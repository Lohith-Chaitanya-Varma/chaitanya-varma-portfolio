import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot"></span>
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

            {/* CGPA Stat Display */}
            <div className="cgpa-stat-box">
              <span className="cgpa-caption">Current Cumulative GPA</span>
              <div className="cgpa-number">{EDUCATION_DATA.cgpa}</div>
              <div className="cgpa-scale">Scale: {EDUCATION_DATA.cgpaScale}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', fontSize: '0.8rem', color: '#10b981' }}>
                <CheckCircle size={14} />
                <span>Verified Academic Standing</span>
              </div>
            </div>
          </div>

          {/* Education Bottom Grid */}
          <div className="education-bottom-grid">
            <div className="edu-detail-col">
              <h4>
                <Calendar size={16} color="#a78bfa" />
                <span>Timeline &amp; Status</span>
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Expected Graduation: <strong>2027</strong>
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                Pre-final year undergraduate currently pursuing specialized AIML semester curriculum.
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
