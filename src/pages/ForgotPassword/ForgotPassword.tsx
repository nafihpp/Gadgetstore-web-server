import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export const ForgotPassword = () => {
    return (

        <div className="forgot-password-container">
            <div className="forgot-top-container">
                <div className="forgot-container">
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
