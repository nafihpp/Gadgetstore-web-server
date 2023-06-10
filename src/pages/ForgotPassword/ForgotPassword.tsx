import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export const ForgotPassword = () => {
    return (
        <div className="wrapper">
            <div className={`login-container`}>
                <div className="top">
                    <h1>Forgot Password</h1>
                    <form autoComplete="off" className="login-form">
                        <input placeholder="Email" />
                        <button>Reset</button>
                    </form>
                </div>
                <p>
                    Remember Password? <Link to="/login">Login now.</Link>
                </p>
            </div>
        </div>
    );
};
