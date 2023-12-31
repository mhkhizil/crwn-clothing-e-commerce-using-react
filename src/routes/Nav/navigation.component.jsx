import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "../Nav/navigation.style.scss";
import { UserContext } from "../../components/contexts/user.contexts";
import { signOutUser } from "../../util/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdwon.component";
import { CartContext } from "../../components/contexts/cart.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

console.log(isCartOpen);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <Link onClick={signOutUser} className="nav-link" to={"/auth"}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          
          )}
      
       <CartIcon />
 
          
       
         
           
            
        </div>
     {isCartOpen && <CartDropdown/>}
       
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
