import apple from '../../assets/partners/apple.png'
import samsung from "../../assets/partners/samsung.png";
import realme from "../../assets/partners/real-me.png";
import mi from "../../assets/partners/mi.png";
import vivo from "../../assets/partners/vivo.png";
import atomberg from "../../assets/partners/atomberg.png"
import Oneplus from "../../assets/partners/oneplus.png"
import Oppo from "../../assets/partners/oppo.png"
import "./Partners.css"

export const Partners = () => {
    return (
        <div>
            <div className="wrapper">
                <h1>Trusted by</h1>
                <div className='partner-container'>
                    <div className='trusted-img-container'>
                        <img src={apple} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={samsung} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={realme} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={mi} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={vivo} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={atomberg} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={Oneplus} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                    <div className='trusted-img-container'>
                        <img src={Oppo} alt="" width="100" height="100" style={{ objectFit: "contain" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
