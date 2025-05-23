import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">📚</div>
              <span className="footer-logo-text">NotesHub</span>
            </div>
            <p className="footer-description">
              Your comprehensive platform for academic notes and resources across various faculties. 
              Empowering students with quality educational content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <div className="faculty-links">
                <span className="faculty-title">Faculty</span>
                <div className="faculty-list">
                  <a href="#bca" className="footer-link faculty-link">BCA</a>
                  <a href="#bscit" className="footer-link faculty-link">BSCIT</a>
                  <a href="#bit" className="footer-link faculty-link">BIT</a>
                  <a href="#bim" className="footer-link faculty-link">BIM</a>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Developer</h3>
            <div className="developer-info">
              <p className="developer-name">Himal Neupane</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a 
                    href="mailto:info@neupanehimal.com.np" 
                    className="contact-link"
                  >
                    info@neupanehimal.com.np
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <a 
                    href="https://neupanehimal.com.np" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    neupanehimal.com.np
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 NotesHub. All rights reserved.
            </p>
            <p className="developer-credit">
              Developed with ❤️ by <span className="developer-highlight">Himal Neupane</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;