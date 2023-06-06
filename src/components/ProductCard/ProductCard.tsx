import { CartContext } from "../../context/CartContext/CartContext"
import { Product } from "../../models/models"
import "./ProductCard.css"
import React from "react"

interface CurrentProduct {
    product: Product
}

export const ProductCard = ({ product }: CurrentProduct) => {
    const { cart, setCart } = React.useContext(CartContext);
    const [count, setCount] = React.useState<number>(1);
    const increment = () => {
        setCount((count) => count + 1);
    }
    const decrement = () => {
        if (count > 1) {
            setCount((count) => count - 1);
        }
    }

    const adddToCart = (product: Product) => {
        if (product) {
            let cartProduct = {
                title: product.title,
                quantity: count,
                price: product.price,
                image: product.image
            }
            setCart([...cart, cartProduct]);
        }
    }
    return (
        <div className="card">
            <img src={product?.image} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="card-title">{product?.title}</p>
            <div className="quantity"><span className="decrease" onClick={decrement}>-</span>{<span>{count}</span>}<span className="increase" onClick={increment}>+</span></div>
            <button className="cart-button" onClick={() => adddToCart(product)}>Add to cart</button>
        </div>
    )
}
