import React from 'react';
import { ArrowUpRight, Cpu, Eye, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="section-title">
            Engineering &amp; Applied AI Work.
          </h2>
          <p className="section-desc">
            Tangible, production-minded implementations exploring computer vision geometry and high-performance LLM workflow systems. Built with clean architecture and tested logic.
          </p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

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
                  <div className="project-visual-overlay"></div>
                  <div className="project-visual-badge">
                    <Sparkles size={13} color="#a78bfa" />
                    <span>{project.category}</span>
                  </div>
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
                      <span>Deep Dive Architecture</span>
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
