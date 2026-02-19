import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Foodie</h2>
          <p className="footer-tagline">
            Delivering happiness at your doorstep.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Cart</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@foodie.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Pune, Maharashtra</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
