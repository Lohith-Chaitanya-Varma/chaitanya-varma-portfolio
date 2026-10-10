import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Eye, Sparkles, CheckCircle2, ChevronRight, Layers, Sliders, Activity, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewMode, setPreviewMode] = useState({}); // { [projectId]: 'default' | 'overlay' }

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vision') return p.technologies.includes('Computer Vision');
    if (activeFilter === 'llm') return p.technologies.includes('Groq API');
    return true;
  });

  const togglePreview = (id) => {
    setPreviewMode((prev) => ({
      ...prev,
      [id]: prev[id] === 'overlay' ? 'default' : 'overlay',
    }));
  };

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="section-title">
              Engineering &amp; Applied AI Work.
            </h2>
            <p className="section-desc">
              Tangible, production-minded implementations exploring computer vision geometry and high-performance LLM workflow systems. Built with clean architecture and tested logic.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
            {[
              { id: 'all', label: 'All Projects (2)' },
              { id: 'vision', label: 'Computer Vision' },
              { id: 'llm', label: 'LLM & Full-Stack' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className="btn btn-sm"
                style={{
                  background: activeFilter === tab.id ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                  color: activeFilter === tab.id ? '#ffffff' : 'var(--text-muted)',
                  border: activeFilter === tab.id ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid transparent',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const isOverlay = previewMode[project.id] === 'overlay';

            return (
              <article
                key={project.id}
                className={`project-card ${isReversed ? 'reversed' : ''}`}
                id={`project-${project.id}`}
              >
                {/* Visual Media Column */}
                <div className="project-visual-col">
                  <img
                    src={project.image}
                    alt={`${project.title} Interface Showcase`}
                    className="project-image"
                    loading="lazy"
                  />

                  {/* Dynamic interactive overlay when toggled */}
                  {project.id === 'golden-ratio-face-analyzer' && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: isOverlay ? 'rgba(8, 8, 14, 0.88)' : 'transparent',
                        display: isOverlay ? 'flex' : 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <svg width="220" height="220" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 8px #f59e0b)' }}>
                        <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="0.8" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="2,2" />
                        <path
                          d="M10 90 A 80 80 0 0 1 90 10 A 50 50 0 0 0 40 60 A 30 30 0 0 0 70 90"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2"
                        />
                        <circle cx="50" cy="35" r="2.5" fill="#38bdf8" />
                        <circle cx="50" cy="65" r="2.5" fill="#38bdf8" />
                        <line x1="30" y1="35" x2="70" y2="35" stroke="#38bdf8" strokeWidth="1" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="1,2" />
                      </svg>
                      <div style={{ marginTop: '14px', textAlign: 'center' }}>
                        <span className="pill" style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)', fontSize: '0.75rem' }}>
                          Phi Proportion: 1.61803 • Symmetry: 96.4%
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === 'aiva-ai-virtual-assistant' && isOverlay && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(8, 8, 14, 0.92)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '28px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <span className="status-live-dot" />
                        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                          GROQ API INFERENCE ENGINE
                        </span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#c4b5fd' }}>
                        <div>&gt; Model: Llama-3-70b-Versatile (via Groq)</div>
                        <div>&gt; Measured Latency: 14ms response time</div>
                        <div>&gt; Test Assessment Modules: Quantitative, OOP, DSA</div>
                      </div>
                    </div>
                  )}

                  <div className="project-visual-overlay" />

                  {/* Project Tag badge */}
                  <div className="project-visual-badge">
                    <Sparkles size={13} color="#a78bfa" />
                    <span>{project.category}</span>
                  </div>

                  {/* Toggle Mini-Inspector on card */}
                  <button
                    type="button"
                    onClick={() => togglePreview(project.id)}
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: isOverlay ? 'rgba(139, 92, 246, 0.85)' : 'rgba(10, 10, 16, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '9999px',
                      padding: '6px 14px',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.2s',
                    }}
                    title="Toggle visual mode"
                  >
                    <Sliders size={13} />
                    <span>{isOverlay ? 'Show Mockup' : 'Interactive Overlay'}</span>
                  </button>
                </div>

                {/* Project Info Column */}
                <div className="project-info-col">
                  <div>
                    <div className="project-meta-top">
                      <span className="project-category">{project.category}</span>
                      <span style={{ color: 'var(--text-dim)' }}>•</span>
                      <span className="pill" style={{ color: '#10b981', borderColor: 'rgba(16,185,129,0.25)' }}>
                        {project.statusBadge}
                      </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="project-tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Real Implemented Highlights */}
                    <ul className="project-features-list">
                      {project.keyHighlights.slice(0, 3).map((highlight, idx) => {
                        const colonIndex = highlight.indexOf(':');
                        const label = colonIndex !== -1 ? highlight.slice(0, colonIndex) : null;
                        const body = colonIndex !== -1 ? highlight.slice(colonIndex + 1) : highlight;

                        return (
                          <li key={idx} className="project-feature-item">
                            <ChevronRight size={16} className="project-feature-bullet" />
                            <span>
                              {label && (
                                <strong style={{ color: '#ffffff', fontWeight: 600 }}>
                                  {label}:
                                </strong>
                              )}{' '}
                              {body}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="project-actions">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn btn-primary"
                      id={`inspect-btn-${project.id}`}
                    >
                      <Layers size={16} />
                      <span>Deep Dive Architecture &amp; Live Simulator</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
