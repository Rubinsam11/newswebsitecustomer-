import React, { useState } from 'react';
import { Search, Menu, X, Bell, User, Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['World', 'Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health', 'Science'];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <div className="header-topbar-left">
            <span className="header-topbar-breaking">
              <Globe className="header-topbar-icon" />
              <span>Breaking News</span>
            </span>
            <span className="header-topbar-dot">•</span>
            <span className="header-topbar-live">Live Updates from Around the World</span>
          </div>
          <div className="header-topbar-date">
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-main-inner">
          {/* Logo */}
          <div className="header-logo">
            <h1>
              <span className="header-logo-accent">News</span> tamil
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="header-search-desktop">
            <div className="header-search-wrapper">
              <Search className="header-search-icon" />
              <input
                type="text"
                placeholder="Search news..."
                className="header-search-input"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="header-icons">
            <button className="header-icon-btn header-icon-btn-desktop">
              <Bell className="header-icon" />
            </button>
            <button className="header-icon-btn header-icon-btn-desktop">
              <User className="header-icon" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-icon-btn header-icon-btn-mobile"
            >
              {isMenuOpen ? <X className="header-menu-icon" /> : <Menu className="header-menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="header-search-mobile">
          <div className="header-search-wrapper">
            <Search className="header-search-icon" />
            <input
              type="text"
              placeholder="Search news..."
              className="header-search-input"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="header-nav-inner">
          {/* Desktop Navigation */}
          <div className="header-nav-desktop">
            {categories.map((category) => (
              <button
                key={category}
                className="header-nav-link"
              >
                {category}
                <span className="header-nav-underline"></span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="header-nav-mobile">
              {categories.map((category) => (
                <button
                  key={category}
                  className="header-nav-mobile-link"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
