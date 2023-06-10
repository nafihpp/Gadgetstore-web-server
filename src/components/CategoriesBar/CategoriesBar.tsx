import { Avatar } from "@mui/material"
import "./CategoriesBar.css"
import { Link } from "react-router-dom"
import Profile from "../../assets/profile.png"
import Mobile from "../../assets/categories/mobile.jpg"
import Laptop from "../../assets/categories/laptop.jpg"
import Accesories from "../../assets/categories/accesories.jpg"
import Headphones from "../../assets/categories/headphones.jpg"
import Tablet from "../../assets/categories/tablets.jpg"
import SmartWatch from "../../assets/categories/smartwatch.jpg"
import Television from "../../assets/categories/television.png"

export const CategoriesBar = () => {
    return (
        <div className="categories-container">
            <div className="wrapper-flex">
                <Link className="category" to="/">
                    <Avatar
                        src={Mobile}
                        alt="Mobile-phone"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Mobile Phones</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={Laptop}
                        alt="Laptops"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Laptop</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={Accesories}
                        alt="accessories"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Accessories</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={Headphones}
                        alt="headphones"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Headphones</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={Tablet}
                        alt="tablet"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Tablets</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={SmartWatch}
                        alt="Smart Watch"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Smart Watches</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        src={Television}
                        alt="Television"
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Television</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
                <Link className="category" to="/">
                    <Avatar
                        alt={Profile}
                        sx={{ width: 55, height: 55 }}
                    />
                    <p>Category</p>
                </Link>
            </div>
        </div>
    )
}
