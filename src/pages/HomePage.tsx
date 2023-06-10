import React from "react"
import { CategoriesBar } from '../components/CategoriesBar/CategoriesBar'
import { TrendingProducts } from '../components/TrendingProducts/TrendingProducts'

export const HomePage = () => {
    return (
        <React.Fragment>
            <CategoriesBar />
            <TrendingProducts />
        </React.Fragment>
    )
}
