import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    // useEffect(() => {
    //    setTimeout(() => {
    //     setRestaurantList(restaurants);
    //    }, 2000);
    // }, []);

 useEffect(() => {
  fetchData();
 }, []);

const fetchData = async () => {
  try {
    const response = await fetch("https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants");
    const json = await response.json();
    const list =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurantList(list);
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    setRestaurantList(restaurants);
  }
}
  return (
    <section className="body">
      <div className="search-container">
        {/* <input type="text" placeholder="Search for restaurants or dishes..." /> */}
        <button onClick={() => {
          const filteredList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4.5);
          setRestaurantList(filteredList);
        }}>Top Rated</button>
        <button onClick={fetchData}>Reset</button>
      </div>
      <div className="restaurant-grid">
        {restaurantList.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
          ))
        )}
      </div>
    </section>
  );
};

export default Body;
