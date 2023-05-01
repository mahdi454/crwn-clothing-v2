import Button from "../btn/btn-com";
import "./product-card.styles.scss";
import React from "react";
import {useContext} from 'react'
import { BagContext } from '../../context/bag-context'
const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const {addItemToCart}=useContext(BagContext)
  const addProduct=()=> addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted" onClick={addProduct} >Add to card</Button>
    </div>
  );
};

export default ProductCard;
