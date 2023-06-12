import { ACTIONS, AddItemAction, DecrementItemAction, IncrementItemAction, RemoveItemAction } from "./ACTIONS";
import React from "react"
import { CartContext } from "./CartContext";
import { CartItemProps } from "../../models/models";
type CartAction = AddItemAction | RemoveItemAction | IncrementItemAction | DecrementItemAction;

export const CartReducer = (state: any, action: CartAction) => {
    const { setCart } = React.useContext(CartContext);
    console.log(state, '==curentstate')
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            const isExist = state?.currentState?.find((item: CartItemProps) => item.id === payload.id);
            if (!isExist) {
                console.log(payload, '==payload')
            }
            break;
        case ACTIONS.REMOVE_FROM_CART:
            console.log(payload, '===payload')

            return state;
        default:
            return state;
    }
}


