
import React, { createContext, useState } from "react";
import { children, gadgetProduct } from "../../models/models";

interface CartItemProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}
interface ICartContext {
    cart: CartItemProps[];
    setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}

export const CartContext = createContext<Partial<ICartContext>>({});

export const CartProvider = ({ children }: children) => {

    const [cart, setCart] = useState<CartItemProps[]>([{
        id: 1,
        title: "HP Pavilion 15-DK1056WM",
        price: 1099,
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        quantity: 1
    }]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

