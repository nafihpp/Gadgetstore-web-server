import React, { useContext } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from '../../context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge/Badge';
import { BottomNavigationContext } from "../../context/BottomNavigationContext/BottomNavigationContext";

export const BottomNavigationBar = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const { navigationValue, setNavigationValue } = React.useContext(BottomNavigationContext);

    const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
        (setNavigationValue as React.Dispatch<React.SetStateAction<string>>)(newValue);
        console.log(event, '==event current')
    };
    React.useEffect(() => {
        if (navigationValue === "home") {
            navigate("/")
        }
        else if (navigationValue === "favorites") {
            navigate("/favorites")
        }
        else if (navigationValue === "cart") {
            navigate("/cart")
        }
        else if (navigationValue === "account") {
            navigate("/profile")
        }

    }, [navigationValue])
    return (

        <BottomNavigation showLabels value={navigationValue} onChange={handleChange} sx={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            "& .Mui-selected, .Mui-selected > svg": {
                color: "red"
            }
        }}>
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>}
            />
            <BottomNavigationAction
                label="Wishlist"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Account"
                value="account"
                icon={<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg>}
            />
            <BottomNavigationAction label="Cart" value="cart" icon={<Badge badgeContent={cart?.length} color="success" anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg>

            </Badge>} />
        </BottomNavigation>

    )
}
