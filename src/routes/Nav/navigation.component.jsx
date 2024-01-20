import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./navigation.style.jsx";
import { UserContext } from "../../components/contexts/user.contexts";
import { signOutUser } from "../../util/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdwon.component";
import { CartContext } from "../../components/contexts/cart.context";
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navigation.style.jsx";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);


  return (
    <>
      <NavigationContainer>
        <LogoContainer  to={"/"}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink  to={"/shop"}>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser} className="nav-link" to={"/auth"}>
              SIGN OUT
            </NavLink>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          
          )}
      
       <CartIcon />
 
          
       
         
           
            
        </NavLinks>
     {isCartOpen && <CartDropdown/>}
       
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
