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
            <img src={cartproduct?.thumbnail} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="cart-card-title">{cartproduct?.title}</p>
            <div className="cart-quantity"><span className="decrease-cart" onClick={decrement} >-</span>{<span>{cartproduct?.quantity}</span>}<span className="increase-cart" onClick={increment}>+</span></div>
            <button className="cart-remove-button">Remove from cart</button>
            {/* <div className="quantity"><span className="decrease" onClick={decrement}>-</span>{<span>{count}</span>}<span className="increase" onClick={increment}>+</span></div>
            <button className="cart-button" >Add to cart</button> */}
        </div>
    )
}
