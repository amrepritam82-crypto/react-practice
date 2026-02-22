import React from "react";

const RestaurantCard = ({ data }) => {
  const {
    restaurantName,
    dishName,
    image,
    rating,
    deliveryTime,
    location,
    cuisine,
    priceForTwo,
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
        <p className="cuisine">{cuisine.join(", ")}</p>
        <p className="price">₹{priceForTwo} for two</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
