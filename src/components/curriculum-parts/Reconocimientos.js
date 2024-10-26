// src/components/Reconocimientos.js

import React from 'react';
import { recognitions } from '../../data/recognitions';
import { FaAward } from 'react-icons/fa';

export const Reconocimientos = () => {
  return (
    <div className="page">
      <h1 className="heading">Recognitions</h1>
      <hr />
      <div className="recognitions-container">
        {recognitions.map((recognition, index) => (
          <div key={index} className="recognition-card">
            <FaAward className="award-icon" />
            <h3>{recognition.title}</h3>
            <p><strong>Institution:</strong> {recognition.institution}</p>
            <p><strong>Date:</strong> {recognition.date}</p>
            <p>{recognition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reconocimientos;
