import React from 'react';
import { Terminal, Code, Cpu, Database, GitBranch, Layers, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return <Code size={20} color="#a78bfa" />;
      case 'frameworks':
        return <Cpu size={20} color="#38bdf8" />;
      case 'core-concepts':
        return <Layers size={20} color="#818cf8" />;
      case 'tools':
        return <GitBranch size={20} color="#10b981" />;
      default:
        return <Terminal size={20} color="#a78bfa" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Skills &amp; Theoretical Mastery.
          </h2>
          <p className="section-desc">
            Carefully curated technical capabilities based on implemented production code and computer science coursework. Organized transparently without arbitrary proficiency percentages.
          </p>
        </div>

        {/* 4-Quadrant Skills Grid */}
        <div className="skills-container-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="skill-category-header">
                <h3 className="skill-category-title">
                  {getCategoryIcon(category.id)}
                  <span>{category.title}</span>
                </h3>
                <p className="skill-category-subtitle">{category.subtitle}</p>
              </div>

              <div className="skill-items-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-row">
                    <div className="skill-name-wrap">
                      <span className="skill-title-text">{skill.name}</span>
                      <span className="skill-desc-text">{skill.description}</span>
                    </div>
                    <span className="skill-badge-pill">{skill.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
