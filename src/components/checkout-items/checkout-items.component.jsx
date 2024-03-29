import React, { useContext } from "react";
import "./checkout-items.style.scss";
import { CartContext } from "../contexts/cart.context";
const CheckoutItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const { clearItemFromCart, addItemsToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItemFromCart(cartItem)}>&#10094;</div>
       <span className="value"> {quantity}</span>
        <div className="arrow" onClick={()=>addItemsToCart(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
