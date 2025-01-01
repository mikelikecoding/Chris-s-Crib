import React from 'react';
import "../Styles/footer.css"

function Footer() {
  return (
    <footer id="footer">
      <div >
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Chris's Crib. All rights reserved.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <nav>
            <a href="/services">Services</a> | 
            <a href="/donations">Donations</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
