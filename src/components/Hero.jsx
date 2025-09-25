import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
     const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = './Vigneshwaran.pdf'; // This would be your actual resume file
    link.download = 'Vigneshwaran.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              <span>
                Hi, I'm{' '}
              </span>
              <span className="gradient-text">
                Vigneshwaran
              </span>
            </h1>
            <p className="hero-subtitle">
              Entry-Level Full Stack Developer & UI/UX Aspirant
            </p>
            <p className="hero-description">
              Driven to create impactful digital solutions, I combine my foundational knowledge in 
              Java, Python (full-stack), and React.js with a keen eye for user experience. Committed 
              to continuous learning and building elegant, functional applications.
            </p>
          </div>

          <div className="hero-buttons">
            <button
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View My Work
            </button>
            <button className="btn-secondary" onClick={handleDownloadResume}>
              Download CV
            </button>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Vigneshwaran2406"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vigneshwaran-sivakumar-70b5a0227"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:wvignesh000@gmail.com"
              className="social-link"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="scroll-indicator"
          >
            <span>Scroll Down</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
