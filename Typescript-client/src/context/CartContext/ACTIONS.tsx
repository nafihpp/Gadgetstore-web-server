import { CartItemProps } from "../../models/models";

export enum ACTIONS {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
};

export interface AddItemAction {
    type: ACTIONS.ADD_TO_CART;
    payload: CartItemProps;
}

export interface RemoveItemAction {
    type: ACTIONS.REMOVE_FROM_CART;
    payload: string | number;
}
export interface IncrementItemAction {
    type: ACTIONS.INCREMENT;
    payload: string | number;
}
export interface DecrementItemAction {
    type: ACTIONS.DECREMENT;
    payload: string | number;
}