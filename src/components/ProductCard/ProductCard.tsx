import { Product } from "../../models/models"
import "./ProductCard.css"

interface CurrentProduct {
    product: Product
}

export const ProductCard = ({ product }: CurrentProduct) => {
    return (
        <div className="card">
            <img src={product.image} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="card-title">{product.title}</p>
            <div className="quantity"><span className="decrease">-</span><span>0</span><span className="increase">+</span></div>
            <button className="cart-button">Add to cart</button>
        </div>
    )
}
