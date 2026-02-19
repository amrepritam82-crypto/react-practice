import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../data/restaurants";

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

export default Body;
