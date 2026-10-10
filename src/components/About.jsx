import React from 'react';
import { MapPin, GraduationCap, Code2, Brain, Compass, Cpu, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Tag */}
        <div>
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>ABOUT LOHITH</span>
          </div>
          <h2 className="section-title">
            Engineering Rigor Meets Applied AI.
          </h2>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Portrait Column */}
          <div className="about-portrait-card">
            <img
              src="/images/lohith_varma_portrait.jpg"
              alt="S. Lohith Chaitanya Varma Portrait"
              className="about-portrait-img"
            />
            <div className="about-portrait-badge">
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>
                  {PERSONAL_INFO.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#a78bfa' }}>
                  AIML Undergraduate • Class of 2027
                </div>
              </div>
              <span className="pill" style={{ color: '#38bdf8', borderColor: 'rgba(56,189,248,0.3)' }}>
                RYMEC
              </span>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="about-text-content">
            <p className="about-lead-paragraph">
              I am an Artificial Intelligence and Machine Learning undergraduate at <span style={{ color: '#c4b5fd' }}>Rao Bahadur Y Mahabaleswarappa Engineering College</span>, based in Bellary, Karnataka.
            </p>

            <p className="about-body-paragraph">
              My engineering approach centers on a simple truth: cutting-edge AI is only as dependable as the fundamentals behind it. I bridge deep software engineering principles—namely Object-Oriented Programming (OOP) and Data Structures &amp; Algorithms (DSA)—with modern web architecture (React) and applied intelligence (Computer Vision &amp; FastAPI LLM integrations).
            </p>

            <p className="about-body-paragraph">
              Whether architecting mathematical facial proportion analyzers like the <em>Golden Ratio Face Analyzer</em> or low-latency career preparation engines like <em>AIVA</em>, I prioritize clean maintainable code, responsive user experiences, and measurable real-world utility.
            </p>

            {/* Core Pillars Grid */}
            <div className="about-highlights-grid">
              <div className="about-highlight-box">
                <div className="about-box-title">
                  <Brain size={18} color="#a78bfa" />
                  <span>Applied AI &amp; Vision</span>
                </div>
                <p className="about-box-desc">
                  Building intelligent systems using Computer Vision landmark calculations and high-speed LLM APIs.
                </p>
              </div>

              <div className="about-highlight-box">
                <div className="about-box-title">
                  <Code2 size={18} color="#38bdf8" />
                  <span>Algorithmic Rigor</span>
                </div>
                <p className="about-box-desc">
                  Solid foundation in Data Structures &amp; Algorithms and OOP for writing optimal, scalable solutions.
                </p>
              </div>

              <div className="about-highlight-box">
                <div className="about-box-title">
                  <Cpu size={18} color="#818cf8" />
                  <span>Modern React Stack</span>
                </div>
                <p className="about-box-desc">
                  Crafting responsive, component-driven web interfaces with intuitive user interaction.
                </p>
              </div>

              <div className="about-highlight-box">
                <div className="about-box-title">
                  <MapPin size={18} color="#10b981" />
                  <span>Bellary, Karnataka</span>
                </div>
                <p className="about-box-desc">
                  Active academic scholar pursuing B.E. (AIML) with expected graduation in 2027.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
