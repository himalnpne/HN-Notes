import React from 'react';
import './FacultyPage.css';

const BIM = () => {
  return (
    <div className="faculty-page">
      <div className="faculty-container">
        <div className="faculty-header">
          <h1 className="faculty-title">Bachelor of Information Management (BIM)</h1>
          <p className="faculty-subtitle">Information Systems & Management</p>
        </div>
        
        <div className="faculty-content">
          <div className="welcome-section">
            <h2>Welcome to BIM Page</h2>
            <p>This is the BIM page - your hub for Bachelor of Information Management notes and resources.</p>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Course Duration</h3>
              <p>4 Years</p>
            </div>
            <div className="info-card">
              <h3>Focus Areas</h3>
              <p>Information Systems, Management, Analytics</p>
            </div>
            <div className="info-card">
              <h3>Career Paths</h3>
              <p>Information Manager, Business Analyst, Data Analyst</p>
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

export default BIM;