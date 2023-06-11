import "./LoadingScreen.css";
import Logo from "../../assets/noon-logo.svg"

export const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <img src={Logo} width="100" height="100" />
        </div>
    )
}
