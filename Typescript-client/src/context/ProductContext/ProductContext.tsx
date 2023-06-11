import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { children, gadgetProduct } from "../../models/models";

export interface IproductContext {
    products: gadgetProduct[];
    setProducts: React.Dispatch<React.SetStateAction<gadgetProduct[]>>;
    productLoading: boolean;
    setProductLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<Partial<IproductContext>>({});

export const ProductProvider = ({ children }: children) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [products, setProducts] = useState<gadgetProduct[]>([]);
    const [productLoading, setProductLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get(`${BASE_URL}/all-products`)
            .then((response) => {
                setProducts(response?.data);
                setProductLoading(false);
            })
            .catch((err: Error) => {
                console.log(err)
            }).finally(() => {
                setProductLoading(false);
            });
    };
    return (
        <ProductContext.Provider value={{ products, setProducts, productLoading }}>
            {children}
        </ProductContext.Provider>
    )
}

