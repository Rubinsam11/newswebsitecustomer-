import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col">
          <h3 className="footer-logo">
            <span className="footer-logo-accent">News</span>tamil
          </h3>
          <p className="footer-desc">
            Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.
          </p>
          <div className="footer-socials">
            <button className="footer-social-btn footer-social-facebook">
              <Facebook className="footer-social-icon" />
            </button>
            <button className="footer-social-btn footer-social-twitter">
              <Twitter className="footer-social-icon" />
            </button>
            <button className="footer-social-btn footer-social-instagram">
              <Instagram className="footer-social-icon" />
            </button>
            <button className="footer-social-btn footer-social-youtube">
              <Youtube className="footer-social-icon" />
            </button>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            {['World', 'Politics', 'Business', 'Technology', 'Sports', 'Entertainment'].map((link) => (
              <li key={link}>
                <button className="footer-link">{link}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            {['About Us', 'Our Team', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
              <li key={link}>
                <button className="footer-link">{link}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" />
              <span>news@newshub.com</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact-item">
              <MapPin className="footer-contact-icon" />
              <span>123 News Street, Media City</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear}  rubin sam All rights reserved. | Delivering truth, one story at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
