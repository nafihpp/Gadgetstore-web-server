import "./CartCard.css"
interface CartItemProps {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}

interface currentItem {
    cartproduct: CartItemProps
}

export const CartCard = ({ cartproduct }: currentItem) => {
    // const [count, setCount] = useState<number>(1);
    // const increment = () => {
    //     setCount((count) => count + 1);
    // }
    // const decrement = () => {
    //     if (count > 1) {
    //         setCount((count) => count - 1);
    //     }
    // }
    return (
        <div className="card">
            <img src={cartproduct?.thumbnail} alt="image" width="100" height="100" style={{ objectFit: "contain" }} />
            <p className="card-title">{cartproduct?.title}</p>
            <div className="quantity"><span className="decrease" >-</span>{<span>{cartproduct?.quantity}</span>}<span className="increase" >+</span></div>
            <button className="cart-button">Remove from cart</button>
            {/* <div className="quantity"><span className="decrease" onClick={decrement}>-</span>{<span>{count}</span>}<span className="increase" onClick={increment}>+</span></div>
            <button className="cart-button" >Add to cart</button> */}
        </div>
    )
}
