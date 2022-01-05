import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KEXPFKS1VJyxGscPMVbyU3yYGox2ppzMw9iqRaQVOGOk0OMZEud0nR8jRdhLbGR6gWUBoK79Jdg1mgCuwIXDbQ900Ven06tmL';

    const onToken = token => {
        console.log(token);
        alert('Payment Seccessful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Co."
            shippingAddress
            billingAddress
            image="https://svgshare.com/i/CUz.svg" 
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;