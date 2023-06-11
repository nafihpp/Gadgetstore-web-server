import { Slider } from '@mui/material';
import './CategoryFiltering.css'; // Import the CSS file for styling
import React from 'react';
import { gadgetProduct } from '../../models/models';
import products from "../../dummy.json"
import { ProductCard } from '../../components/ProductCard';

export const CategoryFiltering = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const minDistance = 10;
    function valuetext(value: number) {
        return `${value}`;
    }
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        console.log(event, '==event filter slider')
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue as number[]);
        }
    };

    return (
        <div className="category-page">
            <div className="filters">
                <h2>Filters</h2>
                <div className="filter-group">
                    <h3>Price Range</h3>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                </div>
                <div className="filter-group">
                    <h3>Brands</h3>
                    <div className="brand-checkboxes">
                        <label>
                            <input type="checkbox" />
                            Apple
                        </label>
                        <label>
                            <input type="checkbox" />
                            Mi
                        </label>
                        <label>
                            <input type="checkbox" />
                            Vivo
                        </label>
                    </div>
                </div>
                <div className="filter-group">
                    <h3>Category</h3>
                    <select className="category-select">
                        <option value="phones">Phones</option>
                        <option value="laptops">Laptops</option>
                        <option value="headphones">Headphones</option>
                        {/* Add more category options as needed */}
                    </select>
                </div>
                <div className="filter-group">
                    <h3>Rating</h3>
                    <div className="rating-checkboxes">
                        <label>
                            <input type="checkbox" />
                            4 stars & up
                        </label>
                        <label>
                            <input type="checkbox" />
                            3 stars & up
                        </label>
                        <label>
                            <input type="checkbox" />
                            2 stars & up
                        </label>
                    </div>
                </div>
                {/* Add more filter groups as needed */}
            </div>
            <div className="products">
                {/* Render the products here */}
                {products !== undefined && products?.map((product: gadgetProduct) => {
                    return <ProductCard product={product} key={product.id} />
                })}
                {/* Add more product cards as needed */}
            </div>
        </div>
    );
};

