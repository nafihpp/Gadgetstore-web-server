import { useEffect } from 'react'
import Profile from '../../assets/ProfileImage.jpg'
import './ProductDetails.css'
import axios from 'axios'
import React from 'react'
import { gadgetProduct } from '../../models/models'
import { useParams } from 'react-router-dom'
import { LoadingScreen } from '../LoadingScreen'

export const ProductDetails = () => {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = React.useState<gadgetProduct>()
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        axios(`https://gadgetstorebackend.onrender.com/api/product/${id}`, {
            method: "GET",
        }).then((response) => {
            setCurrentProduct(response.data);
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <div className="product-details-page">
            <div className="product-images">
                <img src={currentProduct?.thumbnail} alt="img" />
            </div>
            <div className="product-details">
                <h2 className="product-title">{currentProduct?.title}</h2>
                <p className="product-brand">{currentProduct?.id}</p>
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
