import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = 'src\\components\\Vigneshwaran.pdf'; // This would be your actual resume file
    link.download = 'Vigneshwaran.pdf';
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="download-btn">
            <button
              onClick={handleDownloadResume}
              className="btn-primary"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="btn-primary mobile-download-btn"
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
