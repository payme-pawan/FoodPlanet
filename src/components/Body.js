import { restaurantList } from "../config";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../config";


const filterData = (searchText,restaurants) => {
    return restaurants.filter( (restaurant)=> restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()) );
}

const Body = () => {
    
    const [searchText,setSearchText] = useState("");
    const [restaurants,setRestaurants] = useState(restaurantList);
    
    useEffect(()=> {
     getRestaurants();
      
    }, [])
   
   async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

   }

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" 
          value = {searchText}
          onChange = { (e) => setSearchText(e.target.value) }  
        />
        <button className="search-btn"  
         onClick={() => {
            const data = filterData(searchText,restaurants)
            setRestaurants(data);
         } } 
        >
          Search
        </button>
      </div>
      <div className="food-items">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
