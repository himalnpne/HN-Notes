import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './Logo.svg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !document.querySelector('.mobile-menu-btn').contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDesktopDropdown = (open) => {
    if (window.innerWidth > 768) {
      setIsDropdownOpen(open);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="NotesHub Logo" className="logo-icon" loading="eager" />
            <span className="logo-text">NotesHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" className="nav-link" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Home
            </Link>
            <Link to="/about" className="nav-link" aria-current={location.pathname === '/about' ? 'page' : undefined}>
              About Us
            </Link>
            
            {/* Faculty Dropdown */}
            <div 
              className="dropdown-container" 
              ref={dropdownRef}
              onMouseEnter={() => handleDesktopDropdown(true)}
              onMouseLeave={() => handleDesktopDropdown(false)}
            >
              <div className="dropdown-trigger">
                <span>Faculty</span>
                <span className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</span>
              </div>
             
              <div 
                id="faculty-dropdown"
                className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
                role="menu"
              >
                <Link to="/bca" className="dropdown-item" role="menuitem">BCA</Link>
                <Link to="/bscit" className="dropdown-item" role="menuitem">BSCIT</Link>
                <Link to="/bit" className="dropdown-item" role="menuitem">BIT</Link>
                <Link to="/bim" className="dropdown-item" role="menuitem">BIM</Link>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
          ref={mobileMenuRef}
          aria-hidden={!isMobileMenuOpen}
        >
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About Us</Link>
          
          <div className="mobile-faculty-section">
            <div className="mobile-faculty-title">Faculty</div>
            <div className="mobile-faculty-links">
              <Link to="/bca" className="mobile-nav-link" onClick={toggleMobileMenu}>BCA</Link>
              <Link to="/bscit" className="mobile-nav-link" onClick={toggleMobileMenu}>BSCIT</Link>
              <Link to="/bit" className="mobile-nav-link" onClick={toggleMobileMenu}>BIT</Link>
              <Link to="/bim" className="mobile-nav-link" onClick={toggleMobileMenu}>BIM</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;