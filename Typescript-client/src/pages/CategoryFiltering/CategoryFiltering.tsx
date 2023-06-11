import './CategoryFiltering.css';
import products from "../../dummy.json"
import { ProductCard } from '../../components/ProductCard';
import { FilterSideBar } from '../../components/FilterSideBar';
import React from 'react';

export const CategoryFiltering = () => {
    const [isModal, setModal] = React.useState<boolean>(false);
    const toggleModal = () => {
        setModal(!isModal);
    }
    return (
        <div>
            <div className='filter-icon' onClick={toggleModal}>
                <svg width="30" height="30" viewBox="0 0 24 24" ><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="#282C3F" d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"></path></g></svg>
                <p>FILTER</p>
            </div>
            <div className="category-page">
                <div className='filter-side-container'>
                    <FilterSideBar />
                </div>
                <div className="products-filter">
                    {products !== undefined && products?.map((product) => {
                        return <ProductCard product={product} key={product.id} />
                    })}
                </div>
                {isModal && <div className='filter-Modal'><FilterSideBar /></div>}
            </div>
        </div>
    );
};

