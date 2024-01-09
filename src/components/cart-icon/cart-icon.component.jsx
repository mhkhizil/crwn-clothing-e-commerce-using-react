import React, { useContext } from 'react'
import "./cart-icon.style.scss"
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import { CartContext } from '../contexts/cart.context';
const CartIcon = () => {
  const {isCartOpen,setIsCartOpen}=useContext(CartContext);
  console.log(isCartOpen);

  return (
    <div className='cart-icon-container' onClick={()=>setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon
