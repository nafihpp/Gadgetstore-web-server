import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
    // React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    // const navigate = useNavigate();
    // const { auth, setAuth } = useContext(AuthContext);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

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
                    New to Movie Logham?{" "}
                    <Link to="/signup">Sign up now.</Link>
                </p>
            </div>
        </div>


    );
};
