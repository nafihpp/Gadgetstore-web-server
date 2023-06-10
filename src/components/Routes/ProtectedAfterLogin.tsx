import React from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { BottomNavigationContext } from '../../context/BottomNavigationContext/BottomNavigationContext';

export const ProtectedAfterLogin = () => {
    const { auth } = React.useContext(AuthContext);
    const { setNavigationValue } = React.useContext(BottomNavigationContext)
    if (!auth) {
        return <Outlet />
    }
    setNavigationValue("home");
    return <Navigate to="/" />
}
