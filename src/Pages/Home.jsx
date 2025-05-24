import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to NotesHub</h1>
          <p className="hero-subtitle">Your comprehensive platform for academic notes and resources.</p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <span>Quality Notes</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎓</span>
              <span>Multiple Faculties</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💻</span>
              <span>Easy Access</span>
            </div>
          </div>
        </div>
        
        <div className="faculties-section">
          <h2 className="section-title">Available Faculties</h2>
          <div className="faculties-grid">
            <div className="faculty-card">
              <h3>BCA</h3>
              <p>Bachelor of Computer Applications</p>
              <a href="/bca" className="faculty-link">View Notes →</a>
            </div>
            <div className="faculty-card">
              <h3>BSCIT</h3>
              <p>Bachelor of Science in Information Technology</p>
              <a href="/bscit" className="faculty-link">View Notes →</a>
            </div>
            <div className="faculty-card">
              <h3>BIT</h3>
              <p>Bachelor of Information Technology</p>
              <a href="/bit" className="faculty-link">View Notes →</a>
            </div>
            <div className="faculty-card">
              <h3>BIM</h3>
              <p>Bachelor of Information Management</p>
              <a href="/bim" className="faculty-link">View Notes →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;