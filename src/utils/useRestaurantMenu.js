import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, SetResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
     SetResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
