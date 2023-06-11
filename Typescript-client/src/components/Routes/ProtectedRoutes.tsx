import React from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';


export const ProtectedRoutes = () => {
    const { auth } = React.useContext(AuthContext);
    if (!auth) {
        toast.error("You need to Login");
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}
