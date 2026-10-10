import React, { useState } from 'react';
import './App.css';
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
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 7);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
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
      {/* Background subtle grid pattern */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Global Toast Notification System */}
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Home / Hero */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Work / Projects Showcase */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Lohith */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Education & Credentials */}
        <Education />

        {/* Resume View & Download */}
        <ResumeSection onToast={addToast} />

        {/* Contact Hub */}
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
