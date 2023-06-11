import React from "react"
import { children } from "../../models/models";
import { ToastContainer } from 'react-toastify';
interface IAuthContext {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = React.createContext<Partial<IAuthContext>>({})

export const AuthProvider = ({ children }: children) => {
    const [auth, setAuth] = React.useState<boolean>(true);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    )
}
