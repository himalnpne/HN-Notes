import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdComponent from '../Components/AdComponent';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-container">

        {/* Hero Section */}
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

        {/* Ad Section */}
        <div className="ad-section" style={{ margin: '20px 0' }}>
          <AdComponent 
            adSlot="1234567890" 
            adStyle={{ display: 'block', width: '100%', height: '90px' }} 
            isResponsive={true} 
          />
        </div>

        {/* Faculties Section */}
        <div className="faculties-section">
          <h2 className="section-title">Available Faculties</h2>
          <div className="faculties-grid">
            <div className="faculty-card" onClick={() => navigate('/bca')}>
              <h3>BCA</h3>
              <p>Bachelor of Computer Applications</p>
              <div className="faculty-link">View Notes →</div>
            </div>
            <div className="faculty-card" onClick={() => navigate('/bscit')}>
              <h3>BSCIT</h3>
              <p>Bachelor of Science in Information Technology</p>
              <div className="faculty-link">View Notes →</div>
            </div>
            <div className="faculty-card" onClick={() => navigate('/bit')}>
              <h3>BIT</h3>
              <p>Bachelor of Information Technology</p>
              <div className="faculty-link">View Notes →</div>
            </div>
            <div className="faculty-card" onClick={() => navigate('/bim')}>
              <h3>BIM</h3>
              <p>Bachelor of Information Management</p>
              <div className="faculty-link">View Notes →</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
