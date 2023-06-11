
import React, { createContext, useState } from "react";
import { children } from "../../models/models";

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
    const [cart, setCart] = useState<CartItemProps[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

