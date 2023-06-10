import React from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { auth } = React.useContext(AuthContext);
    if (!auth) {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}
