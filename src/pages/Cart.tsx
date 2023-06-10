import { CartCard } from "../components/CartCard"
import { CartContext } from "../context/CartContext/CartContext"
import React from 'react'

export const Cart = () => {
    const { cart } = React.useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
            <div className='card-container'>
                {cart?.length !== 0 && cart?.map((cartproduct) => {
                    return <CartCard cartproduct={cartproduct} key={cartproduct?.id} />
                })}
            </div>
        </div>
    )
}
