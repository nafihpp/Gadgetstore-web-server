import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Product, children } from "../../models/models";

export interface IproductContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    productLoading: boolean;
    setProductLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<Partial<IproductContext>>({});

export const ProductProvider = ({ children }: children) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productLoading, setProductLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response?.data);
                setProductLoading(false)
            })
            .catch((err: Error) => {
                setError(err.message)
                setProductLoading(false);
            });
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, productLoading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

