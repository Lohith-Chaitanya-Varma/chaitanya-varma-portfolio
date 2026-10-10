import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

const HELP_TEXT = `Available commands:
  • whoami    : Candidate bio and background
  • projects  : List implemented projects & stack
  • skills    : Technical competencies & core DSA/OOP
  • edu       : University, degree, and current CGPA
  • contact   : Email, location, and communication channels
  • clear     : Clear terminal history`;

export default function InteractiveTerminal({ onSelectProject, onOpenResume, onToast }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'SLCV Core v2.4 initialized. Type "help" or click quick prompts below.',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: 'user', text: `$ ${raw}` }];

    switch (raw) {
      case 'help':
        newHistory.push({ type: 'output', text: HELP_TEXT });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Candidate: ${PERSONAL_INFO.name}\nDegree: ${PERSONAL_INFO.degree} (2027)\nInstitution: ${PERSONAL_INFO.college}\nLocation: ${PERSONAL_INFO.location}\nFocus: Computer Vision, LLM Workflows, React, Python, Core DSA & OOP.`,
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[1] Golden Ratio Face Analyzer (HTML, CSS, JS, React, Computer Vision)\n    -> Facial landmark tracking & Phi (1.618) proportion scoring.\n[2] AIVA — AI Virtual Assistant (React, JS, Python, FastAPI, Groq API)\n    -> Aptitude tests, coding workspace, and mock interview simulator.`,
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Languages: Python, JavaScript, SQL, HTML, CSS\nFrameworks: React, FastAPI, Computer Vision, Groq API\nFundamentals: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)\nTools: Git, GitHub, VS Code`,
        });
        break;
      case 'edu':
        newHistory.push({
          type: 'output',
          text: `Degree: B.E. in Artificial Intelligence & Machine Learning\nCollege: Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC)\nBatch: 2023 — 2027\nCurrent CGPA: 7.14 / 10.00 (Verified)`,
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${PERSONAL_INFO.email}\nBase: Bellary, Karnataka, India\nStatus: Available for technical internships`,
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Unknown command "${raw}". Type "help" to see available options.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div
      className="interactive-terminal-card"
      style={{
        background: '#0a0a12',
        border: '1px solid rgba(139, 92, 246, 0.25)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(139, 92, 246, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
            lohith@terminal:~$
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="status-live-dot" style={{ width: '6px', height: '6px' }} />
          <span style={{ fontSize: '0.72rem', color: '#10b981' }}>LIVE SESSION</span>
        </div>
      </div>

      {/* Terminal Screen Output */}
      <div
        style={{
          padding: '18px 20px',
          height: '220px',
          overflowY: 'auto',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            style={{
              color:
                item.type === 'user'
                  ? '#38bdf8'
                  : item.type === 'system'
                  ? '#a78bfa'
                  : item.type === 'error'
                  ? '#f87171'
                  : '#cbd5e1',
              whiteSpace: 'pre-wrap',
            }}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Prompt Suggestions */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          padding: '8px 18px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', alignSelf: 'center', marginRight: '4px' }}>
          QUICK EXEC:
        </span>
        {['whoami', 'projects', 'skills', 'edu', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '6px',
              padding: '2px 8px',
              color: '#c4b5fd',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Line Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          background: 'rgba(10, 10, 18, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <span style={{ color: '#10b981', fontSize: '0.9rem' }}>❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'projects', 'skills', or 'edu'..."
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: 'none',
            border: 'none',
            color: '#a78bfa',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Execute command"
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}
