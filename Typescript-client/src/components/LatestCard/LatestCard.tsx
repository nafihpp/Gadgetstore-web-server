import { gadgetProduct } from "../../models/models"

interface CurrentProduct {
    product: gadgetProduct;
}
export const LatestCard = ({ product }: CurrentProduct) => {
    return (
        <div>
            <div className="image-container">
            </div>
            <div>
                Latest Card
            </div>
        </div>
    )
}
