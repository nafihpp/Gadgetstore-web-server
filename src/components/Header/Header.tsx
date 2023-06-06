
import "./Header.css";
import React from "react"
// import Logo from "../../assets/oxinus.png";

export const Header = () => {
    const [isOpen, setOpen] = React.useState<boolean>(false);

    // const toggleMenu = () => {
    //     setOpen(!isOpen);
    // };
    return (
        <header className="header-container">
            <div className="wrapper">
                <a className="logo" >
                    <img
                        src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                        alt="logo"
                        width="100"
                        height="100"
                        style={{ objectFit: "contain" }}
                    />
                </a>
                <div className="middle-container">
                    <input placeholder="search here" />

                </div>
                <div className="right-container">
                    <a className="link ">
                        signin
                    </a>
                    <a className="link ">
                        Cart
                    </a>
                </div>
                <div className="hamburger-container">
                    <button className="hamburger" >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                    <div className={`menu ${isOpen && "open"}`}>
                        <div>
                            <a

                                className="link hamburger-link "
                                style={{ marginTop: "10px" }}
                            >
                                Home
                            </a>
                        </div>

                        <div style={{ position: "absolute", bottom: "50px" }}>
                            <a

                                className="link hamburger-link"

                            >
                                About me
                            </a>
                        </div>
                    </div>
                    <div
                        className={`sidebar ${isOpen && "open"}`}

                    ></div>
                </div>
            </div>
        </header>
    );
};
