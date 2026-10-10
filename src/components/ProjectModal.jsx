import React, { useState, useEffect } from 'react';
import { X, Layers, Cpu, Sparkles, CheckCircle2, Sliders, Play, Code2, Bot, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Simulation state for Golden Ratio Face Analyzer
  const [goldenFeature, setGoldenFeature] = useState('eyeToChin');
  const [goldenRatioValue, setGoldenRatioValue] = useState(1.618);

  // Simulation state for AIVA
  const [selectedInterviewRole, setSelectedInterviewRole] = useState('AIML Engineer');
  const [simulatedPrompt, setSimulatedPrompt] = useState(
    'How do you handle feature scaling and vanishing gradients in deep neural networks?'
  );
  const [simulatedFeedback, setSimulatedFeedback] = useState(
    'Evaluating candidate response: Strong conceptual grasp of Batch Normalization, Xavier/He initialization, and residual skip connections. Inference Latency: 14ms (via Groq API).'
  );
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const runAivaSim = (role) => {
    setSelectedInterviewRole(role);
    setIsSimulating(true);
    if (role === 'AIML Engineer') {
      setSimulatedPrompt('How do you handle feature scaling and vanishing gradients in deep neural networks?');
      setTimeout(() => {
        setSimulatedFeedback('Evaluating candidate response: Good emphasis on BatchNorm and AdamW optimizers. Latency: 12ms via Groq API.');
        setIsSimulating(false);
      }, 400);
    } else if (role === 'Frontend Architect') {
      setSimulatedPrompt('Explain the difference between useMemo and useCallback, and when to optimize React re-renders.');
      setTimeout(() => {
        setSimulatedFeedback('Evaluating candidate response: Accurate explanation of reference caching and virtual DOM reconciliation. Latency: 14ms via Groq API.');
        setIsSimulating(false);
      }, 400);
    } else {
      setSimulatedPrompt('Given a sorted array rotated at an unknown pivot, find a target element in O(log n) time.');
      setTimeout(() => {
        setSimulatedFeedback('Code Analysis: Optimal modified binary search algorithm. Correct boundary conditions identified. Latency: 16ms via Groq API.');
        setIsSimulating(false);
      }, 400);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '28px 32px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: project.accentColor || '#8b5cf6',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {project.category}
              </span>
              <span style={{ color: 'var(--text-dim)' }}>•</span>
              <span className="pill" style={{ color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
                {project.statusBadge}
              </span>
            </div>
            <h2 id="modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '10px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            padding: '0 32px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '14px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'overview' ? `2px solid ${project.accentColor}` : '2px solid transparent',
              color: activeTab === 'overview' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Layers size={16} />
            <span>Implemented Features</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              padding: '14px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'architecture' ? `2px solid ${project.accentColor}` : '2px solid transparent',
              color: activeTab === 'architecture' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Cpu size={16} />
            <span>Architecture Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            style={{
              padding: '14px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'interactive' ? `2px solid ${project.accentColor}` : '2px solid transparent',
              color: activeTab === 'interactive' ? '#ffffff' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Sparkles size={16} />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {activeTab === 'overview' && (
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {project.description}
              </p>

              <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" />
                Verified Implemented Capabilities
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(139,92,246,0.15)',
                        color: '#c4b5fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '28px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
                  Technologies Utilized
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ borderColor: 'rgba(139,92,246,0.25)', color: '#ffffff' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                System design mapping for <strong>{project.title}</strong> demonstrating end-to-end data pipeline from user input to rendered interface.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {Object.entries(project.architecture).map(([layerKey, layerDesc], idx) => (
                  <div
                    key={layerKey}
                    style={{
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid var(--border-subtle)',
                      display: 'grid',
                      gridTemplateColumns: '180px 1fr',
                      gap: '20px',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.76rem',
                          color: '#a78bfa',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        STAGE 0{idx + 1}
                      </span>
                      <h4 style={{ fontSize: '1rem', color: '#ffffff', textTransform: 'capitalize', marginTop: '4px' }}>
                        {layerKey.replace(/([A-Z])/g, ' $1')}
                      </h4>
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {layerDesc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div>
              {project.id === 'golden-ratio-face-analyzer' ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>Geometric Landmark &amp; Phi Calculator</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                        Simulating landmark distance calculations against the golden ratio benchmark (1 : 1.618).
                      </p>
                    </div>
                    <span className="pill" style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)' }}>
                      Φ = 1.61803
                    </span>
                  </div>

                  <div
                    style={{
                      background: '#08080d',
                      borderRadius: '18px',
                      border: '1px solid var(--border-subtle)',
                      padding: '24px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '24px',
                    }}
                  >
                    <div>
                      <label style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                        Feature Measurement Set
                      </label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                        {[
                          { id: 'eyeToChin', label: 'Face Length vs Eye-to-Mouth Ratio', ratio: '1.618', harmony: '98.2%' },
                          { id: 'noseWidth', label: 'Interocular Distance vs Nose Width', ratio: '1.604', harmony: '96.8%' },
                          { id: 'mouthToChin', label: 'Lip Width vs Philtrum Height', ratio: '1.621', harmony: '97.4%' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setGoldenFeature(item.id);
                              setGoldenRatioValue(parseFloat(item.ratio));
                            }}
                            style={{
                              padding: '12px 14px',
                              borderRadius: '10px',
                              background: goldenFeature === item.id ? 'rgba(139,92,246,0.18)' : 'rgba(255,255,255,0.03)',
                              border: goldenFeature === item.id ? '1px solid #8b5cf6' : '1px solid var(--border-subtle)',
                              color: goldenFeature === item.id ? '#ffffff' : 'var(--text-secondary)',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              textAlign: 'left',
                              fontSize: '0.88rem',
                            }}
                          >
                            <span>{item.label}</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#c4b5fd' }}>
                              {item.harmony}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '24px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '14px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        textAlign: 'center',
                      }}
                    >
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        CALCULATED PHI DEVIATION
                      </span>
                      <div style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fbbf24', margin: '8px 0' }}>
                        {goldenRatioValue}
                      </div>
                      <span style={{ fontSize: '0.85rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={14} /> Golden Ratio Concordance: Near Perfect
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>AI Interview &amp; Coding Assessment Runner</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                        Simulating candidate evaluation with instant Groq API response generation.
                      </p>
                    </div>
                    <span className="pill" style={{ color: '#38bdf8', borderColor: 'rgba(56,189,248,0.3)' }}>
                      Latency: ~14ms
                    </span>
                  </div>

                  {/* Preset Selector */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    {['AIML Engineer', 'Frontend Architect', 'DSA Specialist'].map((role) => (
                      <button
                        key={role}
                        onClick={() => runAivaSim(role)}
                        className={`pill ${selectedInterviewRole === role ? 'active' : ''}`}
                        style={{
                          cursor: 'pointer',
                          background: selectedInterviewRole === role ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                          borderColor: selectedInterviewRole === role ? '#6366f1' : 'var(--border-subtle)',
                          color: selectedInterviewRole === role ? '#ffffff' : 'var(--text-muted)',
                        }}
                      >
                        {role}
                      </button>
                    ))}
                  </div>

                  <div
                    style={{
                      background: '#07070b',
                      borderRadius: '16px',
                      border: '1px solid var(--border-subtle)',
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Bot size={20} color="#818cf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                          AIVA INTERVIEW QUESTION
                        </span>
                        <p style={{ color: '#ffffff', fontSize: '0.95rem', marginTop: '4px' }}>
                          {simulatedPrompt}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '16px',
                        background: 'rgba(99,102,241,0.08)',
                        borderRadius: '12px',
                        border: '1px solid rgba(99,102,241,0.25)',
                      }}
                    >
                      <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                        FASTAPI + GROQ ENGINE DIAGNOSTIC
                      </span>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                        {isSimulating ? 'Processing response through Groq API...' : simulatedFeedback}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
