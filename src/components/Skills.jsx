import React from 'react';
import { Code, Database, Globe, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
        {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React Js', level: 85 },
        { name: 'JQuery', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MYSQL', level: 85 },
        { name: 'MongoDB', level: 85 }
      ]
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="section-divider"></div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;