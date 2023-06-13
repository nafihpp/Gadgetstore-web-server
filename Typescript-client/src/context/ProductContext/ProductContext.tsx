import { createContext, useEffect, useState } from "react";
import { children, gadgetProduct } from "../../models/models";
import { axiosInstance } from "../../utils/interceptor";

export interface IproductContext {
    products: gadgetProduct[];
    setProducts: React.Dispatch<React.SetStateAction<gadgetProduct[]>>;
    productLoading: boolean;
    setProductLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<Partial<IproductContext>>({});

export const ProductProvider = ({ children }: children) => {
    const [products, setProducts] = useState<gadgetProduct[]>([]);
    const [productLoading, setProductLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axiosInstance(`/all-products`, {
            method: "GET"
        })
            .then((response) => {
                setProducts(response?.data);
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

