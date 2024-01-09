import React from 'react'
import "./cart-dropdown.style.scss"
import CustomButton from '../button/customButom.component'
const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>

        </div>
       <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
