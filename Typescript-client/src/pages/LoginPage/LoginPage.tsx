import { Link } from "react-router-dom";
import React from "react";
import "./LoginPage.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const LoginPage = () => {
    // const navigate = useNavigate();
    const { setAuth } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    console.log(email, password)

    const handleEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(e?.target?.value);
    };
    const handlePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(e?.target?.value);
    };

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        axios("https://fakestoreapi.com/auth/login", {
            method: 'POST',
            data: {
                username: "mor_2314",
                password: "83r5^_"
            },
        }).then((response) => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                (setAuth as any)(true);
            }
        }).catch((error) => {
            console.log(error);
        })
    };
    return (

        <div className="login-container">
            <div className="top-container">
                <div className="wrapper">
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
                            style={{ color: "black" }}
                        >
                            Forgot Pasword?
                        </Link>
                    </form>
                </div>
                <p className="bottom-link">
                    New Here?
                    <Link to="/signup">Sign up now.</Link>
                </p>
            </div>
        </div>


    );
};
