import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_KBVp8mJJFfBspbv947jfnWZ500XwSzpCtH'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Demo Ecommerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >

    </StripeCheckout>
  );
}

export default StripeCheckoutButton;
