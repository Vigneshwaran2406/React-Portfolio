import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">About Me</div>
        <div className="section-divider"></div>

        <div className="about-grid">
          <div>
            <div className="about-item">
              <div className="about-icon user">
                <User size={24} />
              </div>
              <div>
                <h3>Who I Am</h3>
                <p>
                  I'm a recent MSc Data Science graduate with a passion for technology and web development. 
                  I have completed multiple certification courses to enhance my skills and stay 
                  updated with the latest technologies in the field.
                </p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-icon target">
                <Target size={24} />
              </div>
              <div>
                <h3>My Goal</h3>
                <p>
                  As a fresher, I'm looking for opportunities to apply my knowledge in 
                  real-world projects and contribute to innovative solutions while 
                  continuously learning and growing in my career.
                </p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-icon heart">
                <Heart size={24} />
              </div>
              <div>
                <h3>What I Love</h3>
                <p>
                  I enjoy creating clean, efficient code and building user-friendly 
                  applications. I'm particularly interested in full-stack development 
                  and data science applications.
                </p>
              </div>
            </div>
          </div>

          <div className="quick-facts">
            <h3>Quick Facts</h3>
            <div>
              <div className="fact-item">
                <span className="fact-label">Degree</span>
                <span className="fact-value">BCA (2019-2022), MSc Data Science (2022-2025)</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Experience</span>
                <span className="fact-value">Fresher</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Certifications</span>
                <span className="fact-value">4+ Courses</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Location</span>
                <span className="fact-value">Madurai</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Availability</span>
                <span className="fact-value available">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;