import React, { useState, useEffect } from 'react';
import './App.css';
import CanvasBackground from './components/CanvasBackground';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Listen for custom open-command-palette event from global shortcut
  useEffect(() => {
    const handleOpenCmd = () => setCommandPaletteOpen(true);
    document.addEventListener('open-command-palette', handleOpenCmd);
    return () => document.removeEventListener('open-command-palette', handleOpenCmd);
  }, []);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 7);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
      addToast('Navigated to Resume section', 'info');
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Interactive Ambient Celestial Canvas */}
      <CanvasBackground />

      {/* Background subtle grid pattern */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Global Toast Notification System */}
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenResume={handleOpenResume}
        onToast={addToast}
      />

      {/* Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Home / Hero (With Live Terminal & Dual-Column Layout) */}
        <Hero
          onOpenResume={handleOpenResume}
          onSelectProject={(project) => setSelectedProject(project)}
          onToast={addToast}
        />

        {/* Work / Projects Showcase (With Filter Tabs & Interactive Overlays) */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Lohith (With Interactive Philosophy Switcher & Exact Real Photo Preserved) */}
        <About />

        {/* Technical Skills (With Live Search & Category Filtering) */}
        <Skills />

        {/* Education & Credentials (With Academic Timeline Progression) */}
        <Education />

        {/* Resume View & Download (With ATS Copy Text & PDF Export) */}
        <ResumeSection onToast={addToast} />

        {/* Contact Hub (With Topic Chips & Transmit Telemetry) */}
        <Contact onToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
