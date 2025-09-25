import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Shopping Website',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Springboot', 'MySQL'],
      github: 'https://github.com/Vigneshwaran2406/ecommerce/tree/gh-pages',
     
    },
    {
      title: 'Library Management System',
      description: 'A complete library management system featuring intuitive user interfaces, robust book and member tracking, and persistent data storage with SQLite.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python','Tkinter','SQLite'],
      github: 'https://github.com/Vigneshwaran2406/Library_management_system',

    },
    {
      title: 'Sales Analysis & Dashboard Creation',
      description: 'A complete sales analytics solution integrating advanced forecasting models with interactive Power BI dashboards for real-time performance tracking and strategic decision-making.',
      image: 'https://raw.githubusercontent.com/Vigneshwaran2406/Sales_Dashboard_PowerBI/refs/heads/main/Screenshot1.png',
      technologies: ['Microsoft PowerBI'],
      github: 'https://github.com/Vigneshwaran2406/Sales_Dashboard_PowerBI/tree/main',
    },
    {
      title: 'Times Series Forecasting',
      description: 'Comprehensive time series analysis and forecasting through the application of multiple machine learning models, capturing complex temporal dependencies and adapting to evolving trends.',
      image: 'https://www.fingent.com/wp-content/uploads/Why-Time-Series-Forecasting-Is-A-Crucial-Part-Of-Machine-Learning.jpg',
      technologies: ['Machine Learning','ML Algorithms','Python'],
      github: 'https://github.com/Vigneshwaran2406/Sales_Forecasting',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">Featured Projects</div>
        <div className="section-divider"></div>

        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-item ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-badge">
                    <Globe className="project-badge-icon" size={16} />
                    <span className="project-badge-text">Web App</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                 
                  <a href={project.github} className="project-link secondary">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;