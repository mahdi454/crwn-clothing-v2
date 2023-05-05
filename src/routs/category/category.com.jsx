import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/shop-context";
import ProductCard from "../../components/product-card/product-card-com";
import './category.style.jsx'
import { TitleCategory,CategoryContainer } from "./category.style.jsx";
const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  // const newProducts=products[category]
  const [ newProducts, setNewProduct ] = useState(products[category]);

  useEffect(() => {
    setNewProduct(products[category])
  }, [category, products]);

  return (

    <>
<TitleCategory >{category}</TitleCategory>

    <CategoryContainer>
      {newProducts && newProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CategoryContainer>
    </>
  );
};

export default Category;
