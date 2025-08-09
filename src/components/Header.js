import { LOGO_URL } from "../utils/constant";
import "../style.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [btnNameReact, SetButtonNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-500 items-center">
      <div className="logo-container">
        <img className="w-24 px-2" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex ">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg cursor-pointer">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <button
            className="px-4 bg-gray-400 hover:bg-green-200 rounded-sm"
            onClick={() => {
              btnNameReact == "login"
                ? SetButtonNameReact("logout")
                : SetButtonNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
