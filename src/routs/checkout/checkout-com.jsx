import { useContext, React } from "react";
import { BagContext } from "../../context/bag-context";
import CheckItem from "../../components/checkout-item/check-item-com";
import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, total } = useContext(BagContext);
  return (
    <div className="checkout-container ">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckItem key={item.id} cartItem={item} />
      ))}

      <span className="total">Total Amount: {total} $</span>
    </div>
  );
};

export default Checkout;
