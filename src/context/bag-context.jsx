import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
  cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);
};

const removeCartItemFull = (cartItems, productToRemove) => {
  
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  
};

export const BagContext = createContext({
  bagItem: false,
  setBagItem: () => {},
  cartItems: [],
  setCartItem: () => {},
  items: 0,
  setItems: () => {},
  total: 0,
  setTotal: () => {},
  removeItemFromCart: () => {},
  removeItemFull:()=>{}
});
export const BagItemProvider = ({ children }) => {
  const [bagItem, setBagItem] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItems(cartCount);
  }, [cartItems]);
  useEffect(() => {
    const totall = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotal(totall);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItem(removeCartItem(cartItems, productToRemove));
  };
  const removeItemFull=(productToRemove)=>{
    setCartItem(removeCartItemFull(cartItems, productToRemove))
  }
  const value = {
    bagItem,
    setBagItem,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    items,
    total,
    removeItemFull
  };
  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};
