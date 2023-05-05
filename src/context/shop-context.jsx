import { createContext, useState, useEffect } from "react";

import { getCategoriesDoc } from "../utils/firebase/firebase-util.jsx";
export const ProductContext = createContext({
  products: {}
});
export const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const getCategoryMap = await getCategoriesDoc();

      setProduct(getCategoryMap)
    };
     getCategoriesMap();
     
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
