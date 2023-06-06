import "./CartCard.css"

interface CartItemProps {
    title: string;
    image: string;
    price: number;
    quantity: number;
}

interface currentItem {
    cartproduct: CartItemProps
}

export const CartCard = ({ cartproduct }: currentItem) => {
    return (
        <div className="card">
            <img src={cartproduct?.image} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="card-title">{cartproduct?.title}</p>
            <div className="quantity"><span className="decrease" >-</span>{<span>{cartproduct?.quantity}</span>}<span className="increase" >+</span></div>
            <button className="cart-button">Remove from cart</button>
        </div>
    )
}
