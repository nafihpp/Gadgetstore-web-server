import { useNavigate } from "react-router-dom"
import { gadgetProduct } from "../../models/models"
import "./ProductCard.css"

interface CurrentProduct {
    product: gadgetProduct
}

export const ProductCard = ({ product }: CurrentProduct) => {
    const navigate = useNavigate();

    const discountedRate = (prouctPrice: number, discountPercentage: number) => {
        let OriginalPrice = prouctPrice * discountPercentage;
        return OriginalPrice.toFixed(0);
    }

    const handleDetailsPage = (productId: string) => {
        navigate(`/products/${productId}`)
    }
    return (
        <div className="card" onClick={() => handleDetailsPage(product?.id)}>
            <img src={product?.thumbnail} alt="image" style={{ objectFit: "contain", width: "100%", display: "block", minHeight: "100px", maxHeight: "100px", height: "100px" }} />
            <p className="card-title">{product?.title}</p>
            <div className="price-container"><span className="currency">AED </span><strong className="amount">{product?.price}</strong></div>
            <div className="discount-container"><span className="old-price">{discountedRate(product?.price, product?.discountPercentage)}</span><span className="discount-percentage">{product?.discountPercentage} % OFF</span></div>
        </div>
    )
}
