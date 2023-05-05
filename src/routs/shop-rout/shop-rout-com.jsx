import { useContext } from "react";
import { ProductContext } from "../../context/shop-context";
import ShopPreview from "../../components/shop-preview/shop-pre-com";


const ShopRout = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).map((title) => {
        const newProducts = products[title];
        return <ShopPreview key={title} title={title} products={newProducts} />;
      })}
    </>
  );
};
export default ShopRout;