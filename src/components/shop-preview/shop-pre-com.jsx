import "./shop-pre.styles.scss";
import ProductCard from "../product-card/product-card-com";
import { Link } from "react-router-dom";

import React from "react";

const ShopPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      
        <h2>
          <Link className="title" to={title}>{title.toUpperCase()}</Link>
        </h2>
     

      <div className="preview">
        {products
          .filter((_, idx) => 
            idx < 4
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ShopPreview;
