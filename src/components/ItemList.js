import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";


const ItemList = ({ items }) => {
 
  const dispatch = useDispatch()

  const handleAddItem = (item) =>{
      //Dispatch an action 
    dispatch(addItems(item));

  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-sm font-bold">{item.card.info.name}</span>
              <span className="text-sm font-bold ml-2">
                ₹{item.card.info.price / 100}
              </span> 
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
          <div className="absolute">
            <button className="p-2 mx-16 my-26 rounded-lg bg-black text-white shadow-lg" onClick={()=> handleAddItem(item)}>
              Add +
            </button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
