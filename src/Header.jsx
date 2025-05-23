import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">📚</div>
            <span className="logo-text">NotesHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            
            {/* Faculty Dropdown */}
            <div className="dropdown-container">
              <button
                onClick={toggleDropdown}
                className="dropdown-trigger"
                onBlur={() => setTimeout(closeDropdown, 150)}
              >
                <span>Faculty</span>
                <span className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#bca" className="dropdown-item">BCA</a>
                  <a href="#bscit" className="dropdown-item">BSCIT</a>
                  <a href="#bit" className="dropdown-item">BIT</a>
                  <a href="#bim" className="dropdown-item">BIM</a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-btn"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>About Us</a>
          <div className="mobile-faculty-section">
            <span className="mobile-faculty-title">Faculty</span>
            <div className="mobile-faculty-links">
              <a href="#bca" className="mobile-nav-link" onClick={toggleMobileMenu}>BCA</a>
              <a href="#bscit" className="mobile-nav-link" onClick={toggleMobileMenu}>BSCIT</a>
              <a href="#bit" className="mobile-nav-link" onClick={toggleMobileMenu}>BIT</a>
              <a href="#bim" className="mobile-nav-link" onClick={toggleMobileMenu}>BIM</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;