import { createContext,useState } from "react";
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemsToCart:()=>{}
})
export const CartProvider=({children})=>{
    const[isCartOpen,setIsCartOpen]=useState(false);
    const[cartItems,setCartItems]=useState([]);
    const addItemsToCart=(productToAdd)=>{
     
    

       const isCartItemExist= cartItems?.some(cartItem=>cartItem?.id ===productToAdd?.id);
       
      if (!isCartItemExist) {
        setCartItems(
            [...cartItems,
                { ...productToAdd, quantity: 1 }]);
            
     
            }else {
                // If the item exists, update its quantity
                setCartItems(prevCartItems =>
                  prevCartItems.map(cartItem =>
                    cartItem.id === productToAdd.id
                      ? { ...cartItem, quantity: cartItem.quantity + 1 }
                      : cartItem
                  )
                );
              };
             
  
    }
    const value={isCartOpen,setIsCartOpen,addItemsToCart,cartItems}
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}