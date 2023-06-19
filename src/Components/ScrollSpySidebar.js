import React, { useState, useEffect } from 'react';
import './ScrollSpySidebar.css';

function ScrollSpySidebar({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      let currentSection = sections[0].id;

      sections.forEach((section) => {
        const sectionEl = document.getElementById(section.id);
        const rect = sectionEl.getBoundingClientRect();
        
        if (rect.top <= 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sections]);

  return (
    <aside className="navbar">
      <ul className="nav-menu">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              className={`dot ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(section.id); // Update active section on click
                const sectionEl = document.getElementById(section.id);
                sectionEl.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {(activeSection === section.id || hoveredSection === section.id) && <span>{section.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ScrollSpySidebar;
