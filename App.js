import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./restaurants.js";

//Food ordering app
//Header
// --Logo
// --Nav items
//Body
// --Search bar
// --Restaurant list with cards
//Footer
// --Copyright
// --Contact us
// --Address

const RestaurantCard = ({ data }) => {
  const {
    restaurantName,
    dishName,
    image,
    rating,
    deliveryTime,
    location,
    cuisine,
    priceForTwo
  } = data;

  return (
    <div className="restaurant-card">

      <img src={image} alt={dishName} />

      <div className="card-content">
        <h3 className="dish-name">{dishName}</h3>
        <p className="restaurant-name">{restaurantName}</p>

        <div className="card-meta">
          <span className={`rating ${rating >= 4.5 ? "high" : ""}`}>
            ⭐ {rating}
          </span>
          <span>{deliveryTime} mins</span>
        </div>

        <p className="location">{location}</p>
        <p className="cuisine">
          {cuisine.join(", ")}
        </p>

        <p className="price">
          ₹{priceForTwo} for two
        </p>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <section className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants or dishes..." />
        <button>Search</button>
      </div>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </section>
  );
};

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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
