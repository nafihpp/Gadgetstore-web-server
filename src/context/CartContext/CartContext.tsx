
import React, { createContext, useState } from "react";
import { Product, children } from "../../models/models";

interface ICartContext {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext<Partial<ICartContext>>({});

export const CartProvider = ({ children }: children) => {

    const [cart, setCart] = useState<Product[] | []>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

