import Navgetion from "./routs/navgetion/navgetion-component";
import Home from "./routs/home/home-component";
import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./routs/shop/shop-component";
import SignIn from "./routs/sign-in/sign-comp";
import Checkout from "./routs/checkout/checkout-com";
import { useContext } from "react";
import { ProductContext } from "./context/shop-context";
const App = () => {
  const { products } = useContext(ProductContext);
  return (
    <Routes>
      <Route path="/" element={<Navgetion />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />

        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
