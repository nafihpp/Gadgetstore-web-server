import { Link } from "react-router-dom";
import "./SignupPage.css";

export const SingupPage = () => {
    return (
        <div className="signup-container">
            <div className="wrapper">
                <div className={`login-container`}>
                    <div className="top">
                        <h1>Register the Account</h1>
                        <form autoComplete="off" className="login-form">
                            <input placeholder="email" />
                            <input placeholder="password" />
                            <button>Signup</button>
                        </form>
                    </div>
                    <p>
                        Already have a Account?{" "}
                        <Link to="/login">Login now.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
