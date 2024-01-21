import React from "react";

import "./cart-item.style.scss"
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  console.log(name);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price}x{quantity}=${price*quantity}</span>
      </div>
    
    
    </div>
  );
};

export default CartItem;
