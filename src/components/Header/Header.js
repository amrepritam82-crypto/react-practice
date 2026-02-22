import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-circle">F</div>
          <span className="brand-name">Foodie</span>
        </div>
        <nav className="nav-items">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
          <a href="#" className="nav-link cart">
            Cart
            <span className="cart-badge">2</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
