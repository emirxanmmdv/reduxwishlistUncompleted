import React, { useEffect } from "react";
import "./index.scss";
import useFetch from "../Hook/useFetch";
import { useDispatch } from 'react-redux'
import { addWishlist } from '../Redux/WishlistSlice'

const Cards = () => {
    const dispatch = useDispatch()
     

  const { data, fetchData } = useFetch();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
      {data &&
        data.map((item) => (
          <div className="card" key={item.id}>
            <ul>
              <li className="image">
                <img src={item.image} />
              </li>
              <li className="category">{item.category}</li>
              <li className="name">{item.name}</li>
              <li className="price">{item.price}</li>
              <button onClick={
                ()=>dispatch(addWishlist(item))
                }>Add to Wishlist</button>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Cards;
