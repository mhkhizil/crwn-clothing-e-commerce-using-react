import React from "react";
import "./product-card.style.scss";
import CustomButton from "../button/customButom.component";
const ProductCard = ({product}) => {
    const {id,name,imageUrl,price}=product;
  return (
    <div className=" product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton btnType='inverted'>Add to cart</CustomButton>
    </div>
  );
};

export default ProductCard;
