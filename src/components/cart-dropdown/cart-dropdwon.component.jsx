import React, { useContext } from 'react'
import "./cart-dropdown.style.scss"
import CustomButton from '../button/customButom.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext);
 const nav=useNavigate();
  return (
    <div className='cart-dropdown-container' >
        <div className='cart-items'>
          {
            cartItems?.map(cartItem=>(
              <CartItem key={cartItem?.id} cartItem={cartItem}/>
            ))
          }
        </div>
       <CustomButton onClick={()=>nav('checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
