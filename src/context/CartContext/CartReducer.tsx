
import { Product } from "../../models/models";
import { ACTIONS } from "./ACTIONS";

interface CartAction {
    type: ACTIONS;
    payload: Product;
}

export const CartReducer = (state: Product, action: CartAction) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.INCREMENT:
            console.log(type, action, payload);
            break;
        case ACTIONS.DECREMENT:
            console.log(type, action, payload);
            break;
        case ACTIONS.ADD_TO_CART:
            console.log(type, action, payload);
            break;
        case ACTIONS.REMOVE_FROM_CART:
            console.log(type, action, payload);
            break;
        default:
            console.log(state)
    }
}
