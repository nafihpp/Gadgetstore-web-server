import { useNavigate } from "react-router-dom";
import { gadgetProduct } from "../../models/models"
import "./FilterCard.css"

interface CurrentProduct {
    product: gadgetProduct
}
export const FilterCard = ({ product }: CurrentProduct) => {
    const navigate = useNavigate();
    const handleDetailsPage = (productId: string | number) => {
        navigate(`/products/${productId}`)
    }
    const discountedRate = (prouctPrice: number, discountPercentage: number) => {
        let OriginalPrice = prouctPrice * discountPercentage;
        return OriginalPrice.toFixed(0);
    }
    return (
        <div className="filter-card-container-product">
            <div className="filter-card" onClick={() => handleDetailsPage(product?.id)}>
                <img src={product?.thumbnail} alt="image" style={{ objectFit: "contain", width: "100%", display: "block", minHeight: "100px", maxHeight: "100px", height: "100px" }} />
                <p className="filter-card-title">{product?.title}</p>
                <div className="filter-card-price-container"><span className="currency">AED </span><strong className="amount">{product?.price}</strong></div>
                <div className="filter-card-discount-container"><span className="old-price">{discountedRate(product?.price, product?.discountPercentage)}</span><span className="discount-percentage">{product?.discountPercentage} % OFF</span></div>
            </div>
            <div className="filter-favorite">
                <svg width="24" height="24" viewBox="0 0 24 24"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#3E4152"><path d="M8.1703,4.473425 C6.9537,4.473425 5.8134,4.946625 4.95975,5.805525 C4.10435,6.666175 3.63325,7.815575 3.63325,9.042675 C3.63325,10.269775 4.10435,11.419525 4.95975,12.280175 L12,19.362425 L19.0406,12.279825 C19.89565,11.419525 20.36675,10.270125 20.36675,9.042675 C20.36675,7.815575 19.89565,6.665825 19.0406,5.805875 C19.0406,5.805875 19.0406,5.805525 19.04025,5.805525 C18.1866,4.946625 17.0463,4.473425 15.8297,4.473425 C14.6138,4.473425 13.4742,4.946275 12.62055,5.804475 C12.29225,6.134525 11.70845,6.134875 11.3798,5.804475 C10.5258,4.946275 9.3862,4.473425 8.1703,4.473425 L8.1703,4.473425 Z M12.02835,21.276575 L11.972,21.276575 C11.6304,21.276575 11.2965,21.137625 11.05605,20.895075 L3.71865,13.513925 C2.53495,12.323225 1.88325,10.735275 1.88325,9.042675 C1.88325,7.350075 2.53495,5.762475 3.71865,4.571775 C4.9034,3.379675 6.48435,2.723425 8.1703,2.723425 C9.5759,2.723425 10.90905,3.179825 12,4.022625 C13.0913,3.179825 14.4241,2.723425 15.8297,2.723425 C17.516,2.723425 19.09695,3.379675 20.2817,4.572125 C21.46505,5.762475 22.11675,7.350075 22.11675,9.042675 C22.11675,10.735625 21.46505,12.323225 20.2817,13.513925 L12.94325,20.895775 C12.6993,21.141475 12.3745,21.276575 12.02835,21.276575 L12.02835,21.276575 Z"></path></g></g></svg>
            </div>
        </div>
    )
}
