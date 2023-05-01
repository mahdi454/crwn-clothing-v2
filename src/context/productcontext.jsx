// import { createContext, useEffect, useState } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//   const existCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };
// export const CheckContext = createContext({

//   checkItems: [],
//   setCheck: () => {},

  
// });
// export const CheckProvider = ({ children }) => {

//   const [checkItems, setCheck] = useState([]);
  
// // useEffect(()=>{
// //   const cartCount=cartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0)
// //   setItems(cartCount)
// // },[cartItems])
//   const addItemToCart = (productToAdd) => {
//     setCartItem(addCartItem(cartItems, productToAdd));
//   };
//   const value = { };
//   return <CheckContext.Provider value={value}>{children}</CheckContext.Provider>;
// };