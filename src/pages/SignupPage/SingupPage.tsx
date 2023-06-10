import { Link } from "react-router-dom";
import "./SignupPage.css";

export const SingupPage = () => {
    return (
        <div className="signup-container">
            <div className="top-signup-container">
                <div className="wrapper">
                    <h1>Signup</h1>
                    <form autoComplete="off" className="login-form">
                        <input placeholder="email" />
                        <input placeholder="password" />
                        <button>Signup</button>
                    </form>
                </div>
                <p style={{ color: "black" }}>
                    Already have a Account?{" "}
                    <Link to="/login">Login now.</Link>
                </p>
            </div>
        </div >
    );
};
