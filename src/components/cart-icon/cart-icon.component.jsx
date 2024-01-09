import React from 'react'
import "./cart-icon.style.scss"
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon
