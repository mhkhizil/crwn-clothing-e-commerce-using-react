import React, { useContext } from 'react'
import "./cart-dropdown.style.scss"
import CustomButton from '../button/customButom.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../contexts/cart.context'

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext);
    console.log(cartItems);
  return (
    <div className='cart-dropdown-container' >
        <div className='cart-items'>
          {
            cartItems?.map(cartItem=>(
              <CartItem cartItem={cartItem}/>
            ))
          }
        </div>
       <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
