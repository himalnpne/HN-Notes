import React from 'react';
import './Footer.css';
import logo from './Logo.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Top Row */}
          <div className="footer-top-row">
            {/* Brand Section */}
            <div className="footer-section brand-section">
              <a href="/" className="footer-logo">
                <img src={logo} alt="NotesHub Logo" className="logo-icon" />
                <span className="footer-logo-text">NotesHub</span>
              </a>
              <p className="footer-description">
                Your comprehensive platform for academic notes and resources across various faculties.
                Empowering students with quality educational content.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/about" className="footer-link">About Us</a>
                <a href="/contact" className="footer-link">Contact</a>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
              </div>
            </div>

            {/* Faculty Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Faculty</h3>
              <div className="faculty-links">
                <div className="faculty-list">
                  <a href="/bca" className="footer-link faculty-link">BCA</a>
                  <a href="/bscit" className="footer-link faculty-link">BSCIT</a>
                  <a href="/bit" className="footer-link faculty-link">BIT</a>
                  <a href="/bim" className="footer-link faculty-link">BIM</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Developer Info */}
          <div className="footer-bottom-row">
            <div className="developer-card">
              <h3 className="footer-heading">Developer Information</h3>
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
                  <div className="contact-item">
                    <span className="contact-icon">💼</span>
                    <a
                      href="https://github.com/neupanehimal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      GitHub Profile
                    </a>
                  </div>
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
              Developed by <span className="developer-highlight">Himal Neupane</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;