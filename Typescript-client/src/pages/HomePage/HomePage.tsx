import React from "react"
import { CategoriesBar } from '../../components/CategoriesBar'
import { TrendingProducts } from '../../components/TrendingProducts'
import { Partners } from "../../components/Partners/Partners"
import { ProductContext } from "../../context/ProductContext/ProductContext"
import { LoadingScreen } from "../LoadingScreen"

export const HomePage = () => {
    const { productLoading } = React.useContext(ProductContext);
    if (productLoading) {
        return <LoadingScreen />
    }
    return (
        <React.Fragment>
            <CategoriesBar />
            <TrendingProducts />
            <Partners />
        </React.Fragment>
    )
}
