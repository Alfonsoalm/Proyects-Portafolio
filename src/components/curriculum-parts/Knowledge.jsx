import React, { useState } from 'react';
import knowledge from '../../data/knowledge'; // Ensure this path is correct

export const Conocimientos = () => {
  const [activeTab, setActiveTab] = useState('Hardware');

  const hardwareImages = ['esp32s3.png', 'jetson.png', 'raspberrypi5.png'];
  const softwareImages = ['Python.png', 'React.png', 'ROS.png'];

  return (
    <div className="page">
      <h1 className="heading">Knowledge</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('Hardware')}>Hardware</button>
        <button onClick={() => setActiveTab('Software')}>Software</button>
      </div>
      <hr />
      {activeTab === 'Hardware' && (
        <div className="knowledge-container">
          {/* Hardware Section */}
          <div className="knowledge-section card">
            {knowledge
              .filter(item => item.category === "Hardware")
              .map((item, index) => (
                <div key={index}>
                  <h2 className="knowledge-category">{item.category}</h2>
                  <ul className="knowledge-list">
                    {item.details.map((detail, i) => (
                      <li key={i} className="knowledge-item">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="image-grid-3-columns">
            {hardwareImages.map((image, index) => (
              <div key={index} className="image-card">
                <img src={`/images/icons/${image}`} alt={`Hardware ${index}`} className="grid-image" />
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'Software' && (
        <div className="knowledge-container">
          {/* Software Section */}
          <div className="knowledge-section card">
            {knowledge
              .filter(item => item.category === "Software")
              .map((item, index) => (
                <div key={index}>
                  <h2 className="knowledge-category">{item.category}</h2>
                  <ul className="knowledge-list">
                    {item.details.map((detail, i) => (
                      <li key={i} className="knowledge-item">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="image-grid-3-columns">
            {softwareImages.map((image, index) => (
              <div key={index} className="image-card">
                <img src={`/images/icons/${image}`} alt={`Software ${index}`} className="grid-image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
