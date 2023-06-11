import React from "react";
import { CartCard } from "../../components/CartCard"
import { CartContext } from "../../context/CartContext/CartContext"
import "./Cart.css";
import 'react-toastify/dist/ReactToastify.css';
export const Cart = () => {
    const { cart } = React.useContext(CartContext);
    let isCartLength = cart?.length !== 0;
    // State for coupon code
    const [couponCode, setCouponCode] = React.useState('');

    // Handler for coupon code input change
    const handleCouponCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCouponCode(e?.target?.value);
    };
    return (
        <div className="cart-page">
            <h1 className="cart-title">Cart</h1>
            <div className="cart-items">
                <div className="card-container">
                    {/* Render the cart items here */}
                    {cart?.length !== 0 ? (
                        cart?.map((cartproduct) => (
                            <CartCard cartproduct={cartproduct} key={cartproduct?.id} />
                        ))
                    ) : (
                        <h1>Your cart is empty.</h1>
                    )}
                </div>
            </div>
            {isCartLength && <div className="cart-total">
                <h2 className="total-text">Total: ${100}</h2>
            </div>}
            {isCartLength && <div className="coupon-container">
                <p>Have a Coupon Code?</p>
                <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={handleCouponCodeChange}
                    className="coupon-input"
                />
                <button className="coupon-button" >
                    Apply Coupon
                </button>
            </div>}
            {isCartLength && <button className="checkout-button">Checkout</button>}
        </div>
    )
}
