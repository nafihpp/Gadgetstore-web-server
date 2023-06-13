import React from "react"
import { ToastContainer } from 'react-toastify';

export const NotificationContext = React.createContext({});

export const NotificationProvider = ({ children }) => {
    return (
        <NotificationContext.Provider value>
            <ToastContainer />
            {children}
        </NotificationContext.Provider>
    )
}