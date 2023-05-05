import { useContext, React } from "react";
import { BagContext } from "../../context/bag-context";
import CheckItem from "../../components/checkout-item/check-item-com";
import './checkout.styles.jsx'
import { CheckoutContainer,CheckoutHeader,HeaderBlock,Total } from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, total } = useContext(BagContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckItem key={item.id} cartItem={item} />
      ))}

      <Total>Total Amount: {total} $</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
