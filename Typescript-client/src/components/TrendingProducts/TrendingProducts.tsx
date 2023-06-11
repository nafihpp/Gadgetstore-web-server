import React, { SyntheticEvent, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { gadgetProduct } from '../../models/models';
import { ProductCard } from '../ProductCard';
import "./TrendingProducts.css"
import "swiper/css";
import "swiper/swiper-bundle.css";
import { ProductContext } from '../../context/ProductContext/ProductContext';


export const TrendingProducts = () => {
    const { products } = React.useContext(ProductContext);
    const swiperRef = useRef(null) as any;
    const HeadingRef = React.useRef<HTMLHeadingElement | null>(null);

    const goNext = (e: SyntheticEvent) => {
        e.preventDefault();
        if (swiperRef.current !== null) {
            swiperRef?.current?.swiper?.slideNext();
        }
    };

    const goPrev = (e: SyntheticEvent) => {
        e.preventDefault();
        if (swiperRef.current !== null) {
            swiperRef?.current?.swiper?.slidePrev();
        }
    };
    return (
        <div className='trending-card-container'>
            <div className="wrapper">
                <h1 ref={HeadingRef} className='heading-products'>Trending Products</h1>
                <div className='trending-card-container'>
                    <div className="swiper-navigation-prev">
                        <button className="swiper-prev" onClick={goPrev}>
                            <svg
                                stroke="currentColor"
                                fill="#0065ff"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h24v24H0V0z"
                                ></path>
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                            </svg>
                        </button>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={6}
                        ref={swiperRef}
                        breakpoints={{
                            200: {
                                width: 200,
                                slidesPerView: 1,
                            },
                            300: {
                                width: 300,
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            480: {
                                width: 480,
                                slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {products !== undefined && products?.map((product: gadgetProduct) => {
                            return <SwiperSlide><ProductCard product={product} key={product.id} /></SwiperSlide>
                        })}
                    </Swiper>
                    <div className="swiper-navigation-next">
                        <button className="swiper-next" onClick={goNext}>
                            <svg
                                stroke="currentColor"
                                fill="#0065ff"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h24v24H0V0z"
                                ></path>
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>

    )
}
