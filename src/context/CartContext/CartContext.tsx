
import React, { createContext, useState } from "react";
import { children, gadgetProduct } from "../../models/models";

interface ICartContext {
    cart: gadgetProduct[];
    setCart: React.Dispatch<React.SetStateAction<gadgetProduct[]>>;
}

export const CartContext = createContext<Partial<ICartContext>>({});

export const CartProvider = ({ children }: children) => {

    const [cart, setCart] = useState<gadgetProduct[]>([{
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        images: [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            "https://i.dummyjson.com/data/products/10/2.jpg",
            "https://i.dummyjson.com/data/products/10/3.jpg",
            "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
    }]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

