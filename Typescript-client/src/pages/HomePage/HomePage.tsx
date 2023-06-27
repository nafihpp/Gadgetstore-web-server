import React from "react"
import { CategoriesBar } from '../../components/CategoriesBar'
import { TrendingProducts } from '../../components/TrendingProducts'
import { Partners } from "../../components/Partners/Partners"
import { ProductContext } from "../../context/ProductContext/ProductContext"
import { LoadingScreen } from "../LoadingScreen"
import { Footer } from "../../components/Footer"
import { ProductCard } from "../../components/ProductCard"
import { gadgetProduct } from "../../models/models"

export const HomePage = () => {
    const { productLoading, products } = React.useContext(ProductContext);
    if (productLoading) {
        return <LoadingScreen />
    }
    return (
        <React.Fragment>
            <CategoriesBar />
            <TrendingProducts />
            {products !== undefined && products?.map((product: gadgetProduct) => {
                return <ProductCard product={product} key={product.id} />
            })}
            <Partners />
            <Footer />
        </React.Fragment>
    )
}
