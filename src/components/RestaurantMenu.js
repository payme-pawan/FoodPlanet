import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
          resId
      );
        const json = await data.json();
        console.log(json);
      setRestaurantInfo(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="menu">
        <div>
          <h1>Restraunt id: {resId}</h1>
          <h2>{restaurantInfo?.name}</h2>
          <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />{" "}
          <h3>{restaurantInfo?.area}</h3> <h3>{restaurantInfo?.city}</h3>{" "}
          <h3>{restaurantInfo?.avgRating} stars</h3>{" "}
          <h3>{restaurantInfo?.costForTwoMsg}</h3>{" "}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
