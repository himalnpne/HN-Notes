import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Logo.svg';

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
             <img src={logo} alt="NotesHub Logo" className="logo-icon" />
              <span className="logo-text">NotesHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
           
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
                  <Link to="/bca" className="dropdown-item" onClick={closeDropdown}>BCA</Link>
                  <Link to="/bscit" className="dropdown-item" onClick={closeDropdown}>BSCIT</Link>
                  <Link to="/bit" className="dropdown-item" onClick={closeDropdown}>BIT</Link>
                  <Link to="/bim" className="dropdown-item" onClick={closeDropdown}>BIM</Link>
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
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</Link>
          <div className="mobile-faculty-section">
            <span className="mobile-faculty-title">Faculty</span>
            <div className="mobile-faculty-links">
              <Link to="/bca" className="mobile-nav-link" onClick={closeMobileMenu}>BCA</Link>
              <Link to="/bscit" className="mobile-nav-link" onClick={closeMobileMenu}>BSCIT</Link>
              <Link to="/bit" className="mobile-nav-link" onClick={closeMobileMenu}>BIT</Link>
              <Link to="/bim" className="mobile-nav-link" onClick={closeMobileMenu}>BIM</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;