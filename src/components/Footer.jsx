import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-cta">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              I'm excited to start my career and contribute to innovative projects. 
              If you're looking for a dedicated fresher with strong technical skills, let's connect!
            </p>
          </div>

          <div className="footer-divider">
            <div className="footer-credits">
              <span>Made with</span>
              <Heart className="footer-heart" size={16} />
              <span>and</span>
              <Code className="footer-code" size={16} />
              <span>by Vigneshwaran</span>
            </div>
            <p className="footer-copyright">
              © 2024 Vigneshwaran. All rights reserved.
            </p>
          </div>

          <div className="footer-tech">
            <p>
              This portfolio was built with React.js and CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;