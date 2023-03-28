import { restaurantList } from "../config";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <h1> No restaurant match your search </h1>
      ) : (
        <div className="food-items">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCards {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
