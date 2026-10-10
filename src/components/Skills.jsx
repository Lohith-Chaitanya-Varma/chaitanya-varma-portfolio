import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, GitBranch, Layers, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

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

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.id === activeCategory;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    return {
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.badge.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Skills &amp; Theoretical Mastery.
            </h2>
            <p className="section-desc">
              Carefully curated technical capabilities based on implemented production code and computer science coursework. Organized transparently without arbitrary proficiency percentages.
            </p>
          </div>

          {/* Interactive Live Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9999px',
              width: '260px',
            }}
          >
            <Search size={16} color="#a78bfa" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, DSA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
                width: '100%',
                fontFamily: 'var(--font-sans)',
              }}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px', marginBottom: '8px' }}>
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'languages', label: 'Languages & Query' },
            { id: 'frameworks', label: 'Frameworks & AI' },
            { id: 'core-concepts', label: 'Core CS (DSA & OOP)' },
            { id: 'tools', label: 'Developer Tooling' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className="pill"
              style={{
                cursor: 'pointer',
                background: activeCategory === tab.id ? 'rgba(139, 92, 246, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                borderColor: activeCategory === tab.id ? '#8b5cf6' : 'var(--border-subtle)',
                color: activeCategory === tab.id ? '#ffffff' : 'var(--text-muted)',
                padding: '7px 16px',
              }}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 4-Quadrant / Filtered Skills Grid */}
        <div className="skills-container-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="skill-category-header">
                <h3 className="skill-category-title">
                  {getCategoryIcon(category.id)}
                  <span>{category.title}</span>
                </h3>
                <p className="skill-category-subtitle">{category.subtitle}</p>
              </div>

              <div className="skill-items-list">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      className="skill-item-row"
                      onClick={() => setSelectedSkill(isSelected ? null : skill)}
                      style={{
                        cursor: 'pointer',
                        borderColor: isSelected ? 'rgba(139, 92, 246, 0.5)' : undefined,
                        background: isSelected ? 'rgba(139, 92, 246, 0.1)' : undefined,
                      }}
                      title="Click to inspect"
                    >
                      <div className="skill-name-wrap">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="skill-title-text">{skill.name}</span>
                          {isSelected && <Sparkles size={13} color="#a78bfa" />}
                        </div>
                        <span className="skill-desc-text">{skill.description}</span>
                      </div>
                      <span className="skill-badge-pill">{skill.badge}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
