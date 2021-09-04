import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as logo } from "../../assets/money-svgrepo-com (3).svg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IZT4rSByvUBjvhPX9MAEoin9iWgbdLuy9DiJMtsy65KGgRGgryV6it2apq6JZW0cwtwjUXnPnA0e2pI5KcbJemU00knHBCj27";

  const onToken = (token) => {
    alert("Payment Success");
  };
  return (
    <StripeCheckout
      bitcoin
      name="Aayush Clothing"
      alipay
      label="Pay Now"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your Total is RS ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;
