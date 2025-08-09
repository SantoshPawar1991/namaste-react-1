import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="my-4 py-4 text-center ">
      <h1 className="font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-red-500 text-white rounded-lg p-2 my-2 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h3>Cart Is Empty Please Add items to Cart!!</h3> }
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
