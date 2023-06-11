import { useEffect } from 'react'
import './ProductDetails.css'
import axios from 'axios'
import React from 'react'
import { gadgetProduct } from '../../models/models'
import { useParams } from 'react-router-dom'
import { LoadingScreen } from '../LoadingScreen'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ProductDetails = () => {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = React.useState<gadgetProduct>()
    const [loading, setLoading] = React.useState(true);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    useEffect(() => {
        axios(`${BASE_URL}/product/${id}`, {
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
                <Swiper
                    className="product-details-swiper"
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                >
                    {currentProduct?.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Product Image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="product-details">
                <h2 className="product-title">{currentProduct?.title}</h2>
                <p className="product-brand">{currentProduct?.brand}</p>
                <p className="product-description">{currentProduct?.description}</p>
                <p className="product-price">
                    Price: ${1000} {100 > 0 && <span className="discount">(-10%)</span>}
                </p>
                <p className="product-rating">{currentProduct?.rating}</p>
                <p className="product-stock">{currentProduct?.stock === 0 ? "Item Not in Stock" : "In Stock"}</p>
                <div className='button-container'>
                    <button className="buy-now-button">Buy Now</button>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
