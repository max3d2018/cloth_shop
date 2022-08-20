import React from "react";
import SCheckout from "react-stripe-checkout";
import classes from "./StripeCheckout.module.scss";

const StripeCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IFAfIJdHb4XAJecvoatcDn4jkRnFjtLIb4285OcjsCuFyrq02y7tJOddvMVlmq48eBGGjLv5OCgaGlbKOCtwqLA00MQqmf2xE";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className={classes.Btn}>
      <SCheckout
        stripeKey={publishableKey}
        amount={priceForStripe}
        shippingAddress
        billingAddress
        label="Pay Now"
        description={`Your Total price is $${price}`}
        token={onToken}
        panelLabel="Pay Now"
      />
    </div>
  );
};

export default StripeCheckout;
