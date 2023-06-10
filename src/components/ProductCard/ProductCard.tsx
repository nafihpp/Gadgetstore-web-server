import { ACTIONS } from "../../context/CartContext/ACTIONS"
import { CartContext } from "../../context/CartContext/CartContext"
import { CartReducer } from "../../context/CartContext/CartReducer"
import { gadgetProduct } from "../../models/models"
import "./ProductCard.css"
import React from "react"

interface CurrentProduct {
    product: gadgetProduct
}

export const ProductCard = ({ product }: CurrentProduct) => {
    const { cart } = React.useContext(CartContext);
    const [state, dispatch] = React.useReducer(CartReducer, cart);

    const discountedRate = (prouctPrice: number, discountPercentage: number) => {
        let OriginalPrice = prouctPrice * discountPercentage;
        return OriginalPrice.toFixed(0);

    }
    console.log(state, '==currentCart')
    return (
        <div className="card">
            <img src={product?.thumbnail} alt="image" style={{ objectFit: "contain", width: "100%", display: "block", minHeight: "100px", maxHeight: "100px", height: "100px" }} />
            <p className="card-title">{product?.title}</p>
            <div className="price-container" onClick={() => {
                dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })
            }}><span className="currency">AED </span><strong className="amount">{product?.price}</strong></div>
            <div className="discount-container"><span className="old-price">{discountedRate(product?.price, product?.discountPercentage)}</span><span className="discount-percentage">{product?.discountPercentage} % OFF</span></div>
        </div>
    )
}
