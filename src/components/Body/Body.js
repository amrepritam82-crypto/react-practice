import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../data/restaurants";
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurants);
  return (
    <section className="body">
      <div className="search-container">
        {/* <input type="text" placeholder="Search for restaurants or dishes..." /> */}
        <button onClick={() => {
          const filteredList = restaurants.filter(restaurant => restaurant.rating > 4.5);
          setRestaurantList(filteredList);
        }}>Top Rated</button>
        <button onClick={() => setRestaurantList(restaurants)} >Reset</button>
      </div>
      <div className="restaurant-grid">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Body;
