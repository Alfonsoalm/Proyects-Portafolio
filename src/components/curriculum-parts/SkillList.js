// src/components/SkillList.js
import React, { useState } from 'react';

export const SkillList = ({ skills }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="skill-list">
      <button className="toggle-button" onClick={toggleExpanded}>
        {expanded ? 'Hide Skills' : 'Show Skills'}
      </button>
      {expanded && (
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillList;