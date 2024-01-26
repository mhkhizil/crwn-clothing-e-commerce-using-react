import { createContext, useEffect, useState} from "react";
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemFromCart:()=>{},
  clearItemFromCart:()=>{},
  numberOfCartItems:0,
  cartTotal:0
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[numberOfCartItems,setNumberOfCartItems]=useState(0);
  const [cartTotal,setCartTotal]=useState(0);
  useEffect(()=>{
    setNumberOfCartItems(cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0));
  },[cartItems])
  useEffect(()=>{
    setCartTotal(cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0));
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
  const removeItemFromCart=(productToRemove)=>{
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem?.id === productToRemove?.id
    );
    if (existingCartItem.quantity ===1) {
      setCartItems(cartItems.filter(cartItem=>cartItem.id!=productToRemove.id))
    }else{
      setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
    }

  }
const clearItemFromCart=(id)=>{

  setCartItems(cartItems.filter(cartItem=>cartItem.id!=id));

}
  const value = { isCartOpen, setIsCartOpen, addItemsToCart, removeItemFromCart,clearItemFromCart,cartItems,numberOfCartItems ,cartTotal};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
