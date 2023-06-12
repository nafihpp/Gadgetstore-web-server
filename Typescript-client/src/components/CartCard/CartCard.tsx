import React from "react";
import "./CartCard.css"
interface CartItemProps {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}

interface currentItem {
    cartproduct: CartItemProps
}

export const CartCard = ({ cartproduct }: currentItem) => {
    const [count, setCount] = React.useState<number>(cartproduct?.quantity);
    const increment = () => {
        setCount((count) => count + 1);
    }
    const decrement = () => {
        if (count > 1) {
            setCount((count) => count - 1);
        }
    }
    return (
        <div className="cart-card">
            <div className="left-cart-container">
                <img src={cartproduct?.thumbnail} alt="image" width="100" height="100" style={{ objectFit: "cover" }} />
            </div>
            <div className="right-cart-container">
                <p className="cart-card-title">{cartproduct?.title}</p>
                <p className="price-quntity">AED {cartproduct?.price * cartproduct?.quantity}</p>
                <div className="cart-quantity"><span className="decrease-cart" onClick={decrement} >-</span>{<span>{cartproduct?.quantity}</span>}<span className="increase-cart" onClick={increment}>+</span></div>
                <button className="cart-remove-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path></svg></button>
            </div>
            {/* <div className="quantity"><span className="decrease" onClick={decrement}>-</span>{<span>{count}</span>}<span className="increase" onClick={increment}>+</span></div>
            <button className="cart-button" >Add to cart</button> */}
        </div>
    )
}
