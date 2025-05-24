import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About NotesHub</h1>
          <p className="about-subtitle">Empowering students with quality educational resources</p>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              NotesHub is dedicated to providing comprehensive and accessible academic notes 
              and resources for students across various faculties. We believe that quality 
              education should be available to everyone, and we strive to make learning 
              materials easily accessible to all students.
            </p>
          </div>
          
          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>📚 Quality Notes</h3>
                <p>Comprehensive and well-structured notes for all subjects</p>
              </div>
              <div className="feature-card">
                <h3>🎓 Multiple Faculties</h3>
                <p>Resources for BCA, BSCIT, BIT, and BIM programs</p>
              </div>
              <div className="feature-card">
                <h3>💻 Easy Access</h3>
                <p>User-friendly interface for quick and easy navigation</p>
              </div>
              <div className="feature-card">
                <h3>🆓 Free Resources</h3>
                <p>All educational materials are available at no cost</p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Developer</h2>
            <div className="developer-card">
              <h3>Himal Neupane</h3>
              <p>
                Full-stack developer passionate about education technology. 
                Created NotesHub to help students access quality educational resources 
                and support their academic journey.
              </p>
              <div className="developer-links">
                <a href="mailto:info@neupanehimal.com.np" className="dev-link">
                  ✉️ Contact
                </a>
                <a href="https://neupanehimal.com.np" target="_blank" rel="noopener noreferrer" className="dev-link">
                  🌐 Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;