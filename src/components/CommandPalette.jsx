import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, FileText, Mail, Code, Layers, GraduationCap, Sparkles, X, Terminal, ExternalLink, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onSelectProject, onOpenResume, onToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'work',
      category: 'Navigation',
      icon: <Layers size={16} color="#8b5cf6" />,
      label: 'Explore Featured Work',
      detail: 'Golden Ratio Face Analyzer & AIVA',
      run: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'project-golden',
      category: 'Project Deep Dive',
      icon: <Sparkles size={16} color="#f59e0b" />,
      label: 'Inspect Golden Ratio Face Analyzer',
      detail: 'Computer vision geometric proportion analyzer',
      run: () => {
        onSelectProject(PROJECTS[0]);
        onClose();
      },
    },
    {
      id: 'project-aiva',
      category: 'Project Deep Dive',
      icon: <Sparkles size={16} color="#38bdf8" />,
      label: 'Inspect AIVA — AI Virtual Assistant',
      detail: 'Aptitude & Mock Interview system with Groq API',
      run: () => {
        onSelectProject(PROJECTS[1]);
        onClose();
      },
    },
    {
      id: 'about',
      category: 'Navigation',
      icon: <Code size={16} color="#a78bfa" />,
      label: 'About Lohith Chaitanya Varma',
      detail: 'Engineering background, college & philosophy',
      run: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'skills',
      category: 'Navigation',
      icon: <Terminal size={16} color="#10b981" />,
      label: 'View Technical Skills Matrix',
      detail: 'Python, React, SQL, DSA & OOP fundamentals',
      run: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'education',
      category: 'Navigation',
      icon: <GraduationCap size={16} color="#c084fc" />,
      label: 'Academic Credentials & CGPA',
      detail: 'B.E. AIML at RYMEC (CGPA: 7.14, Class of 2027)',
      run: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'resume',
      category: 'Actions',
      icon: <FileText size={16} color="#38bdf8" />,
      label: 'View / Download Official Resume',
      detail: 'PDF export & formatted document',
      run: () => {
        onOpenResume();
        onClose();
      },
    },
    {
      id: 'copy-email',
      category: 'Actions',
      icon: <Mail size={16} color="#ec4899" />,
      label: 'Copy Direct Email Address',
      detail: PERSONAL_INFO.email,
      run: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onToast('Copied chaitanya.aiml.rymec@gmail.com to clipboard!');
        onClose();
      },
    },
    {
      id: 'contact',
      category: 'Navigation',
      icon: <Mail size={16} color="#6366f1" />,
      label: 'Get in Touch / Send Message',
      detail: 'Direct message dispatch form',
      run: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.detail.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          document.dispatchEvent(new CustomEvent('open-command-palette'));
        }
      }
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].run();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2000 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '620px',
          padding: 0,
          background: '#0d0d16',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(139, 92, 246, 0.2)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '18px 22px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <Search size={18} color="#a78bfa" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section... (or press Esc to exit)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.98rem',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '10px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '36px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.run()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(139, 92, 246, 0.16)' : 'transparent',
                    border: isSelected ? '1px solid rgba(139, 92, 246, 0.35)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ color: isSelected ? '#ffffff' : 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>
                        {item.label}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {item.category}
                    </span>
                    {isSelected && <CornerDownLeft size={14} color="#a78bfa" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div
          style={{
            padding: '12px 20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.76rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-dim)',
          }}
        >
          <div style={{ display: 'flex', gap: '14px' }}>
            <span><kbd style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px' }}>↑↓</kbd> navigate</span>
            <span><kbd style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px' }}>↵</kbd> select</span>
            <span><kbd style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px' }}>esc</kbd> close</span>
          </div>
          <span style={{ color: '#a78bfa' }}>S. Lohith Chaitanya Varma</span>
        </div>
      </div>
    </div>
  );
}
