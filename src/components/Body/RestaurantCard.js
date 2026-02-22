import React from "react";

const CLOUDINARY_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ data }) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    veg,
  } = data;

  return (
    <div className="restaurant-card">
      <div className="card-img-wrapper">
        <img
          src={CLOUDINARY_BASE_URL + cloudinaryImageId}
          alt={name}
        />
        {aggregatedDiscountInfoV3 && (
          <div className="card-discount">
            <span className="discount-header">{aggregatedDiscountInfoV3.header}</span>
            <span className="discount-sub">{aggregatedDiscountInfoV3.subHeader}</span>
          </div>
        )}
        {veg && <span className="veg-badge">🟢 Pure Veg</span>}
      </div>

      <div className="card-content">
        <h3 className="dish-name">{name}</h3>
        <p className="restaurant-name">
          {locality}, {areaName}
        </p>

        <div className="card-meta">
          <span className={`rating ${avgRating >= 4.5 ? "high" : ""}`}>
            ⭐ {avgRating}
          </span>
          <span>{sla?.slaString}</span>
        </div>

        <p className="cuisine">{cuisines?.join(", ")}</p>
        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
