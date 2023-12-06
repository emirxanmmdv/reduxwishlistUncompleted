import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { addWishlist } from "../Redux/WishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  return (
    <>
      <div className="wishListIcon">
        {wishlist &&
          wishlist.map((item) => (
            <div className="card" key={item.id}>
              <ul>
                <li className="image">
                  <img src={item.image} />
                </li>
                <li className="category">{item.category}</li>
                <li className="name">{item.name}</li>
                <li className="price">{item.price}</li>
  
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
