import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { SyntheticEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const LoginPage = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = () => {
        // setEmail(e?.target?.value);
    };
    const handlePassword = () => {
        // setPassword(e?.target?.value);
    };

    const handleSubmit = () => {
        // e.preventDefault();
        // if (email === "test" && password === "test") {
        //     localStorage.setItem("movie-token", "tokenauthsuccess");
        //     setAuth(true);
        //     navigate("/");
        // } else {
        //     alert("wrong credentials");
        // }
    };
    return (
        <div className="wrapper">
            <div className={`login-container`}>
                <div className="top">
                    <h1>Sign In</h1>
                    <form autoComplete="off" className="login-form">
                        <input placeholder="Email" onChange={handleEmail} />
                        <input
                            placeholder="password"
                            onChange={handlePassword}
                        />
                        <button onClick={handleSubmit}>Sigin</button>
                        <Link
                            to="/forgot-password"
                            className="forgot-password"

                        >
                            Forgot Pasword?
                        </Link>
                    </form>
                </div>
                <p className="bottom-link">
                    New to Movie Logham?{" "}
                    <Link to="/signup">Sign up now.</Link>
                </p>
            </div>
        </div>

    );
};
