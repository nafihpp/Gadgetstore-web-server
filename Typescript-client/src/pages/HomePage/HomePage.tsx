import React from "react"
import { CategoriesBar } from '../../components/CategoriesBar'
import { TrendingProducts } from '../../components/TrendingProducts'
import { Partners } from "../../components/Partners/Partners"

export const HomePage = () => {
    return (
        <React.Fragment>
            <CategoriesBar />
            <TrendingProducts />
            <Partners />
        </React.Fragment>
    )
}
