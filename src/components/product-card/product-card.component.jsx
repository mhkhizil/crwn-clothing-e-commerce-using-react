import React, { useContext } from "react";
import "./product-card.style.scss";
import CustomButton from "../button/customButom.component";
import { CartContext } from "../contexts/cart.context";
const ProductCard = ({product}) => {
    const {name,imageUrl,price}=product;
    const {addItemsToCart}=useContext(CartContext);
  return (
    <div className=" product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton btnType='inverted' onClick={()=>addItemsToCart(product)}>Add to cart</CustomButton>
    </div>
  );
};

export default ProductCard;
