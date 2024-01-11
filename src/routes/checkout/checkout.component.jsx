import React, { useContext } from "react";
import "./checkout.style.scss";
import { CartContext } from "../../components/contexts/cart.context";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
        <span>Description</span>
        </div>
        <div className="header-block">
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
      </div>
      
        {cartItems?.map((cartItem) => (
          <CheckoutItems key={cartItem?.id} cartItem={cartItem}/>
        ))}
    <span className="total">Total:0</span>
    </div>
  );
};

export default Checkout;
