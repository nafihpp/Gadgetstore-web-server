import Profile from '../../assets/ProfileImage.jpg'
import './ProductDetails.css'
export const ProductDetails = () => {
    return (
        <div className="product-details-page">
            <div className="product-images">
                <img src={Profile} alt="img" />
            </div>
            <div className="product-details">
                <h2 className="product-title">Shoes</h2>
                <p className="product-brand">Puma</p>
                <p className="product-category">Phone</p>
                <p className="product-description">Great product Description</p>
                <p className="product-price">
                    Price: ${1000} {100 > 0 && <span className="discount">(-10%)</span>}
                </p>
                <p className="product-rating">Rating: 3 star</p>
                <p className="product-stock">Stock: In Stock</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    )
}
