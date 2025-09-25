import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">Education & Certifications</div>
        <div className="section-divider"></div>
        <p className="contact-description" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          My academic background and professional certifications
        </p>

        <div className="education-content">
          {/* Degree */}
          <div className="degree-card">
            <div className="degree-header">
              <div className="degree-icon">
                <GraduationCap size={32} />
              </div>
              <div className="degree-info">
                <div className="degree-title-row">
                  <h3 className="degree-title">Bachelor of Computer Applications (BCA)</h3>
                  <div className="degree-date">
                    <Calendar size={16} />
                    <span>2019 - 2022</span>
                  </div>
                </div>
                <p className="degree-description">
                  Comprehensive program covering programming fundamentals, database management, 
                  web development, and software engineering principles.
                </p>
                <div className="degree-tags">
                  <span className="degree-tag">Computer Science</span>
                  <span className="degree-tag">Programming</span>
                  <span className="degree-tag">Database Management</span>
                </div>
              </div>
            </div>
          </div>
<div className="degree-card">
            <div className="degree-header">
              <div className="degree-icon">
                <GraduationCap size={32} />
              </div>
              <div className="degree-info">
                <div className="degree-title-row">
                  <h3 className="degree-title">MSc Data Science (MSc DS)</h3>
                  <div className="degree-date">
                    <Calendar size={16} />
                    <span>2022 - 2025</span>
                  </div>
                </div>
                <p className="degree-description">
                 Comprehensive program covering Machine Learning, Big Data Analytics, Predictive Modeling,
                 Understanding of Data Engineering and Data Analysis.
                </p>
                <div className="degree-tags">
                  <span className="degree-tag">Data Engineering</span>
                  <span className="degree-tag">Big Data</span>
                  <span className="degree-tag">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h3 className="certifications-title">Professional Certifications</h3>
            <div className="certifications-grid">
              {[
                {
                  title: 'Java Full Stack Development',
                  description: 'Complete Java ecosystem including Spring Boot, Hibernate, and microservices architecture.',
                  skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices']
                },
                {
                  title: 'Python Full Stack Development',
                  description: 'End-to-end Python development with Django, Flask, and modern web technologies.',
                  skills: ['Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL']
                },
                {
                  title: 'React.js Development',
                  description: 'Modern frontend development with React, hooks, state management, and best practices.',
                  skills: ['React.js', 'Redux', 'Context API', 'Hooks', 'Material-UI']
                },
                {
                  title: 'Data Science & Data Engineering',
                  description: 'Data analysis, machine learning, and data pipeline development using Python.',
                  skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization']
                }
              ].map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-header">
                    <div className="cert-icon">
                      <Award size={24} />
                    </div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-description">{cert.description}</p>
                      <div className="cert-skills">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="cert-skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;