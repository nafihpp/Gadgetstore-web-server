import "./CartCard.css"

interface CartItemProps {
    title: string;
    image: string;
    price: number;
    quantity: number;
}

interface currentItem {
    product: CartItemProps
}

export const CartCard = ({ product }: currentItem) => {
    return (
        <div className="card">
            <img src={product?.image} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="card-title">{product?.title}</p>
            <div className="quantity"><span className="decrease" >-</span>{<span>{product.quantity}</span>}<span className="increase" >+</span></div>
            <button className="cart-button">Remove from cart</button>
        </div>
    )
}
