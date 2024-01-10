import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  numberOfCartItems:0
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[numberOfCartItems,setNumberOfCartItems]=useState(0);
  useEffect(()=>{
    setNumberOfCartItems(cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0));
  },[cartItems])
  const addItemsToCart = (productToAdd) => {
    const isCartItemExist = cartItems?.some(
      (cartItem) => cartItem?.id === productToAdd?.id
    );

    if (!isCartItemExist) {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      
    } else {
      // If the item exists, update its quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    };
 

  };
  console.log(numberOfCartItems);
  const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems,numberOfCartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
