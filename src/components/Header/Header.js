import React from "react";
import { useState } from "react";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");  
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
          <button className="login-button" onClick={() => {
            if (btnNameLogin === "Login") {
              setBtnNameLogin("Logout");
            } else {
              setBtnNameLogin("Login");
            }
          }}>{btnNameLogin}</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
