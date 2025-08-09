import { useContext } from "react";
import "../style.css";
import { IMG_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {loggedInUser} = useContext(UserContext);

  if (!resData?.info) {
    return null; // or render fallback UI
  }
  const { name, cuisines, avgRating, costForTwo, veg, cloudinaryImageId, sla } =
    resData?.info;
  return (
    <div className="w-52 p-4 m-4 bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="w-52 "alt="food-image" src={IMG_URL + cloudinaryImageId}></img>
      <h3 className="py-4 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} Cost For Two</h4>
      <h4>{sla?.deliveryTime} Mins</h4>
      <h4>{veg}</h4>  
      <h5>UserName: {loggedInUser}</h5>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) =>{
  return(props)=>{
     return (
      <div>
        <div className="veg-flag absolute bg-green-600 text-black m-2 p-2">Veg</div>
        <RestaurantCard {...props}/>
      </div>
    )
  }
} 



export default RestaurantCard;
