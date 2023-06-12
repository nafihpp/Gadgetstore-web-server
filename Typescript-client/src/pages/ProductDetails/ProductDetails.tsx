import { useEffect } from 'react'
import './ProductDetails.css'
import axios from 'axios'
import React from 'react'
import { gadgetProduct } from '../../models/models'
import { useParams } from 'react-router-dom'
import { LoadingScreen } from '../LoadingScreen'
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@mui/material'

SwiperCore.use([Autoplay]);

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
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                >
                    {currentProduct?.images.map((image, index) => (
                        <SwiperSlide key={index} >
                            <img src={image} alt={`Product Image ${index + 1}`} width="100%" height="100%" style={{ objectFit: "contain" }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="product-details">
                <div className="wrapper">
                    <h2 className="product-title">{currentProduct?.title}</h2>
                    <p className="product-description">{currentProduct?.description}</p>
                    <p className="product-price">
                        <strong className='price'>AED {currentProduct?.price}</strong> {currentProduct?.price !== 0 && <span className="discount">({currentProduct?.discountPercentage}% OFF)</span>}
                    </p>
                    <Rating name="read-only" value={currentProduct?.rating} readOnly />
                    <p className="product-stock">{currentProduct?.stock === 0 ? "Item Not in Stock" : "In Stock"}</p>
                    <div className='button-container'>
                        <button className="add-to-cart-button">Add to Cart</button>
                        <button className="wish-list">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
