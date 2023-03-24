import { IMG_CDN_URL } from "../config";

const RestaurantCards = ({name,locality,cloudinaryImageId,lastMileTravel,cuisines}) => {
    return (
        <div className="card" >
            <img src = {IMG_CDN_URL + cloudinaryImageId} alt="food-image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")} </h3>
            <h4>{locality} </h4>
            <h5>{lastMileTravel}</h5>

        </div>
    );
}

export default RestaurantCards;