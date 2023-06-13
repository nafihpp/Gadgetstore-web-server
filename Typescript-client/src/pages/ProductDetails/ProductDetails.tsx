import { useEffect } from 'react'
import './ProductDetails.css'
import React from 'react'
import { CartItemProps, gadgetProduct } from '../../models/models'
import { useParams } from 'react-router-dom'
import { LoadingScreen } from '../LoadingScreen'
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@mui/material'
import { CartContext } from '../../context/CartContext/CartContext'
import { CartReducer } from '../../context/CartContext/CartReducer'
import { ACTIONS } from '../../context/CartContext/ACTIONS'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../utils/interceptor'

SwiperCore.use([Autoplay]);

export const ProductDetails = () => {
    const { id } = useParams();
    const abortController = React.useRef(new AbortController());
    console.log(abortController.current, '==this is abort controller')
    const { cart } = React.useContext(CartContext);
    const [currentProduct, setCurrentProduct] = React.useState<gadgetProduct>()
    const [loading, setLoading] = React.useState(true);
    const [state, dispatch] = React.useReducer(CartReducer, { currentState: cart });
    const [count, setCount] = React.useState<number>(1);

    console.log(state, '==statenow');

    useEffect(() => {
        fetchCurrentProduct();
        return () => {
            abortController.current.abort();
        }
    }, []);

    const fetchCurrentProduct = () => {
        axiosInstance(`/product/${id}`, {
            method: "GET",
            signal: abortController.current.signal
        }).then((response) => {
            setCurrentProduct(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }

    if (loading) {
        return <LoadingScreen />
    }
    const handleAddCart = (product: any) => {
        let cartProduct = {
            id: product?.id,
            title: product?.title,
            thumbnail: product?.thumbnail,
            price: product?.price,
            quantity: count,

        } as CartItemProps;
        const isExist = cart?.find((item) => item?.id === product?.id)
        if (!isExist) {
            dispatch({ type: ACTIONS.ADD_TO_CART, payload: cartProduct })
        }
        else {
            return toast.error("item already in cart")
        }
    }

    const increment = () => {
        setCount((count) => count + 1);
    }
    const decrement = () => {
        if (count > 1) {
            setCount((count) => count - 1);
        }
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
                    <div className="product-quantity"><span className="decrease-cart" onClick={decrement} >-</span>{<strong>{count}</strong>}<span className="increase-cart" onClick={increment}>+</span></div>
                    <h2 className="product-title">{currentProduct?.title}</h2>
                    <p className="product-description">{currentProduct?.description}</p>
                    <p className="product-price">
                        <strong className='price'>AED {currentProduct?.price}</strong> {currentProduct?.price !== 0 && <span className="discount">({currentProduct?.discountPercentage}% OFF)</span>}
                    </p>
                    <Rating name="read-only" value={currentProduct?.rating} readOnly />
                    <p className="product-stock">{currentProduct?.stock === 0 ? "Item Not in Stock" : "In Stock"}</p>
                    <div className='button-container'>
                        <button className="add-to-cart-button" onClick={() => handleAddCart(currentProduct)}>Add to Cart</button>
                        <button className="wish-list">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
