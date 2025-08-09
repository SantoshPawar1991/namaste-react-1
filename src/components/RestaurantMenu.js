import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_RESTAURANT_URL, RESTAURANT_MENU } from "../utils/constant";
import "../style.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

 
  if (resInfo?.cards == null) {
    return <Shimmer />;
  }

  const { name, category, price, imageId } =
    resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
      ?.card?.itemCards?.[0].card?.info || [];

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

 
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

 
  return (
    <div>
  
      {categories.map((category, index)=>(<RestaurantCategory key={index} data={category?.card?.card}/>))}

    </div>
  );
};

export default RestaurantMenu;
