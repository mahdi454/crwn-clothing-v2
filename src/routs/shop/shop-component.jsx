import { useContext } from "react";
import { ProductContext } from "../../context/shop-context";
import ProductCard from "../../components/product-card/product-card-com";
import "./shop-com.style.scss"
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="shop-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
