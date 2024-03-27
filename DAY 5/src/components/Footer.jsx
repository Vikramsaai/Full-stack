// Footer.jsx

import React from 'react';
import '../assets/Footer.css'; // Import your footer CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <span className="contact-link">Contact Us</span>
        </div>
        <div className="contact-info">
          <p>Email: ChessChampionHub@gmail.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
