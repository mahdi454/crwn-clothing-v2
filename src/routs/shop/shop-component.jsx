import { Route, Routes } from "react-router-dom";
import ShopRout from "../shop-rout/shop-rout-com";
import Category from "../category/category.com";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopRout />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
