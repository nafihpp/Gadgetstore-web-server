
import { Avatar, Badge } from "@mui/material";
import "./Header.css";
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext";
import Profile from "../../assets/avatar.png";
import { Link } from "react-router-dom"
import { BottomNavigationContext } from "../../context/BottomNavigationContext/BottomNavigationContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const Header = () => {
    const { cart } = useContext(CartContext);
    const { auth } = useContext(AuthContext)
    const { setNavigationValue } = React.useContext(BottomNavigationContext);
    const [searchQuery, setSearchQuery] = React.useState("")
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [isSearchBar, setSearchBar] = React.useState<boolean>(false);
    const [screenWidth, setScreenWidth] = React.useState<number>(0);
    const handleSearchBar = () => {
        console.log(screenWidth)
        setSearchBar(!isSearchBar);
    }

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleNavigation = (value: string) => {
        (setNavigationValue as React.Dispatch<React.SetStateAction<string>>)(value);
    }
    const searchHandle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setSearchQuery(e?.target?.value)
    }
    React.useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header-container">
            <div className="wrapper">
                {!isSearchBar ?
                    <button className="hamburger" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button> :
                    <button onClick={handleSearchBar} className="back-button">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path></svg>
                    </button>
                }
                {!isSearchBar &&
                    <Link className="logo" to="/" onClick={() => handleNavigation("home")}>
                        <img
                            src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
                            alt="logo"
                            width="100"
                            height="100"
                            style={{ objectFit: "contain" }}
                        />
                    </Link>}
                {isSearchBar && <div className="middle-container">
                    <input placeholder="search here" onChange={searchHandle} value={searchQuery} />
                    <div className="search-icon-container">
                        {!searchQuery ? (
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        ) : (
                            <div
                                onClick={() => {
                                    setSearchQuery("");
                                }}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="#000"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                                    <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>}
                {!isSearchBar && <div className="right-container">
                    <button onClick={handleSearchBar} className="search-icon-toggle">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <Link className="profile-container" to="/profile" onClick={() => handleNavigation("account")}>
                        <Avatar
                            src={Profile}
                            alt="Profile"
                            sx={{ width: 40, height: 40 }}
                        />
                        <p>{!auth ? "Login/Signup" : ""}</p>
                    </Link>
                    <Link className="cart-container" to="/cart" onClick={() => handleNavigation("cart")}>
                        <Badge badgeContent={cart?.length} color="success" anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>

                        </Badge>
                    </Link>
                </div>}
                <div className="hamburger-container">
                    <div className={`menu ${isOpen && "open"}`}>
                        <div>
                            <Link to="/"
                                className="link hamburger-link "
                                style={{ marginTop: "10px", textDecoration: "none", color: "#000" }}
                                onClick={() => {
                                    toggleMenu()
                                    handleNavigation("home")
                                }}

                            >
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="link hamburger-link"
                                to="/cart"
                                style={{ marginTop: "6px", textDecoration: "none", color: "#000" }}
                                onClick={() => {
                                    toggleMenu()
                                    handleNavigation("cart")
                                }}
                            >
                                Cart
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="link hamburger-link"
                                to="/favorites"
                                style={{ marginTop: "6px", textDecoration: "none", color: "#000" }}
                                onClick={() => {
                                    toggleMenu()
                                    handleNavigation("favorites")
                                }}
                            >
                                Wishlist
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`sidebar ${isOpen && "open"}`} onClick={toggleMenu}
                    ></div>
                </div>
            </div>
        </header >
    );
};
