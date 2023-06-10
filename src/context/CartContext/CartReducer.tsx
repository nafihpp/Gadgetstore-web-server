import { ACTIONS, AddItemAction, DecrementItemAction, IncrementItemAction, RemoveItemAction } from "./ACTIONS";
import { CartContext } from "./CartContext";
import React from "react"

type CartAction = AddItemAction | RemoveItemAction | IncrementItemAction | DecrementItemAction;

export const CartReducer = (state: any, action: CartAction) => {
    const { cart, setCart } = React.useContext(CartContext);
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            console.log(payload, '===payload');
            console.log(cart, '--cart')
            // let cartProduct = {
            //     title: payload?.title,
            //     quantity: count,
            //     price: product.price,
            //     image: product?.thumbnail
            // }
            return state;
        case ACTIONS.REMOVE_FROM_CART:
            console.log(payload, '===payload')
            // let cartProduct = {
            //     title: payload?.title,
            //     quantity: count,
            //     price: product.price,
            //     image: product?.thumbnail
            // }
            return state;
        default:
            return state;
    }
}


