import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../../src/shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProduct: () => null,
});
export const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState(SHOP_DATA);
  const value = { products, setProduct };

  useEffect(() => {}, []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
