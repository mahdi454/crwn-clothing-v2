import { BagContext } from "../../context/bag-context";
import "./checkout-item.styles.scss";
import React, { useContext } from "react";

const CheckItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemFull } =
    useContext(BagContext);
  const { name, quantity, imageUrl, price } = cartItem;
  const decrement = () => {
    removeItemFromCart(cartItem);
  };
  const increment = () => addItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        {" "}
        <div className="arrow" onClick={decrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increment}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFull(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckItem;
