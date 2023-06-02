import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Product, children } from "../../models/models";

export interface IproductContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    productLoading: boolean;
    setProductLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<Partial<IproductContext>>({});

export const ProductProvider = ({ children }: children) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productLoading, setProductLoading] = useState(true);

    const fetchProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response?.data);
                setProducts(response?.data);
                setProductLoading(false)
            })
            .catch((err: Error) => {
                console.log(err);
                setProductLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <ProductContext.Provider value={{ products, setProducts, productLoading }}>
            {children}
        </ProductContext.Provider>
    )
}

