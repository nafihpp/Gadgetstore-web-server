import { Slider } from '@mui/material';
import React from 'react';
import "./FilterSideBar.css"

interface ModalInterface {
    isModal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterSideBar = ({ isModal, setModal }: ModalInterface) => {
    const handleClose = () => {
        setModal(!isModal);
    }
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
        <div className="filters" style={{ width: isModal ? "100%" : "260px" }}>
            <div className='wrapper-filter'>
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
                    <div className='slider-container'>
                        <div className='left-value'>{value[0]}</div>
                        <div className='right-value'>{value[1]}</div>
                    </div>
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
                    </select>
                </div>
                <div className="filter-group">
                    <h3>Rating</h3>
                    <div className="rating-checkboxes">
                        <label>
                            <input type="checkbox" />
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </label>
                        <label>
                            <input type="checkbox" />
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </label>
                        <label>
                            <input type="checkbox" />
                            <span>&#9733;</span>
                        </label>
                    </div>
                </div>
                <div className='bottom-filter-container'>
                    {isModal && <button className='close-button' onClick={handleClose}>
                        Close
                    </button>}
                    <button className='apply-button' style={{ width: isModal ? "50%" : "100%" }}>
                        Apply now
                    </button>
                </div>
            </div>
        </div >
    )
}
