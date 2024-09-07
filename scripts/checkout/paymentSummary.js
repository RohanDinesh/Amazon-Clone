import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js'

export function renderPaymentSummary(){
    let productPrice = 0;
    let shippingPrice = 0

    cart.forEach((i)=>{
        const product = getProduct(i.productId); //getting all products in cart 
        productPrice += product.price * i.quantity; // (product price * quanitity) and then add all products prices to get final bill
        
        const deliveryOption = getDeliveryOption(i.deliveryOptionId);
        shippingPrice += deliveryOption.price;
    });

    const totalBeforeTax = productPrice + shippingPrice;
    const tax = Math.round(totalBeforeTax*0.1);
    const total = Math.round(totalBeforeTax + tax);
    // const tax = Math.round(totalBeforeTax*0.1).toFixed(2); --> to give 2 decimal points


    const paymentSummaryHTML = 
    `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">₹${productPrice}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹${shippingPrice}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹${totalBeforeTax}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">₹${tax}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${total}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
    
    
}

