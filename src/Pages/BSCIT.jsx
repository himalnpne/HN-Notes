import React from 'react';
import './FacultyPage.css';

const BSCIT = () => {
  return (
    <div className="faculty-page">
      <div className="faculty-container">
        <div className="faculty-header">
          <h1 className="faculty-title">Bachelor of Science in Information Technology (BSCIT)</h1>
          <p className="faculty-subtitle">Information Technology & Systems</p>
        </div>
        
        <div className="faculty-content">
          <div className="welcome-section">
            <h2>Welcome to BSCIT Page</h2>
            <p>This is the BSCIT page - your hub for Bachelor of Science in Information Technology notes and resources.</p>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Course Duration</h3>
              <p>4 Years</p>
            </div>
            <div className="info-card">
              <h3>Focus Areas</h3>
              <p>IT Systems, Networks, Security</p>
            </div>
            <div className="info-card">
              <h3>Career Paths</h3>
              <p>IT Specialist, Network Admin, System Engineer</p>
            </div>
          </div>
          
          <div className="coming-soon">
            <p>📚 Course materials and notes will be available soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSCIT;