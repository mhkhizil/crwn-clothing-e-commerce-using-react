import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'

const CartItem = ({cartItem}) => {
  
    const {name,id,quantity,price}=cartItem;
    console.log(name);
  return (
    <div key={id}>
      <h2>{name}</h2>
      <span>{quantity}</span>
      <h2>{price}</h2>
    </div>
  )
}

export default CartItem
