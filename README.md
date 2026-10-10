# S. Lohith Chaitanya Varma — Personal Portfolio

A bespoke, dark luxury personal portfolio website engineered with **React** and **Vanilla CSS**.

Built for **S. Lohith Chaitanya Varma**, B.E. in Artificial Intelligence and Machine Learning (Class of 2027) at **Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC)**, Bellary, Karnataka, India.

---

## 💎 Features & Architecture

- **Dark Luxury Aesthetic**: Obsidian black backdrops, ambient radial glows (electric violet, deep indigo, neon cyan), and refined glassmorphism.
- **Editorial Typography**: Pairing *Syne* (display headlines), *Plus Jakarta Sans* (body), and *JetBrains Mono* (technical telemetry & metrics).
- **Featured Project Showcases**:
  - **Golden Ratio Face Analyzer**: Computer vision geometric proportion measurement (Phi 1:1.618) and visual landmark analysis with interactive simulator.
  - **AIVA — AI Virtual Assistant**: Aptitude testing, coding workspace, and mock interview simulator powered by ultra-low-latency Groq API inference.
  - *Deep Dive Architecture Modal* for both projects with technical flows and live simulations.
- **Clean Technical Skills**: Categorized transparently (*Languages*, *Frameworks*, *Core CS Fundamentals: DSA & OOP*, *Developer Tools*) without arbitrary proficiency percentages.
- **Academic Foundation**: Verified degree highlights, institutional credentials, and current **7.14 CGPA**.
- **Working Resume System**:
  - Embedded on-screen document layout matching exact profile.
  - One-click **Download PDF** shortcut fetching `public/resume.pdf`.
  - Direct **Print / Save to PDF** trigger.
- **Direct Contact Hub**:
  - One-click copy email button with instant animated toast (`chaitanya.aiml.rymec@gmail.com`).
  - Native mail client launcher.
  - Interactive message form with validation.
  - Live Indian Standard Time (IST) clock for Bellary, Karnataka.

---

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. Build production bundle:
   ```bash
   npm run build
   ```

4. Regenerate or update `public/resume.pdf`:
   ```bash
   python generate_resume_pdf.py
   ```
