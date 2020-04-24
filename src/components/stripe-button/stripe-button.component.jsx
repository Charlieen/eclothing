import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_YIJO09EHF2MErDL3tKgAlIFW00ZW25gLXZ';

    const onToken = token => {
        console.log(token);
        alert(token);
    }

    return (
        <StripeCheckout
            label ="Pay Now"
            name="E-Clothing Ltd."
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description ={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;