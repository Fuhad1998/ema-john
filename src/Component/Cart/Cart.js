import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping ) *10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div className="cart-total">
            <h2>Order Summary</h2>
            <h4>Item ordered:{props.cart.length}</h4>
            </div>
            
            <p>Total:  $ {total.toFixed(2)}</p>
            <p>Shipping:  $ {shipping}</p>
            <p>Tax:  $ {tax.toFixed(2)}</p>
            <p className="grand-total">Grand Total:  $ {grandTotal.toFixed(2)}</p>
            <button className="btn-regular">Review Your Order</button>
        </div>
    );
};

export default Cart;